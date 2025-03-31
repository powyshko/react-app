import { Link } from "react-router-dom"
import { useTheme } from "@app/providers/ThemeProvider"
import { classNames } from "@shared/lib"
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={'/'}> Главная </Link>
      <Link to={'./about'}> О Сайте </Link>

      <AppRouter />
    </div>
  )
}

export default App
