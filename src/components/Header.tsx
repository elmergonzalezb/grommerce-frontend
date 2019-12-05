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
          <div className="position-relative d-inline-block">
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
              />
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span className="mr-1">
                {/* {user.firstName} {user.lastName} */}
              </span>
              <span>
                {/* <img
                    alt="Profile"
                    src={profilePic}
                    style={{ backgroundColor: this.state.bgHEX }}
                  /> */}
              </span>
            </DropdownToggle>
            {/* <DropdownMenu className="mt-3" right>
                {this.props.dropDownItems.map((item, i) => {
                  if (item.type === 'link') {
                    return (
                      <Link to={item.to}>
                        <DropdownItem>
                          <i className={item.icon} /> {item.text}
                        </DropdownItem>
                      </Link>
                    );
                  } else if (item.type === 'divider') {
                    return <DropdownItem divider />;
                  } else if (item.type === 'logout') {
                    return (
                      <DropdownItem onClick={() => this.handleLogout()}>
                        <i className="simple-icon-power mr-2" /> Sign out
                      </DropdownItem>
                    );
                  }
                })}
              </DropdownMenu> */}
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
});

export default Header;
