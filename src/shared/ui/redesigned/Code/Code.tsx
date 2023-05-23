import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button as ButtonDeprecated, ButtonTheme } from '../../deprecated/Button';
import CopyIconDeprecated from '../../../assets/icons/copy-20-20.svg';
import CopyIconNew from '../../../assets/icons/copy.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon clickable onClick={onCopy} className={cls.copyBtn} Svg={CopyIconNew} />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <ButtonDeprecated onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
            <CopyIconDeprecated className={cls.copyIcon} />
          </ButtonDeprecated>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
