const txs = [
  { coin: 'Ethereum', type: 'Received', amount: '$24,102', time: 'Today, 19:30', symbol: '▲', color: '#22C55E' },
  { coin: 'Bitcoin', type: 'Buy', amount: '$4,157', time: 'Today, 14:32', symbol: '₿', color: '#F59E0B' },
  { coin: 'Bitcoin', type: 'Buy', amount: '$64,784', time: 'Today, 13:50', symbol: '₿', color: '#F59E0B' },
  { coin: 'Litecoin', type: 'Buy', amount: '$14,265', time: 'Today, 09:38', symbol: 'Ł', color: '#2563EB' },
]
function Transactions() {
  return (
    <div className="w-[300px] shrink-0 bg-white">
      <h3 className="font-bold text-[15px] text-black mb-5">Transactions</h3>
      {txs.map((t, i) => (
        <div key={i} className="flex items-center justify-between py-[14px]">
          <div className="flex items-center gap-3">
            <span className="w-[34px] h-[34px] rounded-full bg-white border border-[#EDEDF0] flex items-center justify-center text-[13px] font-bold shrink-0" style={{ color: t.color }}>{t.symbol}</span>
            <div className="leading-tight"><p className="text-[12px] font-semibold text-black">{t.coin}</p><p className="text-[10px] text-[#A0A0A8]">{t.type}</p></div>
          </div>
          <div className="text-right leading-tight"><p className="text-[12px] font-bold text-black">{t.amount}</p><p className="text-[10px] text-[#A0A0A8]">{t.time}</p></div>
        </div>
      ))}
    </div>
  )
}
export default Transactions