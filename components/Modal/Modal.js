import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const inputAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const ContainerModal = styled.div`
  animation: ${inputAnimation} 0.3s ease-in-out;
`

const Modal = ({ id, title, children, onRequestClose }) => {
  const content = (
    <div
      id={id}
      className="Modal p-8  lg:p-0 flex items-center justify-center fixed z-50 bg-black bg-opacity-60 h-screen w-screen left-0 top-0"
    >
      <ContainerModal className="Modal__content min-w-[300px]  flex flex-col  rounded-lg shadow-lg relative bg-white">
        <div className="Modal__content__title flex items-center justify-between  w-full">
          <p className="tw-p-2">
            {title}
          </p>
          <div
            className="p-2 cursor-pointer z-[9999] absolute right-0 top-0"
            onClick={onRequestClose}
          >
            X
          </div>
        </div>
        <div className="Modal__content__body px-3 py-2">{children}</div>
      </ContainerModal>
    </div>
  )

  return ReactDOM.createPortal(
    content,
    document.getElementById('modal-wrapper')
  )
}

Modal.propTypes = {
  id: PropTypes.string,
  // title = string or object
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
  onRequestClose: PropTypes.func
}

export default Modal
