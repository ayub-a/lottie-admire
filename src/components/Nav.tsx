import { Link } from 'react-router-dom'
import st from '../styles/lottie.module.css'

const Nav = () => {
  const navLinks = ['without', 'with-player']

  return (
    <div className={st.nav}>
      {navLinks.map((link) => (
        <Link key={link} to={`/${link}`} className={st.nav_item}>
          {link}
        </Link>
      ))}
    </div>
  )
}

export default Nav
