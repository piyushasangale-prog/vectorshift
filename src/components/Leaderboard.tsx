// Leaderboard.tsx

import React from "react";
import mentors from "./mentors";
import { calculateScore } from "./autoscore";

const Leaderboard = () => {
  const ranked = mentors
    .map((m) => ({
      ...m,
      score: calculateScore(m)
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <div>
      <h1>Leaderboard</h1>

      {ranked.map((mentor, index) => (
        <div key={mentor.id} style={{ marginBottom: "20px" }}>
          <h2>#{index + 1} {mentor.name}</h2>
          <p><b>Score:</b> {mentor.score.toFixed(2)}</p>
          <p>{mentor.year_branch}</p>

          <p><b>Strong Areas:</b> {mentor.strongAreas.join(", ")}</p>

          <p><b>Projects:</b></p>
          <ul>
            {mentor.projects.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <p><b>Achievements:</b></p>
          <ul>
            {mentor.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;