import axios from 'axios';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'sad',
  first: 'asd',
  currency: Currency.RUB,
  city: 'Moscow',
};

const validateErrors = [
  ValidateProfileError.INCORRECT_USER_DATA,
  ValidateProfileError.INCORRECT_AGE,
  ValidateProfileError.INCORRECT_COUNTRY,
];

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without firstname and lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('error', async () => {
    const result = validateProfileData({});

    expect(result).toEqual(validateErrors);
  });
});
