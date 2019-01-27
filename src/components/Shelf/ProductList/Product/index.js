import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';
// import ReactImageMagnify from 'react-image-magnify';
// import CursorZoom from 'react-cursor-zoom';
// import HoverImage from "react-hover-image"
import './style.css'

const Product = ({ product, addProduct }) => {
  let formattedPrice = formatPrice(product.price, product.currencyId);
  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
          {/* <CursorZoom
                image={{
                    src: "../../../../static/products/${product.sku}_1.jpg",
                    width: 400,
                    height: 300
                }}
                zoomImage={{
                    src: "../../../../static/products/${product.sku}_1.jpg",
                    width: 1600,
                    height: 1200
                }}
                cursorOffset={{ x: 0, y: 0 }}
           / > */}
            {/* <HoverImage
            hoverSrc={require(`../../../../static/products/${product.sku}_1.jpg`)} */}
       
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
     

      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {/* {productInstallment} */}
      </div>
      
      <div className="shelf-item__buy-btn" >See More</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired

};

export default connect(
  null,
  { addProduct }
)(Product);
