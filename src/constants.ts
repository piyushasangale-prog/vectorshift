
import { RoadmapStep, ProjectSuggestion } from './types';

export const INITIAL_ROADMAP: RoadmapStep[] = [
  { id: '1', title: 'Data Structures & Algorithms', description: 'Core fundamentals for placements.', type: 'placement', status: 'completed' },
  { id: '2', title: 'Operating Systems', description: 'Essential for semester exams and interviews.', type: 'both', status: 'in-progress' },
  { id: '3', title: 'System Design', description: 'Advanced placement preparation.', type: 'placement', status: 'pending' },
  { id: '4', title: 'Dbms & SQL', description: 'Crucial for software engineering roles.', type: 'both', status: 'pending' },
];

export const PROJECT_SUGGESTIONS: ProjectSuggestion[] = [
  { id: '1', title: 'AI Study Assistant', difficulty: 'Intermediate', tech: ['React', 'Gemini API'], description: 'A tool that summarizes study notes and generates quizzes.' },
  { id: '2', title: 'E-commerce Terminal', difficulty: 'Beginner', tech: ['Python', 'SQL'], description: 'A command-line tool for managing inventory.' },
  { id: '3', title: 'Multiplayer Code Editor', difficulty: 'Advanced', tech: ['Socket.io', 'Node.js', 'React'], description: 'Real-time collaborative coding platform.' },
];
