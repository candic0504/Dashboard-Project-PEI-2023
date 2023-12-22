import React from 'react';
import WeatherWidget from './Apid.jsx';
import './Apid.css';

export default {
  title: 'Components/WeatherWidget',
  component: WeatherWidget,
};

const Template = (args) => <WeatherWidget {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // Insérez ici les props que votre composant attend
};