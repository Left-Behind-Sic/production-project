import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesInited = (state: StateSchema) => state.articlesPage?._inited;
