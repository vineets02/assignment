import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import AddLead from "./pages/AddLead"
import Leads from "./pages/Leads"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="AddLead" />} />
        <Route path="/addlead" element={<AddLead />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </>
  )
}

export default App
