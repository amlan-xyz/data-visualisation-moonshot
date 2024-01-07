import { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../reducer/data.reducer";
const DataContext = createContext();

const initalState = {
  data: [],
  loggedIn: false,
  filteredData: [],
  gender: null,
  age: null,
  dateRange: null,
};

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initalState);

  const value = { state, dispatch };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("uesData should be use withing the DataProvider");
  }
  return context;
};
