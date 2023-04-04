import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi, consequatur cum distinctio excepturi necessitatibus pariatur provident quasi recusandae voluptatibus. A accusamus accusantium alias aliquid beatae cumque dolor dolorem dolores earum ex excepturi harum illum inventore ipsa itaque laudantium maiores minus nemo non obcaecati, perspiciatis porro praesentium qui quibusdam quis quisquam quo recusandae rem sequi sint suscipit velit voluptate voluptates. Assumenda beatae eaque est impedit iusto laudantium nulla reprehenderit tempora. A aliquam deserunt eos fugiat, hic laborum libero veritatis voluptate. Dolores quidem recusandae velit veniam voluptatem? A aspernatur assumenda commodi cupiditate delectus esse exercitationem harum, illum labore neque provident sequi!',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi, consequatur cum distinctio excepturi necessitatibus pariatur provident quasi recusandae voluptatibus. A accusamus accusantium alias aliquid beatae cumque dolor dolorem dolores earum ex excepturi harum illum inventore ipsa itaque laudantium maiores minus nemo non obcaecati, perspiciatis porro praesentium qui quibusdam quis quisquam quo recusandae rem sequi sint suscipit velit voluptate voluptates. Assumenda beatae eaque est impedit iusto laudantium nulla reprehenderit tempora. A aliquam deserunt eos fugiat, hic laborum libero veritatis voluptate. Dolores quidem recusandae velit veniam voluptatem? A aspernatur assumenda commodi cupiditate delectus esse exercitationem harum, illum labore neque provident sequi!',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
