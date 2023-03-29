import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
  ({ className, sort, order, onChangeSort, onChangeOrder }: ArticleSortSelectorProps) => {
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => {
      return [
        {
          value: 'asc',
          content: t('возрастанию'),
        },
        {
          value: 'desc',
          content: t('убыванию'),
        },
      ];
    }, [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => {
      return [
        {
          value: ArticleSortField.CREATED,
          content: t('дате создания'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('названию'),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('просмотрам'),
        },
      ];
    }, [t]);

    const changeSortHandle = useCallback(
      (newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
      },
      [onChangeSort],
    );

    const changeOrderHandle = useCallback(
      (newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
      },
      [onChangeOrder],
    );

    return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
        <Select<ArticleSortField>
          options={sortFieldOptions}
          label={t('Сортировать ПО')}
          value={sort}
          onChange={onChangeSort}
        />
        <Select
          options={orderOptions}
          label={t('по')}
          value={order}
          onChange={onChangeOrder}
        />
      </div>
    );
  },
);