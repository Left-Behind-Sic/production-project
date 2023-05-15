import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LangSwitcher } from '@/features/LangSwitcher';
import { VStack } from '@/shared/ui/deprecated/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <aside
          data-testid='sidebar'
          className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [className])}
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
        <aside
          data-testid='sidebar'
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
          <Button
            data-testid='sidebar-toggle'
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            size={ButtonSize.L}
            square
          >
            {collapsed ? '>' : '<'}
          </Button>
          <VStack role='navigation' gap='8' className={cls.items}>
            {sidebarItemsList.map((item) => (
              <SidebarItem key={item.path} item={item} collapsed={collapsed} />
            ))}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
        </aside>
      }
    />
  );
});
