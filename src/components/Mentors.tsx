
import React from "react";

const mentors = [
  {
    id: 1,
    name: "Anas Dharar",
    year_branch: "B.Tech IT (2024–2028)",
    strongAreas: ["DSA", "Full Stack", "Machine Learning"],
    projects: ["FireSolve", "CampusCare"],
    achievements: [
      "CodeChef 3⭐",
      "Codeforces Pupil",
      "1st place DSA Launchpad",
    ],
    stats: {
      dsaProblems: 1000,
      codechefRating: 1676,
      codeforcesRating: 1343,
    },
  },
  {
    id: 2,
    name: "Sweta Manjari Patel",
    year_branch: "B.Tech Electronics (2024–2028)",
    strongAreas: ["DSA", "Web Development", "Embedded Systems"],
    projects: [
      "LowSignal AI Tutor",
      "Gesture LED System",
      "Robotic Arm Bot",
      "Library Management System",
    ],
    achievements: ["AI Hackathon Finalist"],
    stats: {
      dsaProblems: 500,
      codechefRating: 1400,
      codeforcesRating: 1200,
    },
  },
  {
    id: 3,
    name: "Aditya Mahesh Baldawa",
    year_branch: "B.Tech CSE (2023–2027)",
    strongAreas: ["Backend Development", "System Design"],
    projects: [
      "VolexDB - Redis-like DB",
      "E-commerce Website (Next.js)",
    ],
    achievements: [
      "Microsoft Student Ambassador",
      "Winner - Impulse Mock Placement",
      "ACM Hackathon Finalist",
    ],
    stats: {
      dsaProblems: 300,
      codechefRating: 1500,
      codeforcesRating: 1300,
    },
  },
];

const Mentors: React.FC = () => {
  return (
    <div>
      {mentors.map((mentor) => (
        <div key={mentor.id}>
          <h2>{mentor.name}</h2>
          <p>{mentor.year_branch}</p>

          <p>Strong Areas: {mentor.strongAreas.join(", ")}</p>
          <p>Projects: {mentor.projects.join(", ")}</p>
          <p>Achievements: {mentor.achievements.join(", ")}</p>

          <p>DSA: {mentor.stats.dsaProblems}</p>
          <p>CodeChef: {mentor.stats.codechefRating}</p>
          <p>Codeforces: {mentor.stats.codeforcesRating}</p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Mentors;
