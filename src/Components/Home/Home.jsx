import "./Home.css";

import {
  FaTrophy,
  FaUsers,
  FaGamepad,
  FaPlayCircle,
  FaDiscord,
  FaBolt,
} from "react-icons/fa";

import ES1 from "../../assets/ES1.webp";
import ES2 from "../../assets/ES2.webp";
import ES3 from "../../assets/ES3.webp";
import ES4 from "../../assets/ES4.webp";
import ES5 from "../../assets/ES5.webp";
import E5 from "../../assets/E5.webp";
import E2 from "../../assets/E2.webp";
import E6 from "../../assets/E6.webp";
import E11 from "../../assets/E11.webp";
import E12 from "../../assets/E12.webp";

function Home() {
  const games = [
    {
      name: "VALORANT",
      tag: "Tactical FPS",
      image: ES1,
    },
    {
      name: "Counter-Strike 2",
      tag: "Tactical FPS",
      image: ES2,
    },
    {
      name: "League of Legends",
      tag: "MOBA",
      image: ES3,
    },
  ];

  const tournaments = [
    {
      name: "Ignition Masters",
      game: "VALORANT",
      prize: "$50,000",
      date: "JUL 12–14",
    },
    {
      name: "Overdrive Championship",
      game: "Counter-Strike 2",
      prize: "$75,000",
      date: "AUG 02–05",
    },
    {
      name: "Rift World Cup",
      game: "League of Legends",
      prize: "$100,000",
      date: "SEP 18–21",
    },
  ];

  const teams = [
    {
      name: "Shadow Reapers",
      division: "VALORANT Division",
      record: "18–3",
      image: ES4,
    },
    {
      name: "Cyber Titans",
      division: "CS2 Division",
      record: "21–5",
      image: ES5,
    },
    {
      name: "Neon Warriors",
      division: "League Division",
      record: "16–6",
      image: E5,
    },
  ];

  const streams = [
    {
      title: "Ignition Masters — Semifinal",
      viewers: "42.1K",
      game: "VALORANT",
      image: E2,
    },
    {
      title: "Overdrive Quals — Map 3",
      viewers: "18.7K",
      game: "CS2",
      image: E6,
    },
    {
      title: "Rift Cup — Group Stage",
      viewers: "29.4K",
      game: "League",
      image: E11,
    },
  ];

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-scanlines" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="badge">
            <FaBolt /> LIVE — 1,204 matches running right now
          </span>

          <h1>
            WHERE EVERY
            <br />
            <span>MATCH IS A MAIN EVENT</span>
          </h1>

          <p>
            Drop into ranked ladders, climb regional circuits, and watch the
            best teams on the planet trade rounds — all from one arena built
            for competitors and the people who live for the broadcast.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Enter the Bracket</button>
            <button className="secondary-btn">
              <FaPlayCircle /> Watch Live
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">
          <FaUsers />
          <h2>250K+</h2>
          <p>Competitors on the ladder</p>
        </div>
        <div className="stat-card">
          <FaTrophy />
          <h2>1,200+</h2>
          <p>Tournaments run to date</p>
        </div>
        <div className="stat-card">
          <FaGamepad />
          <h2>50+</h2>
          <p>Titles supported</p>
        </div>
        <div className="stat-card">
          <FaPlayCircle />
          <h2>1M+</h2>
          <p>Hours streamed</p>
        </div>
      </section>

      {/* GAMES */}
      <section className="games">
        <div className="section-head">
          <span className="eyebrow">Pick your lane</span>
          <h2 className="section-title">Featured Titles</h2>
        </div>

        <div className="games-grid">
          {games.map((game, index) => (
            <div className="game-card" key={index}>
              <img src={game.image} alt={game.name} />
              <div className="game-info">
                <span className="game-tag">{game.tag}</span>
                <h3>{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="tournaments">
        <div className="tournaments-bg" />
        <div className="tournaments-overlay" />

        <div className="section-head">
          <span className="eyebrow">Circuit calendar</span>
          <h2 className="section-title">Upcoming Tournaments</h2>
        </div>

        <div className="tournament-grid">
          {tournaments.map((t, index) => (
            <div className="tournament-card" key={index}>
              <span className="tournament-date">{t.date}</span>
              <h3>{t.name}</h3>
              <p>{t.game}</p>
              <span className="tournament-prize">{t.prize}</span>
              <span className="tournament-label">Prize Pool</span>
            </div>
          ))}
        </div>
      </section>

      {/* TEAMS */}
      <section className="teams">
        <div className="section-head">
          <span className="eyebrow">Top of the standings</span>
          <h2 className="section-title">Pro Teams to Watch</h2>
        </div>

        <div className="team-grid">
          {teams.map((team, index) => (
            <div className="team-card" key={index}>
              <div
                className="team-bg"
                style={{ backgroundImage: `url(${team.image})` }}
              />
              <div className="team-overlay" />
              <span className="team-rank">0{index + 1}</span>
              <div className="team-body">
                <h3>{team.name}</h3>
                <p>{team.division}</p>
                <span className="team-record">{team.record}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STREAMS */}
      <section className="streams">
        <div className="section-head">
          <span className="eyebrow">On air now</span>
          <h2 className="section-title">Live Streams</h2>
        </div>

        <div className="stream-grid">
          {streams.map((s, index) => (
            <div className="stream-card" key={index}>
              <div
                className="stream-thumb"
                style={{ backgroundImage: `url(${s.image})` }}
              >
                <div className="stream-thumb-overlay" />
                <span className="live-dot">LIVE</span>
                <FaPlayCircle className="play-icon" />
              </div>
              <div className="stream-meta">
                <h3>{s.title}</h3>
                <p>
                  {s.game} · {s.viewers} watching
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="community">
        <div
          className="community-bg"
          style={{ backgroundImage: `url(${E12})` }}
        />
        <div className="community-overlay" />

        <div className="community-inner">
          <h2>Your squad is waiting</h2>
          <p>
            Find teammates, scrim partners, and a few thousand people who
            will absolutely tilt with you after a close round.
          </p>
          <button>
            <FaDiscord /> Join the Discord
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;