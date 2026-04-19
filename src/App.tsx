import { useState } from 'react';
import { Search, MapPin, Briefcase, Award, Code2, BookOpen, UserPlus, Code, Terminal, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- MOCK DATA ---
const mentors = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "https://picsum.photos/seed/rahul/150/150",
    yearRole: "3rd Year CSE",
    domain: "DSA",
    strongArea: "Dynamic Programming, Graphs",
    experience: "Solved 400+ on LeetCode, ICPC Regionalist",
    achievements: "Google Summer of Code '24, HackTheNorth Finalist",
    projects: ["Algorithm Visualizer", "Compiler Design Lab"],
    leetcode: "https://leetcode.com",
    codechef: "https://codechef.com",
  },
  {
    id: 2,
    name: "Neha Kapoor",
    image: "https://picsum.photos/seed/neha/150/150",
    yearRole: "3rd Year IT",
    domain: "Web Dev",
    strongArea: "React, Node.js, System Design",
    experience: "SDE Intern @ Amazon, Built 10+ Fullstack Apps",
    achievements: "SIH 2023 Winner, Web Dev Club Lead",
    projects: ["E-commerce MERN App", "Real-time Chat with WebSockets"],
    leetcode: "https://leetcode.com",
    codechef: "https://codechef.com",
  },
  {
    id: 3,
    name: "Aman Gupta",
    image: "https://picsum.photos/seed/aman/150/150",
    yearRole: "2nd Year CSE",
    domain: "AI/ML",
    strongArea: "Computer Vision, PyTorch",
    experience: "Deep Learning Researcher @ College Lab",
    achievements: "Kaggle Expert, Published paper on CNNs",
    projects: ["Sign Language Detector", "Stock Predictor"],
    leetcode: "https://leetcode.com",
    codechef: "https://codechef.com",
  },
  {
    id: 4,
    name: "Priya Singh",
    image: "https://picsum.photos/seed/priya/150/150",
    yearRole: "3rd Year ECE",
    domain: "Core Subjects",
    strongArea: "OS, DBMS, Computer Networks",
    experience: "Teaching Assistant for OS Course",
    achievements: "9.8 CGPA, Top Performer in Core CS",
    projects: ["Custom Shell in C", "Distributed Key-Value Store"],
    leetcode: "https://leetcode.com",
    codechef: null,
  },
  {
    id: 5,
    name: "Vikram Das",
    image: "https://picsum.photos/seed/vikram/150/150",
    yearRole: "2nd Year IT",
    domain: "Web Dev",
    strongArea: "Frontend, UI/UX, Tailwind",
    experience: "Freelance Web Developer, 5+ Clients",
    achievements: "CSS Design Award Winner, Speaker at TechFest",
    projects: ["Portfolio Creator Template", "College Fest Website"],
    leetcode: null,
    codechef: "https://codechef.com",
  },
  {
    id: 6,
    name: "Simran Kaur",
    image: "https://picsum.photos/seed/simran/150/150",
    yearRole: "3rd Year CSE",
    domain: "DSA",
    strongArea: "Trees, Math, Greedy Algoriths",
    experience: "Solved 500+ problems, Competitive Programmer",
    achievements: "Codeforces Specialist, Meta Hacker Cup R2",
    projects: ["CP Template Library", "Math Solver Utility"],
    leetcode: "https://leetcode.com",
    codechef: "https://codechef.com",
  }
];

const domains = ["All", "DSA", "Web Dev", "AI/ML", "Core Subjects"];

const domainColors: Record<string, string> = {
  "DSA": "bg-blue-100 text-blue-700 border-blue-200",
  "Web Dev": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "AI/ML": "bg-purple-100 text-purple-700 border-purple-200",
  "Core Subjects": "bg-amber-100 text-amber-700 border-amber-200",
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDomain, setActiveDomain] = useState("All");

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          mentor.strongArea.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = activeDomain === "All" || mentor.domain === activeDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pb-20">
      
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 pt-16 pb-8 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50 z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Peer Mentorship Program
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Learn from your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Seniors</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-slate-500 mb-10"
          >
            Connect with 2nd and 3rd year students who have been in your shoes. Get guidance on DSA, projects, internships, and core subjects.
          </motion.p>
          
          {/* Search and Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-3xl flex flex-col md:flex-row gap-4 mb-4"
          >
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-shadow"
                placeholder="Search mentors by name or skill (e.g. React, DP)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 max-w-3xl"
          >
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setActiveDomain(domain)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeDomain === domain
                    ? 'bg-slate-800 text-white border-slate-800 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {domain}
              </button>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-12">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Available Mentors</h2>
            <p className="text-sm text-slate-500 mt-1">Showing {filteredMentors.length} results</p>
          </div>
        </div>

        {filteredMentors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredMentors.map((mentor) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={mentor.id}
                  className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Card Header: Profile Info */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-lg">{mentor.name}</h3>
                        <p className="text-sm text-slate-500 font-medium">{mentor.yearRole}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${domainColors[mentor.domain] || 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                      {mentor.domain}
                    </span>
                  </div>

                  {/* Card Body: Details */}
                  <div className="flex-1 space-y-5">
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        <Code2 className="w-3.5 h-3.5" /> Strong Area
                      </div>
                      <p className="text-sm text-slate-700 font-medium">{mentor.strongArea}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        <Briefcase className="w-3.5 h-3.5" /> Experience
                      </div>
                      <p className="text-sm text-slate-600 leading-snug">{mentor.experience}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        <Award className="w-3.5 h-3.5" /> Achievements
                      </div>
                      <p className="text-sm text-slate-600 leading-snug">{mentor.achievements}</p>
                    </div>

                     <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        <BookOpen className="w-3.5 h-3.5" /> Top Projects
                      </div>
                      <ul className="text-sm text-slate-600 space-y-1.5">
                        {mentor.projects.map((project, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                            <span className="leading-snug">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Card Footer: Actions */}
                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-colors col-span-2">
                        <UserPlus className="w-4 h-4" /> Request Mentorship
                      </button>
                      
                      {mentor.leetcode && (
                        <a 
                          href={mentor.leetcode}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-orange-50 text-slate-600 hover:text-orange-600 py-2.5 px-3 rounded-xl text-sm font-medium transition-colors border border-slate-200 hover:border-orange-200"
                        >
                          <Code className="w-4 h-4" /> LeetCode
                        </a>
                      )}
                      
                      {mentor.codechef && (
                        <a 
                          href={mentor.codechef}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-amber-50 text-slate-600 hover:text-amber-700 py-2.5 px-3 rounded-xl text-sm font-medium transition-colors border border-slate-200 hover:border-amber-200"
                        >
                          <Terminal className="w-4 h-4" /> CodeChef
                        </a>
                      )}

                      {!mentor.leetcode && mentor.codechef && (
                         <div className="col-span-1 border border-dashed border-slate-200 rounded-xl bg-slate-50/50 flex items-center justify-center text-xs text-slate-400">
                           No LC Profile
                         </div>
                      )}
                      {!mentor.codechef && mentor.leetcode && (
                        <div className="col-span-1 border border-dashed border-slate-200 rounded-xl bg-slate-50/50 flex items-center justify-center text-xs text-slate-400">
                           No CC Profile
                         </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No mentors found</h3>
            <p className="text-slate-500 mt-2 max-w-sm mx-auto">We couldn't find any mentors matching your search. Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => {setSearchTerm(""); setActiveDomain("All");}}
              className="mt-6 text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
            >
              Clear all filters <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

