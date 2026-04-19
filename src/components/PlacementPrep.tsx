// PlacementPrep.tsx

import React from "react";

const placementPlan = [
  {
    sem: "Semester 1",
    plan: [
      "Build strong basics of C/C++ or Python.",
      "Start with arrays, strings in DSA.",
      "Learn basic Git and GitHub usage.",
      "Understand computer fundamentals.",
      "Start problem solving habit (5-10 problems/week)."
    ]
  },
  {
    sem: "Semester 2",
    plan: [
      "Cover linked lists, stacks, queues.",
      "Start learning basic HTML, CSS, JavaScript.",
      "Improve problem solving consistency.",
      "Participate in coding contests.",
      "Build 1-2 small projects (frontend)."
    ]
  },
  {
    sem: "Semester 3",
    plan: [
      "Learn trees, recursion, backtracking.",
      "Start DBMS (SQL, queries, joins).",
      "Build intermediate web projects.",
      "Understand OOP concepts clearly.",
      "Practice 150+ DSA questions."
    ]
  },
  {
    sem: "Semester 4",
    plan: [
      "Learn graphs and advanced DSA topics.",
      "Start OS and Computer Networks basics.",
      "Build full stack project (React + backend).",
      "Learn APIs and backend basics.",
      "Start preparing resume."
    ]
  },
  {
    sem: "Semester 5",
    plan: [
      "Master DSA (300+ problems target).",
      "Study DBMS, OS, CN deeply for interviews.",
      "Build 2 strong projects (full stack).",
      "Start system design basics.",
      "Practice mock interviews."
    ]
  },
  {
    sem: "Semester 6",
    plan: [
      "Revise DSA patterns (DP, graphs, greedy).",
      "Practice medium-hard problems daily.",
      "Improve project quality and deployment.",
      "Learn advanced backend or ML (optional).",
      "Start applying for internships."
    ]
  },
  {
    sem: "Semester 7",
    plan: [
      "Focus on revision of all core subjects.",
      "Practice company-specific questions.",
      "Give mock interviews regularly.",
      "Optimize resume and portfolio.",
      "Apply to companies actively."
    ]
  },
  {
    sem: "Semester 8",
    plan: [
      "Revise DSA and core subjects daily.",
      "Focus on interview preparation.",
      "Solve previous interview questions.",
      "Stay consistent with coding practice.",
      "Prepare HR and behavioral answers."
    ]
  }
];

const PlacementPrep = () => {
  return (
    <div>
      <h1>Placement Preparation Roadmap (8 Semesters)</h1>

      {placementPlan.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{item.sem}</h2>

          <ul>
            {item.plan.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default PlacementPrep;