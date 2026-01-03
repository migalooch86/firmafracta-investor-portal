"""React components for token dashboard."""

// TokenDashboard.jsx
import React, { useState, useEffect } from 'react';

export function TokenDashboard() {
  const [owner, setOwner] = useState('');
  const [portfolio, setPortfolio] = useState(null);
  const [view, setView] = useState('portfolio'); // portfolio, mint, transfer, stats
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!owner.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5003/owners/${owner}/portfolio`);
      if (response.ok) {
        const data = await response.json();
        setPortfolio(data);
      } else {
        alert('Portfolio not found');
      }
    } catch (e) {
      alert(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="token-dashboard">
      <h1>Token Portfolio Manager</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter owner address"
          value={owner}
          onChange={e => setOwner(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Loading...' : 'View Portfolio'}
        </button>
      </div>

      {portfolio && (
        <>
          <div className="view-tabs">
            <button 
              className={view === 'portfolio' ? 'active' : ''}
              onClick={() => setView('portfolio')}
            >
              Portfolio
            </button>
            <button 
              className={view === 'mint' ? 'active' : ''}
              onClick={() => setView('mint')}
            >
              Mint Token
            </button>
            <button 
              className={view === 'transfer' ? 'active' : ''}
              onClick={() => setView('transfer')}
            >
              Transfer
            </button>
          </div>

          {view === 'portfolio' && <PortfolioView portfolio={portfolio} />}
          {view === 'mint' && <MintForm owner={owner} onMint={() => handleSearch()} />}
          {view === 'transfer' && <TransferForm onTransfer={() => handleSearch()} />}
        </>
      )}
    </div>
  );
}

// PortfolioView.jsx
export function PortfolioView({ portfolio }) {
  return (
    <div className="portfolio-view">
      <div className="portfolio-summary">
        <h2>{portfolio.owner}</h2>
        <div className="stats">
          <div className="stat">
            <strong>Total Tokens:</strong> {portfolio.total_tokens}
          </div>
          <div className="stat">
            <strong>Total Value:</strong> {portfolio.total_value}
          </div>
        </div>
      </div>

      <div className="balances-section">
        <h3>Token Balances</h3>
        <div className="balances-grid">
          {Object.entries(portfolio.balances).map(([type, balance]) => (
            <div key={type} className="balance-card">
              <h4>{type}</h4>
              <p className="balance">{balance.balance}</p>
              <p className="count">Unique Tokens: {balance.token_count}</p>
              <p className="updated">Updated: {new Date(balance.last_updated).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tokens-section">
        <h3>Tokens ({portfolio.tokens.length})</h3>
        <div className="tokens-list">
          {portfolio.tokens.map(token => (
            <TokenCard key={token.token_id} token={token} />
          ))}
        </div>
      </div>
    </div>
  );
}

// TokenCard.jsx
export function TokenCard({ token }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`token-card ${token.status}`}>
      <div className="token-header">
        <div>
          <h4>{token.metadata.name}</h4>
          <p className="type">{token.token_type}</p>
        </div>
        <div className="token-value">{token.value}</div>
      </div>

      <p className="description">{token.metadata.description}</p>

      {token.metadata.image_uri && (
        <img src={token.metadata.image_uri} alt={token.metadata.name} className="token-image" />
      )}

      <div className="token-info">
        <p><strong>ID:</strong> <code>{token.token_id.substring(0, 8)}...</code></p>
        <p><strong>Status:</strong> <span className={`status-${token.status}`}>{token.status}</span></p>
        <p><strong>Minted:</strong> {new Date(token.minted_at).toLocaleString()}</p>
      </div>

      {Object.keys(token.metadata.attributes).length > 0 && (
        <details className="attributes">
          <summary>Attributes</summary>
          <div className="attributes-list">
            {Object.entries(token.metadata.attributes).map(([key, value]) => (
              <div key={key} className="attribute">
                <strong>{key}:</strong> {String(value)}
              </div>
            ))}
          </div>
        </details>
      )}

      <details className="full-data">
        <summary>Full Token Data</summary>
        <pre>{JSON.stringify(token, null, 2)}</pre>
      </details>
    </div>
  );
}

// MintForm.jsx
export function MintForm({ owner, onMint }) {
  const [formData, setFormData] = useState({
    token_type: 'compliance_cert',
    value: '1',
    metadata: {
      name: '',
      description: '',
      attributes: {},
    },
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5003/tokens/mint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          owner: owner,
          issuer: owner,
          value: parseFloat(formData.value),
        }),
      });

      if (response.ok) {
        alert('Token minted successfully!');
        onMint();
      } else {
        alert('Failed to mint token');
      }
    } catch (e) {
      alert(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mint-form">
      <h3>Mint New Token</h3>

      <div className="form-group">
        <label>Token Type</label>
        <select 
          value={formData.token_type}
          onChange={e => setFormData({
            ...formData,
            token_type: e.target.value,
          })}
        >
          <option value="audit_record">Audit Record</option>
          <option value="compliance_cert">Compliance Certificate</option>
          <option value="data_share">Data Share</option>
          <option value="governance">Governance</option>
          <option value="reputation">Reputation</option>
        </select>
      </div>

      <div className="form-group">
        <label>Value</label>
        <input
          type="number"
          step="0.01"
          value={formData.value}
          onChange={e => setFormData({
            ...formData,
            value: e.target.value,
          })}
          required
        />
      </div>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={formData.metadata.name}
          onChange={e => setFormData({
            ...formData,
            metadata: {
              ...formData.metadata,
              name: e.target.value,
            },
          })}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={formData.metadata.description}
          onChange={e => setFormData({
            ...formData,
            metadata: {
              ...formData.metadata,
              description: e.target.value,
            },
          })}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Minting...' : 'Mint Token'}
      </button>
    </form>
  );
}

// TransferForm.jsx
export function TransferForm({ onTransfer }) {
  const [formData, setFormData] = useState({
    token_id: '',
    to_address: '',
    amount: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5003/tokens/${formData.token_id}/transfer`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to_address: formData.to_address,
            amount: formData.amount ? parseFloat(formData.amount) : null,
          }),
        }
      );

      if (response.ok) {
        alert('Token transferred successfully!');
        onTransfer();
      } else {
        alert('Transfer failed');
      }
    } catch (e) {
      alert(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transfer-form">
      <h3>Transfer Token</h3>

      <div className="form-group">
        <label>Token ID</label>
        <input
          type="text"
          value={formData.token_id}
          onChange={e => setFormData({
            ...formData,
            token_id: e.target.value,
          })}
          placeholder="Token ID to transfer"
          required
        />
      </div>

      <div className="form-group">
        <label>To Address</label>
        <input
          type="text"
          value={formData.to_address}
          onChange={e => setFormData({
            ...formData,
            to_address: e.target.value,
          })}
          placeholder="Recipient address"
          required
        />
      </div>

      <div className="form-group">
        <label>Amount (optional, for fungible tokens)</label>
        <input
          type="number"
          step="0.01"
          value={formData.amount}
          onChange={e => setFormData({
            ...formData,
            amount: e.target.value,
          })}
          placeholder="Amount to transfer"
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Transferring...' : 'Transfer Token'}
      </button>
    </form>
  );
}
