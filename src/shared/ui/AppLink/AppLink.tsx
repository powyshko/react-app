import { FC } from "react";
import { classNames } from "@shared/lib";
import cls from "./AppLink.module.css";
import { Link, LinkProps } from "react-router-dom";

export const enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY
   } = props;

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className || "", cls[theme]])}>
      { children }
    </Link>
  )
}