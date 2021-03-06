import React from "react";

const ProductDetials = props => {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.productImageUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.price}</h4>
          <h4>
            <a href="#">{props.productName}</a>
          </h4>
          <p>
            {" "}
            {props.description}{" "}
            <a target="_blank" href="http://www.bootsnipp.com">
              Bootsnipp - http://bootsnipp.com
            </a>
          </p>
          <button
            onClick={() =>
              props.onClick({
                //looking in the react tool in my browser, i can see the product name and
                // price being passed on click due to the code below
                productInCart: props.productName,
                productPriceInCart: props.price
              })
            }
          >
            Add to cart
          </button>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.reviews}</p>
          <p>
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetials;
