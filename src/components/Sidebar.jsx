function Sidebar({ active }) {
  const items = [
    { label: 'Overview', icon: '▦' },
    { label: 'Chart', icon: '◔' },
    { label: 'Transactions', icon: '⇄' },
    { label: 'Wallet', icon: '◍' },
    { label: 'Mail Box', icon: '✉' },
    { label: 'Setting', icon: '⚙' },
    { label: 'Logout', icon: '↩' },
  ]
  return (
    <div className="w-[200px] bg-[#F7F7F9] rounded-[18px] p-5 flex flex-col shrink-0">
      <div className="flex items-center gap-2 mb-10 px-1">
        <span className="text-[#5B5BD6] text-[24px] font-bold">∞</span>
        <span className="font-bold text-[18px] text-black">CryptX</span>
      </div>
      <div className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = active === item.label
          return (
            <button key={item.label} className={`flex items-center gap-3 px-3 py-[12px] rounded-xl text-[13px] w-full text-left ${isActive ? 'text-[#5B5BD6] font-semibold' : 'text-[#9A9AA3] font-normal'}`}>
              <span className="text-[17px] w-5 text-center leading-none">{item.icon}</span>
              {item.label}
              {isActive && <span className="ml-auto w-[6px] h-[6px] bg-[#5B5BD6] rounded-full"></span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
export default Sidebar