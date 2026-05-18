"use client";

import { Bulb, Sun } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button className={'rounded-none'} variant={'outline'} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Bulb/> : <Sun/>}
    </Button>
  );
}

export default ThemeSwitch;