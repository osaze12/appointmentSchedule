import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import randomColor from "randomcolor";
import { CustomToolbar } from "../../../components/CustomToolbar";
import { Doctors } from "../../../components/Doctors";
import { useState } from "react";
import { AddAppointmentForm } from "../../../components/AddAppointmentForm";
import { allEvents } from "../../../constants/allEvents";
import { doctors } from "../../../constants/doctors";
import { Event } from "../../../components/Event";
export const CalendarApp = () => {
  const [events, setEvents] = useState(allEvents);
  const [shouldOpen, setShouldOpen] = useState(false);
  const [newEventId, setNewEventId] = useState(null);
  const [newEventObject, setNewEventObject] = useState({});
  const MIN = moment().hour(8).minute(0).toDate();
  const MAX = moment().hour(18).minute(0).toDate();

  const localizer = momentLocalizer(moment);

  const handleSelectSlot = ({ start, end, resourceId }) => {
    // console.log("Selected", start, end, resourceId);
    const eventId = events.length + 1;
    const payload = {
      id: eventId,
      title: "Click to edit",
      start,
      end,
      resourceId,
    };
    setNewEventId(eventId);
    setNewEventObject(payload);

    setEvents((initial) => [...initial, payload]);
    setShouldOpen(true);
  };

  const handleDeleteEvent = () => {
    const removedNewEvent = events.filter((data) => data.id !== newEventId);
    setEvents(removedNewEvent);
    setShouldOpen(false);
  };
  const handleSubmit = (data) => {
    const payload = {
      empty: false,
      ...data,
    };
    const filterEvent = events.filter((data) => data.id !== payload.id);
    setEvents([...filterEvent, payload]);

    setShouldOpen(false);
  };

  const eventPropGetter = (event) => {
    const color = randomColor({
      luminosity: "light",
      format: "rgba",
      alpha: 0.9, // e.g. 'rgba(9, 1, 107, 0.5)',
    });
    return {
      style: {
        color: "#4e4e4e",
        backgroundColor: "#fff",
        fontSize: ".7em",
        border: "none",
        fontWeight: "bold",
        boxShadow: "rgb(0 0 0 / 9%) 18px 20px 20px 0px",
        borderTop: `5px solid ${color}`,
      },
    };
  };

  const resources = doctors.map((data) => {
    return {
      resourceId: data.resourceId,
      resourceTitle: <Doctors name={data.resourceTitle} />,
    };
  });

  return (
    <>
      <AddAppointmentForm
        eventData={newEventObject}
        shouldOpen={shouldOpen}
        onClose={handleDeleteEvent}
        onSubmit={handleSubmit}
      />
      <Calendar
        selectable
        onSelectSlot={handleSelectSlot}
        events={events}
        localizer={localizer}
        defaultView={Views.DAY}
        allDay={false}
        views={["day", "work_week"]}
        min={MIN}
        max={MAX}
        resources={resources}
        components={{ toolbar: CustomToolbar, event: Event }}
        formats={{ eventTimeRangeFormat: () => null }} //remove time from events
        resourceIdAccessor="resourceId"
        resourceTitleAccessor={"resourceTitle"}
        timeslots={1}
        step={30}
        eventPropGetter={eventPropGetter}
        defaultDate={new Date(Date.now())}
      />
    </>
  );
};
