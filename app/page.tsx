"use client";

import { Activity, Filter, Download, Wallet, Coins, ArrowUpRight, ArrowDownRight, BarChart3 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Pie, PieChart as RePieChart, Cell, BarChart, Bar } from 'recharts';
import Image from "next/image";

// --- 1. DATA: Deriverse Ecosystem (Spot, Perps, Options) ---
const pnlData = [
  { name: 'Jan 15', val: 2000 }, { name: 'Jan 18', val: 3500 },
  { name: 'Jan 21', val: 3000 }, { name: 'Jan 24', val: 4500 },
  { name: 'Jan 27', val: 5200 }, { name: 'Jan 30', val: 7500 },
  { name: 'Feb 02', val: 8200 }, { name: 'Feb 05', val: 7800 },
  { name: 'Feb 08', val: 9500 }, { name: 'Feb 11', val: 11000 },
  { name: 'Feb 14', val: 10500 }, { name: 'Feb 17', val: 13000 },
  { name: 'Feb 20', val: 14200 }, { name: 'Feb 23', val: 13900 },
  { name: 'Mar 01', val: 18000 },
];

const ecosystemData = [
  { name: 'Perps', value: 55, color: '#10B981' }, 
  { name: 'Spot', value: 30, color: '#3B82F6' },
  { name: 'Options', value: 15, color: '#F59E0B' },
];

// Generate static activity data for 24 hours
const sessionData = Array.from({ length: 24 }, (_, i) => {
  // Simulate "Golden Hours" (8am-11am & 1pm-4pm are busy)
  const isBusy = (i >= 8 && i <= 11) || (i >= 13 && i <= 16);
  const base = isBusy ? 70 : 20;
  return {
    hour: `${i}:00`,
    activity: Math.floor(Math.random() * (100 - base) + base), // Random activity 0-100
  };
});

const trades = [
  { symbol: "SOL-PERP", pnl: "+$1245.80", time: "2m ago", isWin: true, type: "Perp ⚡" },
  { symbol: "JUP/USDC", pnl: "+$340.25", time: "15m ago", isWin: true, type: "Spot 🔄" },
  { symbol: "BTC-28MAR-C", pnl: "-$892.50", time: "1h ago", isWin: false, type: "Option 🎯" },
  { symbol: "DRVS-PERP", pnl: "+$456.30", time: "3h ago", isWin: true, type: "Perp ⚡" },
];

const journalEntries = [
  { date: "2026-02-02 14:32", symbol: "SOL-PERP", type: "Perp", side: "Long", entry: "$142.50", exit: "$148.90", fees: "$12.35", pnl: "+$1,245.80", status: "Win" },
  { date: "2026-02-02 10:15", symbol: "BTC-28MAR-100k-C", type: "Option", side: "Buy", entry: "$3,420", exit: "$3,100", fees: "$8.90", pnl: "-$320.00", status: "Loss" },
  { date: "2026-02-02 08:45", symbol: "JUP/USDC", type: "Spot", side: "Buy", entry: "$0.95", exit: "$1.02", fees: "$6.20", pnl: "+$892.50", status: "Win" },
  { date: "2026-02-01 22:30", symbol: "AVAX-PERP", type: "Perp", side: "Long", entry: "$38.20", exit: "$39.85", fees: "$4.15", pnl: "+$456.30", status: "Win" },
  { date: "2026-02-01 18:20", symbol: "DRVS/USDC", type: "Spot", side: "Buy", entry: "$0.45", exit: "$0.48", fees: "$2.40", pnl: "+$123.75", status: "Win" },
  { date: "2026-02-01 15:10", symbol: "ETH/USDC", type: "Spot", side: "Sell", entry: "$2800", exit: "$2750", fees: "$3.80", pnl: "+$678.90", status: "Win" },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background text-text p-6 lg:p-8 font-sans">
      
      {/* HEADER */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            {/* Custom Logo Image */}
            <div className="relative w-10 h-10">
              <Image 
                src="/logo.png" 
                alt="Deriverse Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            Deriverse
          </h1>
          <div className="flex items-center gap-2 mt-1">
             <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
             <p className="text-muted text-sm font-medium">Solana Mainnet • Connected</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {/* DRVS Rewards */}
          <div className="group relative">
            <div className="flex items-center gap-2 bg-surface/50 border border-border/50 px-3 py-2 rounded-lg text-sm text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:scale-105 cursor-pointer">
              <Coins size={16} />
              <span className="font-bold">1,250 DRVS</span>
              <span className="text-xs text-muted">($412)</span>
            </div>
            {/* Tooltip */}
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-max bg-gray-900 border border-white/10 text-white text-[10px] font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
              Pending Ecosystem Rewards
            </div>
          </div>

          {/* Wallet Button*/}
          <div className="group relative">
            <button className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] text-white">
              <Wallet size={16} className="group-hover:text-primary transition-colors duration-300" />
              7Xw...9z2
            </button>
            {/* Tooltip */}
            <div className="absolute top-full mt-2 right-0 w-max bg-gray-900 border border-white/10 text-white text-[10px] font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
              Connect Wallet
            </div>
          </div>
        </div>
      </header>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
            label="Total Volume" 
            value="$2.4M" 
            sub="30d Volume" 
            isGreen 
            icon={<BarChart3 size={18} className="text-primary"/>} 
        />
        <StatCard 
            label="Win Rate" 
            value="68%" 
            sub="Avg Win: $450 / Loss: $120" 
            isGreen 
            icon={<Activity size={18} className="text-primary"/>} 
        />
        <StatCard 
            label="Avg Hold Time" 
            value="4h 12m" 
            sub="Intraday Focus" 
            isGreen={false} 
        />
        <StatCard 
            label="Net PnL" 
            value="+$17,890" 
            sub="Best Trade: +$2,450 (SOL)" 
            isGreen 
        />
      </div>

      {/* CHARTS ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main PnL Chart */}
        <div className="lg:col-span-2 bg-surface rounded-xl border border-border p-6 h-[400px]">
          <h3 className="font-semibold mb-6 text-white flex items-center gap-2">
            Cumulative PnL (SOL)
          </h3>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={pnlData}>
              <defs>
                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A3441" vertical={false} />
              <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val/1000}k`} />
              <Tooltip contentStyle={{ backgroundColor: '#151C24', borderColor: '#2A3441', color: '#fff' }} itemStyle={{ color: '#10B981' }}/>
              <Area type="monotone" dataKey="val" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* COMPREHENSIVE ASSET & BIAS CARD */}
        <div className="bg-surface rounded-xl border border-border p-6 h-[400px] flex flex-col relative">
          <h3 className="font-semibold mb-2 text-white">Portfolio Composition</h3>
          
          {/* 1. Ecosystem Allocation */}
          <div className="flex-1 min-h-[180px] relative">
             <ResponsiveContainer width="100%" height="100%">
               <RePieChart>
                 <Pie data={ecosystemData} innerRadius={55} outerRadius={75} paddingAngle={5} dataKey="value" stroke="none">
                   {ecosystemData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
               </RePieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col">
                <span className="text-2xl font-bold text-white">55%</span>
                <span className="text-[10px] text-muted uppercase">Perps</span>
             </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center gap-4 text-xs mb-6">
             <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#10B981]"></div> Perps</div>
             <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div> Spot</div>
             <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div> Options</div>
          </div>

          {/* 2. Long/Short Bias */}
          <div className="pt-4 border-t border-border">
             <div className="flex justify-between text-xs mb-2">
                <span className="text-green-500 font-medium">Long (65%)</span>
                <span className="text-red-500 font-medium">Short (35%)</span>
             </div>
             <div className="w-full h-2 bg-red-500/20 rounded-full overflow-hidden flex">
                <div className="h-full bg-green-500 w-[65%]"></div>
                <div className="h-full bg-red-500 w-[35%]"></div>
             </div>
             <div className="mt-2 text-center">
                <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded border border-green-500/20">
                   Bullish Bias
                </span>
             </div>
          </div>
        </div>
      </div>

      {/* HEATMAP & RECENT TRADES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
         {/* Time of Day Heatmap (FIXED HYDRATION ERROR) */}
         <div className="lg:col-span-2 bg-surface rounded-xl border border-border p-6 h-[320px] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-white">Session Performance</h3>
              <div className="flex items-center gap-2 text-xs font-medium">
                 <span className="text-muted">Low</span>
                 {/* Gradient Legend Line */}
                 <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-emerald-900/20 to-emerald-500"></div>
                 <span className="text-primary">High</span>
              </div>
            </div>

            {/* Recharts Activity Bar Graph */}
            <div className="flex-1 w-full min-h-0">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={sessionData}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2A3441" />
                   <XAxis 
                      dataKey="hour" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#6b7280', fontSize: 10 }}
                      interval={3} 
                   />
                   <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#151C24', borderColor: '#2A3441', color: '#fff' }}
                   />
                   <Bar dataKey="activity" radius={[4, 4, 0, 0]}>
                      {sessionData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={`rgba(16, 185, 129, ${0.3 + (entry.activity / 150)})`} // Dynamic Opacity
                        />
                      ))}
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Recent Trades List */}
         <div className="bg-surface rounded-xl border border-border p-6 h-[320px] overflow-hidden flex flex-col">
            <h3 className="font-semibold mb-4 text-white flex justify-between items-center">
                Live Feed 
                <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full animate-pulse">● Live</span>
            </h3>
            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
               {trades.map((trade, i) => (
                   <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-gray-600 transition-colors cursor-pointer group">
                     <div>
                       <div className="font-bold text-sm text-white flex items-center gap-2">
                         {trade.symbol}
                         <span className="text-[10px] bg-gray-700 px-1.5 rounded text-gray-300 font-normal">{trade.type}</span>
                       </div>
                       <div className="text-xs text-muted">{trade.time}</div>
                     </div>
                     <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-bold ${trade.isWin ? 'bg-primary/10 text-primary' : 'bg-danger/10 text-danger'}`}>
                       {trade.isWin ? <ArrowUpRight size={12}/> : <ArrowDownRight size={12}/>}
                       {trade.pnl}
                     </div>
                   </div>
               ))}
            </div>
         </div>
      </div>

      {/* JOURNAL TABLE */}
      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h3 className="font-semibold text-lg text-white">Unified Trading Journal</h3>
          <div className="flex gap-3">
             <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted hover:text-white transition bg-background/50 rounded-lg"><Filter size={16}/> Filter</button>
             <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted hover:text-white transition bg-background/50 rounded-lg"><Download size={16}/> Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-background/50 text-muted uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Instrument</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Side</th>
                <th className="px-6 py-4 font-medium">Entry</th>
                <th className="px-6 py-4 font-medium">Exit</th>
                <th className="px-6 py-4 font-medium">Fees</th>
                <th className="px-6 py-4 font-medium text-right">Net PnL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {journalEntries.map((trade, i) => (
                <tr key={i} className="hover:bg-background/50 transition-colors group">
                  <td className="px-6 py-4 text-gray-300">{trade.date}</td>
                  <td className="px-6 py-4 font-medium text-white group-hover:text-primary transition-colors">{trade.symbol}</td>
                  <td className="px-6 py-4 text-xs text-muted">{trade.type}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${trade.side === 'Long' || trade.side === 'Buy' ? 'bg-primary/20 text-primary' : 'bg-danger/20 text-danger'}`}>
                      {trade.side}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{trade.entry}</td>
                  <td className="px-6 py-4 text-gray-300">{trade.exit}</td>
                  <td className="px-6 py-4 text-gray-400">{trade.fees}</td>
                  <td className={`px-6 py-4 text-right font-bold ${trade.status === 'Win' ? 'text-primary' : 'text-danger'}`}>
                    {trade.pnl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

// --- HELPER COMPONENT ---
function StatCard({ label, value, sub, isGreen, icon }: any) {
  const subColor = isGreen === true ? 'text-primary' : isGreen === false ? 'text-danger' : 'text-muted';
  return (
    <div className="bg-surface rounded-xl border border-border p-6 flex flex-col justify-between h-[140px] hover:border-gray-600 transition-colors">
      <div className="text-muted text-sm font-medium flex justify-between items-start">
        {label}
        {icon || <Activity size={18} className="opacity-0" />}
      </div>
      <div>
        <div className="text-3xl font-bold text-white mb-1 tracking-tight">{value}</div>
        <div className={`text-xs font-medium ${subColor}`}>{sub}</div>
      </div>
    </div>
  );
}