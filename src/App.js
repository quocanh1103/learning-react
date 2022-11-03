import "./App.css";
import Card from "./components/card";
import Head from "./components/Header/head";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";
import Form from "./components/Form";
import Demo from "./components/Demo/Demo";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container-parent">
      <div className="handle-head">
        <Head />
      </div>

      <div className="container-display">
        {/* <div className="handle-sidebar">
          <Sidebar />
        </div> */}
        {/* <div className="handle-card">
          <div className="container">
            <Card status="new" />
            <Card status="new" />
            <Card status="new" />
            <Card status="new" />
          </div>
          <div className="container">
            <Card status="new" />
            <Card status="new" />
            <Card status="new" />
            <Card status="new" />
          </div>
          <div className="container">
            <Card status="new" />
            <Card status="new" />
            <Card status="new" />
            <Card status="new" />
          </div>
        </div> */}
      </div>
      
      <div className="CreateForm">
        <Form />
      </div>

      {/* <div>
        <Demo />
      </div> */}

      {/* <div>
        <Footer />
      </div> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Head />} />
          <Route path="/house" element={<Form />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
