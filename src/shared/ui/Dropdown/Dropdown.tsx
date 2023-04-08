import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import AppLink from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft,
};

export const Dropdown = memo(
  ({ className, trigger, items, direction = 'bottom right' }: DropdownProps) => {
    const { t } = useTranslation();
    const menuClasses = [mapDirectionClass[direction]];
    return (
      <Menu
        as='div'
        className={classNames(cls.Dropdown, {}, [className])}
      >
        <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
        <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
          {items.map((item) => {
            const content = ({ active }: { active: boolean }) => (
              <button
                type='button'
                onClick={item.onClick}
                disabled={item.disabled}
                className={classNames(cls.item, { [cls.active]: active })}
              >
                {item.content}
              </button>
            );

            if (item.href) {
              return (
                <Menu.Item
                  as={AppLink}
                  to={item.href}
                  disabled={item.disabled}
                >
                  {content}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item
                as={Fragment}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    );
  },
);
