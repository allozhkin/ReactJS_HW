import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (value) => {
    const converted = (value * 9) / 5 + 32;
    setFahrenheit(converted || "");
  };
  const handleFahrenheitChange = (value) => {
    const converted = ((value - 32) * 5) / 9;
    setCelsius(converted || "");
  };
  const clearBtn = () => {
    handleCelsiusChange(0);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={celsius}
          type="number"
          onChange={(e) => setCelsius(e.target.value)}
          onBlur={(e) => handleCelsiusChange(e.target.value)}
          id="сelsius"
          label="Цельсий"
          variant="outlined"
          placeholder="Введите значение"
        />
        <TextField
          value={fahrenheit}
          type="number"
          onChange={(e) => setFahrenheit(e.target.value)}
          onBlur={(e) => handleFahrenheitChange(e.target.value)}
          id="fahrenheit"
          label="Фаренгейт"
          variant="outlined"
          placeholder="Введите значение"
        />
      </Box>
      <Button onClick={clearBtn} className="btnConverter" variant="contained">
        Сбросить значения
      </Button>
    </>
  );
}

export default TemperatureConverter;
