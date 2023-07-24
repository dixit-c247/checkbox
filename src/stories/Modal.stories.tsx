import React from 'react';
import { Story, Meta } from '@storybook/react';
import Modal, { ModalProps } from '../component/modal/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;


const Template: any = (args: ModalProps) => <Modal {...args} />;

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  isOpen: true,
  onClose: () => console.log('Modal closed'),
  children: (
    <>
      <h2>Hello, I'm a modal!</h2>
      <p>This is a custom modal component in your design system.</p>
    </>
  ),
};

