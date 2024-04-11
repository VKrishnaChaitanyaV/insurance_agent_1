import { Routes, Route } from "react-router-dom"
import { Dashboard } from "./components/dashboard/dashboard";
import { LeadManagement } from "./components/lead-management/lead-management"
import { ContactManagement } from "./components/contact-management/contact-management"
import { ClientManagement } from "./components/client-management/client-management"
import { Login } from "./components/login/login"
import { Registration } from "./components/registeration/registeration"
import { Layout } from './components/layout/layout';
import { LeadEdit } from "./components/lead-management/lead-edit/lead-edit"


 
 export const AppRouter = ()=>{
    return(
        <Routes>
            <Route path="/" element={ <Login></Login> }></Route>
            <Route path="/login" element={ <Login></Login> }></Route>
            <Route path="/registration" element={ <Registration></Registration> }></Route>
            <Route path="/contact-management" element={
                <Layout>
                    <ContactManagement></ContactManagement>
                </Layout>
            }></Route>
            <Route path="/lead-management" element={
                <Layout>
                    <LeadManagement></LeadManagement>
                </Layout>                
                }></Route>
            <Route path="/edit-lead/:id" element={
                <Layout>
                    <LeadEdit></LeadEdit>
                </Layout>                
                }></Route>
            <Route path="/client-management" element={
                <Layout>
                    <ClientManagement></ClientManagement>
                </Layout>
            }></Route>
            <Route path="/dashboard" element= {
                <Layout>
                    <Dashboard></Dashboard>
                </Layout> 
            }></Route>
        </Routes>
    )
 }