import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/index';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <div className={cls.item}>

          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
            className={cls.item}
          >
            <MainIcon className={cls.icon} />
            <span className={cls.link}>
              {t('Главная страница')}
            </span>
          </AppLink>
        </div>
        <div className={cls.item}>

          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
            className={cls.item}
          >
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>
              {t('О сайте')}
            </span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
