import { Suspense } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { useTheme } from "@app/providers/ThemeProvider"
import { AboutPageAsync } from "@pages/AboutPage"
import { MainPageAsync } from "@pages/MainPage"
import { classNames } from "@shared/lib"

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={'/'}> Главная </Link>
      <Link to={'./about'}> О Сайте </Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
