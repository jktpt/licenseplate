import { Link } from "react-router-dom"
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DiscountIcon from '@mui/icons-material/Discount';
import LogoutIcon from '@mui/icons-material/Logout';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo"><TimeToLeaveIcon className="icon"/></span>
          <span className="logo-text">Parking Admin System</span>
        </Link>
        
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{textDecoration:"none"}}>
              <li>
                  <DashboardIcon className="icon"/>
                  <span>Dashboard</span>
              </li>
            </Link>
            {/* <Link to="/" style={{textDecoration:"none"}}>
                <li>
                  <BarChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
              </Link> */}
            <Link to="/users" style={{textDecoration:"none"}}>
              <li>
                  <PersonSearchIcon className="icon"/>
                  <span>Management</span>
              </li>
            </Link>
            
            <p className="title">Promotion</p>
            <Link to="/promotion" style={{textDecoration:"none"}}>
              <li>
                  <DiscountIcon className="icon"/>
                  <span>Promotion</span>
              </li>
            </Link>
            <p className="title">Add Data</p>
            <Link to="/adddata" style={{textDecoration:"none"}}>
              <li>
                  <PersonAddAltIcon className="icon"/>
                  <span>Add Data</span>
              </li>
            </Link>
            <p className="title">User</p>
            <Link to="/" style={{textDecoration:"none"}}>
              <li>
                  <LogoutIcon className="icon"/>
                  <span>Logout</span>
              </li>
            </Link>
        </ul>
      </div>
      {/* <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div> */}
    </div>
  );
};
