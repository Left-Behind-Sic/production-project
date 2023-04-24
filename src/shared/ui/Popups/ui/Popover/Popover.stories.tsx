import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import cls from './NotificationButton.module.scss';
import { NotificationList, Notification } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Button, ButtonTheme } from '../../../Button/Button';
import { Icon } from '../../../Icon/Icon';
import { Popover } from './Popover';

export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    withMock,
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
  },
  {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Произошло какое-то событие',
    href: 'http://localhost:3000/admin',
  },
];

export const Normal = Template.bind({});
Normal.args = {
  direction: 'bottom left',
  children: <NotificationList className={cls.notifications} />,
  trigger: (
    <Button theme={ButtonTheme.CLEAR}>
      <Icon
        Svg={NotificationIcon}
        inverted
      />
    </Button>
  ),
};

Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: notifications,
    },
  ],
};
