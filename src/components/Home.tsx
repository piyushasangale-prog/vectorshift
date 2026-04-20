import React from "react";
import { useNavigate } from "react-router-dom";

interface RoadmapStep {
  id: string;
  label: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const navigate = useNavigate();

  const growthProgress = 68;
  const examReadiness = 65;
  const placementReadiness = 52;

  const roadmapSteps: RoadmapStep[] = [
    { id: "dsa", label: "DS & Algo", completed: true },
    { id: "dbms", label: "DBMS", completed: true },
    { id: "react", label: "React Basics", completed: true },
    { id: "sys-design", label: "System Design", completed: false },
    { id: "node", label: "Node JS API", completed: false },
    { id: "mock", label: "Mock Prep", completed: false },
  ];

  // 👉 Start Learning button → Roadmap page
  const handleStartLearning = () => {
    navigate("/roadmap");
  };

  // 👉 Clicking any topic → specific roadmap page
  const handleStepClick = (topicId: string) => {
    navigate(`/roadmap/${topicId}`);
  };

  return (
    <div className="home-container">

      {/* Sidebar (UI already handled) */}
      <nav className="sidebar">
        <div className="logo">GradPrep</div>

        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/roadmap")}>Roadmap</li>
          <li onClick={() => navigate("/exams")}>Exams</li>
          <li onClick={() => navigate("/placement")}>Placement</li>
          <li onClick={() => navigate("/projects")}>Projects</li>
          <li onClick={() => navigate("/planner")}>Planner</li>
          <li onClick={() => navigate("/career")}>Career</li>
        </ul>

        <button className="get-plan-btn" onClick={() => navigate("/plan")}>
          Get Plan
        </button>
      </nav>

      {/* Main Content */}
      <main className="content">

        <h1>Learning Roadmap</h1>
        <p>Follow your personalized learning path</p>

        {/* Roadmap Section */}
        <section className="roadmap-section">
          <h2>Current Roadmap</h2>

          <p>
            Bridging Semester Exams with Full-Stack Placement Readiness
          </p>

          <div className="steps-container">
            {roadmapSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`step-btn ${step.completed ? "completed" : "pending"}`}
              >
                {step.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleStartLearning}
            className="start-learning-btn"
          >
            Start Learning
          </button>
        </section>

        {/* Progress Section (NO LOGIC HERE - UI HANDLES IT) */}
        <section className="progress-section">
          <h3>Growth Progress</h3>

          <div className="total-progress">{growthProgress}%</div>

          <div className="metric">
            <span>Exam Readiness</span>
            <div className="progress-bar">
              <div style={{ width: `${examReadiness}%` }} />
            </div>
          </div>

          <div className="metric">
            <span>Placement Readiness</span>
            <div className="progress-bar">
              <div style={{ width: `${placementReadiness}%` }} />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;
