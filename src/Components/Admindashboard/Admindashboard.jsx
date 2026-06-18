import { useState } from "react";
import "./Admindashboard.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Stacklyimg1.webp"

const usersData = [
  { id: 1, name: "Aiko Chen", email: "a.chen@nexus.gg", role: "Head Coach", status: "Active", lastLogin: "Today, 9:14 AM", teams: 2, avatar: "AC" },
  { id: 2, name: "Marcus Patel", email: "m.patel@nexus.gg", role: "Team Manager", status: "Active", lastLogin: "Today, 8:02 AM", teams: 3, avatar: "MP" },
  { id: 3, name: "Sofia Okafor", email: "s.okafor@nexus.gg", role: "Performance Analyst", status: "Away", lastLogin: "Yesterday", teams: 4, avatar: "SO" },
  { id: 4, name: "Luis Torres", email: "l.torres@nexus.gg", role: "Content Manager", status: "Active", lastLogin: "Today, 11:30 AM", teams: 1, avatar: "LT" },
  { id: 5, name: "Priya Nair", email: "p.nair@nexus.gg", role: "Social Media Lead", status: "Inactive", lastLogin: "3 days ago", teams: 1, avatar: "PN" },
];

const auditLog = [
  { icon: "🔐", text: "Role changed — Marcus Patel promoted to Team Manager", time: "1h ago", type: "role" },
  { icon: "👤", text: "New staff invited — Priya Nair (Social Media Lead)", time: "3h ago", type: "user" },
  { icon: "🗑️", text: "Tournament archived — Spring Qualifiers 2025 removed by Admin", time: "5h ago", type: "delete" },
  { icon: "⚠️", text: "Failed login attempt — unknown IP 203.0.113.45", time: "Yesterday", type: "alert" },
  { icon: "📦", text: "VOD storage limit increased to 2TB by Super Admin", time: "2d ago", type: "system" },
];

const systemHealth = [
  { label: "Match Server Uptime", value: "99.97%", status: "healthy" },
  { label: "VOD Storage Used", value: "1.4 / 2 TB", status: "warning" },
  { label: "DB Response", value: "42 ms", status: "healthy" },
  { label: "Active Staff Sessions", value: "18", status: "healthy" },
];

const navItems = [
  { icon: "▦", label: "Overview", id: "overview" },
  { icon: "👥", label: "Staff", id: "staff" },
  { icon: "🔐", label: "Permissions", id: "permissions" },
  { icon: "📋", label: "Audit Log", id: "audit" },
  { icon: "📊", label: "Analytics", id: "analytics" },
  { icon: "🗓", label: "Schedule", id: "schedule" },
  { icon: "💳", label: "Billing", id: "billing" },
  { icon: "📁", label: "Storage", id: "storage" },
  { icon: "⚙️", label: "Settings", id: "settings" },
];

// Extra add-on: connected services & integrations panel
const integrations = [
  { icon: "🎮", name: "Discord Bot", desc: "Auto-posts match results and roster updates to #general", status: "Connected" },
  { icon: "💳", name: "Stripe Billing", desc: "Handles sponsorship payouts and merch revenue", status: "Connected" },
  { icon: "📺", name: "OBS Overlay", desc: "Live scoreboard overlay synced to broadcast scenes", status: "Connected" },
  { icon: "🎥", name: "Twitch API", desc: "Auto-uploads VODs after each broadcast ends", status: "Action Needed" },
];

const roleColors = {
  "Head Coach": "role-coach",
  "Team Manager": "role-manager",
  "Performance Analyst": "role-analyst",
  "Content Manager": "role-content",
  "Social Media Lead": "role-social",
};

const statusColors = {
  Active: "ustatus-active",
  Away: "ustatus-away",
  Inactive: "ustatus-inactive",
};

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("overview");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  // Overview scrolls back to the top of this same page.
  // Every other sidebar link goes to the 404 page for now.
  const handleNavClick = (item) => {
    setSidebarOpen(false);
    setActiveNav(item.id);
    if (item.id === "overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/404");
    }
  };

  return (
    <div className="admin-root">
      {sidebarOpen && (
        <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="admin-sidebar-header">
          <div className="admin-brand">
            {/* Logo placeholder — swap the src below for your own logo */}
            <img
              className="admin-brand-logo-img"
              src={logo}
              alt="Org logo"
            />
          </div>
          <button className="admin-close-btn" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            ✕
          </button>
        </div>

        <div className="admin-section-label">CONSOLE</div>
        <nav className="admin-nav">
          {navItems.slice(0, 6).map((item) => (
            <button
              key={item.id}
              className={`admin-nav-item ${activeNav === item.id ? "admin-nav-active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              <span className="admin-nav-label">{item.label}</span>
              {item.id === "staff" && <span className="admin-nav-badge">24</span>}
              {item.id === "audit" && <span className="admin-nav-badge alert-badge">3</span>}
            </button>
          ))}
        </nav>

        <div className="admin-section-label">SYSTEM</div>
        <nav className="admin-nav">
          {navItems.slice(6).map((item) => (
            <button
              key={item.id}
              className={`admin-nav-item ${activeNav === item.id ? "admin-nav-active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              <span className="admin-nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* System Health Mini Panel */}
        <div className="admin-health-panel">
          <div className="health-panel-title">System Health</div>
          {systemHealth.map((h, i) => (
            <div key={i} className="health-row">
              <span className="health-label">{h.label}</span>
              <span className={`health-value hv-${h.status}`}>{h.value}</span>
            </div>
          ))}
        </div>

        <button className="admin-logout-btn" onClick={handleLogout}>
          <span className="admin-logout-icon">↪</span>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button className="admin-hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
            <div className="admin-page-title">
              <h1>Admin Overview</h1>
              <p>Org control — full system visibility.</p>
            </div>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-search-box">
              <span className="admin-search-icon">🔍</span>
              <input placeholder="Search staff, logs, settings…" />
            </div>
            <button className="admin-icon-btn" aria-label="Alerts" onClick={() => navigate("/404")}>
              🔔
              <span className="admin-notif-dot" />
            </button>
            <div className="admin-role-chip">Super Admin</div>
            {/* Avatar placeholder — swap the src below for your own image */}
            <img
              className="admin-topbar-avatar-img"
              src="https://placehold.co/38x38/1b1b29/f5f5f7?text=You"
              alt="User avatar"
            />
          </div>
        </header>

        <div className="admin-content">

          {/* Stats Row */}
          <section className="admin-stats-grid">
            <div className="admin-stat-card admin-stat-accent">
              <div className="admin-stat-top">
                <span className="admin-stat-icon">👥</span>
                <span className="admin-stat-delta up">+3 this month</span>
              </div>
              <div className="admin-stat-value">24</div>
              <div className="admin-stat-label">Total Staff</div>
              <div className="admin-stat-bar"><div className="admin-stat-fill" style={{ width: "68%" }} /></div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-top">
                <span className="admin-stat-icon">✅</span>
                <span className="admin-stat-delta up">18 online now</span>
              </div>
              <div className="admin-stat-value">21</div>
              <div className="admin-stat-label">Active Accounts</div>
              <div className="admin-stat-bar"><div className="admin-stat-fill" style={{ width: "87%" }} /></div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-top">
                <span className="admin-stat-icon">💰</span>
                <span className="admin-stat-delta up">On track</span>
              </div>
              <div className="admin-stat-value">$18.4K</div>
              <div className="admin-stat-label">Monthly Sponsorship Revenue</div>
              <div className="admin-stat-bar"><div className="admin-stat-fill" style={{ width: "75%" }} /></div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-top">
                <span className="admin-stat-icon">⚠️</span>
                <span className="admin-stat-delta down">Needs review</span>
              </div>
              <div className="admin-stat-value">3</div>
              <div className="admin-stat-label">Open Alerts</div>
              <div className="admin-stat-bar"><div className="admin-stat-fill alert-fill" style={{ width: "20%" }} /></div>
            </div>
          </section>

          {/* Staff Table + Audit Log */}
          <section className="admin-mid-grid">
            <div className="admin-card admin-users-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Staff Management</h2>
                  <p className="admin-card-sub">All org accounts</p>
                </div>
                <button className="admin-btn-outline" onClick={() => navigate("/404")}>+ Invite Staff</button>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Staff</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Last Login</th>
                      <th>Teams</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((u) => (
                      <tr key={u.id}>
                        <td>
                          <div className="admin-user-row">
                            <div className="admin-table-avatar">{u.avatar}</div>
                            <div>
                              <div className="admin-uname">{u.name}</div>
                              <div className="admin-uemail">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className={`admin-role-badge ${roleColors[u.role]}`}>{u.role}</span></td>
                        <td><span className={`admin-ustatus ${statusColors[u.status]}`}>{u.status}</span></td>
                        <td className="admin-login-col">{u.lastLogin}</td>
                        <td className="admin-proj-col">{u.teams}</td>
                        <td>
                          <div className="admin-actions">
                            <button className="admin-action-btn" title="Edit" onClick={() => navigate("/404")}>✏️</button>
                            <button className="admin-action-btn danger" title="Remove" onClick={() => navigate("/404")}>🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="admin-card admin-audit-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Audit Log</h2>
                  <p className="admin-card-sub">Recent admin actions</p>
                </div>
              </div>
              <ul className="admin-audit-list">
                {auditLog.map((a, i) => (
                  <li key={i} className={`admin-audit-item audit-${a.type}`}>
                    <span className="admin-audit-icon">{a.icon}</span>
                    <div className="admin-audit-body">
                      <p className="admin-audit-text">{a.text}</p>
                      <span className="admin-audit-time">{a.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Bottom Row */}
          <section className="admin-bottom-grid">

            <div className="admin-card admin-perms-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Role Permissions</h2>
                  <p className="admin-card-sub">Access matrix</p>
                </div>
                <button className="admin-btn-outline" onClick={() => navigate("/404")}>Edit Roles</button>
              </div>
              <div className="admin-perms-body">
                {[
                  { role: "Super Admin", create: true, edit: true, delete: true, billing: true },
                  { role: "Head Coach", create: true, edit: true, delete: false, billing: false },
                  { role: "Team Manager", create: true, edit: true, delete: false, billing: false },
                  { role: "Performance Analyst", create: true, edit: false, delete: false, billing: false },
                  { role: "Social Media Lead", create: false, edit: false, delete: false, billing: false },
                ].map((r, i) => (
                  <div key={i} className="admin-perm-row">
                    <span className="admin-perm-role">{r.role}</span>
                    <div className="admin-perm-dots">
                      <span className={`perm-dot ${r.create ? "perm-on" : "perm-off"}`} title="Create">C</span>
                      <span className={`perm-dot ${r.edit ? "perm-on" : "perm-off"}`} title="Edit">E</span>
                      <span className={`perm-dot ${r.delete ? "perm-on" : "perm-off"}`} title="Delete">D</span>
                      <span className={`perm-dot ${r.billing ? "perm-on" : "perm-off"}`} title="Billing">$</span>
                    </div>
                  </div>
                ))}
                <div className="admin-perm-legend">
                  <span className="perm-dot perm-on" /> Allowed &nbsp;
                  <span className="perm-dot perm-off" /> Restricted
                </div>
              </div>
            </div>

            <div className="admin-card admin-billing-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Billing Summary</h2>
                  <p className="admin-card-sub">Current cycle</p>
                </div>
              </div>
              <div className="admin-billing-body">
                {[
                  { label: "Plan", value: "Enterprise" },
                  { label: "Seats Used", value: "21 / 30" },
                  { label: "Next Renewal", value: "Jul 1, 2026" },
                  { label: "Monthly Total", value: "$18,400" },
                  { label: "VOD Storage", value: "1.4 / 2 TB" },
                  { label: "Overage", value: "None" },
                ].map((b, i) => (
                  <div key={i} className="admin-billing-row">
                    <span className="admin-billing-label">{b.label}</span>
                    <span className="admin-billing-value">{b.value}</span>
                  </div>
                ))}
                <button className="admin-billing-cta" onClick={() => navigate("/404")}>Manage Subscription</button>
              </div>
            </div>

            <div className="admin-card admin-mix-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Staff Roles</h2>
                  <p className="admin-card-sub">By permission level</p>
                </div>
              </div>
              <div className="admin-donut-chart">
                <svg viewBox="0 0 120 120" className="admin-donut-svg">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#1f1f2e" strokeWidth="16" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#60A5FA" strokeWidth="16"
                    strokeDasharray="70 212" strokeDashoffset="0" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#8B5CF6" strokeWidth="16"
                    strokeDasharray="50 212" strokeDashoffset="-70" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#2DD4BF" strokeWidth="16"
                    strokeDasharray="45 212" strokeDashoffset="-120" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#FBBF24" strokeWidth="16"
                    strokeDasharray="30 212" strokeDashoffset="-165" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#FB7185" strokeWidth="16"
                    strokeDasharray="17 212" strokeDashoffset="-195" strokeLinecap="round" />
                  <text x="60" y="56" textAnchor="middle" className="admin-donut-num">24</text>
                  <text x="60" y="68" textAnchor="middle" className="admin-donut-label">Staff</text>
                </svg>
              </div>
              <ul className="admin-legend-list">
                {[
                  { color: "#60A5FA", label: "Team Manager", count: 7 },
                  { color: "#8B5CF6", label: "Performance Analyst", count: 6 },
                  { color: "#2DD4BF", label: "Head Coach", count: 5 },
                  { color: "#FBBF24", label: "Content Manager", count: 4 },
                  { color: "#FB7185", label: "Social Media Lead", count: 2 },
                ].map((l, i) => (
                  <li key={i} className="admin-legend-item">
                    <span className="admin-legend-dot" style={{ background: l.color }} />
                    <span className="admin-legend-label">{l.label}</span>
                    <span className="admin-legend-count">{l.count}</span>
                  </li>
                ))}
              </ul>
            </div>

          </section>

          {/* Extra add-on: Integrations panel */}
          <section className="admin-card admin-integrations-card">
            <div className="admin-card-header">
              <div>
                <h2 className="admin-card-title">Integrations & Add-ons</h2>
                <p className="admin-card-sub">Connected services powering the org</p>
              </div>
              <button className="admin-btn-outline" onClick={() => navigate("/404")}>+ Add Integration</button>
            </div>
            <div className="admin-integrations-grid">
              {integrations.map((it, i) => (
                <div key={i} className="admin-integration-item">
                  <div className="admin-integration-icon">{it.icon}</div>
                  <div className="admin-integration-body">
                    <div className="admin-integration-name">{it.name}</div>
                    <p className="admin-integration-desc">{it.desc}</p>
                  </div>
                  <span
                    className={`admin-integration-status ${
                      it.status === "Connected" ? "status-ok" : "status-needs-action"
                    }`}
                  >
                    {it.status}
                  </span>
                  <button className="admin-btn-outline admin-integration-btn" onClick={() => navigate("/404")}>Manage</button>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}