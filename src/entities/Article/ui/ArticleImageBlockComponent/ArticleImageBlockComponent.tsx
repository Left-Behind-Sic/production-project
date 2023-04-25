import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextAlign, Text } from '@/shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

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
          <img
            src={block.src}
            alt={block.title}
            className={cls.img}
          />
        </div>
        {block.title && (
          <Text
            text={block.title}
            align={TextAlign.CENTER}
          />
        )}
      </div>
    );
  },
);
