import "./widget.scss";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { WidgetTrue } from "./WidgetTrue";
import { WidgetFalse } from "./WidgetFalse";
const {format,zonedTimeToUtc,} = require("date-fns-tz");

export const Widget = ({data}) => {
      const moment = require('moment')
      var timeIn = data.timein
      var timeOut = data.timeout
      var dateTimeIn = moment(timeIn)
      var dateTimeOut = moment(timeOut)
      var timeInFormating = dateTimeIn.utc().format('YYYY-MM-DD HH:mm:ss')
      var timeOutFormating = dateTimeOut.utc().format('YYYY-MM-DD HH:mm:ss')

      function GenerateTimeout(props){
          return (props.data =="Invalid date" ? <WidgetTrue/> : <WidgetFalse/>)
          // if(props.data == null || props.data == "Invalid date" || props.data == "Not check out"){
          //   return <WidgetTrue/>
          // }
          // return <WidgetFalse/>
      }

      function GetColor(props){
        return (props.data =="Invalid date" ? <DirectionsCarIcon className="positive"/> : <DirectionsCarIcon className="negative"/>)
      }

      return (
        <div className="widget">
          <div className="before-left"><GetColor data={timeOutFormating}/></div>
          <div className="left">
            <span className="license">License Plate : <span className="font-plate">{data.plate}</span></span>
            {/* <span className="license">Member Type : <span className="font-plate">{data.membertype}</span></span> */}
            <span className="license">Time in : <span className="font-plate">{timeInFormating}</span></span>
            <span className="license">Time out : <span className="font-plate">{timeOutFormating}</span></span>
          </div>
          <GenerateTimeout data={timeOutFormating}/>
        </div>
      )
};
