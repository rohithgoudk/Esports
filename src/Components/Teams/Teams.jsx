import "./Teams.css";

import ES1 from "../../assets/ES1.webp";
import ES2 from "../../assets/ES2.webp";
import ES3 from "../../assets/ES3.webp";
import ES4 from "../../assets/ES4.webp";

// Brand color per game — drives the accent stripe, tag, and glow on each team card
const gameAccents = {
  valorant: "#FF4655",
  cs2: "#F2A65A",
  league: "#C9A047",
  dota2: "#8B5CF6",
};

const teams = [
  {
    name: "Shadow Reapers",
    division: "VALORANT Division",
    record: "18–3",
    game: "valorant",
    form: ["W", "W", "L", "W", "W"],
    image: ES1,
  },
  {
    name: "Cyber Titans",
    division: "CS2 Division",
    record: "21–5",
    game: "cs2",
    form: ["W", "W", "W", "L", "W"],
    image: ES2,
  },
  {
    name: "Neon Warriors",
    division: "League Division",
    record: "16–6",
    game: "league",
    form: ["L", "W", "W", "W", "L"],
    image: ES3,
  },
  {
    name: "Phantom Vanguard",
    division: "Dota 2 Division",
    record: "14–4",
    game: "dota2",
    form: ["W", "L", "W", "W", "W"],
    image: ES4,
  },
];

function Teams() {
  return (
    <section className="teams">
      <div className="section-head">
        <h2 className="section-title">Pro Teams to Watch</h2>
      </div>

      <div className="team-grid">
        {teams.map((team, index) => (
          <div
            className="team-card"
            key={index}
            style={{ "--accent": gameAccents[team.game] }}
          >
            <div
              className="team-bg"
              style={{ backgroundImage: `url(${team.image})` }}
            />
            <div className="team-overlay" />
            <span className="team-rank">0{index + 1}</span>

            <div className="team-body">
              <span className="team-tag">{team.division}</span>
              <h3>{team.name}</h3>

              <div className="team-meta">
                <span className="team-record">{team.record}</span>

                <div
                  className="team-form"
                  aria-label={`Last 5 matches: ${team.form
                    .map((r) => (r === "W" ? "win" : "loss"))
                    .join(", ")}`}
                >
                  {team.form.map((result, i) => (
                    <span
                      key={i}
                      className={`form-pip ${
                        result === "W" ? "win" : "loss"
                      }`}
                      title={result === "W" ? "Win" : "Loss"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teams;