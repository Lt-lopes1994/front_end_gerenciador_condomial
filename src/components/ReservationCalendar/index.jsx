import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/modalCalendar.css";
import "../../styles/reservationCalendar.css";
import { differenceInCalendarDays, format } from "date-fns";
import FormReservation from "../FormReservation";
import { ptBR } from "date-fns/locale";

function ReservationCalendar() {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date

  const reservedDates = [
    new Date(2023, 4, 13),
    new Date(2023, 4, 14),
    new Date(2023, 4, 20),
    new Date(2023, 5, 24),
    new Date(2023, 5, 25)
  ];

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
    setSelectedDate(date); // Atualiza o estado com a data selecionada
    console.log(selectedDate);
  }
  return (
    <>
      <div className="modalCalendar">
        <Calendar
          onChange={onChange}
          value={value}
          tileDisabled={tileDisabled}
          tileClassName={tileClassName}
          onClickDay={handleDayClick} // Function to handle the click on the cell
        />
      </div>
      {selectedDate && (
        <div className="modalForm">
          <FormReservation selectedDate={selectedDate} />
        </div>
      )}
    </>
  );
}

export default ReservationCalendar;
