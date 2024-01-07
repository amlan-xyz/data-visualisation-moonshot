export const DataReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      };
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
      };
    case "FILTER_BY_GENDER":
      return {
        ...state,
        gender: action.payload.toLowerCase(),
        filteredData: state.data.filter(
          ({ Gender }) => Gender.toLowerCase() === action.payload.toLowerCase()
        ),
      };
    case "FILTER_BY_AGE":
      return {
        ...state,
        age: action.payload,
        filteredData: state.filteredData.filter(
          ({ Age }) => Age === action.payload
        ),
      };
    case "FILTER_BY_DATE": {
      const { startDate, endDate } = action.payload[0];

      const output = state.data.filter(
        ({ Day }) =>
          new Date(Day) >= new Date(startDate) &&
          new Date(Day) <= new Date(endDate)
      );
      return {
        ...state,
        dateRange: action.payload,
        filteredData: output,
      };
    }

    case "RESET":
      return {
        ...state,
        age: null,
        gender: null,
        filteredData: state.data,
      };
    default:
      return state;
  }
};
