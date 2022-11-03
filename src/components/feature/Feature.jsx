import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar,buildStyles,CircularProgressbarWithChildren  } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
const {format,zonedTimeToUtc,} = require("date-fns-tz");

export const Feature = () => {
  const moment = require('moment')
  const lastestDay = moment().format('DD MMMM YYYY HH:mm:ss')

  //console.log("moment"+moment().format('DD/MMMM/YYYY HH:mm:ss'))

  return (
    <div className="feature">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featureChart">
              {/* Change the value and text to update on your screen in Total revenue */}
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} styles={buildStyles({
                    textColor: "#696969",
                    pathColor: "#00CCCC",
                    trailColor: "#e8e7e6"
                     })}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">700 THB</p>
            <p className='desc'>minimum daily income 1000 THB</p>
            <p className="desc">latest update {lastestDay}</p>
        </div>
    </div>
  )
}
