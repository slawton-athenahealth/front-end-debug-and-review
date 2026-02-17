import "./AppointmentCard.css";
import {
  Button,
  Content,
  ContextualHelp,
  Heading,
} from "@adobe/react-spectrum";
import { useState } from "react";
import Modal from "../Modal/Modal";

export interface AppointmentType {
  id: number;
  firstName: string;
  lastName: string;
  date: string;
  time: string;
  type: string;
  notes: string;
  isMandatory: boolean;
  mandatoryMessage: string;
}

const AppointmentCard = ({
  firstName,
  lastName,
  time,
  type,
  notes,
  isMandatory,
  mandatoryMessage,
}: AppointmentType) => {
  const [isOpen, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(isMandatory);
  return (
    <article className="appointment-card">
      <h2>
        {firstName} {lastName}
      </h2>
      <section className="appointment-details">
        <div className="appointment-details-content">
          <div className="appointment-details-time"><p>Appointment Time: {time}</p></div>
          <p>Appointment Type: {type}</p>
          <p>Notes: {notes}</p>
        </div>
      </section>
      <footer className="appointment-card-footer">
        <Button variant="primary" onPress={() => setOpen(true)}>
          Open
        </Button>
        <Modal isOpen={isOpen} setOpen={setOpen}>
          <Heading level={2}>
            {firstName} {lastName} at {time}
          </Heading>
          <Content>Test test test</Content>
        </Modal>
        <Button
          isDisabled={isDisabled}
          variant="secondary"
          onPress={() => {
            alert(`Cancelling appointment for ${firstName} ${lastName}`);
          }}
        >
          Cancel
        </Button>
        {isDisabled && (
          <ContextualHelp placement="bottom start" variant="info">
            <Heading level={3}>Mandatory Appointment</Heading>
            <Content>{mandatoryMessage}</Content>
          </ContextualHelp>
        )}
      </footer>
    </article>
  );
};

export default AppointmentCard;
