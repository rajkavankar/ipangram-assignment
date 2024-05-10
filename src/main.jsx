import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { DateProvider } from "./context/DateContext.jsx"
import { StrictMode } from "react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <DateProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DateProvider>
)
