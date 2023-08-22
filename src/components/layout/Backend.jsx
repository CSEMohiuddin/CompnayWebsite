
import { Outlet } from "react-router-dom"
import DashHeader from "./DashHeader"

function Backend({children}) {
  return (
    <div>
        <DashHeader />
        <div><Outlet /> </div>
    </div>
  )
}

export default Backend