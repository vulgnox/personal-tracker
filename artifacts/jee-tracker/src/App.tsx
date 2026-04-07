import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "JEE Mains Journey Tracker";
    document.documentElement.classList.add("dark-app");
  }, []);
  return null;
}
