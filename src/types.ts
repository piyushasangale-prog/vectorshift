
export type Section = 'home' | 'roadmap' | 'exams' | 'placement' | 'projects' | 'planner' | 'career';

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  type: 'exam' | 'placement' | 'both';
  status: 'pending' | 'in-progress' | 'completed';
}

export interface ExamNote {
  id: string;
  subject: string;
  title: string;
  url: string;
}

export interface PracticeQuestion {
  id: string;
  subject: string;
  question: string;
  options: string[];
  answer: number;
}

export interface ProjectSuggestion {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tech: string[];
  description: string;
}
