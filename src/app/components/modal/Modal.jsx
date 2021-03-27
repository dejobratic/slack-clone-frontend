import React from "react"
import styled from "styled-components"

import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"

import CloseIcon from "@material-ui/icons/Close"

const Modal = ({ shown, title, onClose, header, content, actions }) => {
  return (
    <Dialog open={shown} onClose={onClose}>
      <ModalHeaderContainer>
        <DialogTitle>{title}</DialogTitle>
        <CloseIcon onClick={onClose} />
      </ModalHeaderContainer>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  )
}

export default Modal

const ModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    padding: 16px 24px;
  }

  > .MuiSvgIcon-root :hover {
    cursor: pointer;
    opacity: 0.8;
    background-color: #eeeeee;
  }
`
