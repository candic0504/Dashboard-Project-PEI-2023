
import React from 'react';
import AirQualityWidget from './AirQuality';

export default {
  title: 'Components/AirQuality',
  component: AirQualityWidget,
};

const Template = (args) => <AirQualityWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
