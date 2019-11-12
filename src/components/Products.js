import React from 'react';
import { NavLink,Route } from 'react-router-dom';
import Product from "./Product";
class Products extends React.Component {
   render() {
      let products = [
         {
            id: 1,
            slug: 'iphone',
            name: 'Iphone 7 PLus',
            price: 350
         },
         {
            id: 2,
            slug: 'xiaomi',
            name: 'Xiaomi Note 7',
            price: 400
         },
         {
            id: 3,
            slug: 'sam-sung',
            name: 'Samsung Galaxy A3',
            price: 240
         },
      ]

      let { match } = this.props;
      let url = match.url;
      let result = products.map((product, index) => {
         return (
            <NavLink to={`${url}/${product.slug}`} key={index}>
               <li className="list-group-item"  >
                  {product.id}-{product.name}-{product.price}
               </li>
            </NavLink>

         );
      })
      let {location} = this.props;
      console.log(location);
      
      return (
         <div className="App">
            <h1>Danh Sách Sản Phẩm </h1>

            <div className="row">
               <ul className="list-group">
                  {result}
               </ul>
            </div>
            
            <div className="row">
               <Route path="/product/:slug" component={Product} />
            </div>
            

         </div>
      );
   }

}

export default Products;
