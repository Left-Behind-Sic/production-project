import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >

        {t('Войти')}

      </Button>
      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line i18next/no-literal-string,max-len */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi, consequatur cum distinctio excepturi necessitatibus pariatur provident quasi recusandae voluptatibus. A accusamus accusantium alias aliquid beatae cumque dolor dolorem dolores earum ex excepturi harum illum inventore ipsa itaque laudantium maiores minus nemo non obcaecati, perspiciatis porro praesentium qui quibusdam quis quisquam quo recusandae rem sequi sint suscipit velit voluptate voluptates. Assumenda beatae eaque est impedit iusto laudantium nulla reprehenderit tempora. A aliquam deserunt eos fugiat, hic laborum libero veritatis voluptate. Dolores quidem recusandae velit veniam voluptatem? A aspernatur assumenda commodi cupiditate delectus esse exercitationem harum, illum labore neque provident sequi!
      </Modal>
    </div>
  );
};

export default Navbar;
