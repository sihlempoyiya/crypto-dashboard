const coins = [
  { name: 'Ethereum', pair: 'ETH / USDT', change: '+14.02%', price: '39,766 USD', symbol: '◆', color: '#6366F1', line: '#6366F1' },
  { name: 'Bitcoin', pair: 'BTC / USDT', change: '+4.02%', price: '21,766 USD', symbol: '₿', color: '#F59E0B', line: '#F59E0B' },
  { name: 'Litecoin', pair: 'LTC / USDT', change: '-4.02%', price: '9,766 USD', symbol: 'Ł', color: '#2563EB', line: '#2563EB' },
  { name: 'Cardano', pair: 'ADA / USDT', change: '+0.02%', price: '4,766 USD', symbol: '✦', color: '#22C55E', line: '#22C55E' },
]
function LiveMarket() {
  return (
    <div className="flex-1 bg-white">
      <h3 className="font-bold text-[15px] text-black mb-5">Live Market</h3>
      {coins.map((c) => (
        <div key={c.name} className="flex items-center py-[14px]">
          <div className="flex items-center gap-3 w-[150px]">
            <span className="w-[34px] h-[34px] rounded-full bg-white border border-[#EDEDF0] flex items-center justify-center text-[14px] font-bold shrink-0" style={{ color: c.color }}>{c.symbol}</span>
            <div className="leading-tight"><p className="text-[12px] font-semibold text-black">{c.name}</p><p className="text-[10px] text-[#A0A0A8]">{c.pair}</p></div>
          </div>
          <div className="w-[85px] text-center leading-tight"><p className="text-[9px] text-[#A0A0A8] mb-1">Change</p><p className={`text-[11px] font-medium ${c.change.startsWith('+') ? 'text-[#22C55E]' : 'text-[#FB923C]'}`}>{c.change}</p></div>
          <div className="flex-1 text-right pr-4 leading-tight"><p className="text-[9px] text-[#A0A0A8] mb-1">Price</p><p className="text-[11px] font-medium text-black">{c.price}</p></div>
          <svg width="78" height="24" viewBox="0 0 78 24"><path d="M0,15 C8,7 14,17 22,11 C30,5 38,17 46,9 C54,3 62,13 78,7" fill="none" stroke={c.line} strokeWidth="1.6" strokeLinecap="round" /></svg>
        </div>
      ))}
    </div>
  )
}
export default LiveMarket