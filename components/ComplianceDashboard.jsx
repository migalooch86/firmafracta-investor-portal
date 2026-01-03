"""React components for compliance dashboard."""

// ComplianceDashboard.jsx
import React, { useState, useEffect } from 'react';

export function ComplianceDashboard() {
  const [frameworks, setFrameworks] = useState([]);
  const [selectedFramework, setSelectedFramework] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/frameworks')
      .then(r => r.json())
      .then(data => {
        setFrameworks(data.frameworks);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading frameworks...</div>;

  return (
    <div className="compliance-dashboard">
      <h1>Compliance Dashboard</h1>
      <div className="frameworks-list">
        {frameworks.map(fw => (
          <div key={fw.id} className="framework-card">
            <h3>{fw.name}</h3>
            <p>Rules: {fw.rules_count}</p>
            <button onClick={() => setSelectedFramework(fw)}>View Details</button>
          </div>
        ))}
      </div>
      {selectedFramework && (
        <FrameworkDetail framework={selectedFramework} />
      )}
    </div>
  );
}

// FrameworkDetail.jsx
export function FrameworkDetail({ framework }) {
  const [entityId, setEntityId] = useState('');
  const [complianceResult, setComplianceResult] = useState(null);

  const handleCheck = async () => {
    const response = await fetch(`http://localhost:5000/check/${framework.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entity_id: entityId })
    });
    const data = await response.json();
    setComplianceResult(data);
  };

  return (
    <div className="framework-detail">
      <h2>{framework.name}</h2>
      <input
        type="text"
        placeholder="Entity ID"
        value={entityId}
        onChange={e => setEntityId(e.target.value)}
      />
      <button onClick={handleCheck}>Check Compliance</button>
      {complianceResult && (
        <div className="result">
          <p>Compliant: {complianceResult.compliant ? 'Yes' : 'No'}</p>
          <p>Rules Applied: {complianceResult.rules_applied}</p>
        </div>
      )}
    </div>
  );
}

// AuditLogViewer.jsx
export function AuditLogViewer({ frameworkId }) {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState({ entity_id: '', action: '' });

  const fetchLogs = async () => {
    const params = new URLSearchParams(
      Object.fromEntries(Object.entries(filter).filter(([, v]) => v))
    );
    const response = await fetch(
      `http://localhost:5000/audit-logs/${frameworkId}?${params}`
    );
    const data = await response.json();
    setLogs(data.logs || []);
  };

  return (
    <div className="audit-log-viewer">
      <h3>Audit Logs</h3>
      <input
        placeholder="Filter by Entity ID"
        value={filter.entity_id}
        onChange={e => setFilter({ ...filter, entity_id: e.target.value })}
      />
      <input
        placeholder="Filter by Action"
        value={filter.action}
        onChange={e => setFilter({ ...filter, action: e.target.value })}
      />
      <button onClick={fetchLogs}>Fetch Logs</button>
      <div className="logs-table">
        {logs.map((log, idx) => (
          <div key={idx} className="log-entry">
            <p>{log.timestamp}: {log.action} ({log.status})</p>
            <p>{JSON.stringify(log.details)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
