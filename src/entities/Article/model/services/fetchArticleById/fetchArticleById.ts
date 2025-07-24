import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

const fetchUrl = (url: string, options: RequestInit, attempts = 5) =>
  Promise.resolve()
    .then(() => fetch(url, options))
    // eslint-disable-next-line no-plusplus
    .catch((ex) => (attempts-- ? fetchUrl(url, options, attempts) : Promise.reject(ex)));

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      if (!articleId) {
        throw new Error('');
      }
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
