import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AppointmentForm } from "./AppointmentForm";

export const AddAppointmentForm = ({
  eventData,
  onSubmit,
  shouldOpen,
  onClose,
}) => {
  const handleSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Drawer
      closeOnOverlayClick={false}
      isOpen={shouldOpen}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <b>Add Appointment</b>
        </DrawerHeader>

        <DrawerBody>
          <AppointmentForm eventData={eventData} onSubmit={handleSubmit} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
