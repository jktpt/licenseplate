import { Navbar } from "../../components/navbar/Navbar"
import "./data.scss"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { useEffect,useState } from "react";
import Axios from 'axios'




export const Data = () => {
    const [plate, setPlate] = useState("")
    const [member, setMember] = useState("")
    const [licensePlate,setLicensePlate] = useState([]);
  
    const getLicensePlate = () =>{
      Axios.get('http://localhost:3001/licenseplate').then((response)=>{
        setLicensePlate(response.data)
      })
    }
  
    const addLicensePlate = () =>{
      Axios.post('http://localhost:3001/createlicense',{
        plate:plate,
        member:member
      }).then(()=>{
       setLicensePlate([
        ...licensePlate,
        {
          plate:plate,
          member:member
        }
       ])
      })
    }
  
    const updateLicensePlate = (id) =>{
      //console.log(id)
      //console.log(licensePlate[0].id)
      Axios.put('http://localhost:3001/updatelicense',{id:id}).then((response)=>{
        setLicensePlate(
          licensePlate.map((val)=>{
            console.log("This is val"+ JSON.stringify(val.id))
            return val.id == id ? {
              id:val.id
            } : val;
          })
        )
      })
    }
  
    
  
    const options = [
      { data: "Silver", value: "silver" },
      { data: "Gold", value: "gold" },
      { data: "Platinum", value: "platinum" },
      { data: "Platinum", value: "platinum" },
    ];  
    
    
    const handleChange = (event) => {
      console.log("Handle "+event.target.value);
      setMember(event.target.value);
    };
  

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <div className="App container">
      <h1>Test Database</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="license-plate" className="form-label">
              License Plate : {" "}
            </label>
            <input
              style={{width:"300px"}}
              type="text"
              className="form-control"
              placeholder="License Plate"
              onChange={(event)=>{
                setPlate(event.target.value)
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="member-type" className="form-label">
              Member Type : 
            </label>
            <br></br>
            <select className="form-label" value={member} onChange={handleChange}>
                {options.map((option) => (
                  <option value={option.value}>{option.data}</option>
                ))}
              </select>
          </div>
          <button className="btn btn-success" onClick={addLicensePlate}>Check In</button>
        </form>
        <hr></hr>
        <div className="customer">
          <button className="btn btn-dark" onClick={getLicensePlate}>View Information</button>
          <br/><br/>
          {licensePlate.map((val,key)=>{
            return (
              <div className="license-plate card">
                <div className="card-body text-left">
                  <p className="card-text">License Plate : {val.plate}</p>
                  <p className="card-text">Member Type : {val.membertype}</p>
                  <p className="card-text">Time in : {val.timein}</p>
                  <p className="card-text">Time out : {val.timeout}</p>
                  <div className="d-flex">
                    <button key={licensePlate.id} className="btn btn-danger" onClick={()=>{
                      updateLicensePlate(val.id)
                      getLicensePlate()
                      }}>Check Out</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}
