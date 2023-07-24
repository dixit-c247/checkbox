// src/stories/Modal.stories.tsx

import React from 'react';
import Modal from '../component/modal/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => (
  <Modal isOpen={true} onClose={() => {}}>
    <h2>Hello, I am a Modal!</h2>
    <p>This is a custom modal component for your design system.</p>
  </Modal>
);
