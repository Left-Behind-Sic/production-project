import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
  const { onChangeSearch, search, onChangeType, type, onChangeSort, sort, onChangeOrder, order } =
    useArticleFilters();
  return (
    <ArticlesFilters
      type={type}
      onChangeSearch={onChangeSearch}
      search={search}
      onChangeOrder={onChangeOrder}
      onChangeType={onChangeType}
      order={order}
      onChangeSort={onChangeSort}
      sort={sort}
      className={className}
    />
  );
});
