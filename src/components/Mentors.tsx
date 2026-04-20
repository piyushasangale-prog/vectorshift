
import React from "react";
import mentors from "../data/mentors";

const Mentors: React.FC = () => {
  return (
    <div>
      {mentors.map((mentor) => (
        <div key={mentor.id}>
          <h2>{mentor.name}</h2>
          <p>{mentor.year_branch}</p>

          <p>
            <b>Strong Areas:</b> {mentor.strongAreas.join(", ")}
          </p>

          <p>
            <b>Projects:</b> {mentor.projects.join(", ")}
          </p>

          <p>
            <b>Achievements:</b> {mentor.achievements.join(", ")}
          </p>

          <p>
            <b>DSA Problems:</b> {mentor.stats.dsaProblems}
          </p>

          <p>
            <b>CodeChef Rating:</b> {mentor.stats.codechefRating}
          </p>

          <p>
            <b>Codeforces Rating:</b> {mentor.stats.codeforcesRating}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Mentors;