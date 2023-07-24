import React, { useState } from "react";
import Modal from "../Modal";
import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
  children: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <button className={styles.toggleButton} onClick={handleToggle}>{children}</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {/* Render modal content here */}
        <h2>Hello, I am a Modal!</h2>
        <p>This is a custom modal component for your design system.</p>
      </Modal>
    </>
  );
};

export default ToggleButton;
