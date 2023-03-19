import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo(({ className, border, height, width }: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    />
  );
});
