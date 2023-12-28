// UserWidget.stories.jsx
import React from 'react';
import UserWidget from './User';

export default {
  title: 'Components/User',
  component: UserWidget,
};

const Template = (args) => <UserWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Ici, vous pouvez ajouter des props initiaux si votre composant les accepte.
};

// Vous pouvez ajouter d'autres variantes pour montrer différents états ou comportements du composant.
