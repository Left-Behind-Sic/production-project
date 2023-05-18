import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'text',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'text',
  variant: 'error',
};

export const AccentColor = Template.bind({});
AccentColor.args = {
  title: 'Title',
  text: 'text',
  variant: 'accent',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'text',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title Title Title',
  text: 'Description Description Description Description Description Description',
  size: 'l',
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title Title Title',
  text: 'Description Description Description Description Description Description',
  size: 'm',
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Title Title Title',
  text: 'Description Description Description Description Description Description',
  size: 's',
};
