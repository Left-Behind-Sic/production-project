import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'sad',
  first: 'asd',
  currency: Currency.RUB,
  city: 'Moscow',
};

describe('profileSlice.test', () => {
  test('test set readonly profile', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test('test cancel edit profile', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false, data, form: { username: '' } };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '12345' })),
    ).toEqual({
      form: {
        username: '12345',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
