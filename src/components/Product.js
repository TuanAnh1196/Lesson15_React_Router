import React from 'react';

class Product extends React.Component {
  render(){
    let {match} = this.props;
    let name = match.params.slug;
    
    
    return (
      <div className="App">
        Chi tiết sản phẩm : {name}
      </div>
    );
  }
  
}

export default Product;
