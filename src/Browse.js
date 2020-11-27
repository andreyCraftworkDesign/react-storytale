import React, { Component } from 'react';
import './base-css.css';

import {Container, Col, Row} from "react-bootstrap";
import $ from "jquery";
import Product from "./components/product/product";
import WidgetPack from "./components/widget-pack/widget-pack";
import Tabs from "./components/tabs/Tabs";
import BeforeFooter from "./BeforeFooter";
import Footer from "./Footer";
import Header from "./Header"

import firstImage from "./img/elements/08.svg";
import secondImage from "./img/elements/09.svg";
import fourthImage from "./img/elements/10.svg";
import fifthImage from "./img/elements/13.svg";
import sixthImage from "./img/elements/11.svg";
import seventhImage from "./img/elements/12.svg";

const API_PICTURES = 'http://localhost:7002/api/illustration/search';
const API_PACKS = 'http://localhost:7002/api/illustration/packs';
const API_TYPES = 'http://localhost:7002/api/illustration/types';
const API_MOODS = 'http://localhost:7002/api/illustration/moods';
const API_CATEGORIES = 'http://localhost:7002/api/illustration/categories';

class Browse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packs: [],
      packsStatus: false,
      pictures: [],
      picturesStatus: false,
      types: [],
      typesStatus: false,
      moods: [],
      moodsStatus: false,
      categories: [],
      categoriesStatus: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickCustom = this.handleClickCustom.bind(this);
    this.handleClickLinks = this.handleClickLinks.bind(this);
  }

  componentDidMount() {
    fetch(API_PICTURES)
      .then(response => response.json())
      .then(data => this.setState({ pictures: data.result , picturesStatus: data.success}));

    fetch(API_TYPES)
      .then(response => response.json())
      .then(data => this.setState({ types: data.result.types, typesStatus: data.success}));

    fetch(API_MOODS)
      .then(response => response.json())
      .then(data => this.setState({ moods: data.result.moods, moodsStatus: data.success}));

    fetch(API_CATEGORIES)
      .then(response => response.json())
      .then(data => this.setState({ categories: data.result.categories, categoriesStatus: data.success}));

    fetch(API_PACKS)
      .then(response => response.json())
      .then(data => this.setState({ packs: data.result, packsStatus: data.success}));
  }

  handleClick(evt) {
    if (evt.target.innerHTML.toLowerCase() === "packs") {
      $(".main-content")[0].classList.add('padding-custom');
      Array.from($(".choice-illustration" )).forEach(element => element.classList.add('d-none'));
      Array.from($(".choice-pack" )).forEach(element => element.classList.remove('d-none'));
    }
    else if (evt.target.innerHTML.toLowerCase() === "illustrations") {
      $(".main-content")[0].classList.remove('padding-custom');
      Array.from($(".choice-pack" )).forEach(element => element.classList.add('d-none'));
      Array.from($(".choice-illustration" )).forEach(element => element.classList.remove('d-none'));
    }
  }

  handleClickCustom(evt) {
    evt.preventDefault();
    $(evt.target).siblings().toggleClass("hidden");
  }

  handleClickLinks(evt) {
    evt.preventDefault();
    Array.from(evt.target.closest("ul").querySelectorAll('a')).forEach(element => element.classList.remove('active'));
    evt.target.classList.add('active');
  }


  render() {
    const { pictures } = this.state;
    const { types } = this.state;
    const { moods } = this.state;
    const { categories } = this.state;
    const { packs } = this.state;

    return (

    <div className="browse">
    <Header/>

      <section className="intro">
        <div className="container-custom">
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                <img src={firstImage} alt="" className="position-absolute first"/>
                <img src={secondImage} alt="" className="position-absolute second"/>
                <img src={fourthImage} alt="" className="position-absolute fourth"/>
                <img src={fifthImage} alt="" className="position-absolute fifth"/>
                <img src={sixthImage} alt="" className="position-absolute sixth"/>
                <img src={seventhImage} alt="" className="position-absolute seventh"/>
              </div>
            </div>
            <div className="col-lg-8 mx-auto">
              <h1 className="title"> Browse all illustrations</h1>
              <Tabs
                array={[`Illustrations`, `Packs`]}
                updateData={this.handleClick}
              />
              <section className="form choice-illustration">
                <form>
                  <input className="form-control form-control-lg" type="text" placeholder="Search for illustrations..." />
                </form>
                <p className="example">eg. <span>error 404</span>, <span>walkthrow</span>, <span>business</span>, <span>3d</span></p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="aside position-relative">
        <div className="container-custom">
          <div className="row">
            <div className="col-lg-2 col-md-3 p-0 choice-illustration aside-column">
              <div className="container-custom">
                <div className="collapse-wrapper" onClick={this.handleClickCustom}>
                  <div className="item">
                    <a className="btn collapse-btn">
                      Type
                      <span>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.14885 2.33992C7.53938 1.9494 7.53938 1.31623 7.14885 0.925706C6.75833 0.535181 6.12516 0.535181 5.73464 0.925706L5.08554 1.5748C4.33656 2.32378 3.12222 2.32379 2.37323 1.5748L1.73626 0.937825C1.33906 0.540632 0.695087 0.540632 0.297895 0.937825C-0.0992977 1.33502 -0.0992984 1.97899 0.297894 2.37618L2.99084 5.06913C3.38804 5.46633 4.03201 5.46633 4.4292 5.06913L5.14599 4.35235C5.14731 4.35102 5.14731 4.34888 5.14599 4.34756C5.14467 4.34624 5.14467 4.3441 5.14599 4.34278L7.14885 2.33992Z" fill="black"/>
                        </svg>
                      </span>
                    </a>
                    <div className="collapse collapse-element" id="collapseType">
                      <ul>
                       {types.map(type =>
                         <li key={type.id}>
                           <a href="#" className={`collapse-inner-link ${type.id === 1 ? `active` : null}`} onClick={this.handleClickLinks}>{type.name}</a>
                         </li>
                       )}
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <a className="btn collapse-btn">
                      Mood
                      <span>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.14885 2.33992C7.53938 1.9494 7.53938 1.31623 7.14885 0.925706C6.75833 0.535181 6.12516 0.535181 5.73464 0.925706L5.08554 1.5748C4.33656 2.32378 3.12222 2.32379 2.37323 1.5748L1.73626 0.937825C1.33906 0.540632 0.695087 0.540632 0.297895 0.937825C-0.0992977 1.33502 -0.0992984 1.97899 0.297894 2.37618L2.99084 5.06913C3.38804 5.46633 4.03201 5.46633 4.4292 5.06913L5.14599 4.35235C5.14731 4.35102 5.14731 4.34888 5.14599 4.34756C5.14467 4.34624 5.14467 4.3441 5.14599 4.34278L7.14885 2.33992Z" fill="black"/>
                        </svg>
                      </span>
                    </a>
                    <div className="collapse collapse-element" id="collapseMood">
                      <ul>
                      {moods.map(mood =>
                        <li key={mood.id}>
                            <a href="#" className={`collapse-inner-link ${mood.id === 1 ? `active` : null}`} onClick={this.handleClickLinks}>{mood.name}</a>
                        </li>
                      )}
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <a className="btn collapse-btn collapse-btn-large">
                      Categories
                      <span>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.14885 2.33992C7.53938 1.9494 7.53938 1.31623 7.14885 0.925706C6.75833 0.535181 6.12516 0.535181 5.73464 0.925706L5.08554 1.5748C4.33656 2.32378 3.12222 2.32379 2.37323 1.5748L1.73626 0.937825C1.33906 0.540632 0.695087 0.540632 0.297895 0.937825C-0.0992977 1.33502 -0.0992984 1.97899 0.297894 2.37618L2.99084 5.06913C3.38804 5.46633 4.03201 5.46633 4.4292 5.06913L5.14599 4.35235C5.14731 4.35102 5.14731 4.34888 5.14599 4.34756C5.14467 4.34624 5.14467 4.3441 5.14599 4.34278L7.14885 2.33992Z" fill="black"/>
                        </svg>
                      </span>
                    </a>
                    <div className="collapse collapse-element" id="collapseCategories">
                      <ul>
                      {categories.map(category =>
                        <li key={category.id}>
                          <a href="#" className={`collapse-inner-link ${category.id === 1 ? `active` : null}`} onClick={this.handleClickLinks}>{category.name}</a>
                        </li>
                      )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col main-content">
              <section className="illustrations-pack choice-illustration">
                <div className="illustrations">
                {pictures.map(picture =>
                  <Product
                    key={picture.id}
                    cover={picture.cover}
                  />
                )}
                </div>
              </section>

              <section className="browse-by-packs choice-pack d-none">
                <div className="wrapper">

                {packs.map(pack =>
                  <WidgetPack
                    key={pack.id}
                    name={pack.name}
                    cover={pack.cover}
                    quantity={pack.illustrations.length}
                  />
                )}

                </div>
              </section>
              
              <div className="row">
                <div className="col mx-auto">
                  <a href="#" className="base-link mx-auto">Load more<span className="choice-illustration">&thinsp;&thinsp;illustrations</span><span className="choice-pack d-none">&thinsp;&thinsp;packs</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeFooter/>
      <Footer/>

    </div>

    );
  }

}

export default Browse;
