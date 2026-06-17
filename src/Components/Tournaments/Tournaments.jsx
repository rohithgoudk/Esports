import "./Tournaments.css";
import { useState } from "react";

import ES1 from "../../assets/ES1.webp";
import ES2 from "../../assets/ES2.webp";
import ES3 from "../../assets/ES3.webp";
import ES4 from "../../assets/ES4.webp";
import ES5 from "../../assets/ES5.webp";
import E5 from "../../assets/E5.webp";

/* ── Inline SVG Icons ── */
const IconTrophy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="16" height="16">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="16" height="16">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconBolt = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);
const IconMedal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="18" height="18">
    <circle cx="12" cy="15" r="6"/><path d="M8.56 2.9L7 5l2 1"/><path d="M15.44 2.9L17 5l-2 1"/>
    <path d="M12 7v2"/>
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="14" height="14">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconFilter = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

/* ── Data ── */
const featured = {
  name: "World Ignition Championship",
  game: "VALORANT",
  prize: "$250,000",
  date: "JUL 20 – AUG 2, 2026",
  teams: 32,
  status: "REGISTERING",
  image: ES1,
  accent: "#ff4655",
  desc: "The biggest VALORANT open on the calendar. 32 squads, six group-stage maps, and a single-elimination grand final broadcast to 2M+ viewers.",
};

const allTournaments = [
  {
    id: 1, name: "Ignition Masters",         game: "VALORANT",
    prize: "$50,000",  date: "JUL 12–14",    teams: 16, slots: 4,
    status: "LIVE",    genre: "FPS",
    accent: "#ff4655",
    image: ES1,
  },
  {
    id: 2, name: "Overdrive Championship",   game: "Counter-Strike 2",
    prize: "$75,000",  date: "AUG 02–05",    teams: 24, slots: 8,
    status: "OPEN",    genre: "FPS",
    accent: "#f0a500",
    image: ES2,
  },
  {
    id: 3, name: "Rift World Cup",            game: "League of Legends",
    prize: "$100,000", date: "SEP 18–21",    teams: 32, slots: 12,
    status: "OPEN",    genre: "MOBA",
    accent: "#c89b3c",
    image: ES3,
  },
  {
    id: 4, name: "Apex Strike Series",        game: "Apex Legends",
    prize: "$30,000",  date: "AUG 15–17",    teams: 20, slots: 6,
    status: "OPEN",    genre: "Battle Royale",
    accent: "#cd4129",
    image: ES4,
  },
  {
    id: 5, name: "Dota Arcane Invitational",  game: "Dota 2",
    prize: "$120,000", date: "OCT 05–08",    teams: 16, slots: 0,
    status: "FULL",    genre: "MOBA",
    accent: "#c23c2a",
    image: ES5,
  },
  {
    id: 6, name: "Rocket Rumble Open",        game: "Rocket League",
    prize: "$20,000",  date: "JUL 28–30",    teams: 32, slots: 14,
    status: "OPEN",    genre: "Sports",
    accent: "#0080ff",
    image: E5,
  },
];

const leaderboard = [
  { rank: 1,  team: "Shadow Reapers",   wins: 24, losses: 2,  prize: "$48,500", game: "VALORANT",  avatar: "SR", color: "#ff4655" },
  { rank: 2,  team: "Cyber Titans",     wins: 21, losses: 5,  prize: "$31,200", game: "CS2",       avatar: "CT", color: "#f0a500" },
  { rank: 3,  team: "Neon Warriors",    wins: 19, losses: 6,  prize: "$27,800", game: "LoL",       avatar: "NW", color: "#c89b3c" },
  { rank: 4,  team: "Storm Collective", wins: 18, losses: 7,  prize: "$22,100", game: "Dota 2",    avatar: "SC", color: "#7b77ff" },
  { rank: 5,  team: "Apex Predators",   wins: 16, losses: 8,  prize: "$18,600", game: "Apex",      avatar: "AP", color: "#cd4129" },
  { rank: 6,  team: "Rocket Kings",     wins: 15, losses: 9,  prize: "$14,300", game: "RL",        avatar: "RK", color: "#0080ff" },
];

const filters = ["All", "FPS", "MOBA", "Battle Royale", "Sports"];

const platformStats = [
  { value: "1,200+", label: "Tournaments Run"     },
  { value: "$4M+",   label: "Prize Money Awarded" },
  { value: "250K+",  label: "Players Competed"    },
  { value: "98",     label: "Countries Reached"   },
];

/* ─────────────────────────────────────────── */

export default function Tournaments() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allTournaments
      : allTournaments.filter((t) => t.genre === activeFilter);

  return (
    <div className="trn-page">

      {/* ══════════════════════════════════════
          SECTION 1 — HERO + FEATURED EVENT
          ══════════════════════════════════════ */}
      <section className="trn-hero">
        <div
          className="trn-hero-bg"
          style={{ backgroundImage: `url(${featured.image})` }}
        />
        <div className="trn-hero-overlay" />
        <div className="trn-hero-scanlines" />

        {/* left: copy */}
        <div className="trn-hero-content">
          
          <h1 className="trn-hero-title">
            Compete for<br />
            <span className="trn-gradient-text">Glory &amp; Prize</span>
          </h1>
          <p className="trn-hero-desc">
            From open qualifiers to invite-only championships — find your
            bracket, register your squad, and fight your way to the grand final.
          </p>
          <div className="trn-hero-btns">
            <button className="trn-btn-primary">
              Browse Tournaments <IconArrow />
            </button>
            <button className="trn-btn-secondary">
              <IconPlay /> Watch Live Finals
            </button>
          </div>

          {/* quick stats row */}
          <div className="trn-hero-stats">
            {platformStats.map((s, i) => (
              <div className="trn-hero-stat" key={i}>
                <span className="trn-hero-stat-val">{s.value}</span>
                <span className="trn-hero-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* right: featured card */}
        <div className="trn-featured-card">
          <div className="trn-featured-card-img">
            <img src={featured.image} alt={featured.name} />
            <div className="trn-featured-card-img-overlay" />
          </div>
          <div className="trn-featured-card-body">
            <span
              className="trn-status-badge"
              style={{ background: featured.accent + "22", color: featured.accent, borderColor: featured.accent + "55" }}
            >
              {featured.status}
            </span>
            <h3>{featured.name}</h3>
            <p className="trn-featured-game">{featured.game}</p>
            <p className="trn-featured-desc">{featured.desc}</p>
            <div className="trn-featured-meta">
              <span><IconCalendar /> {featured.date}</span>
              <span><IconUsers /> {featured.teams} Teams</span>
            </div>
            <div className="trn-featured-prize">
              <span className="trn-prize-label">Prize Pool</span>
              <span className="trn-prize-val">{featured.prize}</span>
            </div>
            <button className="trn-btn-primary trn-w-full">
              Register Now <IconArrow />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — FILTER + TOURNAMENT GRID
          ══════════════════════════════════════ */}
      <section className="trn-catalog">
        <div className="trn-catalog-head">
          <div>
            <span className="trn-eyebrow">All Events</span>
            <h2 className="trn-section-title">Upcoming Tournaments</h2>
          </div>
          <div className="trn-filter-row">
            <IconFilter />
            {filters.map((f) => (
              <button
                key={f}
                className={`trn-filter-tab ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="trn-grid">
          {filtered.map((t) => (
            <div className="trn-card" key={t.id}>

              {/* image */}
              <div className="trn-card-img-wrap">
                <img src={t.image} alt={t.name} className="trn-card-img" />
                <div className="trn-card-img-overlay" />

                {/* status */}
                <span
                  className={`trn-card-status ${t.status === "LIVE" ? "trn-live" : t.status === "FULL" ? "trn-full" : "trn-open"}`}
                >
                  {t.status === "LIVE" && <span className="trn-pulse" />}
                  {t.status}
                </span>

                {/* prize on image */}
                <div className="trn-card-prize-overlay">
                  <span className="trn-card-prize-lbl">Prize Pool</span>
                  <span className="trn-card-prize-val">{t.prize}</span>
                </div>
              </div>

              {/* body */}
              <div className="trn-card-body">
                <div className="trn-card-game-tag"
                  style={{ color: t.accent }}
                >{t.game}</div>
                <h3 className="trn-card-name">{t.name}</h3>

                <div className="trn-card-meta">
                  <span><IconCalendar /> {t.date}</span>
                  <span><IconUsers /> {t.teams} Teams</span>
                </div>

                <div className="trn-card-slots">
                  <div className="trn-slots-bar-track">
                    <div
                      className="trn-slots-bar-fill"
                      style={{
                        width: `${((t.teams - t.slots) / t.teams) * 100}%`,
                        background: t.accent,
                        boxShadow: `0 0 6px ${t.accent}`,
                      }}
                    />
                  </div>
                  <span className="trn-slots-text">
                    {t.slots > 0 ? `${t.slots} slots left` : "Bracket Full"}
                  </span>
                </div>

                <button
                  className="trn-card-btn"
                  disabled={t.status === "FULL"}
                  style={t.status !== "FULL" ? { "--accent": t.accent } : {}}
                >
                  {t.status === "LIVE" ? "Watch Live" : t.status === "FULL" ? "Bracket Full" : "Register Now"}
                  {t.status !== "FULL" && <IconArrow />}
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — LEADERBOARD
          ══════════════════════════════════════ */}
      <section className="trn-leaderboard">
        <div className="trn-lb-bg" />
        <div className="trn-lb-overlay" />

        <div className="trn-lb-inner">
          <div className="trn-lb-head">
            <div>
              <span className="trn-eyebrow">Season standings</span>
              <h2 className="trn-section-title">Global Leaderboard</h2>
            </div>
            <button className="trn-btn-secondary">View Full Rankings <IconArrow /></button>
          </div>

          <div className="trn-lb-table">
            <div className="trn-lb-header">
              <span>#</span>
              <span>Team</span>
              <span>Game</span>
              <span>W</span>
              <span>L</span>
              <span>Earnings</span>
            </div>

            {leaderboard.map((row) => (
              <div
                className={`trn-lb-row ${row.rank <= 3 ? "trn-lb-top" : ""}`}
                key={row.rank}
              >
                <span className="trn-lb-rank">
                  {row.rank === 1 && <span className="trn-gold">🥇</span>}
                  {row.rank === 2 && <span className="trn-silver">🥈</span>}
                  {row.rank === 3 && <span className="trn-bronze">🥉</span>}
                  {row.rank > 3  && <span className="trn-rank-num">0{row.rank}</span>}
                </span>

                <span className="trn-lb-team">
                  <span
                    className="trn-lb-avatar"
                    style={{ background: row.color + "22", color: row.color, borderColor: row.color + "44" }}
                  >
                    {row.avatar}
                  </span>
                  {row.team}
                </span>

                <span className="trn-lb-game">{row.game}</span>
                <span className="trn-lb-wins">{row.wins}</span>
                <span className="trn-lb-losses">{row.losses}</span>
                <span className="trn-lb-prize">{row.prize}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — CTA BANNER
          ══════════════════════════════════════ */}
      <section className="trn-cta">
        <div className="trn-cta-glow" />
        <div className="trn-cta-content">
          <span className="trn-eyebrow">Ready to compete?</span>
          <h2 className="trn-cta-title">
            Your bracket<br />
            <span className="trn-gradient-text">awaits right now</span>
          </h2>
          <p className="trn-cta-desc">
            Register for free, get seeded into your regional circuit, and start
            climbing toward the championship final — no entry fee for your first event.
          </p>
          <div className="trn-cta-btns">
            <button className="trn-btn-primary trn-btn-lg">
              <IconTrophy /> Register Free
            </button>
            <button className="trn-btn-secondary trn-btn-lg">
              View Full Schedule
            </button>
          </div>

          {/* mini badge row */}
          <div className="trn-cta-badges">
            <span className="trn-badge">🎮 50+ Games</span>
            <span className="trn-badge">🏆 Weekly Prizes</span>
            <span className="trn-badge">🌍 Global Brackets</span>
            <span className="trn-badge">⚡ No Entry Fee</span>
          </div>
        </div>
      </section>

    </div>
  );
}