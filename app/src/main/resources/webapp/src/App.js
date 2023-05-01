import React, { useState } from "react";
import "./App.css";
import Header from "./header/header";
import Main from "./main/main";
import Login from "./login/login";
import Footer from "./footer/footer";
import Sign from "./sign/sign";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./Board/Board";
// import Form from "./Form/Form";
import Info from "./info/info";
import List from "./list/list";
import FormUpdate from "./FormUpdate/FormUpdate";
import AdminMember from './AdminMember/AdminMember';
import AdminBoard from './AdminBoard/AdminBoard';
import View from "./View/View";

function App() {
  // const [file, setFile] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
        <Route path="/web/" element={<Main />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/AdminMember" element={<AdminMember />} />
          <Route path="/AdminBoard" element={<AdminBoard />} />
          <Route path="/List" element={<List />} />
          <Route
            path="/View/:no"
            element={<View user={user} setUser={setUser} />}
          />
          <Route
            path="/FormUpdate/:no"
            element={<FormUpdate />}

          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
