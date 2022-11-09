import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { useUserManager } from 'hooks/useUserManager'

import { Home, Rules, Maps, MapView, FinalLottery, WeeklyLottery } from 'pages'

const App = () => {
  useUserManager()

  return (
    <Router>
      <Routes>
        <Route path={PATHS.HOME} exact element={<Home />} />
        <Route path={PATHS.RULES} element={<Rules />} />
        <Route path={PATHS.MAPS} element={<Maps />} />
        <Route path={PATHS.MAP_VIEW} element={<MapView />} />
        <Route path={PATHS.FINAL_LOTTERY} element={<FinalLottery />} />
        <Route path={PATHS.WEEKLY_LOTTERY} element={<WeeklyLottery />} />
      </Routes>
    </Router>
  )
}

export default App
