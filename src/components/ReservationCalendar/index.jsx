import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/modalCalendar.css";
import "../../styles/reservationCalendar.css";
import { differenceInCalendarDays, format, set } from "date-fns";
import FormReservation from "../FormReservation";

function ReservationCalendar({
  commonAreaName,
  commonAreaId,
  setOpenCalendar
}) {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const [open, setOpen] = useState(false); // State to control the modal
  const [reservedDates, setReservedDates] = useState([]); // State to store the reserved dates
  const [control, setControl] = useState(false);

  const reservedDatesFunctionHall = [
    new Date(2023, 8, 10),
    new Date(2023, 8, 14),
    new Date(2023, 8, 20),
    new Date(2023, 7, 24),
    new Date(2023, 7, 25)
  ];

  const reservedDatesSportsCourt = [
    new Date(2023, 8, 11),
    new Date(2023, 8, 12),
    new Date(2023, 8, 20),
    new Date(2023, 7, 15),
    new Date(2023, 7, 30)
  ];

  function handleCommonAreaReservation(commonAreaName) {
    console.log(commonAreaName);

    if (commonAreaName == "Salão de festas") {
      setReservedDates(reservedDatesFunctionHall);
    }
    if (commonAreaName == "Quadra de esportes") {
      setReservedDates(reservedDatesSportsCourt);
    }
  }

  useEffect(() => {
    handleCommonAreaReservation(commonAreaName);
  }, []);

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function tileDisabled({ date }) {
    // Check if a date is on the list of reserved dates
    return reservedDates.some((reservedDate) => isSameDay(reservedDate, date));
  }

  function tileClassName({ date }) {
    // Compare the date of the cell with the current date
    if (date < new Date()) {
      return "pastDate";
    }
    // Add a custom class to the cell of the reserved date
    return reservedDates.some((reservedDate) => isSameDay(reservedDate, date))
      ? "reserved"
      : "available";
  }

  function handleDayClick(date) {
    setSelectedDate(date); // update the selected date
    setOpen(true); // open the reservation form modal
  }

  function handleClose() {
    setOpenCalendar(false); // Close the calendar modal
  }

  return (
    <>
      <div className="modalCalendar">
        <div className="modalCalendarContent">
          <button className="close" onClick={handleClose}>
            X
          </button>
          <h1>Selecione a data que deseja reservar</h1>
          <h3>{commonAreaName}</h3>
          <Calendar
            onChange={onChange}
            value={value}
            tileDisabled={tileDisabled}
            tileClassName={tileClassName}
            onClickDay={handleDayClick} // Function to handle the click on the cell
          />
        </div>
      </div>
      {open && (
        <div className="modalForm">
          <FormReservation
            commonAreaId={commonAreaName}
            setOpen={setOpen}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      )}
    </>
  );
}

export default ReservationCalendar;
