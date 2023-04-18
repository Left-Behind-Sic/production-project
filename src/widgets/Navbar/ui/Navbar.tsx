import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropdown } from 'features/avatarDropdown';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { NotificationList } from 'entities/Notification';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          theme={TextTheme.INVERTED}
          className={cls.appName}
          title={t('Ulbi tv App')}
        />
        <AppLink
          className={cls.createBtn}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.articles_create}
        >
          {t('Создать статью')}
        </AppLink>
        <HStack
          gap='16'
          className={cls.actions}
        >
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
        {/* <Button */}
        {/*  theme={ButtonTheme.CLEAR_INVERTED} */}
        {/*  className={cls.links} */}
        {/*  onClick={onLogout} */}
        {/* > */}
        {/*  {t('Выйти')} */}
        {/* </Button> */}
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
});

export default Navbar;
