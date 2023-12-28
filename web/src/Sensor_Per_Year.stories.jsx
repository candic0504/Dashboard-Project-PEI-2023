// SensorWidget.stories.jsx
import React from 'react';
import SensorWidget from './Sensor_Per_Year';

export default {
  title: 'Components/Sensor_Per_Year',
  component: SensorWidget,
};

const Template = (args) => <SensorWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};


