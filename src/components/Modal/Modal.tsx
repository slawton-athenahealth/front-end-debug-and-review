import { Dialog, Content, DialogContainer } from "@adobe/react-spectrum";
import { Component, type ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
}

class Modal extends Component<ModalProps> {
  render() {
    return (
      <DialogContainer
        isDismissable
        onDismiss={() => this.props.setOpen(false)}
      >
        {this.props.isOpen && <Dialog>{this.props.children}</Dialog>}
      </DialogContainer>
    );
  }
}

export default Modal;
