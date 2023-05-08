import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { getArticles } from '../../model/slice/articlesPageSlice';
import {
  getArticlesError,
  getArticlesIsLoading,
  getArticlesView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
  const { t } = useTranslation('article');
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const view = useSelector(getArticlesView);
  const error = useSelector(getArticlesError);

  if (error) {
    return <div>{t('ERROR')}</div>;
  }

  return (
    <ArticleList isLoading={isLoading} view={view} articles={articles} className={className} />
  );
});
