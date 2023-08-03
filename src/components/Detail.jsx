import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {lang.name === "en"
        ? theme.name === "light"
          ? "light theme activated"
          : "dark theme activated"
        : theme.name === "light"
        ? "กำลังใช้ธีมไลท์"
        : "กำลังใช้ธีมดาร์ค"}
    </p>
  );
};
