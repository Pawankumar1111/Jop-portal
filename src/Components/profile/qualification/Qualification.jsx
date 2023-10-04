import { useState } from 'react';
import {  Dropdown } from 'reactjs-dropdown-component';

const Qualification=()=>{

const [qualification,setqualification]=useState("")
const onChangehandler=()=>{
        console.log() }

        
  const  locations=[
        {
          label: '10th or below',
          value: '10th or below',
        },
        {
          label: '12th',
          value: '12th',
        },
        {
          label: 'ITI or Diploma',
          value: ' TIT or Diploma',
        },
      
        {
          label: 'graduation',
          value: 'graduation',
        },
        {
          label: 'Post graduation and above',
          value: ' Post graduation and above',
        },
      ]
    
  
    return(
        <>
        <Dropdown
            name="location"
            searchable={["Search for location", "No matching location"]}
            title="Select location"
            list={locations}
            onChange={onChangehandler}
          />
        </>
    )
}
export default Qualification;