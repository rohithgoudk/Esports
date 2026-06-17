import "./Streams.css";
import { FaPlayCircle } from "react-icons/fa";

import ES1 from "../../assets/ES1.webp";
import ES2 from "../../assets/ES2.webp";
import ES3 from "../../assets/ES3.webp";
import ES4 from "../../assets/ES4.webp";

// Same accent palette as Teams.jsx — keeps the game color-coding consistent site-wide
const gameAccents = {
  valorant: "#FF4655",
  cs2: "#F2A65A",
  league: "#C9A047",
  dota2: "#8B5CF6",
};

const streams = [
  {
    title: "Ignition Masters — Semifinal",
    viewers: "42.1K",
    game: "VALORANT",
    gameKey: "valorant",
    featured: true,
    image: ES1,
  },
  {
    title: "Overdrive Quals — Map 3",
    viewers: "18.7K",
    game: "CS2",
    gameKey: "cs2",
    image: ES2,
  },
  {
    title: "Rift Cup — Group Stage",
    viewers: "29.4K",
    game: "League",
    gameKey: "league",
    image: ES3,
  },
  {
    title: "Phantom Vanguard vs Rival — Dota 2",
    viewers: "24.3K",
    game: "Dota 2",
    gameKey: "dota2",
    image: ES4,
  },
];

function Streams() {
  return (
    <section className="streams">
      <div className="section-head">
        <span className="eyebrow">On air now</span>
        <h2 className="section-title">Live Streams</h2>
      </div>

      <div className="stream-grid">
        {streams.map((s, index) => (
          <div
            className={`stream-card ${s.featured ? "featured" : ""}`}
            key={index}
            style={{ "--accent": gameAccents[s.gameKey] }}
          >
            <div
              className="stream-thumb"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="stream-thumb-overlay" />
              <span className="live-dot">LIVE</span>
              <FaPlayCircle className="play-icon" />

              {s.featured && (
                <div className="stream-featured-meta">
                  <span className="featured-tag">Featured Match</span>
                  <h3>{s.title}</h3>
                  <p>
                    {s.game} · {s.viewers} watching
                  </p>
                </div>
              )}
            </div>

            {!s.featured && (
              <div className="stream-meta">
                <h3>{s.title}</h3>
                <p>
                  {s.game} · {s.viewers} watching
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Streams;