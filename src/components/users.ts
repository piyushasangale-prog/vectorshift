// users.ts

export interface User {
  id: number;
  name: string;
  year: string;
  branch: string;
  interest: string;
  skills: string[];
  projects: string[];
}

const users: User[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    year: "1st Year",
    branch: "Computer Science Engineering",
    interest: "AI/ML, Web Development",
    skills: ["JavaScript", "Python", "HTML", "CSS"],
    projects: [
      "Student Portfolio Website",
      "AI Chatbot (in progress)"
    ]
  },
  {
    id: 2,
    name: "Priya Patil",
    year: "1st Year",
    branch: "Information Technology",
    interest: "Cybersecurity, Backend Development",
    skills: ["Java", "Node.js", "SQL"],
    projects: [
      "Secure Login System (will be working on it)"
    ]
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    year: "1st Year",
    branch: "Electronics Engineering",
    interest: "IoT, Robotics",
    skills: ["C", "Arduino", "Basic Python"],
    projects: [
      "Smart Home Automation (working on it)"
    ]
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    year: "1st Year",
    branch: "Computer Engineering",
    interest: "Full Stack Development, Startups",
    skills: ["React", "Node.js", "MongoDB", "JavaScript"],
    projects: [
      "E-commerce Website"
    ]
  },
  {
    id: 5,
    name: "Aditya Joshi",
    year: "1st Year",
    branch: "Mechanical Engineering",
    interest: "Automation, CAD Design",
    skills: ["AutoCAD", "SolidWorks", "Python Basics"],
    projects: [
      "3D Engine Model Design"
    ]
  }
];

export default users;