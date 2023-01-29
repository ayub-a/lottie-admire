import { Nav } from './components'
import { MainRoutes } from './routes'
import st from './styles/lottie.module.css'

function App() {
  return (
    <div className={st.container}>
      <Nav />
      <MainRoutes />
    </div>
  )
}

export default App
