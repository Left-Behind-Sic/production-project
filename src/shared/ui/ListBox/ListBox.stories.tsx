import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox, ListBoxItem } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const items: ListBoxItem[] = [
  {
    value: 'element 1',
    content: 'content here 1',
  },
  {
    value: 'element 2',
    content: 'content here 2',
    disabled: true,
  },
  {
    value: 'element 3',
    content: 'content here 3',
  },
];

const value = 'element 3';

export const Normal = Template.bind({});
Normal.args = {
  defaultValue: 'Выберите',
  items,
};

export const Selected = Template.bind({});
Selected.args = {
  items,
  value,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Выберите',
  items,
  value,
};

export const Readonly = Template.bind({});
Readonly.args = {
  label: 'Выберите',
  readonly: true,
  items,
  value,
};

export const WithLabelDark = Template.bind({});
WithLabelDark.args = {
  label: 'Выберите',
  items,
  value,
};

WithLabelDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLabelOrange = Template.bind({});
WithLabelOrange.args = {
  label: 'Выберите',
  items,
  value,
};

WithLabelOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
