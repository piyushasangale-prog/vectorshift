import { motion } from 'motion/react';
import { FileText, HelpCircle, RotateCcw, Search, Download, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const SUBJECTS = ['Operating Systems', 'Computer Networks', 'DBMS', 'Automata Theory', 'Software Engineering'];

export default function Exams() {
  const [selectedSubject, setSelectedSubject] = useState(SUBJECTS[0]);

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <h1 className="text-[32px] md:text-[40px] font-display font-bold text-[#1F2937] leading-tight mb-2">Academic <span className="text-[#10B981]">Excellence</span></h1>
          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">Master your university subjects with structured notes and predictive question banks.</p>
        </div>
      </header>

      {/* Subject Filter */}
      <div className="flex flex-wrap gap-2 py-2">
        {SUBJECTS.map(sub => (
          <button 
            key={sub}
            onClick={() => setSelectedSubject(sub)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap",
              selectedSubject === sub 
                ? "bg-[#1F2937] text-white shadow-lg" 
                : "bg-white border border-gray-100 text-[#6B7280] hover:bg-gray-50"
            )}
          >
            {sub}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Resource Card */}
        <div className="lg:col-span-8">
          <motion.div 
            key={selectedSubject}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-[32px] p-8 border-none"
          >
            <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">{selectedSubject}</h3>
                    <p className="text-xs text-[#6B7280] uppercase tracking-widest font-black">Semester 6 Core</p>
                  </div>
               </div>
               <button className="hidden md:flex items-center gap-2 text-xs font-bold text-[#4F46E5]">
                 <Download size={14} /> Download PDF
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                 <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Top Resources</h4>
                 <DocItem title="Comprehensive Review" type="PDF" size="4.2MB" />
                 <DocItem title="Quick Revision Sheet" type="DOC" size="1.1MB" />
                 <DocItem title="Formula List" type="PDF" size="0.8MB" />
              </div>
              <div className="space-y-4">
                 <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Practice Tools</h4>
                 <div className="p-6 rounded-[24px] bg-indigo-50/50 border border-indigo-100/50">
                    <p className="text-sm font-bold text-[#1F2937] mb-2">AI Question Generator</p>
                    <p className="text-xs text-[#6B7280] mb-6">Create 10 randomized questions based on current progress.</p>
                    <button className="w-full py-3 bg-[#4F46E5] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#4338CA] transition-all">Start Quiz</button>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Revision Progress Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
           <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-[32px] p-8 border-none flex flex-col"
           >
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                    <RotateCcw size={18} />
                 </div>
                 <h4 className="text-sm font-bold">Revision Cycle</h4>
              </div>
              <p className="text-sm text-[#6B7280] mb-8 leading-relaxed">Your retention for <strong>{selectedSubject}</strong> is currently at peak levels.</p>
              
              <div className="space-y-6">
                 <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-tight text-gray-400">
                       <span>Topic Mastery</span>
                       <span className="text-[#1F2937]">85%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: '85%' }}
                         className="h-full bg-amber-500" 
                       />
                    </div>
                 </div>
                 <button className="w-full py-4 bg-white border border-gray-100 text-[#1F2937] rounded-[16px] font-bold text-xs hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                   Check Mastery Scan <RotateCcw size={14} />
                 </button>
              </div>
           </motion.div>

           <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-[32px] p-8 border-none flex-1"
           >
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F2937] mb-6">Recent Activity</h4>
              <div className="space-y-4">
                 {[1,2].map(i => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p className="text-xs font-semibold text-[#6B7280]">Saved "Module 3 Notes"</p>
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}

function DocItem({ title, type, size }: { title: string, type: string, size: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors cursor-pointer group">
      <div>
        <p className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{title}</p>
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{type} • {size}</p>
      </div>
      <Download size={16} className="text-gray-300 group-hover:text-orange-500" />
    </div>
  );
}

function ToolCard({ title, desc, color, btnText }: { title: string, desc: string, color: string, btnText: string }) {
  return (
    <div className={cn("p-6 rounded-2xl border", color.replace('text-', 'border-').replace('50', '200'))}>
       <h4 className="font-bold text-sm mb-1 uppercase tracking-tight">{title}</h4>
       <p className="text-[11px] opacity-70 mb-4">{desc}</p>
       <button className="px-4 py-2 bg-white rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm">
         {btnText}
       </button>
    </div>
  );
}

import { cn } from '../lib/utils';
