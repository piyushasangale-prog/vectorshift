import { motion } from 'motion/react';
import { Check, Clock, ChevronRight, Star, ArrowUpRight } from 'lucide-react';
import { INITIAL_ROADMAP } from '../constants';
import { cn } from '../lib/utils';

export default function Roadmap() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-[28px] font-bold tracking-tight text-[#1F2937]">Learning Roadmap</h1>
          <p className="text-[#6B7280] text-sm">Follow your personalized learning path.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Timeline Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] cursor-pointer"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-bold text-[#1F2937]">Current Roadmap</h3>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#4F46E5] px-2.5 py-1 rounded-full">Step 4 of 6</span>
          </div>
          
          <p className="text-sm text-[#6B7280] mb-8">Bridging the gap between Semester 6 Exams and Full-Stack Placement readiness.</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <RoadmapNode title="DS & Algo" status="completed" delay={0.1} />
            <RoadmapNode title="DBMS" status="completed" delay={0.2} />
            <RoadmapNode title="React Basics" status="completed" delay={0.3} />
            <RoadmapNode title="System Design" status="active" delay={0.4} />
            <RoadmapNode title="Node.js API" status="pending" delay={0.5} />
            <RoadmapNode title="Mock Prep" status="pending" delay={0.6} />
          </div>

          <div className="flex gap-3 pt-6 border-t border-[#F3F4F6]">
            <button className="px-5 py-2.5 border border-[#E5E7EB] text-[#1F2937] rounded-[8px] font-semibold text-xs hover:bg-[#F9FAFB] transition-colors">View Full Roadmap</button>
            <button className="flex-1 px-5 py-2.5 bg-[#4F46E5] text-white rounded-[8px] font-semibold text-xs hover:bg-[#4338CA] transition-colors">Start Learning</button>
          </div>
        </motion.div>

        {/* Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col cursor-pointer"
        >
          <h3 className="text-base font-bold text-[#1F2937] mb-6">Growth Progress</h3>
          
          <div className="text-center mb-8">
            <span className="text-[48px] font-extrabold text-[#4F46E5]">68%</span>
          </div>

          <div className="space-y-6 flex-grow">
            <ProgressStat label="Exams Readiness" progress={85} color="bg-[#10B981]" />
            <ProgressStat label="Placement Readiness" progress={52} color="bg-[#F59E0B]" />
          </div>

          <button className="w-full mt-10 py-2.5 border border-[#E5E7EB] text-[#1F2937] rounded-[8px] font-semibold text-xs hover:bg-[#F9FAFB] transition-all">
            Track Detailed Growth
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function RoadmapNode({ title, status, delay = 0 }: { title: string, status: 'completed' | 'active' | 'pending', delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        delay 
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={cn(
        "flex-1 h-[60px] rounded-[8px] flex items-center justify-center font-bold text-xs text-center px-2 cursor-pointer transition-all",
        status === 'completed' && "bg-[#10B981] text-white",
        status === 'active' && "bg-[#4F46E5] text-white ring-4 ring-[#EEF2FF]",
        status === 'pending' && "bg-[#F3F4F6] text-[#6B7280]"
      )}
    >
      {title}
    </motion.div>
  );
}

function ProgressStat({ label, progress, color }: { label: string, progress: number, color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-semibold">
        <span className="text-[#6B7280]">{label}</span>
        <span className="text-[#1F2937]">{progress}%</span>
      </div>
      <div className="h-2 w-full bg-[#F3F4F6] rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          className={cn("h-full rounded-full", color)} 
        />
      </div>
    </div>
  );
}

function ResourceLink({ title, label }: { title: string, label: string }) {
  return (
    <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group">
      <span className="text-sm font-bold text-gray-700 group-hover:text-orange-600 transition-colors">{title}</span>
      <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-lg uppercase">{label}</span>
    </a>
  );
}
