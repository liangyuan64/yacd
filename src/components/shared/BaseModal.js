import * as React from 'react';

import Modal from 'react-modal';
import cx from 'classnames';

import modalStyle from '../Modal.module.css';
import s from './BaseModal.module.css';

const { useMemo } = React;

export default function BaseModal({ isOpen, onRequestClose, children }) {
  const className = useMemo(
    () => ({
      base: cx(modalStyle.content, s.cnt),
      afterOpen: s.afterOpen,
      beforeClose: '',
    }),
    []
  );
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={className}
      overlayClassName={cx(modalStyle.overlay, s.overlay)}
    >
      {children}
    </Modal>
  );
}