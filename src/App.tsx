import { AboutPageAsync } from "@pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "@pages/MainPage/MainPage.async"
import { useTheme } from "@theme/useTheme"
import { Suspense } from "react"
import { Route, Routes, Link } from "react-router-dom"

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
