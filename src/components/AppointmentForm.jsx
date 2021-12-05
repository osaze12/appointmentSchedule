import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, HStack, Stack } from "@chakra-ui/layout";
import { Select, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

export const AppointmentForm = ({ eventData, onSubmit }) => {
  const { start, end } = eventData;
  const initialValues = {
    type: "",
    note: "",
    patient: "",
    doctor: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [disabled, setDisabled] = useState(true);
  const INPUT_STYLE = {
    size: "sm",
    borderRadius: "7px",
    bg: "#F9F9F9",
    border: "none",
    _focus: { border: "1px solid #959595" },
    fontWeight: "bold",
    color: "#666666",
    fontSize: ".8em",
  };

  const LABEL_STYLE = {
    color: "#282828",
    fontSize: ".8em",
  };

  const BTN_STYLE = {
    bg: "#000",
    color: "#fff",
    _hover: { bg: "#000" },
    _focus: { boxShadow: "none" },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    const payload = {
      ...eventData,
      ...formValues,
    };
    onSubmit(payload);
  };

  useEffect(() => {
    const { type, patient, doctor } = formValues;
    if (!type || !patient || !doctor) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formValues]);

  return (
    <Box>
      <Stack spacing={3}>
        <FormControl id="type">
          <FormLabel {...LABEL_STYLE}>Type</FormLabel>
          <Select
            {...INPUT_STYLE}
            name="type"
            value={formValues?.type}
            onChange={handleChange}
            placeholder="Visit Type"
          >
            <option value="Office visit">Office visit</option>
            <option value="Check up">Check up</option>
          </Select>
        </FormControl>

        <FormControl id="from">
          <FormLabel {...LABEL_STYLE}>From</FormLabel>
          <HStack>
            <Text>{dayjs(start).format("DD MMMM, YYYY")}</Text>
            <Text>{dayjs(start).format("hh:mm A")}</Text>
          </HStack>
        </FormControl>

        <FormControl id="to">
          <FormLabel {...LABEL_STYLE}>To</FormLabel>
          <HStack>
            <Text>{dayjs(end).format("DD MMMM, YYYY")}</Text>
            <Text>{dayjs(end).format("hh:mm A")}</Text>
          </HStack>
        </FormControl>

        <FormControl id="attach-patient">
          <FormLabel {...LABEL_STYLE}>Attach Patient</FormLabel>
          <Select
            {...INPUT_STYLE}
            name="patient"
            value={formValues?.patient}
            onChange={handleChange}
            placeholder="Select Patient"
          >
            <option value="Ronald O.">Ronald O.</option>
            <option value="Felix B.">Felix B.</option>
            <option value="Kingsley R.">Kingsley R.</option>
          </Select>
        </FormControl>

        <FormControl id="attending-physical">
          <FormLabel {...LABEL_STYLE}>Attending Physical</FormLabel>
          <Select
            {...INPUT_STYLE}
            name="doctor"
            value={formValues?.doctor}
            onChange={handleChange}
            placeholder="Select Doctor"
          >
            <option value="Dr. Ronald O.">Dr. Ronald O.</option>
            <option value="Dr. Felix B.">Dr. Felix B.</option>
            <option value="Dr. Kingsley R.">Dr. Kingsley R.</option>
          </Select>
        </FormControl>

        <FormControl id="note">
          <FormLabel {...LABEL_STYLE}>Note</FormLabel>
          <Input
            type="text"
            name="note"
            value={formValues?.note}
            onChange={handleChange}
            placeholder="New Appointment"
            {...INPUT_STYLE}
          />
        </FormControl>

        <Button disabled={disabled} onClick={handleSubmit} {...BTN_STYLE}>
          Save
        </Button>
      </Stack>
    </Box>
  );
};
