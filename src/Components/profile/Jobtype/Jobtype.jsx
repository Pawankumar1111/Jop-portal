import { useState } from 'react';
import {  Dropdown } from 'reactjs-dropdown-component';

const Jobtype=()=>{

const [qualification,setqualification]=useState("")
const onChangehandler=()=>{
        console.log() }

        
  const  Job=[
        {
          label: 'Full Time',
          value: 'Full Time',
        },
        {
          label: 'Part Time',
          value: 'Part Time',
        },
        {
          label: 'Internship',
          value: ' Internship',
        },
      
        {
          label: 'Training',
          value: 'Training',
        },
        {
          label: 'Work from Home',
          value: ' Work from Home',
        },
      ]
    
  
    return(
        <>
        <Dropdown
            name="Job type"
            searchable={["Search for Job type", "No matching Job type"]}
            title="Select Job type"
            list={Job}
            onChange={onChangehandler}
          />
        </>
    )
}
export default Jobtype;