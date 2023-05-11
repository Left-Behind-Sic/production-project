import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    const useId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!useId) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(useId)).unwrap();

      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
