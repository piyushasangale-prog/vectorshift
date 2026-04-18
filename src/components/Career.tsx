import { motion } from 'motion/react';
import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  Target, 
  Zap, 
  TrendingUp, 
  Lightbulb, 
  ChevronRight, 
  BarChart as ChartIcon,
  Code,
  Database,
  Cloud,
  Briefcase
} from 'lucide-react';
import { cn } from '../lib/utils';

const CAREERS = [
  { id: 'swe', title: 'Software Engineer', industry: 'Technology', icon: Code, salary: '$120k+', trending: true },
  { id: 'ds', title: 'Data Scientist', industry: 'AI & Data', icon: Database, salary: '$135k+', trending: true },
  { id: 'pm', title: 'Product Manager', industry: 'Business/Tech', icon: Lightbulb, salary: '$115k+', trending: false },
  { id: 'it', title: 'IT Architect', industry: 'Cloud Infrastructure', icon: Cloud, salary: '$140k+', trending: false },
];

export default function Career() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-[28px] font-bold tracking-tight text-[#1F2937]">Career Discovery</h1>
          <p className="text-[#6B7280] text-sm text-sm">Find the perfect path for your future.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recommendation Engine */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="card bg-white border border-[#E5E7EB] rounded-[12px] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col items-center text-center cursor-pointer"
        >
            <div className="p-4 bg-[#EEF2FF] rounded-full mb-6 text-[#4F46E5]">
              <Sparkles size={32} />
            </div>
            <h2 className="text-xl font-bold mb-4 text-[#1F2937]">Ready for a personalized plan?</h2>
            <p className="text-sm text-[#6B7280] mb-8 max-w-sm">Our AI analyzes your test scores and project performance to suggest the best career roles.</p>
            <button 
              onClick={startAnalysis}
              disabled={isAnalyzing}
              className={cn(
                "w-full py-3 bg-[#4F46E5] text-white rounded-[8px] font-semibold text-sm transition-all shadow-[0_4px_12px_rgba(79,70,229,0.25)]",
                isAnalyzing ? "opacity-70 cursor-not-allowed" : "hover:bg-[#4338CA]"
              )}
            >
              {isAnalyzing ? "Analyzing Potential..." : "Get Recommendation"}
            </button>
        </motion.div>

        {/* Market List */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="card bg-white border border-[#E5E7EB] rounded-[12px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] cursor-pointer"
        >
           <h3 className="text-base font-bold text-[#1F2937] mb-6">Trending Paths</h3>
           <div className="space-y-4">
              {CAREERS.map((career, idx) => (
                <motion.div 
                  key={career.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 py-3 border-b border-[#F3F4F6] last:border-0 hover:bg-[#F9FAFB] px-2 rounded-lg transition-all cursor-pointer group"
                >
                   <div className="w-8 h-8 rounded-lg bg-[#F3F4F6] flex items-center justify-center text-[#4F46E5] group-hover:bg-[#EEF2FF] transition-colors">
                      <career.icon size={16} />
                   </div>
                   <div className="flex-1">
                      <p className="text-sm font-bold text-[#1F2937]">{career.title}</p>
                      <p className="text-[11px] text-[#6B7280] uppercase tracking-wider font-semibold">{career.industry}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-sm font-bold text-[#4F46E5]">{career.salary}</p>
                      <ChevronRight size={14} className="ml-auto text-[#D1D5DB] group-hover:text-[#4F46E5]" />
                   </div>
                </motion.div>
              ))}
           </div>
           <button className="w-full mt-6 py-2.5 border border-[#E5E7EB] text-[#1F2937] rounded-[8px] font-semibold text-xs hover:bg-[#F9FAFB] transition-all">
             Explore All Careers
           </button>
        </motion.div>
      </div>
    </div>
  );
}

function InsightCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 bg-white border border-gray-100 rounded-[40px] hover:shadow-2xl transition-all group cursor-pointer">
       <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
         {icon}
       </div>
       <h4 className="font-black text-lg mb-3 uppercase tracking-tighter tracking-tight group-hover:text-indigo-600 transition-colors">{title}</h4>
       <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
       <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-500">
         Explore Service <ChevronRight size={14} />
       </div>
    </div>
  );
}
