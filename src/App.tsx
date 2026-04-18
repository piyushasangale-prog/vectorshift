import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Map as RoadmapIcon, 
  BookOpen, 
  Briefcase, 
  Layout, 
  Calendar, 
  Compass, 
  ChevronRight,
  Target,
  BarChart3,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { Section } from './types';
import { cn } from './lib/utils';

// Sub-components (could be moved to separate files later)
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Exams from './components/Exams';
import Placement from './components/Placement';
import Projects from './components/Projects';
import Planner from './components/Planner';
import Career from './components/Career';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'roadmap', label: 'Roadmap', icon: RoadmapIcon },
    { id: 'exams', label: 'Exams', icon: BookOpen },
    { id: 'placement', label: 'Placement', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Layout },
    { id: 'planner', label: 'Planner', icon: Calendar },
    { id: 'career', label: 'Career', icon: Compass },
  ];

  return (
    <div className="min-h-screen selection:bg-indigo-100 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 sticky top-0 bg-white/70 backdrop-blur-md z-50 border-b border-[#E5E7EB]/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4F46E5] rounded flex items-center justify-center text-white font-bold">G</div>
          <span className="font-display font-bold text-lg tracking-tight text-[#4F46E5]">GradPrep</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-[#6B7280]">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Navigation Sidebar */}
      <nav className={cn(
        "fixed md:sticky top-0 h-screen glass-sidebar flex-col py-8 px-5 transition-all z-40 w-[260px] md:flex shrink-0",
        isSidebarOpen ? "left-0" : "-left-[260px] md:left-0"
      )}>
        <div className="hidden md:flex items-center gap-2 mb-12 px-3 cursor-pointer group" onClick={() => setActiveSection('home')}>
          <div className="w-9 h-9 bg-[#4F46E5] rounded-[8px] flex items-center justify-center text-white font-black group-hover:rotate-6 transition-transform">G</div>
          <span className="font-display font-extrabold text-2xl tracking-tight text-[#4F46E5]">GradPrep</span>
        </div>

        <div className="space-y-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id as Section);
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-[12px] transition-colors text-sm font-semibold relative group",
                  isActive ? "text-[#4F46E5]" : "text-[#6B7280] hover:text-[#1F2937]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#EEF2FF] rounded-[12px] -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon size={18} className={cn("transition-transform group-hover:scale-110", isActive && "text-[#4F46E5]")} />
                {item.label}
              </button>
            );
          })}
        </div>

          <div className="mt-auto px-1">
            <button 
              onClick={() => setActiveSection('career')}
              className="w-full bg-[#4F46E5] text-white py-3 rounded-[12px] text-sm font-semibold shadow-[0_4px_12px_rgba(79,70,229,0.25)] hover:bg-[#4338CA] transition-all flex items-center justify-center gap-2 group"
            >
              Get Plan <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 h-screen overflow-y-auto">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeSection === 'home' && <Hero onNavigate={setActiveSection} />}
                {activeSection === 'roadmap' && <Roadmap />}
                {activeSection === 'exams' && <Exams />}
                {activeSection === 'placement' && <Placement />}
                {activeSection === 'projects' && <Projects />}
                {activeSection === 'planner' && <Planner />}
                {activeSection === 'career' && <Career />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

      {/* Floating Action for Tracker */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl z-50 group overflow-hidden"
      >
        <span className="absolute inset-0 bg-[#4F46E5] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <BarChart3 className="relative z-10" />
      </motion.button>
    </div>
  );
}

