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

  render() {
    const { pictures } = this.state;
    const { picturesStatus } = this.state;
    const { types } = this.state;
    const { moods } = this.state;
    const { categories } = this.state;
    const { packs } = this.state;

    console.log(packs);

    return (

    <div className="browse">
    <Header/>
    {/*
      <header className="page-header">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#">
            <svg width="146" height="40" viewBox="0 0 146 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56.496 17.792L59.232 16.6639C58.368 14.384 55.536 13.448 53.712 13.664C50.976 14 49.416 15.9439 49.416 17.7199C49.416 19.1119 50.736 20.384 52.2 20.84C53.424 21.224 56.448 21.32 56.304 22.712C56.208 23.6 54.744 23.8879 53.784 23.672C52.824 23.4559 52.08 22.688 51.792 21.92L48.96 23.144C49.56 24.656 51.168 26.504 54.36 26.504C57.84 26.504 59.472 24.392 59.472 22.784C59.472 21.2 58.68 19.6399 56.088 19.016C53.592 18.4159 52.512 18.2959 52.512 17.408C52.512 16.784 53.448 16.4479 54.264 16.4479C54.912 16.4479 56.112 16.808 56.496 17.792Z" fill="black"/>
              <path d="M68.7795 25.76L67.8915 23.024C67.3875 23.336 66.3555 23.5279 65.8035 22.9039C65.4675 22.5199 65.4195 22.184 65.4195 20.528V17.024H68.2515V14.2639H65.4435V10.7119H62.3955V13.472C62.3955 14 62.2275 14.2639 61.4835 14.2639H60.1875V17.024H62.2515V22.5199C62.2515 23.8879 63.0435 25.784 65.2035 26.216C66.9795 26.576 67.8435 26.12 68.7795 25.76Z" fill="black"/>
              <path d="M68.789 20.12C68.789 23.576 71.525 26.528 75.101 26.528C78.653 26.528 81.389 23.576 81.389 20.12C81.389 16.6639 78.653 13.8559 75.101 13.8559C71.525 13.8559 68.789 16.6639 68.789 20.12ZM71.957 20.1439C71.957 18.1279 73.493 16.7599 75.125 16.7599C76.757 16.7599 78.269 18.1279 78.269 20.1439C78.269 22.3039 76.757 23.576 75.125 23.576C73.493 23.576 71.957 22.3039 71.957 20.1439Z" fill="black"/>
              <path d="M85.9603 26.096L82.8403 26.072V14.3359H85.9603V16.0879C86.3443 15.1519 86.9203 14.576 88.0963 14.1439C88.9603 13.8319 90.4243 13.904 91.2403 14.3839L90.3763 17.24C89.4163 16.784 87.8323 16.7119 86.9203 17.7439C86.1043 18.6799 85.9603 19.3759 85.9603 22.4959V26.096Z" fill="black"/>
              <path d="M93.4158 31.424H96.8718L104.288 14.2639H100.832L97.8798 21.584L94.6878 14.2639L91.2318 14.24L96.1518 25.5919L93.4158 31.424Z" fill="black"/>
              <path d="M113.359 25.76L112.471 23.024C111.967 23.336 110.935 23.5279 110.383 22.9039C110.047 22.5199 109.999 22.184 109.999 20.528V17.024H112.831V14.2639H110.023V10.7119H106.975V13.472C106.975 14 106.807 14.2639 106.063 14.2639H104.767V17.024H106.831V22.5199C106.831 23.8879 107.623 25.784 109.783 26.216C111.559 26.576 112.423 26.12 113.359 25.76Z" fill="black"/>
              <path d="M118.578 26.4799C120.306 26.4799 121.386 25.496 121.914 24.752L122.01 26.12H125.154L125.082 18.2479C125.082 16.5679 124.146 15.0319 121.962 14.216C120.306 13.592 118.29 13.832 117.066 14.528C115.362 15.488 114.714 16.784 114.546 17.768L117.354 18.368C117.642 16.832 118.842 16.184 120.354 16.568C122.01 16.9999 121.746 18.368 121.41 18.632C121.074 18.896 119.682 19.016 118.506 19.184C115.914 19.52 114.09 20.696 114.354 23.312C114.618 25.256 116.034 26.4799 118.578 26.4799ZM119.946 23.96C118.53 24.248 117.498 23.816 117.498 22.6639C117.498 21.056 119.394 21.632 121.962 21.224C122.13 22.424 121.482 23.648 119.946 23.96Z" fill="black"/>
              <path d="M130.885 8.64795H127.549V26.1679H130.885V8.64795Z" fill="black"/>
              <path d="M132.8 20.1439C132.8 15.8479 135.92 13.904 139.112 13.904C142.28 13.904 145.376 15.848 145.016 20.984L136.064 21.08C136.064 22.016 136.952 23.552 138.92 23.672C140.36 23.768 141.272 23.096 141.8 22.088L144.752 23C144.152 24.464 142.28 26.336 139.16 26.336C135.32 26.336 132.8 23.5759 132.8 20.1439ZM136.064 18.7039L141.704 18.68C141.704 17.552 140.504 16.3279 138.632 16.4479C137.504 16.5199 136.208 17.36 136.064 18.7039Z" fill="black"/>
              <path d="M18.1411 0L19.8589 0C24.1471 0 27.2074 0.742605 29.8148 2.13706C32.4222 3.53152 34.4685 5.57783 35.8629 8.18523C37.2574 10.7926 38 13.8529 38 18.1411V21.8589C38 26.1471 37.2574 29.2074 35.8629 31.8148C34.4685 34.4222 32.4222 36.4685 29.8148 37.8629C27.2074 39.2574 24.1471 40 19.8589 40H18.1411C13.8529 40 10.7926 39.2574 8.18523 37.8629C5.57783 36.4685 3.53152 34.4222 2.13706 31.8148C0.742605 29.2074 0 26.1471 0 21.8589L0 18.1411C0 13.8529 0.742605 10.7926 2.13706 8.18523C3.53152 5.57783 5.57783 3.53152 8.18523 2.13706C10.7926 0.742605 13.8529 0 18.1411 0Z" fill="black"/>
              <path d="M17.8105 12.9402C18.2532 9.61289 18.4745 7.94923 19 7.94923C19.5255 7.94923 19.7468 9.61288 20.1895 12.9402L20.7163 16.8997C20.7709 17.3096 20.7982 17.5146 20.9294 17.6549C21.0607 17.7952 21.2634 17.8361 21.6688 17.9178L26.1634 18.8237C28.4299 19.2805 29.5632 19.5089 29.5632 20C29.5632 20.4911 28.4299 20.7195 26.1634 21.1763L21.6688 22.0822C21.2634 22.1639 21.0607 22.2048 20.9294 22.3451C20.7982 22.4854 20.7709 22.6904 20.7163 23.1003L20.1895 27.0598C19.7468 30.3871 19.5255 32.0508 19 32.0508C18.4745 32.0508 18.2532 30.3871 17.8105 27.0598L17.2837 23.1003C17.2291 22.6904 17.2018 22.4854 17.0706 22.3451C16.9393 22.2048 16.7366 22.1639 16.3312 22.0822L11.8366 21.1763C9.57008 20.7195 8.43683 20.4911 8.43683 20C8.43683 19.5089 9.57008 19.2805 11.8366 18.8237L16.3312 17.9178C16.7366 17.8361 16.9393 17.7952 17.0706 17.6549C17.2018 17.5146 17.2291 17.3096 17.2837 16.8997L17.8105 12.9402Z" fill="white"/>
            </svg>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav header-tools ml-auto">
              <li className="nav-item dropdown dropdown-browse">
                <a className="nav-link" href="#">Browse<span className="sr-only">(current)</span></a>
                <div className="dropdown-menu browse-content animate slideIn">
                  <div className="browse-content-inner">
                    <ul>
                      <li>
                        <a href="#" className="nav-link">3D</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Flat</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Hand drawn</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Noise</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Outline</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link bordered">Freebies</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link bordered">Order customs</a>
                      </li>
                    </ul>
                  </div>

                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center" href="#">Plugins <span className="badge green">New</span></a>
              </li>
              <li className="nav-item dropdown dropdown-update"> <a className="d-inline-block align-middle update-link nav-link" href="/updates/" title="Updates">Updates</a>
                <div className="dropdown-menu update-content animate slideIn">
                  <div className="update-content-inner">
                    <a href="https://storytale.io/packages/blotter/" className="event-wrapper d-block">
                      <div className="event-inner">
                        <div className="event-top">
                          <span className="badge green">New</span>
                          <div> <strong>New Blotter Illustrations</strong></div>
                        </div>
                        <div className="event-miidle">
                          <p></p>
                          <p>Blotter Illustrations open the door to a crazy world of unusual and freaky characters. You’ll like them if you’re searching for contrast, uniqueness, and want to spice your design up.</p>
                          <p></p>
                        </div>
                        <div className="event-bottom">
                          <div className="d-flex justify-content-between">
                            <div className="col-auto px-0"><span className="count-product">20 illustrations</span></div>
                            <div className="col-auto px-0"><span className="update-date">15 Sep 2020</span></div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="https://storytale.io/packages/tattoo/" className="event-wrapper d-block">
                      <div className="event-inner">
                        <div className="event-top">
                          <span className="badge green">New</span>
                          <div> <strong>New Tattoo Illustrations</strong></div>
                        </div>
                        <div className="event-miidle">
                          <p></p>
                          <p>Tattoo Illustrations were created in a special old times mood. Do you feel it? 15 outline pieces in a bright color scheme are shining like diamonds.</p>
                          <p></p>
                        </div>
                        <div className="event-bottom">
                          <div className="d-flex justify-content-between">
                            <div className="col-auto px-0"><span className="count-product">15 illustrations</span></div>
                            <div className="col-auto px-0"><span className="update-date">11 Sep 2020</span></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="full_update"> <a href="/updates/" className="d-block text-center">Explore all updates</a></div>
                </div>
              </li>

              <li className="nav-item ">
                <a className="nav-link" href="#">Prices</a>
              </li>
              <li className="nav-item nav-item-auth">
                <a className="nav-link colored blue" href="#">Sign Up</a>
              </li>
              <li className="nav-item nav-item-auth">
                <a className="nav-link" href="#">Sign In</a>
              </li>
              <li className="nav-item nav-item nav-item-authorized">
                <a className="nav-link outline blue" href="#">Get full access</a>
              </li>
              <li className="nav-item user-profile dropdown dropdown-user nav-item nav-item-authorized">
                <a className="nav-link " href="#"><img src="img/user.png" className="avatar" width="38" height="38" alt=""/></a>
                <div className="dropdown-menu logged-author-content animate d-none slideIn">
                  <div className="browse-content-inner">
                    <ul>
                      <li>
                        <a href="#" className="nav-link">Likes</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Downloads</a>
                      </li>
                    </ul>
                    <ul className="bordered-list">
                      <li>
                        <a href="#" className="nav-link">Account</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Dashboard</a>
                      </li>
                    </ul>
                    <ul className="bordered-list">
                      <li>
                        <a href="#" className="nav-link red">Logout</a>
                      </li>
                    </ul>
                  </div>

                </div>
                <div className="dropdown-menu logged-pro-author-content d-none animate slideIn slideIn">
                  <div className="browse-content-inner">
                    <div className="downloads-count">
                      <div className="total">30</div>
                      <div className="description">downloads <br> remaining today</div>
                    </div>
                    <ul className="bordered-list">
                      <li>
                        <a href="#" className="nav-link">Likes</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Downloads</a>
                      </li>
                    </ul>
                    <ul className="bordered-list">
                      <li>
                        <a href="#" className="nav-link">Account</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Dashboard</a>
                      </li>
                    </ul>
                    <ul className="bordered-list">
                      <li>
                        <a href="#" className="nav-link red">Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="dropdown-menu logged-pro-content animate d-none slideIn">
                  <div className="browse-content-inner">
                    <div className="downloads-count">
                      <div className="total">30</div>
                      <div className="description">downloads <br> remaining today</div>
                    </div>
                    <ul className="bordered-list">
                      <li>
                        <a href="#" className="nav-link">Likes</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Downloads</a>
                      </li>
                    </ul>
                    <ul className="bordered-list">
                      <li>
                        <a href="#" className="nav-link">Account</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link">Become an author</a>
                      </li>
                    </ul>
                    <ul className="bordered-list">
                      <li>
                        <a href="#" className="nav-link red">Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>*/}

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
                <div className="collapse-wrapper">
                  <div className="item">
                    <a className="btn collapse-btn" data-toggle="collapse" href="#collapseType" role="button" aria-expanded="false" aria-controls="collapseExample">
                      Type
                      <span>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.14885 2.33992C7.53938 1.9494 7.53938 1.31623 7.14885 0.925706C6.75833 0.535181 6.12516 0.535181 5.73464 0.925706L5.08554 1.5748C4.33656 2.32378 3.12222 2.32379 2.37323 1.5748L1.73626 0.937825C1.33906 0.540632 0.695087 0.540632 0.297895 0.937825C-0.0992977 1.33502 -0.0992984 1.97899 0.297894 2.37618L2.99084 5.06913C3.38804 5.46633 4.03201 5.46633 4.4292 5.06913L5.14599 4.35235C5.14731 4.35102 5.14731 4.34888 5.14599 4.34756C5.14467 4.34624 5.14467 4.3441 5.14599 4.34278L7.14885 2.33992Z" fill="black"/>
                        </svg>
                      </span>
                    </a>
                    <div className="collapse collapse-element show" id="collapseType">
                      <ul>

        {types.map(type =>
          <li key={type.id}>
             <a href="#" className={`collapse-inner-link ${type.id === 1 ? `active` : null}`}>{type.name}</a>
          </li>
        )}
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <a className="btn collapse-btn" data-toggle="collapse" href="#collapseMood" role="button" aria-expanded="false" aria-controls="collapseExample">
                      Mood
                      <span>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.14885 2.33992C7.53938 1.9494 7.53938 1.31623 7.14885 0.925706C6.75833 0.535181 6.12516 0.535181 5.73464 0.925706L5.08554 1.5748C4.33656 2.32378 3.12222 2.32379 2.37323 1.5748L1.73626 0.937825C1.33906 0.540632 0.695087 0.540632 0.297895 0.937825C-0.0992977 1.33502 -0.0992984 1.97899 0.297894 2.37618L2.99084 5.06913C3.38804 5.46633 4.03201 5.46633 4.4292 5.06913L5.14599 4.35235C5.14731 4.35102 5.14731 4.34888 5.14599 4.34756C5.14467 4.34624 5.14467 4.3441 5.14599 4.34278L7.14885 2.33992Z" fill="black"/>
                        </svg>
                      </span>
                    </a>
                    <div className="collapse collapse-element show" id="collapseMood">
                      <ul>
                      {moods.map(mood =>
                        <li key={mood.id}>
                            <a href="#" className={`collapse-inner-link ${mood.id === 1 ? `active` : null}`}>{mood.name}</a>
                        </li>
                      )}
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <a className="btn collapse-btn collapse-btn-large" data-toggle="collapse" href="#collapseCategories" role="button" aria-expanded="false" aria-controls="collapseExample">
                      Categories
                      <span>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.14885 2.33992C7.53938 1.9494 7.53938 1.31623 7.14885 0.925706C6.75833 0.535181 6.12516 0.535181 5.73464 0.925706L5.08554 1.5748C4.33656 2.32378 3.12222 2.32379 2.37323 1.5748L1.73626 0.937825C1.33906 0.540632 0.695087 0.540632 0.297895 0.937825C-0.0992977 1.33502 -0.0992984 1.97899 0.297894 2.37618L2.99084 5.06913C3.38804 5.46633 4.03201 5.46633 4.4292 5.06913L5.14599 4.35235C5.14731 4.35102 5.14731 4.34888 5.14599 4.34756C5.14467 4.34624 5.14467 4.3441 5.14599 4.34278L7.14885 2.33992Z" fill="black"/>
                        </svg>
                      </span>
                    </a>
                    <div className="collapse collapse-element show" id="collapseCategories">
                      <ul>
                      {categories.map(category =>
                        <li key={category.id}>
                          <a href="#" className={`collapse-inner-link ${category.id === 1 ? `active` : null}`}>{category.name}</a>
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
    {/*
      <section className="before-footer section">
        <div className="container-fluid p-0">
          <div className="container-custom">
            <div className="row">
              <div className="col-lg-6 item">
                <div className="order-custom-illustrations">
                  <div className="wrapper">
                    <div className="left">
                      <h3 className="title">Didn’t find what you were looking for?</h3>
                      <a href="#" className="big-link purple">Order custom illustrations</a>
                    </div>
                    <div className="right">
                      <img src="img/05.png" srcSet="img/05@2x.png 2x" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  item">
                <div className="sign-up-newsletter">
                  <h3 className="title">Or sign up to our newsletters to catch new illustrations first</h3>
                  <form>
                    <div className="form-wrapper">
                      <div className="column">
                        <input type="email" className="form-control" placeholder="Your email">
                      </div>
                      <div className="column">
                        <button type="submit" className="big-link green">Sign up</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container-custom">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <div className="first">
                  <a>
                    <svg width="146" height="40" viewBox="0 0 146 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M56.496 17.792L59.232 16.6639C58.368 14.384 55.536 13.448 53.712 13.664C50.976 14 49.416 15.9439 49.416 17.7199C49.416 19.1119 50.736 20.384 52.2 20.84C53.424 21.224 56.448 21.32 56.304 22.712C56.208 23.6 54.744 23.8879 53.784 23.672C52.824 23.4559 52.08 22.688 51.792 21.92L48.96 23.144C49.56 24.656 51.168 26.504 54.36 26.504C57.84 26.504 59.472 24.392 59.472 22.784C59.472 21.2 58.68 19.6399 56.088 19.016C53.592 18.4159 52.512 18.2959 52.512 17.408C52.512 16.784 53.448 16.4479 54.264 16.4479C54.912 16.4479 56.112 16.808 56.496 17.792Z" fill="black"/>
                      <path d="M68.7795 25.76L67.8915 23.024C67.3875 23.336 66.3555 23.5279 65.8035 22.9039C65.4675 22.5199 65.4195 22.184 65.4195 20.528V17.024H68.2515V14.2639H65.4435V10.7119H62.3955V13.472C62.3955 14 62.2275 14.2639 61.4835 14.2639H60.1875V17.024H62.2515V22.5199C62.2515 23.8879 63.0435 25.784 65.2035 26.216C66.9795 26.576 67.8435 26.12 68.7795 25.76Z" fill="black"/>
                      <path d="M68.789 20.12C68.789 23.576 71.525 26.528 75.101 26.528C78.653 26.528 81.389 23.576 81.389 20.12C81.389 16.6639 78.653 13.8559 75.101 13.8559C71.525 13.8559 68.789 16.6639 68.789 20.12ZM71.957 20.1439C71.957 18.1279 73.493 16.7599 75.125 16.7599C76.757 16.7599 78.269 18.1279 78.269 20.1439C78.269 22.3039 76.757 23.576 75.125 23.576C73.493 23.576 71.957 22.3039 71.957 20.1439Z" fill="black"/>
                      <path d="M85.9603 26.096L82.8403 26.072V14.3359H85.9603V16.0879C86.3443 15.1519 86.9203 14.576 88.0963 14.1439C88.9603 13.8319 90.4243 13.904 91.2403 14.3839L90.3763 17.24C89.4163 16.784 87.8323 16.7119 86.9203 17.7439C86.1043 18.6799 85.9603 19.3759 85.9603 22.4959V26.096Z" fill="black"/>
                      <path d="M93.4158 31.424H96.8718L104.288 14.2639H100.832L97.8798 21.584L94.6878 14.2639L91.2318 14.24L96.1518 25.5919L93.4158 31.424Z" fill="black"/>
                      <path d="M113.359 25.76L112.471 23.024C111.967 23.336 110.935 23.5279 110.383 22.9039C110.047 22.5199 109.999 22.184 109.999 20.528V17.024H112.831V14.2639H110.023V10.7119H106.975V13.472C106.975 14 106.807 14.2639 106.063 14.2639H104.767V17.024H106.831V22.5199C106.831 23.8879 107.623 25.784 109.783 26.216C111.559 26.576 112.423 26.12 113.359 25.76Z" fill="black"/>
                      <path d="M118.578 26.4799C120.306 26.4799 121.386 25.496 121.914 24.752L122.01 26.12H125.154L125.082 18.2479C125.082 16.5679 124.146 15.0319 121.962 14.216C120.306 13.592 118.29 13.832 117.066 14.528C115.362 15.488 114.714 16.784 114.546 17.768L117.354 18.368C117.642 16.832 118.842 16.184 120.354 16.568C122.01 16.9999 121.746 18.368 121.41 18.632C121.074 18.896 119.682 19.016 118.506 19.184C115.914 19.52 114.09 20.696 114.354 23.312C114.618 25.256 116.034 26.4799 118.578 26.4799ZM119.946 23.96C118.53 24.248 117.498 23.816 117.498 22.6639C117.498 21.056 119.394 21.632 121.962 21.224C122.13 22.424 121.482 23.648 119.946 23.96Z" fill="black"/>
                      <path d="M130.885 8.64795H127.549V26.1679H130.885V8.64795Z" fill="black"/>
                      <path d="M132.8 20.1439C132.8 15.8479 135.92 13.904 139.112 13.904C142.28 13.904 145.376 15.848 145.016 20.984L136.064 21.08C136.064 22.016 136.952 23.552 138.92 23.672C140.36 23.768 141.272 23.096 141.8 22.088L144.752 23C144.152 24.464 142.28 26.336 139.16 26.336C135.32 26.336 132.8 23.5759 132.8 20.1439ZM136.064 18.7039L141.704 18.68C141.704 17.552 140.504 16.3279 138.632 16.4479C137.504 16.5199 136.208 17.36 136.064 18.7039Z" fill="black"/>
                      <path d="M18.1411 0L19.8589 0C24.1471 0 27.2074 0.742605 29.8148 2.13706C32.4222 3.53152 34.4685 5.57783 35.8629 8.18523C37.2574 10.7926 38 13.8529 38 18.1411V21.8589C38 26.1471 37.2574 29.2074 35.8629 31.8148C34.4685 34.4222 32.4222 36.4685 29.8148 37.8629C27.2074 39.2574 24.1471 40 19.8589 40H18.1411C13.8529 40 10.7926 39.2574 8.18523 37.8629C5.57783 36.4685 3.53152 34.4222 2.13706 31.8148C0.742605 29.2074 0 26.1471 0 21.8589L0 18.1411C0 13.8529 0.742605 10.7926 2.13706 8.18523C3.53152 5.57783 5.57783 3.53152 8.18523 2.13706C10.7926 0.742605 13.8529 0 18.1411 0Z" fill="black"/>
                      <path d="M17.8105 12.9402C18.2532 9.61289 18.4745 7.94923 19 7.94923C19.5255 7.94923 19.7468 9.61288 20.1895 12.9402L20.7163 16.8997C20.7709 17.3096 20.7982 17.5146 20.9294 17.6549C21.0607 17.7952 21.2634 17.8361 21.6688 17.9178L26.1634 18.8237C28.4299 19.2805 29.5632 19.5089 29.5632 20C29.5632 20.4911 28.4299 20.7195 26.1634 21.1763L21.6688 22.0822C21.2634 22.1639 21.0607 22.2048 20.9294 22.3451C20.7982 22.4854 20.7709 22.6904 20.7163 23.1003L20.1895 27.0598C19.7468 30.3871 19.5255 32.0508 19 32.0508C18.4745 32.0508 18.2532 30.3871 17.8105 27.0598L17.2837 23.1003C17.2291 22.6904 17.2018 22.4854 17.0706 22.3451C16.9393 22.2048 16.7366 22.1639 16.3312 22.0822L11.8366 21.1763C9.57008 20.7195 8.43683 20.4911 8.43683 20C8.43683 19.5089 9.57008 19.2805 11.8366 18.8237L16.3312 17.9178C16.7366 17.8361 16.9393 17.7952 17.0706 17.6549C17.2018 17.5146 17.2291 17.3096 17.2837 16.8997L17.8105 12.9402Z" fill="white"/>
                    </svg>
                  </a>
                  <p className="footer-text">564 High-quality illustrations to bring life into you projects</p>
                </div>
                <div className="second">
                  <p className="header">Explore</p>
                  <ul className="list">
                    <li>
                      <a href="#" className="link">Catalog</a>
                    </li>
                    <li>
                      <a href="#" className="link">Freebies</a>
                    </li>
                    <li>
                      <a href="#" className="link">Updates</a>
                    </li>
                    <li>
                      <a href="#" className="link">Showcase</a>
                    </li>
                    <li>
                      <a href="#" className="link">Prices</a>
                    </li>
                  </ul>
                </div>
                <div className="third">
                  <p className="header">Legals</p>
                  <ul className="list">
                    <li>
                      <a href="#" className="link">Privacy</a>
                    </li>
                    <li>
                      <a href="#" className="link">Licenses</a>
                    </li>
                    <li>
                      <a href="#" className="link">Terms</a>
                    </li>
                    <li>
                      <a href="#" className="link">Refunds</a>
                    </li>
                    <li>
                      <a href="#" className="link">Cookies</a>
                    </li>
                  </ul>
                </div>
                <div className="fourth">
                  <p className="header">Company</p>
                  <ul className="list">
                    <li>
                      <a href="#" className="link">Order customs</a>
                    </li>
                    <li>
                      <a href="#" className="link">About</a>
                    </li>
                    <li>
                      <a href="#" className="link">Contacts</a>
                    </li>
                    <li>
                      <a href="#" className="link">Help</a>
                    </li>
                  </ul>
                </div>
                <div className="fifth">
                  <div className="left">
                    <p className="bottom-text">Created on sunshine coast by Craftwork © 2020</p>
                  </div>
                  <div className="right">
                    <ul className="socials">
                      <li>
                        <a href="#" className="bottom-text bottom-link">Dribbble</a>
                      </li>
                      <li>
                        <a href="#" className="bottom-text bottom-link">Twitter</a>
                      </li>
                      <li>
                        <a href="#" className="bottom-text bottom-link">Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    {/*
      <script>
      $(function() {
        $( ".collapse-inner-link" ).click(function(evt) {
          evt.preventDefault();
          Array.from(evt.currentTarget.closest("ul").querySelectorAll('a')).forEach(element => element.classNameList.remove('active'));
          evt.currentTarget.classNameList.add('active');
        });
      });
    </script>

    <script>
      $(document).ready(function(){
        if ($('.page-header').hasclassName("logged-author")) {
          $('.logged-author-content').removeclassName( "d-none" );
        } else if ($('.page-header').hasclassName("logged-pro-author")) {
          $('.logged-pro-author-content').removeclassName( "d-none" );
        } else if ($('.page-header').hasclassName("logged-pro")) {
          $('.logged-pro-content').removeclassName( "d-none" );
        }
      });
    </script>

    <script>
    $(function() {
      $( ".nav-pills .nav-link" ).click(function(evt) {
        evt.preventDefault();
        Array.from(evt.currentTarget.closest("ul").querySelectorAll('a')).forEach(element => element.classNameList.remove('active'));
        evt.currentTarget.classNameList.add('active');
        if (evt.currentTarget.innerHTML.toLowerCase() === "packs") {
          $(".main-content")[0].classNameList.add('padding-custom');
          Array.from($(".choice-illustration" )).forEach(element => element.classNameList.add('d-none'));
          Array.from($(".choice-pack" )).forEach(element => element.classNameList.remove('d-none'));
        }
        else if (evt.currentTarget.innerHTML.toLowerCase() === "illustrations") {
          $(".main-content")[0].classNameList.remove('padding-custom');
          Array.from($(".choice-pack" )).forEach(element => element.classNameList.add('d-none'));
          Array.from($(".choice-illustration" )).forEach(element => element.classNameList.remove('d-none'));
        }
      });
    });
    </script> */}

    </div>

    );
  }

}

export default Browse;