import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [className])}>
      {t('Доступ запрещен')}
      {t('Доступ запрещен')}
    </Page>
  );
};

export default memo(ForbiddenPage);
