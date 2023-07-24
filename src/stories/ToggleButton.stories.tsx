// src/stories/ToggleButton.stories.tsx

import React from 'react';
import ToggleButton from '../component/modal/ToggleButton/ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
};

export const Default = () => <ToggleButton>Open Modal</ToggleButton>;
