import { useData } from "../context/data.context";

export const Filter = () => {
  const {
    state: { gender, age },
    dispatch,
  } = useData();
  return (
    <div className="filter">
      <div className="filter__item">
        <p>Filter by gender:</p>
        <div className="">
          <label htmlFor="male">Male</label>
          <input
            id="male"
            type="checkbox"
            checked={gender === "male"}
            onChange={() =>
              dispatch({ type: "FILTER_BY_GENDER", payload: "male" })
            }
          />
        </div>
        <div className="">
          <label htmlFor="female">Female</label>
          <input
            id="female"
            type="checkbox"
            checked={gender === "female"}
            onChange={() =>
              dispatch({ type: "FILTER_BY_GENDER", payload: "female" })
            }
          />
        </div>
      </div>

      <div className="filter__item">
        <p>Filter by Age:</p>
        <div className="">
          {" "}
          <label htmlFor="age-15-25">15-25</label>
          <input
            id="age-15-25"
            type="checkbox"
            checked={age === "15-25"}
            onChange={() =>
              dispatch({ type: "FILTER_BY_AGE", payload: "15-25" })
            }
          />
        </div>
        <div className="">
          <label htmlFor=">25">{">25"}</label>
          <input
            id=">25"
            type="checkbox"
            checked={age === ">25"}
            onChange={() => dispatch({ type: "FILTER_BY_AGE", payload: ">25" })}
          />
        </div>
      </div>

      {/* <div className="filter__item">
        <p>Date Range:</p>
        <CalendarComp />
      </div> */}
      <div className="filter__item">
        {" "}
        <button
          className="secondary__btn"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
