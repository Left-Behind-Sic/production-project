import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';

const editArticleFormApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    editArticle: build.mutation<void, Article>({
      query: (params) => ({
        url: '/articles',
        method: 'PUT',
        body: params,
      }),
    }),
  }),
});

export const useEditArticle = editArticleFormApi.useEditArticleMutation;
