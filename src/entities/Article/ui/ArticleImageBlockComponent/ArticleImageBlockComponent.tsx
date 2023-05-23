import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextAlign, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <div className={cls.imgBlock}>
          <img src={block.src} alt={block.title} className={cls.img} />
        </div>
        {block.title && (
          <ToggleFeatures
            feature='isAppRedesigned'
            on={<Text text={block.title} align={TextAlign.CENTER} />}
            off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
          />
        )}
      </div>
    );
  },
);
