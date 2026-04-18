import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle, Zap, ChevronRight } from 'lucide-react';
import { Section } from '../types';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="space-y-12 pb-10">
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280]">Batch 2024-28 Enrollment Open</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] md:text-[64px] font-display font-bold leading-[0.95] tracking-tight text-[#1F2937] mb-8"
          >
            Bridge the <span className="text-[#4F46E5] italic">Gap</span> between <br className="hidden md:block" />
            Studies and <span className="text-[#10B981]">Success</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={() => onNavigate('career')}
              className="px-8 py-4 bg-[#4F46E5] text-white rounded-[12px] font-bold text-base shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:bg-[#4338CA] hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              Get Started <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => onNavigate('roadmap')}
              className="px-8 py-4 bg-white border border-[#E5E7EB] text-[#1F2937] rounded-[12px] font-bold text-base hover:bg-[#F9FAFB] hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              <Play size={16} fill="currentColor" /> Watch Demo
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="hidden lg:block w-[320px] glass-card p-6 rotate-3 hover:rotate-0 transition-transform duration-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
               <Zap size={20} />
            </div>
            <div>
               <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">Quick Insight</p>
               <h4 className="text-sm font-bold">Skill Gap Identified</h4>
            </div>
          </div>
          <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
            Your technical aptitude is high, but project documentation needs focus.
          </p>
          <div className="space-y-3">
             <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  className="h-full bg-indigo-600"
                />
             </div>
             <p className="text-[10px] font-bold text-right text-indigo-400">NEXT: SYSTEM DESIGN</p>
          </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-4 border-y border-[#E5E7EB]/50 overflow-hidden bg-white/30">
        <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">Google</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">Amazon</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">Microsoft</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">Atlassian</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">Oracle</span>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard 
          title="Learning Roadmap" 
          desc="Bridge the gap between your exams and placement readiness."
          icon={<RoadmapIcon className="text-[#4F46E5]" />}
          delay={0.1}
        />
        <FeatureCard 
          title="Placement Prep" 
          desc="Master coding and aptitude for top product companies."
          icon={<CheckCircle className="text-[#10B981]" />}
          delay={0.2}
        />
        <FeatureCard 
          title="Smart Planner" 
          desc="Balance your exam prep and skill building efficiently."
          icon={<TimerIcon className="text-[#F59E0B]" />}
          delay={0.3}
        />
      </section>

      {/* Progress Section Styled like a Card in the Theme */}
      <motion.section 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.01 }}
        className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] cursor-pointer"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-lg font-bold mb-2 text-[#1F2937]">Industry-Ready Score</h3>
            <p className="text-[#6B7280] text-sm mb-6">Your current progress across various modules helps you identify weak spots.</p>
            <button 
              onClick={() => onNavigate('projects')}
              className="px-5 py-2.5 border border-[#E5E7EB] text-[#1F2937] rounded-[8px] font-semibold text-xs hover:bg-[#F9FAFB] transition-colors"
            >
              Track Detailed Growth
            </button>
          </div>
          <div className="w-full md:w-[280px]">
             <div className="text-center mb-4">
                <span className="text-[48px] font-extrabold text-[#4F46E5]">68%</span>
             </div>
             <div className="space-y-4">
                <ProgressRow label="Exams Readiness" progress={85} color="bg-[#10B981]" />
                <ProgressRow label="Placement Readiness" progress={52} color="bg-[#F59E0B]" />
             </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function FeatureCard({ title, desc, icon, delay = 0 }: { title: string, desc: string, icon: React.ReactNode, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      className="p-6 bg-white border border-[#E5E7EB] rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col items-start h-full cursor-pointer hover:border-[#4F46E5]/30 transition-colors"
    >
      <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center mb-4 transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-bold mb-2 text-[#1F2937]">{title}</h3>
      <p className="text-[#6B7280] text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ProgressRow({ label, progress, color }: { label: string, progress: number, color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-bold">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn("h-full rounded-full", color)} 
        />
      </div>
    </div>
  );
}

import { Map as RoadmapIcon, Timer as TimerIcon } from 'lucide-react';
import { cn } from '../lib/utils';
