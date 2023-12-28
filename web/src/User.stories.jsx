
import React from 'react';
import UserWidget from './User';

export default {
  title: 'Components/User',
  component: UserWidget,
};

const Template = (args) => <UserWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};


