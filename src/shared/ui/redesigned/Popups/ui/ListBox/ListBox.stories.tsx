import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox, ListBoxItem } from './ListBox';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 250 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const items: ListBoxItem<string>[] = [
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

const value = '0';

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

export const TopLeftDrop = Template.bind({});
TopLeftDrop.args = {
  items,
  value,
  direction: 'top left',
};

export const TopRightDrop = Template.bind({});
TopRightDrop.args = {
  items,
  value,
  direction: 'top right',
};

export const BottomLeftDrop = Template.bind({});
BottomLeftDrop.args = {
  items,
  value,
  direction: 'bottom left',
};

export const BottomRightDrop = Template.bind({});
BottomRightDrop.args = {
  items,
  value,
  direction: 'bottom right',
};
