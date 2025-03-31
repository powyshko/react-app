import { classNames } from "@shared/lib"
import cls from "./Navbar.module.css"
import { AppLink, AppLinkTheme } from "@shared/ui/AppLink/AppLink";

export interface NavbarProps {
  className?: string;
}

export const NavBar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className || ""])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
           Главная
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to={'./about'}>
          О Сайте
        </AppLink>
      </div>
    </div>
  )
}