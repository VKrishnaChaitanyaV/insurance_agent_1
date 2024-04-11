import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components/layout/layout';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './components/login/login';
import { Registeration } from './components/registeration/registeration';
import { BasicInfo } from './components/lead-management/basic-info/basic-info';
import { ContactManagement } from './components/contact-management/contact-management';
import { Address } from './components/lead-management/address/address';
import { Nominee } from './components/lead-management/nominee/nominee';
import { LeadManagement } from './components/lead-management/lead-management';
import { AppRouter } from './app.router';
import { Authentication } from './components/authentication/authentication';
import { AgentContext } from './services/agent-context.service.js';
import {useEffect, useState} from 'react';


function App() {

  const[agent, setAgent]=useState(null);

  useEffect(()=>{
    let data = sessionStorage.getItem("agent");
    if(data !=null  && data!= undefined){
      setAgent(JSON.parse(data));
      
    }
    //alert(data);
 }, []);

  return (
    <AgentContext.Provider value={agent}>
      <BrowserRouter>
        <Authentication>
          <AppRouter></AppRouter>
        </Authentication>
      </BrowserRouter>
    </AgentContext.Provider>
  )
}

export default App;
