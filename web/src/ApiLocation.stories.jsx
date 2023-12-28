// ApiLocation.stories.jsx
import React from 'react';
import ApiLocation from './ApiLocation';

export default {
  title: 'Components/ApiLocation',
  component: ApiLocation,
};

const Template = (args) => <ApiLocation {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Ajoutez ici les props initiaux si votre composant les accepte.
};


