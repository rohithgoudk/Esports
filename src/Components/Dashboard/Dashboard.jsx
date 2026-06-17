import { useState } from "react";
import "./Dashboard.css";
import { FaBolt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Same brand colors used in Teams.jsx / Streams.jsx / Community.jsx —
// reused here so the dashboard reads as part of the same site.
const gameAccents = {
  VALORANT: "#FF4655",
  "CS2": "#F2A65A",
  "League of Legends": "#C9A047",
  "Dota 2": "#8B5CF6",
};

const tournamentsData = [
  { id: 1, name: "Ignition Masters", region: "NA", game: "VALORANT", format: "LAN", status: "Live", progress: 72, finalDate: "Jun 21", prizePool: "$50,000", caster: "GG Casters" },
  { id: 2, name: "Overdrive Championship", region: "EU", game: "CS2", format: "Online", status: "Qualifiers", progress: 38, finalDate: "Aug 05", prizePool: "$75,000", caster: "FragTV" },
  { id: 3, name: "Rift World Cup", region: "Global", game: "League of Legends", format: "LAN", status: "Completed", progress: 100, finalDate: "Sep 21", prizePool: "$100,000", caster: "Riftcast" },
  { id: 4, name: "Phantom Series", region: "SEA", game: "Dota 2", format: "Online", status: "Live", progress: 55, finalDate: "Jul 30", prizePool: "$40,000", caster: "DotaVision" },
  { id: 5, name: "Shadow Invitational", region: "NA", game: "VALORANT", format: "LAN", status: "Review", progress: 89, finalDate: "Jun 18", prizePool: "$35,000", caster: "GG Casters" },
];

const roster = [
  { name: "Kai 'Ronin' Alvarez", role: "Duelist — VALORANT", matches: 14, avatar: "KA", status: "active" },
  { name: "Mira Solheim", role: "IGL — CS2", matches: 11, avatar: "MS", status: "active" },
  { name: "Tobias Reyes", role: "Jungle — League", matches: 9, avatar: "TR", status: "away" },
  { name: "Yuna Park", role: "Mid Lane — Dota 2", matches: 12, avatar: "YP", status: "active" },
];

const liveFeed = [
  { icon: "🏆", text: "Shadow Reapers defeated Cyber Titans 2–1 in Ignition Masters", time: "2h ago", type: "result" },
  { icon: "📋", text: "Roster change: Neon Warriors sign new support player", time: "4h ago", type: "roster" },
  { icon: "✅", text: "Rift World Cup — Grand Final VOD published", time: "Yesterday", type: "complete" },
  { icon: "⚠️", text: "Phantom Series — Server issues delayed Game 3", time: "Yesterday", type: "alert" },
  { icon: "🎮", text: "Patch 9.3 notes released — meta shift expected", time: "2d ago", type: "update" },
];

const navItems = [
  { icon: "▦", label: "Dashboard", id: "dashboard" },
  { icon: "🏆", label: "Tournaments", id: "tournaments" },
  { icon: "🛡", label: "Rosters", id: "rosters" },
  { icon: "🎮", label: "Matches", id: "matches" },
  { icon: "📊", label: "Analytics", id: "analytics" },
  { icon: "🗓", label: "Schedule", id: "schedule" },
  { icon: "💰", label: "Prize Pools", id: "prize-pools" },
  { icon: "🎥", label: "VODs", id: "vods" },
  { icon: "⚙️", label: "Settings", id: "settings" },
];

const statusColors = {
  Live: "status-live",
  Qualifiers: "status-quals",
  Completed: "status-complete",
  Review: "status-review",
};

export default function Esports() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");
  const navigate=useNavigate()
  const handleLogout = () => {
    navigate("/login")
  };

  return (
    <div className="esports-root">
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="brand">
            <div className="brand-mark">
              <FaBolt />
            </div>
            <div className="brand-text">
              <span className="brand-name">NEXUS</span>
              <span className="brand-sub">Esports Ops</span>
            </div>
          </div>
          <button className="close-btn" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            ✕
          </button>
        </div>

        <div className="sidebar-section-label">MAIN MENU</div>
        <nav className="sidebar-nav">
          {navItems.slice(0, 6).map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.id === "tournaments" && <span className="nav-badge">3</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-section-label">MANAGEMENT</div>
        <nav className="sidebar-nav">
          {navItems.slice(6).map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "nav-active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="logout-full-btn" onClick={handleLogout}>
          <span className="logout-icon">↪</span>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <button className="hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
            <div className="page-title">
              <h1>Dashboard</h1>
              <p>Welcome back, Jordan — here's your org's live overview.</p>
            </div>
          </div>
          <div className="topbar-right">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input placeholder="Search teams, players, matches…" />
            </div>
            <button className="icon-btn notif-btn" aria-label="Notifications">
              🔔
              <span className="notif-dot" />
            </button>
            <div className="topbar-avatar">JR</div>
          </div>
        </header>

        <div className="content-area">

          {/* Stats Row */}
          <section className="stats-grid">
            <div className="stat-card stat-accent">
              <div className="stat-top">
                <span className="stat-icon">🏆</span>
                <span className="stat-delta up">+2 this month</span>
              </div>
              <div className="stat-value">6</div>
              <div className="stat-label">Live Tournaments</div>
              <div className="stat-bar"><div className="stat-bar-fill" style={{ width: "72%" }} /></div>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">🛡</span>
                <span className="stat-delta up">+4 this week</span>
              </div>
              <div className="stat-value">86</div>
              <div className="stat-label">Rostered Players</div>
              <div className="stat-bar"><div className="stat-bar-fill" style={{ width: "64%" }} /></div>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">💰</span>
                <span className="stat-delta up">On track</span>
              </div>
              <div className="stat-value">$1.4M</div>
              <div className="stat-label">Prize Pool Tracked</div>
              <div className="stat-bar"><div className="stat-bar-fill" style={{ width: "88%" }} /></div>
            </div>
            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-icon">✅</span>
                <span className="stat-delta up">+9 this month</span>
              </div>
              <div className="stat-value">132</div>
              <div className="stat-label">Matches Won (Season)</div>
              <div className="stat-bar"><div className="stat-bar-fill" style={{ width: "90%" }} /></div>
            </div>
          </section>

          {/* Tournaments + Live Feed Row */}
          <section className="mid-grid">
            <div className="card tournaments-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Active Tournaments</h2>
                  <p className="card-sub">Current circuit overview</p>
                </div>
                <button className="btn-outline">View All</button>
              </div>
              <div className="table-wrapper">
                <table className="tournaments-table">
                  <thead>
                    <tr>
                      <th>Tournament</th>
                      <th>Game</th>
                      <th>Status</th>
                      <th>Bracket Progress</th>
                      <th>Final</th>
                      <th>Prize Pool</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tournamentsData.map((t) => (
                      <tr key={t.id}>
                        <td>
                          <div className="t-name">{t.name}</div>
                          <div className="t-sub">{t.region} · {t.format} · {t.caster}</div>
                        </td>
                        <td>
                          <span
                            className="game-tag"
                            style={{
                              color: gameAccents[t.game],
                              borderColor: gameAccents[t.game],
                              background: `${gameAccents[t.game]}1f`,
                            }}
                          >
                            {t.game}
                          </span>
                        </td>
                        <td><span className={`status-badge ${statusColors[t.status]}`}>{t.status}</span></td>
                        <td>
                          <div className="progress-wrap">
                            <div className="progress-bar">
                              <div className="progress-fill" style={{ width: `${t.progress}%` }} />
                            </div>
                            <span className="progress-pct">{t.progress}%</span>
                          </div>
                        </td>
                        <td className="final-col">{t.finalDate}</td>
                        <td className="prize-col">{t.prizePool}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card activity-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Live Feed</h2>
                  <p className="card-sub">Org updates</p>
                </div>
              </div>
              <ul className="activity-list">
                {liveFeed.map((a, i) => (
                  <li key={i} className={`activity-item act-${a.type}`}>
                    <span className="act-icon">{a.icon}</span>
                    <div className="act-body">
                      <p className="act-text">{a.text}</p>
                      <span className="act-time">{a.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Roster + Schedule + Mix Row */}
          <section className="bottom-grid">
            <div className="card team-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Roster</h2>
                  <p className="card-sub">Active players</p>
                </div>
                <button className="btn-outline">Manage</button>
              </div>
              <ul className="team-list">
                {roster.map((m, i) => (
                  <li key={i} className="team-item">
                    <div className="member-avatar">
                      {m.avatar}
                      <span className={`online-dot dot-${m.status}`} />
                    </div>
                    <div className="member-info">
                      <div className="member-name">{m.name}</div>
                      <div className="member-role">{m.role}</div>
                    </div>
                    <div className="member-projects">
                      <span className="proj-count">{m.matches}</span>
                      <span className="proj-label">matches</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card milestone-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Upcoming Matches</h2>
                  <p className="card-sub">Next 60 days</p>
                </div>
              </div>
              <ul className="milestone-list">
                {[
                  { team: "Shadow Reapers", event: "vs Cyber Titans — Ignition Masters", date: "Jun 21", done: false, urgent: true },
                  { team: "Neon Warriors", event: "vs Rift Kings — Group Stage", date: "Jun 25", done: false, urgent: false },
                  { team: "Phantom Vanguard", event: "vs Apex Wolves — Series Decider", date: "Jul 2", done: false, urgent: false },
                  { team: "Cyber Titans", event: "Overdrive Quals Final", date: "Aug 05", done: false, urgent: false },
                  { team: "Shadow Reapers", event: "Ignition Masters — Trophy Lift", date: "Jun 14", done: true, urgent: false },
                ].map((m, i) => (
                  <li key={i} className={`milestone-item ${m.done ? "ms-done" : ""} ${m.urgent ? "ms-urgent" : ""}`}>
                    <div className="ms-date">
                      <span>{m.date.split(" ")[0]}</span>
                      <span>{m.date.split(" ")[1]}</span>
                    </div>
                    <div className="ms-line"><div className="ms-dot" /></div>
                    <div className="ms-body">
                      <div className="ms-event">{m.event}</div>
                      <div className="ms-project">{m.team}</div>
                    </div>
                    {m.urgent && <span className="ms-tag">Urgent</span>}
                    {m.done && <span className="ms-tag ms-done-tag">Done</span>}
                  </li>
                ))}
              </ul>
            </div>

            {/* Roster Mix donut — segments colored with the same game accents used site-wide */}
            <div className="card insights-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Roster Mix</h2>
                  <p className="card-sub">By game</p>
                </div>
              </div>
              <div className="donut-chart">
                <svg viewBox="0 0 120 120" className="donut-svg">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#1f1f2e" strokeWidth="16" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#FF4655" strokeWidth="16"
                    strokeDasharray="65 212" strokeDashoffset="0" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#F2A65A" strokeWidth="16"
                    strokeDasharray="57 212" strokeDashoffset="-65" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#C9A047" strokeWidth="16"
                    strokeDasharray="49 212" strokeDashoffset="-122" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#8B5CF6" strokeWidth="16"
                    strokeDasharray="41 212" strokeDashoffset="-171" strokeLinecap="round" />
                  <text x="60" y="56" textAnchor="middle" className="donut-num">26</text>
                  <text x="60" y="68" textAnchor="middle" className="donut-label">Players</text>
                </svg>
              </div>
              <ul className="legend-list">
                {[
                  { color: "#FF4655", label: "VALORANT", count: 8 },
                  { color: "#F2A65A", label: "CS2", count: 7 },
                  { color: "#C9A047", label: "League", count: 6 },
                  { color: "#8B5CF6", label: "Dota 2", count: 5 },
                ].map((l, i) => (
                  <li key={i} className="legend-item">
                    <span className="legend-dot" style={{ background: l.color }} />
                    <span className="legend-label">{l.label}</span>
                    <span className="legend-count">{l.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}