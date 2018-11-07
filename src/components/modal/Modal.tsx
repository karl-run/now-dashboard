import React from 'react'
import ReactModal from 'react-modal'
import { Spring } from 'react-spring'

import css from './Modal.module.css'

interface Props {
  open: boolean
  children: any
}

const modalClosed = { opacity: 0, top: '32%' }
const modalOpen = { opacity: 1, top: '30%' }

const Modal = ({ open, children }: Props) => (
  <Spring from={modalClosed} to={open ? modalOpen : modalClosed}>
    {props => (
      <ReactModal
        isOpen={open}
        className={css.modal}
        overlayClassName={css.overlay}
        ariaHideApp={false}
        shouldCloseOnEsc={false}
        style={{ content: { ...props } }}
      >
        {children}
      </ReactModal>
    )}
  </Spring>
)

export default Modal
