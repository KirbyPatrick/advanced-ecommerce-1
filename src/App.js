import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import ProductDetials from './components/ProductDetail';
import Footer from './components/Footer';

class App extends React.Component() {
    render(){
        return (
            <div className="App">
           {/*<Header>*/}
          <Header />
      {/*</Header>*/}
       
          <div className="container">
      
              <div className="row">
      
                  <div className="col-md-3">
                      <p className="lead">Shop Name</p>
                      <div className="list-group">
                          <a href="#" className="list-group-item">Category 1</a>
                          <a href="#" className="list-group-item">Category 2</a>
                          <a href="#" className="list-group-item">Category 3</a>
                      </div>
                  </div>
      
                  <div className="col-md-9">
                      {/*<Carousel>*/}
                      <Carousel/>
                      {/*</Carousel>*/}
                      <div className="row">
                          {/*<ProductDetail>*/}
                          <ProductDetials price='$12.99' productName='Name 1' description='lorem ipsem' reviews='17' productImageUrl="http://placehold.it/320x150" />
                          <ProductDetials price='$52.33' productName='Name 2' description='second product description' reviews='99' productImageUrl="http://placehold.it/320x150" />
                          <ProductDetials price='$275.31' productName='Name 3' description='third description' reviews='76' productImageUrl="http://placehold.it/320x150" />
                          <ProductDetials price='$9.99' productName='Name 4' description='forth description' reviews='2' productImageUrl="http://placehold.it/320x150" />
                          <ProductDetials price='$45.99' productName='Name 5' description='five description' reviews='155' productImageUrl="http://placehold.it/320x150" />
                          {/*</ProductDetail>*/}
                          
      {/*
                          <div className="col-sm-4 col-lg-4 col-md-4">
                              <h4><a href="#">Like this template?</a>
                              </h4>
                              <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                              <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                          </div>
      */}
                      </div>
      
                  </div>
      
              </div>
      
          </div>
         
          <div className="container">
      
              <hr/>
      
            {/*<Footer>*/}
              <Footer />
             {/*</Footer>*/}
          </div>
            </div>
          );
    }

}

export default App;
