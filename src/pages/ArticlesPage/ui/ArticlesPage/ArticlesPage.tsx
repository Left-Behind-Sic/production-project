import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  getArticlesError,
  getArticlesIsLoading,
  getArticlesView,
} from '../../model/selectors/articlesPageSelectors';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const view = useSelector(getArticlesView);
  const error = useSelector(getArticlesError);

  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return <div>{t('ERROR')}</div>;
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
