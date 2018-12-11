import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import ProductDetials from "./components/ProductDetail";
import Footer from "./components/Footer";
import State from "./state";
import CheckoutButton from "./components/CheckoutButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfItemsInCart: State.numberOfItemsInCart,
      itemsInCart: []
    };
  }
  //function to handle the onClick on the product Details components.
  handleClick = itemClicked => {
    const newItemsInCart = this.state.itemsInCart;
    newItemsInCart.push(itemClicked);
    this.setState({
      numberOfItemsInCart: this.state.numberOfItemsInCart + 1,
      itemsInCart: newItemsInCart
    });
  };

  render() {
    return (
      <div className="App">
        <Header cartCounter={this.state.numberOfItemsInCart} />

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="lead">Shop Name</p>
              <div className="list-group">
                <a href="#" className="list-group-item">
                  Category 1
                </a>
                <a href="#" className="list-group-item">
                  Category 2
                </a>
                <a href="#" className="list-group-item">
                  Category 3
                </a>
              </div>
              <CheckoutButton />
            </div>

            <div className="col-md-9">
              <Carousel />
              <div className="row">
                {/* below i'm pulling the info from the state into the component
                as opposed to hard coding them. */}
                <ProductDetials
                  price={State.products[0].price}
                  productName={State.products[0].name}
                  description={State.products[0].description}
                  reviews={State.products[0].reviews}
                  productImageUrl={State.products[0].imgUrl}
                  onClick={this.handleClick}
                />
                <ProductDetials
                  price="$52.33"
                  productName="Name 2"
                  description="second product description"
                  reviews="99"
                  productImageUrl="http:placehold.it/320x150"
                  onClick={this.handleClick}
                />
                <ProductDetials
                  price="$275.31"
                  productName="Name 3"
                  description="third description"
                  reviews="76"
                  productImageUrl="http:placehold.it/320x150"
                  onClick={this.handleClick}
                />
                <ProductDetials
                  price="$9.99"
                  productName="Name 4"
                  description="forth description"
                  reviews="2"
                  productImageUrl="http:placehold.it/320x150"
                  onClick={this.handleClick}
                />
                <ProductDetials
                  price="$45.99"
                  productName="Name 5"
                  description="five description"
                  reviews="155"
                  productImageUrl="http:placehold.it/320x150"
                  onClick={this.handleClick}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <hr />

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
