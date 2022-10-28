import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Head from "./components/Header/head";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="container-parent">
      <div className="handle-head">
        <Head />
      </div>
      <div className="container-display">
        <div className="handle-sidebar">
          <Sidebar />
        </div>
        <div className="handle-card">
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
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
