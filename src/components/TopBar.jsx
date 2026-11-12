function TopBar() {
  return (
    <div className="flex items-center justify-between mb-6">
      
      <div className="flex items-center bg-white rounded-full pl-4 pr-3 py-2.5 w-[340px]">
        <span className="text-gray-400 mr-2 text-[14px]">🔍</span>
        <input
          className="outline-none text-[13px] w-full text-gray-700 placeholder:text-gray-400 bg-transparent"
          placeholder="Search type of keywords"
        />
        <span className="text-gray-300 text-[14px] ml-2">◎</span>
      </div>

     
      <div className="flex items-center gap-3">
        <button className="relative bg-white w-10 h-10 rounded-full flex items-center justify-center text-[16px]">
          🔔
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </button>
        <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-[16px]">
          ⚙
        </button>
        <div className="flex items-center gap-2 ml-1">
          <div className="w-10 h-10 bg-[#D9D9E5] rounded-full flex items-center justify-center text-[14px] font-semibold text-gray-600">
            L
          </div>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-[#1A1A1A]">Laurice</p>
            <p className="text-[11px] text-gray-400">@laurice22</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar