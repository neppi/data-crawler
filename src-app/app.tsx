import React, { useState } from 'react';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/Sidebar';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const toggle = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <div>
      <div className="App wrapper">
        <SideBar toggle={toggle} isOpen={sidebarIsOpen} />
        <Content toggle={toggle} isOpen={sidebarIsOpen} />
      </div>
      <Footer />
    </div>
  );
};

const OuterApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(<OuterApp />, document.getElementById('app-content'));
