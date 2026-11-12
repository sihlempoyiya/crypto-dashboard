import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import StatCard from './components/StatCard'
import BtcChart from './components/BtcChart'
import LiveMarket from './components/LiveMarket'
import Transactions from './components/Transactions'

function App() {
  return (
    <div className="min-h-screen bg-white p-4 flex gap-4">
      <Sidebar active="Overview" />
      <div className="flex-1 min-w-0 bg-white">
        <TopBar />
        <div className="flex gap-4 mb-6">
          <div className="grid grid-cols-2 gap-4 w-[52%]">
            <StatCard name="Bitcoin" symbol="BTC" price="$40,291" change="+0.25%" positive={true} color="#F59E0B" icon="₿" />
            <StatCard name="Ethereum" symbol="ETH" price="$18,291" change="+0.25%" positive={true} color="#6366F1" icon="◆" />
            <StatCard name="Litecoin" symbol="LTC" price="$8,291" change="+0.25%" positive={true} color="#2563EB" icon="Ł" />
            <StatCard name="Cardano" symbol="ADA" price="$3,291" change="-2.05%" positive={false} color="#22C55E" icon="✦" selected={true} />
          </div>
          <BtcChart />
        </div>
        <div className="flex gap-10 px-1">
          <LiveMarket />
          <Transactions />
        </div>
      </div>
    </div>
  )
}
export default App