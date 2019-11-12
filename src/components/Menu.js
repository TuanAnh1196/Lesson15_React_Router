import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const menus = [
   {
      name: 'Trang Chủ',
      to: '/',
      exact: true
   },
   {
      name: 'Giới thiệu',
      to: '/about',
      exact: false
   },
   {
      name: 'Liên Hệ',
      to: '/contact',
      exact: false
   },
]

const MenuLink = ({ label, to, activeOnlyWhenAxact }) => {
   return (
      <Route
         path={to}
         exact={activeOnlyWhenAxact}
         children={
            ({ match }) => {
               var active = match ? 'active abc' : "";
               return (
                  <li className={`my-li ${active}`}>
                     <Link
                        to={to} className='my-link'>{label}
                     </Link>
                  </li>
               )
            }
         }
      />
   )
}

class Menu extends React.Component {

   showMenus = (menus) => {
      let result = null;
      if (menus.length > 0) {
         result = menus.map((menu, index) => {
            return (
               <MenuLink
                  key={index}
                  label={menu.name}
                  to={menu.to}
                  activeOnlyWhenAxact={menu.exact}
               />
            )
         })
      }
      return result;
   }

   render() {
      return (
         <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
               {this.showMenus(menus)}
            </ul>
         </nav>
      );
   }

}

export default Menu;
