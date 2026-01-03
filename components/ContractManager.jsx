"""React components for knowledge exchange."""

// ContractManager.jsx
import React, { useState, useEffect } from 'react';

export function ContractManager() {
  const [contracts, setContracts] = useState([]);
  const [view, setView] = useState('list'); // list, create, detail
  const [selectedContract, setSelectedContract] = useState(null);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    const response = await fetch('http://localhost:5001/contracts/active');
    const data = await response.json();
    setContracts(data.active_contracts || []);
  };

  return (
    <div className="contract-manager">
      <h1>Data Contracts</h1>
      <button onClick={() => setView('create')}>Create Contract</button>
      {view === 'list' && (
        <ContractList
          contracts={contracts}
          onSelect={c => { setSelectedContract(c); setView('detail'); }}
        />
      )}
      {view === 'create' && (
        <ContractForm onSave={() => { setView('list'); fetchContracts(); }} />
      )}
      {view === 'detail' && selectedContract && (
        <ContractDetail
          contract={selectedContract}
          onBack={() => setView('list')}
          onRefresh={fetchContracts}
        />
      )}
    </div>
  );
}

// ContractList.jsx
export function ContractList({ contracts, onSelect }) {
  return (
    <div className="contract-list">
      {contracts.map(c => (
        <div key={c.contract_id} className="contract-card">
          <h3>{c.data_asset.name}</h3>
          <p>Provider: {c.data_provider.name}</p>
          <p>Consumer: {c.data_consumer.name}</p>
          <p>Status: {c.status}</p>
          <button onClick={() => onSelect(c)}>View</button>
        </div>
      ))}
    </div>
  );
}

// ContractForm.jsx
export function ContractForm({ onSave }) {
  const [formData, setFormData] = useState({
    contract_id: '',
    data_provider: { id: '', name: '', contact_email: '', organization: '' },
    data_consumer: { id: '', name: '', contact_email: '', organization: '' },
    data_asset: {
      asset_id: '',
      name: '',
      description: '',
      data_type: 'structured',
      sensitivity_level: 'public'
    },
    terms: {
      start_date: '',
      end_date: '',
      use_cases: ['research'],
      allowed_recipients: [],
      data_retention_days: 90,
      deletion_on_expiry: true,
      requires_anonymization: false
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5001/contracts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      onSave();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contract-form">
      <h2>Create Contract</h2>
      <input
        placeholder="Contract ID"
        value={formData.contract_id}
        onChange={e => setFormData({
          ...formData,
          contract_id: e.target.value
        })}
        required
      />
      <input
        placeholder="Data Asset Name"
        value={formData.data_asset.name}
        onChange={e => setFormData({
          ...formData,
          data_asset: { ...formData.data_asset, name: e.target.value }
        })}
        required
      />
      {/* Additional fields would go here */}
      <button type="submit">Create Contract</button>
    </form>
  );
}

// ContractDetail.jsx
export function ContractDetail({ contract, onBack, onRefresh }) {
  const [partyId, setPartyId] = useState('');
  const [signature, setSignature] = useState('');

  const handleSign = async () => {
    const response = await fetch(
      `http://localhost:5001/contracts/${contract.contract_id}/sign`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ party_id: partyId, signature })
      }
    );
    if (response.ok) {
      onRefresh();
      setPartyId('');
      setSignature('');
    }
  };

  const handleActivate = async () => {
    const response = await fetch(
      `http://localhost:5001/contracts/${contract.contract_id}/activate`,
      { method: 'POST' }
    );
    if (response.ok) {
      onRefresh();
    }
  };

  return (
    <div className="contract-detail">
      <button onClick={onBack}>Back</button>
      <h2>{contract.data_asset.name}</h2>
      <p>Status: {contract.status}</p>
      <p>Provider: {contract.data_provider.name}</p>
      <p>Consumer: {contract.data_consumer.name}</p>
      <p>Retention: {contract.terms.data_retention_days} days</p>
      {contract.status === 'draft' && (
        <div className="signing-section">
          <input
            placeholder="Party ID"
            value={partyId}
            onChange={e => setPartyId(e.target.value)}
          />
          <input
            placeholder="Signature"
            value={signature}
            onChange={e => setSignature(e.target.value)}
          />
          <button onClick={handleSign}>Sign</button>
          <button onClick={handleActivate}>Activate</button>
        </div>
      )}
    </div>
  );
}
