import { profile } from "../../data/profile";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1
          className="hero__title anim-shimmer-text anim-pop-in"
          style={{ animationDelay: "1" }}
        >
          {profile.fullName}
        </h1>
        <p
          className="hero__role anim-pop-in"
          style={{ animationDelay: "0.4s" }}
        >
          {profile.role}
        </p>
        <span>-------------------- ✨ ------------------</span>
        <p
          className="hero__tagline anim-pop-in"
          style={{ animationDelay: "0.55s" }}
        >
          React
          <span style={{ color: "#ffe600", fontSize: 20 }}> · </span>
          TypeScript<span style={{ color: "#ffe600", fontSize: 20 }}>
            {" "}
            ·{" "}
          </span>{" "}
          .NET<span style={{ color: "#ffe600", fontSize: 20 }}> · </span>SQL
          Server
        </p>
      </div>
      <div>foto</div>
    </section>
  );
}
