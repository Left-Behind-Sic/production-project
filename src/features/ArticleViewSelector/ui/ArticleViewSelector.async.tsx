import { FC, lazy } from 'react';
import { ArticleViewSelectorProps } from './ArticleViewSelector';

export const ArticleViewSelectorAsync = lazy<FC<ArticleViewSelectorProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleViewSelector')), 400);
    }),
);
