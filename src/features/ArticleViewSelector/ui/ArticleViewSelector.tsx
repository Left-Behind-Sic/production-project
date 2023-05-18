import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';

import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      off: () => TiledIconDeprecated,
      on: () => TiledIcon,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      off: () => ListIconDeprecated,
      on: () => ListIcon,
    }),
  },
];

const ArticleViewSelector = memo(({ className, onViewClick, view }: ArticleViewSelectorProps) => {
  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card
          border='roundBorder'
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])}
        >
          <HStack gap='8'>
            {viewTypes.map((viewType, index) => (
              <Icon
                clickable
                onClick={() => onViewClick?.(viewType.view)}
                Svg={viewType.icon}
                className={classNames('', { [cls.notSelected]: viewType.view !== view })}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map((viewType, index) => (
            <ButtonDeprecated
              key={index}
              theme={ButtonTheme.CLEAR}
              onClick={() => onViewClick?.(viewType.view)}
            >
              <IconDeprecated
                Svg={viewType.icon}
                className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                width={24}
                height={24}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});

export default ArticleViewSelector;
