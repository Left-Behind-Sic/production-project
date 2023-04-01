import { FC, lazy } from 'react';
import { ArticleViewSelectorProps } from './ArticleViewSelector';

export const ArticleViewSelectorAsync = lazy<FC<ArticleViewSelectorProps>>(
  () => import('./ArticleViewSelector'),
);
