import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"
import { Widget } from "../../components/widget/Widget"
import { Feature } from "../../components/feature/Feature"
import { Chart } from "../../components/chart/Chart"
import { Tables } from "../../components/table/Tables"
import './home.scss'
import { useEffect,useState } from "react";
import Axios from 'axios'

export const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(null)
  const [dataOfCount, setDataOfCount] = useState([])
  const [dataOfToday, setDataOfToday] = useState([])
  const [dataParkingCar, setParkingCar] = useState([])
  const [dataOutOfCar, setOutOfCar] = useState([])

  const getDataOfCount = () =>{
    Axios.get('http://localhost:3001/totalcar').then((response)=>{
      setDataOfCount(response.data)
    })
  }
 
  const getDataOfToday = () =>{
    Axios.get(' http://localhost:3001/todaycar').then((response)=>{
      setDataOfToday(response.data)
    })
  }

  const getParkingCar = () =>{
    Axios.get(' http://localhost:3001/parkingcar').then((response)=>{
      setParkingCar(response.data)
    })
  }

  const getOutOfCar = () =>{
    Axios.get(' http://localhost:3001/outofcar').then((response)=>{
      setOutOfCar(response.data)
    })
  }

  useEffect(()=>{
    fetch("http://localhost:3001/recently").then(response=>{
      if(response.ok){
        getDataOfCount()
        getDataOfToday()
        getParkingCar()
        getOutOfCar()
        return response.json()
      }
      throw response;
    }).then(res=>{
      setData(res);
    }).catch(err =>{
      console.log(err)
    }).finally(()=>{
      setLoading(false)
    })
  },[])


  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="top">
          <div className="widgets">
            <span className="recently">Recently Cars</span>
              {data.map((val,key)=>{
                return (
                    <Widget data={data[key]} />
                )
              })}
          </div>
          <div className="listContainer">
              <div className="listTitle">History of Recently Cars</div>
              <Tables data={data}/>
          </div>
          <div className="dataoffset">
            <div className="top-offset">
              <div className="total-car">{dataOfCount.map((val,key)=>{return val.numberOfPlate})}<span className="font-Offset">Total cars</span></div>
              <div className="c">{dataParkingCar.map((val,key)=>{return val.todayparking})}<span className="font-Offset">Parking cars</span></div>
            </div>
            <div className="bottom-offset">
              <div className="today-car">{dataOfToday.map((val,key)=>{return val.todayCar})}<span className="font-Offset">Today cars</span></div>
              <div className="d">{dataOutOfCar.map((val,key)=>{return val.outofcar})}<span className="font-Offset">Out of cars</span></div>
            </div>
          </div>
        </div>
        <div className="charts">
            <Chart/>
            <Feature/>
        </div>
      
      </div>
    </div>

  )
}

