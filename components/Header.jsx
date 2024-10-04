import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const Header = () => {
  const [isDark, setIsDark] = useTheme()

  return (
    <header className={`header-container ${isDark ? 'dark' : ''}`}>
      <div className='header-content'>
        <h2 className='title'>
          <Link href='/'>Where in the world?</Link>
        </h2>
        <p
          className='theme-changer'
          onClick={() => {
            setIsDark(!isDark)
            localStorage.setItem('isDarkMode', !isDark)
          }}>
          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`} />
          &nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  )
}

export default Header
