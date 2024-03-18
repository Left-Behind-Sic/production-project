import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditArticleForm } from './EditArticleForm';

export default {
  title: 'shared/EditArticleForm',
  component: EditArticleForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditArticleForm>;

const Template: ComponentStory<typeof EditArticleForm> = (args) => <EditArticleForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
