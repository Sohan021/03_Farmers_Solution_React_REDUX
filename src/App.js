import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { useSelector } from "react-redux";
import RouteComponemt from "./components/common/RouteComponent";
import NavigationComponent from './components/common/NavigationComponent';
import SideBar from './components/common/SideBarComponent';

const App = () => {

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <div className="App wrapper">
        {userInfo ? (
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        ) : (
            <h1></h1>
          )}
        <RouteComponemt toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />

      </div>
    </Router>
  );
};


export default App;
