import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions/themeActions";

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state);

  return (
    <div className={theme}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <button onClick={() => dispatch(toggleTheme())}>Switch Theme</button>
    </div>
  );
}

export default ThemeSwitcher;
