import {
  Dialog,
  Content,
  DialogContainer,
} from "@adobe/react-spectrum";
import type { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
}

const Modal = ({ isOpen, setOpen, children }: ModalProps) => {
  return (
    <DialogContainer isDismissable onDismiss={() => setOpen(false)}>
      {isOpen && (
        <Dialog>{children}</Dialog>
      )}
    </DialogContainer>
  );
};

export default Modal;
