import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StarRating } from './StarRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const SelectedDark = Template.bind({});
SelectedDark.args = {
  selectedStars: 3,
};
SelectedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SelectedOrange = Template.bind({});
SelectedOrange.args = {
  selectedStars: 3,
};

SelectedOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
