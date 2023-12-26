import React from 'react';
import WeatherWidget from './ApiD.jsx';
import './ApiD.css';

export default {
  title: 'Components/WeatherWidget',
  component: WeatherWidget,
};

const Template = (args) => <WeatherWidget {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  weatherData: null,
  error: null,
};

export const Error = Template.bind({});
Error.args = {
  isLoading: false,
  weatherData: null,
  error: 'Erreur de chargement des données',
};

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  weatherData: {
    name: 'Paris',
    main: {
      temp: 15,
      humidity: 80
    }
  },
  error: null,
};

export const WarmWeather = Template.bind({});
WarmWeather.args = {
  isLoading: false,
  weatherData: {
    name: 'Cairo',
    main: {
      temp: 35,
      humidity: 30
    }
  },
  error: null,
};

export const CoolWeather = Template.bind({});
CoolWeather.args = {
  isLoading: false,
  weatherData: {
    name: 'Moscow',
    main: {
      temp: 5,
      humidity: 60
    }
  },
  error: null,
};