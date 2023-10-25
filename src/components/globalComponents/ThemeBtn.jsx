"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function ThemeBtn({ size }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleThemeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <>
      <button onClick={handleThemeMode}>
        {theme === "dark" ? (
          <BsSunFill size={size} />
        ) : (
          <BsMoonStarsFill size={size} />
        )}
      </button>
    </>
  );
}
