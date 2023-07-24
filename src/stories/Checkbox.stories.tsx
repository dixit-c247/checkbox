import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args: CheckboxProps) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Checkbox',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked Checkbox',
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Checkbox',
  disabled: true,
};
