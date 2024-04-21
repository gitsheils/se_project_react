import "./ToggleSwitch.css";
import { useContext, useState } from "react";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function ToggleSwitch(props) {
  const tempContext = useContext(CurrentTemperatureUnitContext);
  const currentTemperatureUnit = tempContext.currentTemperatureUnit;
  const handleChange = tempContext.handleToggleSwitchChange;

  return (
    <div>
      <label className="label">
        <input
          type="checkbox"
          className="switch__box"
          onChange={handleChange}
        />
        <span
          className={`switch__slider ${
            currentTemperatureUnit === "F"
              ? "switch__slider-F"
              : "switch__slider-C"
          }`}
        ></span>
        <p
          className={`switch__temp-F ${
            currentTemperatureUnit === "F" && "switch_active"
          }`}
        >
          F
        </p>

        <p
          className={`switch__temp-C ${
            currentTemperatureUnit === "C" && "switch_active"
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
}

export default ToggleSwitch;
