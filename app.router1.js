import { Route, Routes } from "react-router-dom"
import { BasicInfo } from "./components/lead-management/basic-info/basic-info"
import { Address } from "./components/lead-management/address/address"
import { Nominee } from "./components/lead-management/nominee/nominee"
import { Policy } from "./components/lead-management/policy/policy"
import { Payment } from "./components/lead-management/payment/payment"

export const AppRouter1 = ()=>{
    return(
        <Routes>
        <Route path="/lead-management/basic-info" element={<BasicInfo></BasicInfo>}></Route>
        <Route path="/lead-management/address" element={<Address></Address>}></Route>
        <Route path="/lead-management/nominee-details" element={<Nominee></Nominee>}></Route>
        <Route path="/lead-management/policy" element={<Policy></Policy>}></Route>
        <Route path="/lead-management/payment" element={<Payment></Payment>}></Route>
        </Routes>
    )
 }