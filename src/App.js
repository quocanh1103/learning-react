import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Head from "./components/Header/head";
import Sidebar from "./components/sidebar/sidebar";
import footer from "./components/footer/footer";
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
            <Card status="new" className="new" />
            <Card status="doing" />
            <Card status="done" />
            <Card status="new" />
          </div>
          <div className="container">
            <Card status="new" />
            <Card status="doing" />
            <Card status="done" />
            <Card status="new" />
          </div>
          <div className="container">
            <Card status="new" />
            <Card status="doing" />
            <Card status="done" />
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
