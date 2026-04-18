import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, MoreHorizontal, Sun, Moon, Sparkles, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

const TASKS = [
  { id: '1', title: 'Complete DBMS Assignment', time: '10:00 AM', category: 'Exam', dur: '1h 30m', priority: 'high' },
  { id: '2', title: 'Leetcode 3 Problems (Sliding Window)', time: '02:00 PM', category: 'Placement', dur: '2h', priority: 'medium' },
  { id: '3', title: 'Revision: Graph Algorithms', time: '05:00 PM', category: 'Skill', dur: '1h', priority: 'low' },
  { id: '4', title: 'Group Project Sync', time: '07:30 PM', category: 'Project', dur: '45m', priority: 'medium' },
];

export default function Planner() {
  const [complete, setComplete] = useState<string[]>(['1']);

  const toggleTask = (id: string) => {
    setComplete(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[32px] md:text-[40px] font-display font-bold text-[#1F2937] leading-tight mb-2">Smart <span className="text-[#F59E0B]">Planner</span></h1>
          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">Optimize your hours. Balance academic preparation with placement skill building.</p>
        </div>
        <div className="flex bg-[#F3F4F6] p-1 rounded-xl">
           <button className="px-4 py-1.5 bg-white shadow-sm rounded-lg text-xs font-bold text-[#1F2937]">Today</button>
           <button className="px-4 py-1.5 text-xs font-bold text-[#6B7280] hover:text-[#1F2937]">This Week</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Schedule List */}
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-[32px] p-8 border-none"
          >
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-xl font-bold text-[#1F2937]">Focus Tasks</h3>
               <button className="flex items-center gap-2 text-xs font-bold text-[#4F46E5] hover:opacity-80">
                 <MoreHorizontal size={14} /> View All
               </button>
            </div>

            <div className="space-y-3">
               {TASKS.map((task, idx) => {
                 const isDone = complete.includes(task.id);
                 return (
                   <motion.div 
                     key={task.id}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     onClick={() => toggleTask(task.id)}
                     className={cn(
                       "flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent",
                       isDone ? "bg-gray-50/50 opacity-60" : "bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5"
                     )}
                   >
                     <div className={cn(
                       "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                       isDone ? "bg-[#10B981] border-[#10B981] text-white" : "border-gray-200"
                     )}>
                       {isDone && <CheckCircle2 size={14} />}
                     </div>
                     
                     <div className="flex-1">
                        <p className={cn(
                          "text-sm font-bold transition-all",
                          isDone ? "text-gray-400 line-through" : "text-[#1F2937]"
                        )}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{task.time}</span>
                          <span className="w-1 h-1 bg-gray-200 rounded-full" />
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{task.dur}</span>
                        </div>
                     </div>

                     <div className={cn(
                       "px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                       task.priority === 'high' ? "bg-red-50 text-red-500" : 
                       task.priority === 'medium' ? "bg-amber-50 text-amber-500" : "bg-blue-50 text-blue-500"
                     )}>
                        {task.priority}
                     </div>
                   </motion.div>
                 );
               })}
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full mt-8 py-4 bg-[#F3F4F6] text-[#6B7280] rounded-[20px] font-bold text-xs hover:bg-[#EEF2FF] hover:text-[#4F46E5] transition-all border-2 border-dashed border-gray-200 hover:border-indigo-200"
            >
              + Create Scheduled Task
            </motion.button>
          </motion.div>
        </div>

        {/* Focus & Stats Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-[32px] p-8 border-none flex-1 flex flex-col items-center text-center overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-[#4F46E5] mb-8">
               <Clock size={22} />
            </div>
            <h3 className="text-xl font-bold mb-2">Deep Work</h3>
            <p className="text-xs text-[#6B7280] mb-10 uppercase tracking-widest font-black">Focus Timer</p>
            
            <div className="mb-12 relative cursor-pointer">
               <span className="text-[64px] font-display font-black text-[#1F2937] tracking-tighter tabular-nums leading-none">24:00</span>
               <div className="h-1 w-12 bg-[#4F46E5] mx-auto mt-2 rounded-full" />
            </div>

            <div className="w-full flex flex-col gap-3">
               <button className="w-full py-4 bg-[#4F46E5] text-white rounded-[16px] font-bold text-xs shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all">Start Session</button>
               <button className="w-full py-4 bg-white border border-gray-100 text-[#6B7280] rounded-[16px] font-bold text-xs hover:bg-gray-50 transition-all">Reset</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-[32px] p-8 border-none overflow-hidden relative"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-[#10B981]">
                 <CheckCircle2 size={18} />
               </div>
               <div>
                 <h4 className="text-sm font-black uppercase tracking-widest text-[#1F2937]">Efficiency</h4>
                 <p className="text-[11px] font-bold text-emerald-500">+12% vs last week</p>
               </div>
            </div>
            
            <div className="space-y-2">
               <div className="flex justify-between text-[11px] font-black uppercase tracking-tight text-gray-400">
                  <span>Daily Goal</span>
                  <span className="text-[#1F2937]">75%</span>
               </div>
               <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    className="h-full bg-[#10B981]" 
                  />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
