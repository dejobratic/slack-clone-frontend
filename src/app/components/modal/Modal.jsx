import React from "react"
import styled from "styled-components"

import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"

import CloseIcon from "@material-ui/icons/Close"

const Modal = ({ shown, title, onClose, header, content, actions }) => {
  return (
    <ModalContainer open={shown} onClose={onClose}>
      <ModalHeaderContainer>
        <DialogTitle>{title}</DialogTitle>
        <CloseIcon onClick={onClose} />
      </ModalHeaderContainer>
      <ModalContentContainer>{content}</ModalContentContainer>
      <ModalActionsContainer>{actions}</ModalActionsContainer>
    </ModalContainer>
  )
}

export default Modal

const ModalContainer = styled(Dialog)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const ModalHeaderContainer = styled.div`
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    padding: 16px 24px;
    transition: 0.5s;
  }

  > .MuiSvgIcon-root:hover {
    cursor: pointer;
    opacity: 0.8;
    color: var(--gray-color);
  }
`
const ModalContentContainer = styled.div`
  grid-row: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`
const ModalActionsContainer = styled.div`
  grid-row: 3;

  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  > :not(:first-child) {
    margin-left: 8px;
  }
`
