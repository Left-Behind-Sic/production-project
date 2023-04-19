import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [className])}>
      {t('Админ панель')}
      {t('Админ панель')}
    </Page>
  );
};

export default memo(AdminPanelPage);
