import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetProfileRatingArg {
  userId: string;
  profileId: string;
}

interface RateProfileArg {
  userId: string;
  profileId: string;
  rate: number;
  feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<Rating[], GetProfileRatingArg>({
      query: ({ userId, profileId }) => ({
        url: '/profile-ratings',
        params: {
          userId,
          profileId,
        },
      }),
    }),
    rateProfile: build.mutation<void, RateProfileArg>({
      query: (params) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const useProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingApi.useRateProfileMutation;
