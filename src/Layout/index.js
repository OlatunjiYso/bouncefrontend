import React from 'react';
import './Layout.css';

import TopNav from '../Components/TopNav';
import FootNav from '../Components/Footer';
import UsersTable from '../Components/UsersTable';



const AppLayout = () => (
  <body>
    <header className="layout-header">
      <TopNav />
    </header>
    <section className="layout-content">
      <UsersTable />
      </section>
    <footer className="layout-footer">
      <FootNav />
    </footer>

  </body>
);


export default AppLayout;


