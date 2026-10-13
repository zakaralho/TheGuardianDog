import './styles.css';

const notifications = [
  { id: 1, title: 'Passeio em andamento', message: 'Rex está seguro e em rota monitorada.', time: '2 min atrás', unread: true },
  { id: 2, title: 'Alerta do tutor', message: 'Alex Silva confirmou sua localização.', time: '15 min atrás', unread: true },
  { id: 3, title: 'Pagamento aprovado', message: 'Seu pacote Gold foi confirmado.', time: '1h atrás', unread: false }
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="menu-btn">☰</button>

        <div className="brand">
          <div className="brand-name">THE GUARDIAN DOG</div>
          <div className="brand-tag">SEU PET, NOSSA PROTEÇÃO</div>
        </div>

        <button className="bell-btn">🔔</button>
      </header>

      <div className="notification-panel">
        <div className="panel-header">
          <h3>Notificações</h3>
          <span>Marcar como lidas</span>
        </div>

        {notifications.map((item) => (
          <div key={item.id} className={`notif-card ${item.unread ? 'unread' : ''}`}>
            <span className="dot" />
            <div className="notif-text">
              <strong>{item.title}</strong>
              <p>{item.message}</p>
            </div>
            <small>{item.time}</small>
          </div>
        ))}
      </div>

      <main className="content">
        <section className="card">
          <div className="card-head">
            <h2>My Active Services</h2>
            <span className="status">Monitorado</span>
          </div>

          <div className="map-box">
            <div className="gps-pin">📍</div>
            <div className="dog-pin">🐕</div>
            <p>Rota ao vivo em andamento...</p>
          </div>

          <div className="walker-row">
            <div className="walker">
              <div className="avatar">👤</div>
              <div>
                <small>Current Walk:</small>
                <div className="walker-name">Alex Silva <span>(Bronze)</span></div>
              </div>
            </div>
          </div>

          <div className="meta-row">
            <div>
              <small>Current Dog:</small>
              <strong>Rex</strong>
            </div>
            <div>
              <small>Time Elapsed:</small>
              <strong>00:22:15</strong>
            </div>
            <button className="primary-btn">SOS</button>
          </div>
        </section>

        <section className="rankings">
          <h3>WALKER RANKINGS</h3>
          <div className="rank-grid">
            <div className="rank-box gold">
              <span>⭐</span>
              <strong>Gold</strong>
              <small>75+ passeios</small>
            </div>
            <div className="rank-box active">
              <span>🏅</span>
              <strong>Silver</strong>
              <small>Ana S.</small>
            </div>
            <div className="rank-box bronze">
              <span>🔒</span>
              <strong>Bronze</strong>
              <small>10+ passeios</small>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
