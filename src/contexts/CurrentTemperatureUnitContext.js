import { createContext } from "react";

export const CurrentTemperatureUnitContext = createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

/*export const fTemperatureUnit = "F";

export const handleToggleSwitchChange = () => {
  if (currentTemperatureUnit === "F") setcurrentTemperatureUnit("C");

  if (currentTemperatureUnit === "C") setcurrentTemperatureUnit("F");
};
*/
