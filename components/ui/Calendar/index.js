import { CalendarWrapper } from "./style";
import ReactCalendar from "react-calendar";
import Button from "../Button";
import { useState } from "react";
import { format } from "date-fns";

/**
 * Calendar component
 * @param {boolean} show Whether to show the calendar
 * @param {function} close Close the calendar
 * @param {function} handleApply Apply the selected time value
 * @alias module:UI.Calendar
 */

const Calendar = ({ show, close, handleApply }) => {
  const [value, setValue] = useState();

  return (
    <CalendarWrapper show={show}>
      <ReactCalendar
        selectRange={false}
        className="calendar"
        onChange={(value) => setValue(value)}
        formatShortWeekday={(locale, date) => format(date, "EEEEEE")}
      />
      <div className="calendar-footer">
        <Button tetriary onClick={close}>
          Cancel
        </Button>
        <Button onClick={() => handleApply(value)}>Apply</Button>
      </div>
    </CalendarWrapper>
  );
};

export default Calendar;
