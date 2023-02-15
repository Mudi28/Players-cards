import React from "react";

import "./index.css";
import Col from "./collegmento";
import "./stile.css";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(<Col />);
