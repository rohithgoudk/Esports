import "./Games.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ES1 from "../../assets/ES1.webp";
import ES2 from "../../assets/ES2.webp";
import ES3 from "../../assets/ES3.webp";
import ES4 from "../../assets/ES4.webp";
import ES5 from "../../assets/ES5.webp";
import E5 from "../../assets/E5.webp";

/* ── Inline SVG Icons ── */
const IconController = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M6 12h4M8 10v4M17 11h.01M15 13h.01M17.32 5H6.68a4 4 0 0 0-3.978 3.59l-.99 7.2A4 4 0 0 0 5.68 20h.59a4 4 0 0 0 3.145-1.536L11 16h2l1.576 2.464A4 4 0 0 0 17.73 20h.59a4 4 0 0 0 3.968-4.21l-.99-7.2A4 4 0 0 0 17.32 5z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);
const IconTrophy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="20" height="20">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="20" height="20">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconBolt = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);
const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconFire = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 2c0 0-5.5 4.5-5.5 9.5a5.5 5.5 0 0 0 11 0C17.5 6.5 12 2 12 2zm0 14a3.5 3.5 0 0 1-3.5-3.5C8.5 9.5 12 6 12 6s3.5 3.5 3.5 6.5A3.5 3.5 0 0 1 12 16z"/>
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

/* ── Data ── */
const allGames = [
  {
    id: 1,
    name: "VALORANT",
    genre: "FPS",
    tag: "Tactical FPS",
    rating: 4.9,
    players: "14M+",
    tournaments: 320,
    status: "HOT",
    image: ES1,
    accent: "#ff4655",
    description: "5v5 tactical shooter with agents, abilities, and gun play that punishes every mistake.",
  },
  {
    id: 2,
    name: "Counter-Strike 2",
    genre: "FPS",
    tag: "Tactical FPS",
    rating: 4.8,
    players: "20M+",
    tournaments: 580,
    status: "LIVE",
    image: ES2,
    accent: "#f0a500",
    description: "The world's most played competitive shooter — remastered with Source 2 engine.",
  },
  {
    id: 3,
    name: "League of Legends",
    genre: "MOBA",
    tag: "MOBA",
    rating: 4.7,
    players: "34M+",
    tournaments: 410,
    status: "HOT",
    image: ES3,
    accent: "#c89b3c",
    description: "The definitive MOBA — draft, macro, and teamfights at the highest level of play.",
  },
  {
    id: 4,
    name: "Apex Legends",
    genre: "Battle Royale",
    tag: "Battle Royale",
    rating: 4.6,
    players: "10M+",
    tournaments: 195,
    status: "NEW",
    image: ES4,
    accent: "#cd4129",
    description: "Squad-based battle royale with the smoothest movement mechanics in the genre.",
  },
  {
    id: 5,
    name: "Dota 2",
    genre: "MOBA",
    tag: "MOBA",
    rating: 4.8,
    players: "8M+",
    tournaments: 340,
    status: "LIVE",
    image: ES5,
    accent: "#c23c2a",
    description: "Depth, complexity, and a $40M prize pool. Dota 2 rewards mastery like no other game.",
  },
  {
    id: 6,
    name: "Rocket League",
    genre: "Sports",
    tag: "Aerial Sports",
    rating: 4.7,
    players: "6M+",
    tournaments: 220,
    status: "NEW",
    image: E5,
    accent: "#0080ff",
    description: "Soccer meets rocket-powered cars in the most mechanically intensive esport ever made.",
  },
];

const genres = ["All", "FPS", "MOBA", "Battle Royale", "Sports"];
const featuredGame = allGames[0];

const platformStats = [
  { icon: <IconController />, value: "50+",    label: "Titles Supported"   },
  { icon: <IconTrophy />,     value: "1,200+", label: "Tournaments Run"    },
  { icon: <IconUsers />,      value: "250K+",  label: "Active Competitors" },
  { icon: <IconBolt />,       value: "1M+",    label: "Hours Streamed"     },
];

export default function Games() {
  const [activeGenre, setActiveGenre] = useState("All");
  const navigate = useNavigate();

  const filtered =
    activeGenre === "All"
      ? allGames
      : allGames.filter((g) => g.genre === activeGenre);

  return (
    <div className="games-page">

      {/* HERO */}
      <section className="games-hero">
        <div
          className="games-hero-bg"
          style={{ backgroundImage: `url(${featuredGame.image})` }}
        />
        <div className="games-hero-overlay" />
        <div className="games-hero-scanlines" />

        <div className="games-hero-content">
          <h1 className="games-hero-title">
            Compete Across<br />
            <span className="games-hero-accent">50+ Titles</span>
          </h1>
          <p className="games-hero-desc">
            From tactical shooters to massive battle arenas — find your
            game, join the circuit, and prove you belong at the top.
          </p>
          <div className="games-hero-btns">
            <button className="games-btn-primary" onClick={() => navigate("/404")}>
              Browse All Games <IconArrow />
            </button>
            <button className="games-btn-secondary" onClick={() => navigate("/404")}>
              <IconPlay /> Watch Highlights
            </button>
          </div>
        </div>

        {/* floating featured card */}
        <div className="games-hero-card">
          <span
            className="games-status-badge"
            style={{
              background: featuredGame.accent + "22",
              color: featuredGame.accent,
              borderColor: featuredGame.accent + "44",
            }}
          >
            {featuredGame.status}
          </span>
          <h3>{featuredGame.name}</h3>
          <p>{featuredGame.tag}</p>
          <div className="games-hero-card-stats">
            <span><IconUsers /> {featuredGame.players}</span>
            <span><IconTrophy /> {featuredGame.tournaments} events</span>
          </div>
          <div className="games-hero-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(featuredGame.rating) ? "star-on" : "star-off"}>
                <IconStar />
              </span>
            ))}
            <span className="games-rating-val">{featuredGame.rating}</span>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="games-stats-bar">
        {platformStats.map((s, i) => (
          <div className="games-stat-item" key={i}>
            <span className="games-stat-icon">{s.icon}</span>
            <div>
              <div className="games-stat-value">{s.value}</div>
              <div className="games-stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </section>

      {/* CATALOG */}
      <section className="games-catalog">
        <div className="games-catalog-head">
          <div>
            <span className="eyebrow">Pick your lane</span>
            <h2 className="section-title">All Games</h2>
          </div>
          <div className="games-filter-tabs">
            {genres.map((g) => (
              <button
                key={g}
                className={`games-filter-tab ${activeGenre === g ? "active" : ""}`}
                onClick={() => setActiveGenre(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="games-grid">
          {filtered.map((game) => (
            <div className="game-card" key={game.id}>
              <div className="game-card-img-wrap">
                <img src={game.image} alt={game.name} className="game-card-img" />
                <div className="game-card-img-overlay" />
                <span
                  className="game-card-status"
                  style={{
                    background: game.accent + "22",
                    color: game.accent,
                    borderColor: game.accent + "55",
                  }}
                >
                  {game.status === "HOT" && <IconFire />}
                  {game.status === "LIVE" && <span className="live-pulse" />}
                  {game.status}
                </span>
              </div>

              <div className="game-card-body">
                <span className="game-card-tag">{game.tag}</span>
                <h3 className="game-card-name">{game.name}</h3>
                <p className="game-card-desc">{game.description}</p>

                <div className="game-card-meta">
                  <span><IconUsers /> {game.players}</span>
                  <span><IconTrophy /> {game.tournaments} events</span>
                </div>

                <div className="game-card-footer">
                  <div className="game-card-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(game.rating) ? "star-on" : "star-off"}>
                        <IconStar />
                      </span>
                    ))}
                    <span className="game-rating">{game.rating}</span>
                  </div>
                  <button
                    className="game-card-btn"
                    style={{ "--accent": game.accent }}
                    onClick={() => navigate("/404")}
                  >
                    Play Now <IconArrow />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="games-cta">
        <div className="games-cta-bg" />
        <div className="games-cta-overlay" />
        <div className="games-cta-content">
          <span className="eyebrow">Ready to compete?</span>
          <h2>Your next tournament<br /><span>starts right now</span></h2>
          <p>
            Register, get seeded into your bracket, and start climbing the
            regional leaderboard — no entry fee for your first event.
          </p>
          <div className="games-cta-btns">
            <button className="games-btn-primary" onClick={() => navigate("/404")}>
              Register Free <IconArrow />
            </button>
            <button className="games-btn-secondary" onClick={() => navigate("/404")}>
              View Schedule
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}