
import { Mentor } from "./mentors";

export function calculateScore(mentor: Mentor): number {
  return (
    mentor.stats.dsaProblems / 20 +
    mentor.stats.codechefRating / 200 +
    mentor.stats.codeforcesRating / 200 +
    mentor.projects.length * 10 +
    mentor.achievements.length * 15
  );
}