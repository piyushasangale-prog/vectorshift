// Roadmap.tsx

import React from "react";

const roadmapData = [
  {
    title: "DS & Algorithms",
    content: [
      "Start with arrays and strings to build basics.",
      "Move to linked lists, stacks, and queues.",
      "Learn trees and graphs step by step.",
      "Practice daily problems on LeetCode.",
      "Focus on patterns like sliding window and DP."
    ]
  },
  {
    title: "DBMS",
    content: [
      "Understand what databases are and why needed.",
      "Learn SQL (CRUD operations and joins).",
      "Study normalization and indexing.",
      "Understand transactions and ACID properties.",
      "Apply DB concepts in real projects."
    ]
  },
  {
    title: "React Basics",
    content: [
      "Learn components and JSX structure.",
      "Understand props and state.",
      "Use hooks like useState and useEffect.",
      "Build small reusable components.",
      "Create a basic frontend project."
    ]
  },
  {
    title: "System Design",
    content: [
      "Start with basics like scalability and latency.",
      "Understand client-server architecture.",
      "Learn about databases and caching.",
      "Study load balancing concepts.",
      "Design simple systems like chat app."
    ]
  },
  {
    title: "Node.js API",
    content: [
      "Learn Node.js fundamentals.",
      "Use Express.js to build APIs.",
      "Connect APIs with database.",
      "Implement authentication.",
      "Build full backend project."
    ]
  }
];

const Roadmap = () => {
  return (
    <div>
      <h1>Roadmaps</h1>

      {roadmapData.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{item.title}</h2>
          <ul>
            {item.content.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Roadmap;