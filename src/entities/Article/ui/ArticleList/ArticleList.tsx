import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);
};

export const ArticleList = memo(
  ({ className, articles, view = ArticleView.SMALL, isLoading, target }: ArticleListProps) => {
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
      return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          <Text size={TextSize.L} title={t('Статьи не найдены')} />
        </div>
      );
    }

    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <HStack
            wrap='wrap'
            gap='16'
            data-testid='ArticleList'
            className={classNames(cls.ArticleListRedesigned, {}, [])}
          >
            {articles.map((article: Article) => {
              return (
                <ArticleListItem
                  article={article}
                  view={view}
                  className={cls.card}
                  key={article.id}
                  target={target}
                />
              );
            })}
            {isLoading && getSkeletons(view)}
          </HStack>
        }
        off={
          <div
            data-testid='ArticleList'
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          >
            {articles.map((article: Article) => {
              return (
                <ArticleListItem
                  article={article}
                  view={view}
                  className={cls.card}
                  key={article.id}
                  target={target}
                />
              );
            })}
            {isLoading && getSkeletons(view)}
          </div>
        }
      />
    );
  },
);
