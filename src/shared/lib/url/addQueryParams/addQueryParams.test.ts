import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });

  test('test with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      test2: 'value2',
      test3: 'value3',
      test4: 'value4',
    });
    expect(params).toBe('?test=value&test2=value2&test3=value3&test4=value4');
  });

  test('test with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      test2: 'value2',
      test3: 'value3',
      test4: undefined,
    });
    expect(params).toBe('?test=value&test2=value2&test3=value3');
  });
});
