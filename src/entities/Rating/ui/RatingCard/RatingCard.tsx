import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo(
  ({
    className,
    onCancel,
    onAccept,
    hasFeedback,
    feedbackTitle,
    title,
    rate = 0,
  }: RatingCardProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(selectedStarsCount);
        }
      },
      [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
      setIsModalOpen(false);
      onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <>
            <Text title={feedbackTitle} />
            <Input
              data-testid='RatingCard.input'
              value={feedback}
              onChange={setFeedback}
              placeholder={t('Ваш отзыв')}
            />
          </>
        }
        off={
          <>
            <TextDeprecated title={feedbackTitle} />
            <InputDeprecated
              data-testid='RatingCard.input'
              value={feedback}
              onChange={setFeedback}
              placeholder={t('Ваш отзыв')}
            />
          </>
        }
      />
    );

    const content = (
      <>
        <VStack align='center' gap='8'>
          <ToggleFeatures
            feature='isAppRedesigned'
            on={<Text title={starsCount ? t('Спасибо за оценку!') : title} />}
            off={<TextDeprecated title={starsCount ? t('Спасибо за оценку!') : title} />}
          />

          <StarRatingDeprecated selectedStars={starsCount} size={40} onSelect={onSelectStars} />
        </VStack>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            <VStack max gap='32'>
              {modalContent}
              <ToggleFeatures
                feature='isAppRedesigned'
                on={
                  <HStack gap='16' max justify='end'>
                    <Button data-testid='RatingCard.close' onClick={cancelHandle}>
                      {t('Закрыть')}
                    </Button>
                    <Button data-testid='RatingCard.send' onClick={acceptHandle}>
                      {t('Отправить')}
                    </Button>
                  </HStack>
                }
                off={
                  <HStack gap='16' max justify='end'>
                    <ButtonDeprecated
                      data-testid='RatingCard.close'
                      onClick={cancelHandle}
                      theme={ButtonTheme.OUTLINE_RED}
                    >
                      {t('Закрыть')}
                    </ButtonDeprecated>
                    <ButtonDeprecated data-testid='RatingCard.send' onClick={acceptHandle}>
                      {t('Отправить')}
                    </ButtonDeprecated>
                  </HStack>
                }
              />
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            <VStack gap='32'>
              {modalContent}
              <ToggleFeatures
                feature='isAppRedesigned'
                on={
                  <Button fullWidth onClick={acceptHandle} size='l'>
                    {t('Отправить')}
                  </Button>
                }
                off={
                  <ButtonDeprecated fullWidth onClick={acceptHandle} size={ButtonSize.L}>
                    {t('Отправить')}
                  </ButtonDeprecated>
                }
              />
            </VStack>
          </Drawer>
        </MobileView>
      </>
    );

    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Card data-testid='RatingCard' padding='24' max border='partialBorder'>
            {content}
          </Card>
        }
        off={
          <CardDeprecated data-testid='RatingCard' className={className} max>
            {content}
          </CardDeprecated>
        }
      />
    );
  },
);
