function StatCard({ name, symbol, price, change, positive, color, icon, selected }) {
  return (
    <div className={`bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] ${selected ? 'border border-[#E5E7EB]' : ''}`}>
      <div className="flex justify-between items-start mb-6">
        <span className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-white text-[18px] font-bold" style={{ background: color }}>{icon}</span>
        <span className={`text-[11px] font-medium ${positive ? 'text-[#22C55E]' : 'text-[#FB923C]'}`}>{positive ? '▲' : '▼'} {change}</span>
      </div>
      <p className="text-[20px] font-bold text-black leading-none mb-1.5">{price}</p>
      <p className="text-[11px] text-[#A0A0A8]">{name} - {symbol}</p>
    </div>
  )
}
export default StatCard