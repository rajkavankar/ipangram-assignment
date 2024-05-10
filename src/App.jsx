import Topbar from "./components/Topbar"
import UtcZoneSelector from "./components/UtcZoneSelector"
import WeekSection from "./components/WeekSection"

const App = () => {
  return (
    <div>
      <Topbar />

      <main className='container my-5 space-y-5'>
        <UtcZoneSelector />
        <WeekSection />
      </main>
    </div>
  )
}

export default App
