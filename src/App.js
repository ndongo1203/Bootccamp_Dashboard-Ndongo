import React, { useState } from "react";
import Sidebar from "./compenents/pages/Sidebar";
import './App.css'
import Navbar from './compenents/pages/Navbar'
import Content from "./compenents/pages/Content";

function App() {

  const sidebarItems = [
    { icon: 'bi bi-grid', text: 'Overview', id: 'item1' },
    { icon: 'bi bi-file-earmark-bar-graph', text: 'Document', id: 'item2' },
    { icon: 'bi bi-calendar2-minus', text: 'Payments', id: 'item3' },
    { icon: 'bi bi-chat-left', text: 'Messages', id: 'item4' },
    { icon: 'bi bi-transparency', text: 'Report Center', id: 'item5' },
  ];

  const [toggle, setToggle] = useState(false);

  function Toggle() {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          {toggle && <div className="col-md-2">
              <Sidebar items={sidebarItems} />
              </div>
            }
          <div className="col-md-10 m-0 p-0 min-vh-100 bg-light">
            <Navbar Toggle={Toggle} />
            <Content />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
