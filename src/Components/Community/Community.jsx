import "./Community.css";
import { useNavigate } from "react-router-dom";
import { FaDiscord, FaTwitter, FaRedditAlien, FaTwitch } from "react-icons/fa";

import ES3 from "../../assets/ES3.webp";

const channels = [
  {
    name: "Discord",
    icon: FaDiscord,
    description: "Find scrim partners, callouts, and post-match recaps.",
    stat: "180K members",
    color: "#5865F2",
    cta: "Join Server",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    description: "Bracket updates, roster news, and clutch clips.",
    stat: "94K followers",
    color: "#1D9BF0",
    cta: "Follow",
  },
  {
    name: "Reddit",
    icon: FaRedditAlien,
    description: "Match threads, memes, and deep tactical breakdowns.",
    stat: "62K members",
    color: "#FF4500",
    cta: "Join Subreddit",
  },
  {
    name: "Twitch",
    icon: FaTwitch,
    description: "Watch broadcasts and chat live during every series.",
    stat: "1.1M followers",
    color: "#9146FF",
    cta: "Follow Channel",
  },
];

function Community() {
  const navigate = useNavigate();

  return (
    <section className="community">
      <div className="community-bg" style={{ backgroundImage: `url(${ES3})` }} />
      <div className="community-overlay" />

      <div className="community-inner">
        <h2>Your squad is waiting</h2>
        <p>
          Find teammates, scrim partners, and a few thousand people who will
          absolutely tilt with you after a close round.
        </p>
        <button className="community-discord-btn" onClick={() => navigate("/404")}>
          <FaDiscord /> Join the Discord
        </button>
      </div>

      <div className="community-channels">
        <div className="section-head">
          <span className="eyebrow">Pick your platform</span>
          <h2 className="section-title">Where the Community Lives</h2>
        </div>

        <div className="channel-grid">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                className="channel-card"
                key={index}
                style={{ "--accent": channel.color }}
              >
                <div className="channel-icon">
                  <Icon />
                </div>
                <h3>{channel.name}</h3>
                <p className="channel-desc">{channel.description}</p>
                <span className="channel-stat">{channel.stat}</span>
                <button
                  className="channel-cta"
                  onClick={() => navigate("/404")}
                >
                  {channel.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Community;