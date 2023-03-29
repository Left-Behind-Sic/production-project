import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((_, index) => (
    <ArticleListItemSkeleton
      key={index}
      view={view}
    />
  ));
};

export const ArticleList = memo(
  ({ className, articles, view = ArticleView.SMALL, isLoading }: ArticleListProps) => {
    const { t } = useTranslation();

    const renderArticle = (article: Article) => {
      return (
        <ArticleListItem
          article={article}
          view={view}
          className={cls.card}
          key={article.id}
        />
      );
    };

    if (!isLoading && !articles.length) {
      return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          <Text
            size={TextSize.L}
            title={t('Статьи не найдены')}
          />
        </div>
      );
    }

    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles.length ? articles.map(renderArticle) : null}
        {isLoading && getSkeletons(view)}
      </div>
    );
  },
);
