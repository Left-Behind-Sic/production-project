import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo(
  ({
    className,
    sort,
    onChangeSort,
    onChangeOrder,
    onChangeType,
    order,
    onChangeSearch,
    search,
    type,
  }: ArticlesFiltersProps) => {
    const { t } = useTranslation();

    return (
      <Card className={classNames(cls.ArticlesFilters, {}, [className])} padding='24'>
        <VStack gap='32'>
          <Input
            placeholder={t('Поиск')}
            value={search}
            size='s'
            onChange={onChangeSearch}
            addonLeft={<Icon Svg={SearchIcon} />}
          />
          <ArticleTypeTabs className={cls.tabs} onChangeType={onChangeType} value={type} />
          <ArticleSortSelector
            sort={sort}
            order={order}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
        </VStack>
      </Card>
    );
  },
);
