import { AboutPageAsync } from "@pages/AboutPage"
import { MainPageAsync } from "@pages/MainPage"
import { RouteProps } from "react-router-dom"

export const enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  }
}