import { emphasize } from "@mui/material";
import React,{useState} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';


const Emp=(props :any)=>{
    //const [name,age,companyId,id]=props.employee
    const [buttonText, setButtonText] = useState("PUT"); 

    return(
        <div className="empdisplay">
            <List>
            <ListItem><label> Employee Name :{props.name}</label></ListItem>
            <ListItem><label>Age :</label>{props.age}</ListItem>
            <ListItem><label>CompanyId:</label>{props.companyId}</ListItem>
            <ListItem><label>Id:</label>{props.id}</ListItem>
            </List>
            <Button variant="contained"onClick={ () => setButtonText("Reviewed")}>{buttonText}</Button>
        </div>
    )
}

export default Emp;
