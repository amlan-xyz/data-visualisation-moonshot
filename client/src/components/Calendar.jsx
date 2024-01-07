import { addDays, format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useData } from "../context/data.context";
export const CalendarComp = () => {
  const { dispatch } = useData();
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <input
        value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )}`}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />
      <div className="" ref={refOne}>
        {" "}
        {open && (
          <div className="modal">
            <div className="modal_wrapper"></div>
            <div className="modal_container">
              <h2>This is my modal</h2>
              <button onClick={() => setOpen(!open)}>Close</button>
            </div>
          </div>
        )}
        {/* {open && (
          <DateRangePicker
            onChange={(item) => {
              setRange([item.selection]);
              dispatch({ type: "FILTER_BY_DATE", payload: [item.selection] });
            }}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement"
          />
        )} */}
      </div>
    </div>
  );
};
