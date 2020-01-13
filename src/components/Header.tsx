import * as React from 'react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

import { observer } from 'mobx-react';
import { HeaderStoreContext } from 'src/stores/header';

const Header: React.FC = observer(() => {
  const headerStore = React.useContext(HeaderStoreContext);
  const { containerClassnames } = headerStore.classNames;

  const [profile, setProfile] = React.useState<boolean>(false);
  const [notifcount, setNotifcount] = React.useState<number>(0);

  const menuButtonClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    containerClassnames: string
  ) => {
    e.preventDefault();
    setTimeout(() => {
      var event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);
    headerStore.setContainerClassnames(containerClassnames);
  };

  return (
    <nav className="navbar fixed-top">
      <NavLink
        to="/"
        className="menu-button d-md-block"
        onClick={e => {
          menuButtonClick(e, containerClassnames);
        }}
      >
        {/* <Icon icon="ICON_LOGO" className="icon" /> */}
        <i className="iconsminds-align-justify-all" />
      </NavLink>

      <Link className="navbar-logo" to="/">
        {/* <span className="logo d-none d-xs-block" />
          <span className="logo-mobile d-block d-xs-none" /> */}
        <img
          src="https://res.cloudinary.com/reeversedev/image/upload/v1562266145/Grommerce_dtdki6.jpg"
          alt="Grommerce"
          className="logo"
        />
      </Link>

      <div className="ml-auto">
        <div className="header-icons d-inline-block align-middle">
          <div className="position-relative d-flex justify-content-between">
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle
                className="header-icon notificationButton"
                color="empty"
              >
                <i className="simple-icon-bell" />
                {notifcount > 0 ? (
                  <span className="count">{notifcount}</span>
                ) : null}
              </DropdownToggle>
              <DropdownMenu
                className="position-absolute mt-3 scroll"
                right
                id="notificationDropdown"
              >
                <p className="text-center text-muted">Nothing to show</p>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span className="mr-1 name">Bradley Cooper</span>
              <span>
                <img
                  src="https://www.biography.com/.image/t_share/MTE1ODA0OTcxNTEyODU4MTI1/bradley-cooper-547062-1-402.jpg"
                  alt="Profile Picture"
                  height="40"
                  className="rounded ml-3"
                />
              </span>
            </DropdownToggle>
            <DropdownMenu className="position-absolute mt-3 scroll" right>
              <li className="p-2">
                <Link to="/profile">
                  <i className="simple-icon-user"></i>
                  <span className="ml-2">Profile</span>
                </Link>
              </li>
              <li className="p-2">
                <Link to="/settings">
                  <i className="simple-icon-settings"></i>
                  <span className="ml-2">Settings</span>
                </Link>
              </li>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
});

export default Header;
