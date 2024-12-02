import { Route, Router, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Game from "./pages/game";

export default function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<Game />} />
    </Routes>
  
  );
}