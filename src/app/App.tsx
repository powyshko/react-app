import { useTheme } from "@app/providers/ThemeProvider"
import { classNames } from "@shared/lib"
import { AppRouter } from "./providers/router";
import { NavBar } from "@widgets/navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />

      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <AppRouter />
    </div>
  )
}

export default App
