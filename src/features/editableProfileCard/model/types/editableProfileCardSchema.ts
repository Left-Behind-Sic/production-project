import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: Boolean;
  error?: string;
  readonly?: boolean;
  validateErrors?: ValidateProfileError[];
}
