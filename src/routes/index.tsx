import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
