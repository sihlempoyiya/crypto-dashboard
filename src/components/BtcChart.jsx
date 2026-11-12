function BtcChart() {
  return (
    <div className="bg-white rounded-2xl p-5 flex-1">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold text-[14px] text-[#1A1A1A]">BTC Prices</h3>
        <span className="text-gray-300 tracking-widest">•••</span>
      </div>

      <p className="text-[10px] text-gray-400 mb-1">8000</p>

      
      <svg viewBox="0 0 300 110" className="w-full h-[105px]">
        <path
          d="M0,60 C30,20 50,80 80,55 C110,30 130,90 160,65 C190,40 210,95 240,60 C270,25 290,70 300,50"
          fill="none"
          stroke="#5B5BD6"
          strokeWidth="2"
        />
        <line x1="160" y1="65" x2="160" y2="110" stroke="#C7D2FE" strokeWidth="30" opacity="0.4" />
        <circle cx="160" cy="65" r="5" fill="#5B5BD6" />
        <circle cx="160" cy="65" r="9" fill="none" stroke="#5B5BD6" strokeOpacity="0.3" strokeWidth="2" />
      </svg>

     
      <div className="flex justify-center -mt-12 mb-2 relative z-10">
        <span className="bg-[#5B5BD6] text-white text-[10px] px-2 py-1 rounded-md">$25,240</span>
      </div>

      <div className="flex justify-between text-[10px] text-gray-400 mt-7">
        <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
      </div>
    </div>
  )
}

export default BtcChart