// eslint-disable-next-line eslint-super-plugin-path-checker/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();
