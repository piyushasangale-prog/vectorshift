import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Github, ExternalLink, Filter, Plus, Lightbulb, ArrowUpRight } from 'lucide-react';
import { PROJECT_SUGGESTIONS } from '../constants';
import { cn } from '../lib/utils';

export default function Projects() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <h1 className="text-[32px] md:text-[40px] font-display font-bold text-[#1F2937] leading-tight mb-2">Build Practical <span className="text-[#4F46E5]">Skills</span></h1>
          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">Bridge the gap between academic theory and real-world industrial application with these guided projects.</p>
        </div>
        <button className="px-6 py-3 bg-[#1F2937] text-white rounded-[12px] text-xs font-bold hover:bg-black transition-all shadow-[0_4px_12px_rgba(31,41,55,0.2)]">
          Suggest Custom Project
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECT_SUGGESTIONS.map((proj, idx) => (
          <motion.div 
            key={proj.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative glass-card border-none rounded-[32px] p-8 flex flex-col h-full cursor-pointer transition-all duration-500 hover:bg-white"
          >
            <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5] group-hover:scale-110 transition-transform duration-500">
                 <Rocket size={22} />
               </div>
               <span className={cn(
                 "text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border",
                 proj.difficulty === 'Beginner' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                 proj.difficulty === 'Intermediate' ? "bg-amber-50 text-amber-600 border-amber-100" :
                 "bg-red-50 text-red-600 border-red-100"
               )}>
                 {proj.difficulty}
               </span>
            </div>

            <h3 className="text-xl font-bold text-[#1F2937] mb-3 leading-tight group-hover:text-[#4F46E5] transition-colors">{proj.title}</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-8 flex-grow opacity-80">{proj.description}</p>
            
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {proj.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold text-[#4F46E5] border border-[#EEF2FF] px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <button className="w-full py-4 bg-white border border-[#E5E7EB] text-[#1F2937] rounded-[16px] font-bold text-xs hover:bg-[#1F2937] hover:text-white transition-all shadow-sm hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                 Start Building <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
