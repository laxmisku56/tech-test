import React,{useState,useEffect} from 'react';
import Emp from './Employee';
import './App.css';
import { emphasize } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  const [Employee,setEmployee]=useState<any[]>([]);
    
    useEffect(()=>{
        fetch("https://627122286a36d4d62c21cf1d.mockapi.io/api/v1/employee")
        .then(function(response){
            return response.json()
        })
        .then(myjson => setEmployee(myjson))
        
    },[])
   
   

  return (
    <div className="App">{
      Employee.map((emp) => {
        return <Emp name={emp.name} age={emp.age} companyId={emp.companyId} id={emp.id}/>
        

      })
    }
    <Button variant="outlined">Change View</Button>

    
     
    </div>
  );
}

export default App;
