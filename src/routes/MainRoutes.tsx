import { Navigate, Route, Routes } from 'react-router-dom'
import { Without, WithPlayer } from '../components'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/without' />} />
      <Route path='/without' element={<Without />} />
      <Route path='/with-player' element={<WithPlayer />} />
    </Routes>
  )
}

export default MainRoutes
