import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      user: { id: '1', username: 'user1' },
      text: 'hello',
    },
    {
      id: '2',
      user: { id: '2', username: 'user2' },
      text: 'comment 2',
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
