import React from 'react';
import { motion } from 'motion/react';
import { Code2, Brain, Users, Terminal, ExternalLink, Cpu, Database, LayoutTemplate } from 'lucide-react';

export default function Placement() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <h1 className="text-[32px] md:text-[40px] font-display font-bold text-[#1F2937] leading-tight mb-2">Technical <span className="text-[#4F46E5]">Preparation</span></h1>
          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">Systematic roadmap for cracking Product Based Companies (FAANG+).</p>
        </div>
        <div className="hidden lg:flex items-center gap-4 bg-white/50 p-2 rounded-2xl border border-white/40">
           <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                   <img src={`https://picsum.photos/seed/user${i}/32/32`} alt="user" referrerPolicy="no-referrer" />
                </div>
              ))}
           </div>
           <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">2.4k Students Practicing</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Prep Tracks */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-[32px] p-8 border-none flex flex-col cursor-pointer transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:rotate-12 transition-transform">
               <Terminal size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#1F2937] mb-3">DSA Mastery</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-8 flex-grow">Advanced patterns: Sliding Window, DP, and Graph Algorithms.</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-indigo-500">
                 <span>Practice Progress</span>
                 <span>72%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 1.5 }} className="h-full bg-indigo-500" />
              </div>
              <button className="w-full py-4 bg-[#1F2937] text-white rounded-[16px] font-bold text-xs hover:bg-black transition-all">Start Coding</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-[32px] p-8 border-none flex flex-col cursor-pointer transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
               <Brain size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#1F2937] mb-3">System Design</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-8 flex-grow">Scalability, Load Balancing, and Microservices architecture.</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-emerald-500">
                 <span>Active Module</span>
                 <span>Caching</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '45%' }} transition={{ duration: 1.5 }} className="h-full bg-emerald-500" />
              </div>
              <button className="w-full py-4 bg-white border border-gray-100 text-[#1F2937] rounded-[16px] font-bold text-xs hover:bg-gray-50 transition-all">Start Learning</button>
            </div>
          </motion.div>
        </div>

        {/* Requirements & Stats Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="glass-card rounded-[32px] p-8 border-none bg-indigo-600/5"
           >
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-6">Target Companies</h4>
              <div className="grid grid-cols-2 gap-4">
                 {['FAANG', 'Product', 'Startup', 'Fintech'].map(cat => (
                   <div key={cat} className="p-3 bg-white/50 rounded-xl border border-white/40 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span className="text-[10px] font-bold text-[#1F2937]">{cat}</span>
                   </div>
                 ))}
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
             className="glass-card rounded-[32px] p-8 border-none flex-1 flex flex-col"
           >
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                    <Cpu size={18} />
                 </div>
                 <h4 className="text-sm font-bold">Interview Readiness</h4>
              </div>
              <div className="text-center py-6 mb-6">
                 <span className="text-[54px] font-display font-black text-[#1F2937] tracking-tighter">52%</span>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Consistency 8.2 Days</p>
              </div>
              <div className="space-y-3 mt-auto">
                 {['Behavioral', 'Technical', 'HR Round'].map(round => (
                   <div key={round} className="flex justify-between items-center px-4 py-3 bg-gray-50/50 rounded-xl border border-white/40">
                      <span className="text-xs font-bold text-[#6B7280]">{round}</span>
                      <CheckCircle2 size={14} className="text-indigo-400" />
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}

import { CheckCircle2 } from 'lucide-react';

function PlacementCard({ title, desc, icon, tags, color }: { title: string, desc: string, icon: React.ReactNode, tags: string[], color: string }) {
  return (
    <div className="p-8 bg-white border border-gray-100 rounded-[32px] group hover:border-orange-500 hover:shadow-2xl transition-all h-full flex flex-col">
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", color)}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:text-orange-600 transition-all">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => (
          <span key={t} className="px-2 py-1 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t}</span>
        ))}
      </div>
    </div>
  );
}

function SkillBar({ label, level }: { label: string, level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[11px] font-bold uppercase tracking-tight">
        <span className="text-gray-500">{label}</span>
        <span className="text-gray-900">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100/50">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-orange-600 rounded-full"
        />
      </div>
    </div>
  );
}

import { cn } from '../lib/utils';
