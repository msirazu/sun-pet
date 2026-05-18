"use client";

import { Bulb, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Bulb className="cursor-pointer"/> : <Sun className="cursor-pointer"/>}
    </button>
  );
}

export default ThemeSwitch;