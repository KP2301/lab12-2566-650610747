import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Controller() {
  const { toggleTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext);
  const { toggleLang, lang } = useContext(LangContext);
  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary" onClick={setLightTheme}>
        {lang.name === "en"? "Light":"ธีมไลท์"}
      </button>
      <button className="btn btn-dark" onClick={setDarkTheme}>
        {lang.name === "en"? "Dark":"ธีมดาร์ค"}
      </button>
      <button className="btn btn-primary" onClick={toggleTheme}>
        {lang.name === "en"? "Light Toggle Theme":"สลับธีม"}
      </button>
      <button className="btn btn-danger" onClick={toggleLang}>
        {lang.name === "en"? "Light Toggle Language":"สลับภาษา"}
        
      </button>
    </div>
  );
}
