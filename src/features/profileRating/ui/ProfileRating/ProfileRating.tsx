import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useProfileRating, useRateProfile } from '@/features/profileRating/api/profileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo(({ className, profileId }: ProfileRatingProps) => {
  const { t } = useTranslation();

  const userId = useSelector(getUserAuthData)?.id;

  const { data, isLoading } = useProfileRating({
    userId: userId ?? '',
    profileId,
  });

  const [rateProfileMutation] = useRateProfile();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateProfileMutation({ rate: starsCount, feedback, userId: userId ?? '', profileId });
      } catch (e) {
        console.log(e);
      }
    },
    [profileId, rateProfileMutation, userId],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return null;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t('Оцените профиль')}
      feedbackTitle={t('Оставьте свой отзыв, это поможет улучшить качество')}
      hasFeedback
    />
  );
});

export default ProfileRating;
