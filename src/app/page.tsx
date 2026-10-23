import React from 'react';

export default function HomePage() {
  return (
    <main style={{ maxWidth: '900px', margin: '4rem auto', padding: '0 1.5rem', lineHeight: 1.6 }}>
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
          Project MVC
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#64748b', margin: 0 }}>
          Next.js (App Router) + React + TypeScript + MySQL 8.4
        </p>
      </header>

      <section style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '1.5rem', marginBottom: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#334155', marginTop: 0 }}>
          🚀 Environment Status
        </h2>
        <p style={{ color: '#475569' }}>
          Phase 1 is configured. The core working environment, container definitions and TypeScript architecture are ready.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          <div style={{ padding: '1rem', borderRadius: '6px', backgroundColor: '#f1f5f9', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1e3a8a' }}>Module Client</h3>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#475569' }}>Entities: Person, Role, User</p>
          </div>
          <div style={{ padding: '1rem', borderRadius: '6px', backgroundColor: '#f1f5f9', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#065f46' }}>Module Location</h3>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#475569' }}>Entities: State, City</p>
          </div>
          <div style={{ padding: '1rem', borderRadius: '6px', backgroundColor: '#f1f5f9', borderLeft: '4px solid #8b5cf6' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#5b21b6' }}>Module Reservation</h3>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#475569' }}>Entities: ReservationType, Reservation</p>
          </div>
        </div>
      </section>
    </main>
  );
}
