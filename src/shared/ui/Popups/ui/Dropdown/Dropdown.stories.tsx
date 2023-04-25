import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from '../../../Button/Button';
import { Dropdown, DropdownItem } from './Dropdown';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const items: DropdownItem[] = [
  {
    content: 'first',
  },
  {
    content: 'second',
    disabled: true,
  },
  {
    content: 'third',
  },
];

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button>Open</Button>,
  items,
};

export const Dark = Template.bind({});
Dark.args = {
  trigger: <Button>Open</Button>,
  items,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  trigger: <Button>Open</Button>,
  items,
};

Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
