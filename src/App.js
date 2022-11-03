import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/home/Home";
import { Login } from "./page/login/Login"
import { List } from "./page/list/List"
import { Single } from "./page/single/Single"
import { New } from "./page/new/New"
import { Data } from "./components/addData/Data" 

//import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="adddata">
              <Route index element={<Data/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
