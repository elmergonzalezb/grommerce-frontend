import * as React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { routes } from '../config/routes';

const sidebarItems = [
  {
    link: routes.dashboard,
    title: 'Dashboard',
    icon: 'simple-icon-grid'
  },
  {
    link: routes.allCompanies,
    title: 'All Companies',
    icon: 'iconsminds-building'
  },
  {
    link: routes.allProducts,
    title: 'All Products',
    icon: 'iconsminds-shop-3'
  }
];

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="main-menu">
        <div className="scroll">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            <Nav vertical className="list-unstyled">
              {sidebarItems.map((item, i) => {
                return (
                  <NavItem key={i}>
                    <Link to={item.link}>
                      <i className={item.icon} /> <span>{item.title}</span>
                    </Link>
                  </NavItem>
                );
              })}
            </Nav>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};
