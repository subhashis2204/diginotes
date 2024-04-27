import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import Index from "./index.jsx"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>
)
