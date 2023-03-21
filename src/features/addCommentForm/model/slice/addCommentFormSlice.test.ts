import { AddCommentFormSchema } from 'features/addCommentForm';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from 'features/addCommentForm/model/slice/addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
  test('test set comment text', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: 'comment 1' };
    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText('changed comment'),
      ),
    ).toEqual({ text: 'changed comment' });
  });
});
