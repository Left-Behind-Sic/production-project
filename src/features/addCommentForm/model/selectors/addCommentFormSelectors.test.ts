import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFromError, getAddCommentFromText } from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
  test('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'comment',
      },
    };
    expect(getAddCommentFromText(state as StateSchema)).toEqual('comment');
  });
  test('should work with empty state text', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFromText(state as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };
    expect(getAddCommentFromError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFromError(state as StateSchema)).toEqual(undefined);
  });
});
