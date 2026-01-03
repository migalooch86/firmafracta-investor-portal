"""React components for blockchain data visualization."""

// BlockchainDashboard.jsx
import React, { useState, useEffect } from 'react';

export function BlockchainDashboard() {
  const [entities, setEntities] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [view, setView] = useState('audit'); // audit, compliance, transactions, events

  const handleEntitySearch = async (entityId) => {
    if (!entityId) return;
    setSelectedEntity(entityId);
    setView('audit');
  };

  return (
    <div className="blockchain-dashboard">
      <h1>Blockchain Data Explorer</h1>
      
      <div className="search-panel">
        <EntitySearch onSearch={handleEntitySearch} />
      </div>

      {selectedEntity && (
        <>
          <div className="view-tabs">
            <button 
              className={view === 'audit' ? 'active' : ''}
              onClick={() => setView('audit')}
            >
              Audit Trail
            </button>
            <button 
              className={view === 'compliance' ? 'active' : ''}
              onClick={() => setView('compliance')}
            >
              Compliance Status
            </button>
            <button 
              className={view === 'transactions' ? 'active' : ''}
              onClick={() => setView('transactions')}
            >
              Transactions
            </button>
            <button 
              className={view === 'events' ? 'active' : ''}
              onClick={() => setView('events')}
            >
              Events
            </button>
          </div>

          {view === 'audit' && <AuditTrailView entityId={selectedEntity} />}
          {view === 'compliance' && <ComplianceStatusView entityId={selectedEntity} />}
          {view === 'transactions' && <TransactionView entityId={selectedEntity} />}
          {view === 'events' && <EventView entityId={selectedEntity} />}
        </>
      )}
    </div>
  );
}

// EntitySearch.jsx
export function EntitySearch({ onSearch }) {
  const [entityId, setEntityId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!entityId.trim()) return;
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5002/entities/${entityId}/audit-trail`);
      if (response.ok) {
        onSearch(entityId);
      } else {
        alert('Entity not found');
      }
    } catch (e) {
      alert(`Error: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="entity-search">
      <input
        type="text"
        placeholder="Enter Entity ID"
        value={entityId}
        onChange={e => setEntityId(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
}

// AuditTrailView.jsx
export function AuditTrailView({ entityId }) {
  const [trail, setTrail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchAuditTrail();
  }, [entityId]);

  const fetchAuditTrail = async () => {
    try {
      const response = await fetch(`http://localhost:5002/entities/${entityId}/audit-trail`);
      const data = await response.json();
      setTrail(data);
    } catch (e) {
      console.error('Error fetching audit trail:', e);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = async () => {
    window.location.href = `http://localhost:5002/entities/${entityId}/export?format=csv`;
  };

  const downloadJSON = async () => {
    window.location.href = `http://localhost:5002/entities/${entityId}/export?format=json`;
  };

  if (loading) return <div>Loading audit trail...</div>;
  if (!trail) return <div>No audit trail found</div>;

  let filteredEvents = trail.events;
  if (filter) {
    filteredEvents = trail.events.filter(e =>
      JSON.stringify(e).toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <div className="audit-trail-view">
      <h2>Audit Trail: {entityId}</h2>
      <p>Total Events: {trail.event_count}</p>
      
      <div className="controls">
        <input
          type="text"
          placeholder="Filter events..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <button onClick={downloadCSV}>Download CSV</button>
        <button onClick={downloadJSON}>Download JSON</button>
      </div>

      <div className="events-timeline">
        {filteredEvents.map((event, idx) => (
          <div key={idx} className="event-card">
            <div className="event-header">
              <span className="event-type">{event.event_type}</span>
              <span className="timestamp">{new Date(event.timestamp).toLocaleString()}</span>
            </div>
            <div className="event-body">
              <p><strong>Block:</strong> {event.block_number}</p>
              <p><strong>TX:</strong> <code>{event.transaction_hash.substring(0, 10)}...</code></p>
              <p><strong>Framework:</strong> {event.framework}</p>
              <details>
                <summary>View Details</summary>
                <pre>{JSON.stringify(event.data, null, 2)}</pre>
              </details>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ComplianceStatusView.jsx
export function ComplianceStatusView({ entityId }) {
  const [statuses, setStatuses] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplianceStatus();
  }, [entityId]);

  const fetchComplianceStatus = async () => {
    try {
      const response = await fetch(`http://localhost:5002/entities/${entityId}/compliance-status`);
      const data = await response.json();
      setStatuses(data);
    } catch (e) {
      console.error('Error fetching compliance status:', e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading compliance status...</div>;
  if (!statuses) return <div>No compliance data found</div>;

  return (
    <div className="compliance-status-view">
      <h2>Compliance Status: {entityId}</h2>
      
      <div className="status-grid">
        {statuses.compliance_statuses.map((status, idx) => (
          <div key={idx} className={`status-card status-${status.status}`}>
            <h3>{status.framework}</h3>
            <p className="status-value">{status.status === 'true' ? '✓ Compliant' : '✗ Non-Compliant'}</p>
            <p>Last Checked: {new Date(status.last_checked).toLocaleString()}</p>
            <p>Total Checks: {status.events_count}</p>
            
            {status.latest_event && (
              <details className="latest-event">
                <summary>Latest Check Details</summary>
                <pre>{JSON.stringify(status.latest_event, null, 2)}</pre>
              </details>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// TransactionView.jsx
export function TransactionView({ entityId }) {
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, [entityId]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(`http://localhost:5002/users/${entityId}/transactions`);
      const data = await response.json();
      setTransactions(data);
    } catch (e) {
      console.error('Error fetching transactions:', e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading transactions...</div>;
  if (!transactions || transactions.transaction_count === 0) return <div>No transactions found</div>;

  return (
    <div className="transaction-view">
      <h2>Transactions: {entityId}</h2>
      <p>Total: {transactions.transaction_count}</p>

      <div className="transactions-table">
        <table>
          <thead>
            <tr>
              <th>TX Hash</th>
              <th>Action</th>
              <th>Status</th>
              <th>Timestamp</th>
              <th>Block</th>
            </tr>
          </thead>
          <tbody>
            {transactions.transactions.map((tx, idx) => (
              <tr key={idx}>
                <td><code>{tx.tx_hash.substring(0, 12)}...</code></td>
                <td>{tx.action}</td>
                <td className={`status-${tx.status}`}>{tx.status}</td>
                <td>{new Date(tx.timestamp).toLocaleString()}</td>
                <td>{tx.block_number || 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// EventView.jsx
export function EventView({ entityId }) {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, [entityId]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`http://localhost:5002/events/monitor/${entityId}`);
      const data = await response.json();
      setEvents(data);
    } catch (e) {
      console.error('Error fetching events:', e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading events...</div>;
  if (!events || events.event_count === 0) return <div>No events found</div>;

  return (
    <div className="event-view">
      <h2>Events: {entityId}</h2>
      <p>Total: {events.event_count}</p>

      <div className="events-list">
        {events.events.map((event, idx) => (
          <div key={idx} className="event-item">
            <p><strong>{event.type}</strong> at {new Date(event.timestamp).toLocaleString()}</p>
            <p>{event.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
