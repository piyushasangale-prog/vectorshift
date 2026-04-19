// Planner.tsx

import React, { useState } from "react";

const plannerData = [
  {
    title: "Arrays (DSA)",
    days: "Day 1 - Day 5",
    tasks: [
      "Learn array basics",
      "Solve 10 easy problems",
      "Two pointer technique",
      "Sliding window",
      "Revision + mixed problems"
    ]
  },
  {
    title: "Strings (DSA)",
    days: "Day 6 - Day 8",
    tasks: [
      "Learn string operations",
      "Practice pattern problems",
      "Solve substring problems"
    ]
  },
  {
    title: "React Basics",
    days: "Day 9 - Day 12",
    tasks: [
      "Learn JSX & components",
      "Understand props & state",
      "Use hooks",
      "Build mini project"
    ]
  },
  {
    title: "Node.js API",
    days: "Day 13 - Day 16",
    tasks: [
      "Setup Node & Express",
      "Create APIs",
      "Connect database",
      "Test APIs"
    ]
  }
];

const Planner = () => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const handleCheck = (key: string) => {
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div>
      <h1>Planner</h1>

      {plannerData.map((item, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h2>{item.title}</h2>
          <p><b>{item.days}</b></p>

          <ul>
            {item.tasks.map((task, j) => {
              const key = `${i}-${j}`;
              return (
                <li key={j}>
                  <input
                    type="checkbox"
                    checked={checked[key] || false}
                    onChange={() => handleCheck(key)}
                  />
                  {task}
                </li>
              );
            })}
          </ul>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Planner;