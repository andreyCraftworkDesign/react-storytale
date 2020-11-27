import React, { Component } from 'react';
import './base-css.css';

import BeforeFooter from "./BeforeFooter";
import Footer from "./Footer";
import Header from "./Header"
import Product from "./components/product/product";
import tagsLinks, {moodsLinks, fileTypesLinks} from "./const";

const API_PICTURES = 'http://localhost:7002/api/illustration/search';

class SingleIllustration extends Component {

  constructor(props) {
    super(props);

    this.state = {
     pictures: [],
     picturesStatus: false,
    }
  }

  componentDidMount() {
    fetch(API_PICTURES)
      .then(response => response.json())
      .then(data => this.setState({ pictures: data.result , picturesStatus: data.success}));
  }

  render() {

    const { pictures } = this.state;
    const {tags} = this.props;
    const {licenses} = this.props;
    const {fileTypes} = this.props;
    const {mood} = this.props;
    const {packName} = this.props;
    const {illustrationName} = this.props;


    return (
      <div className="single-illustration-page">
      <Header/>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <a href="" className="button-icon neutral outline escape">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 9V7.41C10 6.52 8.92 6.07 8.29 6.7L3.7 11.29C3.31 11.68 3.31 12.31 3.7 12.7L8.29 17.29C8.92 17.92 10 17.48 10 16.59V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z" fill="#18214D"/>
                </svg>
              </span>
              <span>{packName}</span>
            </a>
          </div>
        </div>
      </div>
      <section className="single-product">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 col-lg-12">
              <div className="widget-single-product">
                <div className="top">
                  <a href="#">
                    <svg width="134" height="36" viewBox="0 0 134 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46.756 18.61C46.756 22.336 49.618 25.216 53.416 25.216C56.494 25.216 58.96 23.218 59.572 20.716H57.304C56.764 22.174 55.216 23.182 53.416 23.182C50.752 23.182 48.88 21.184 48.88 18.61C48.88 16.036 50.752 14.038 53.416 14.038C55.216 14.038 56.764 15.046 57.304 16.504H59.572C58.96 14.002 56.494 12.004 53.416 12.004C49.618 12.004 46.756 14.884 46.756 18.61ZM61.4648 25H63.4448V20.608C63.4448 18.808 64.4708 17.854 65.6048 17.854C65.9648 17.854 66.2528 17.908 66.5948 18.016V15.982C66.3248 15.928 66.0728 15.91 65.8208 15.91C64.7948 15.91 63.7868 16.576 63.4448 17.602V16H61.4648V25ZM67.3559 20.5C67.3559 23.074 69.2279 25.18 71.6939 25.18C72.9899 25.18 74.0699 24.514 74.5739 23.794V25H76.5539V16H74.5739V17.206C74.0699 16.486 72.9899 15.82 71.6939 15.82C69.2279 15.82 67.3559 17.926 67.3559 20.5ZM74.7359 20.5C74.7359 22.12 73.6559 23.38 72.0539 23.38C70.4519 23.38 69.3719 22.12 69.3719 20.5C69.3719 18.88 70.4519 17.62 72.0539 17.62C73.6559 17.62 74.7359 18.88 74.7359 20.5ZM80.0823 25H82.0623V17.764H84.3123V16H82.0623V14.722C82.0623 13.606 82.5483 13.192 83.5743 13.192C83.9523 13.192 84.3483 13.264 84.6363 13.372V11.608C84.2583 11.482 83.7723 11.392 83.1603 11.392C81.4323 11.392 80.0823 12.364 80.0823 14.38V16H78.2103V17.764H80.0823V25ZM91.3323 24.892V23.128C91.0443 23.236 90.6663 23.29 90.2703 23.29C89.2623 23.29 88.7583 22.894 88.7583 21.778V17.764H91.3323V16H88.7583V13.498H86.7783V16H85.2483V17.764H86.7783V22.102C86.7783 24.136 88.1463 25.09 89.8563 25.09C90.4683 25.09 90.9363 25.018 91.3323 24.892ZM100.896 25H102.768L105.792 16H103.686L101.724 22.192L99.6725 16H98.1605L96.0905 22.192L94.1465 16H92.0585L95.0825 25H96.9545L98.9165 19.168L100.896 25ZM115.987 20.5C115.987 17.89 113.935 15.82 111.271 15.82C108.607 15.82 106.555 17.89 106.555 20.5C106.555 23.11 108.607 25.18 111.271 25.18C113.935 25.18 115.987 23.11 115.987 20.5ZM108.553 20.5C108.553 18.898 109.669 17.656 111.271 17.656C112.855 17.656 113.971 18.898 113.971 20.5C113.971 22.102 112.855 23.344 111.271 23.344C109.669 23.344 108.553 22.102 108.553 20.5ZM117.978 25H119.958V20.608C119.958 18.808 120.984 17.854 122.118 17.854C122.478 17.854 122.766 17.908 123.108 18.016V15.982C122.838 15.928 122.586 15.91 122.334 15.91C121.308 15.91 120.3 16.576 119.958 17.602V16H117.978V25ZM124.816 25H126.796V20.644L131.098 25H133.636L128.722 20.014L132.736 16H130.234L126.796 19.42V11.5H124.816V25Z" fill="black"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18ZM18.0838 20.5581C21.4014 15.8665 21.5479 13.0231 18.0838 7.99983C14.5537 13.1303 15.0087 15.8498 18.0838 20.5581ZM16.5092 26.6693C17.0365 20.9475 15.7417 18.4118 10.23 15.7935C9.7381 22.0018 11.4919 24.1294 16.5092 26.6693ZM19.6814 26.6693C19.1541 20.9475 20.449 18.4118 25.9606 15.7935C26.4525 22.0018 24.6988 24.1294 19.6814 26.6693Z" fill="black"/>
                    </svg>
                  </a>
                </div>
                <div className="middle">
                  <h1>{illustrationName}</h1>
                </div>
                <div className="bottom">
                  <a href="" className="button-icon neutral like">
                    <span>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.1545 20.13C13.3945 20.82 12.2245 20.82 11.4645 20.12L11.3545 20.02C6.1045 15.27 2.6745 12.16 2.8045 8.28C2.8645 6.58 3.7345 4.95 5.1445 3.99C7.7845 2.19 11.0445 3.03 12.8045 5.09C14.5645 3.03 17.8245 2.18 20.4645 3.99C21.8745 4.95 22.7445 6.58 22.8045 8.28C22.9445 12.16 19.5045 15.27 14.2545 20.04L14.1545 20.13Z" fill="#000000"/>
                      </svg>
                    </span>
                    <span>
                      0
                    </span>
                  </a>
                  <a href="" className="button-icon blue">
                    <span>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.3945 9H15.8045V4C15.8045 3.45 15.3545 3 14.8045 3H10.8045C10.2545 3 9.8045 3.45 9.8045 4V9H8.2145C7.3245 9 6.8745 10.08 7.5045 10.71L12.0945 15.3C12.4845 15.69 13.1145 15.69 13.5045 15.3L18.0945 10.71C18.7245 10.08 18.2845 9 17.3945 9ZM5.8045 19C5.8045 19.55 6.2545 20 6.8045 20H18.8045C19.3545 20 19.8045 19.55 19.8045 19C19.8045 18.45 19.3545 18 18.8045 18H6.8045C6.2545 18 5.8045 18.45 5.8045 19Z" fill="#ffffff"/>
                      </svg>

                    </span>
                    <span>
                      Subscribe to download
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row illustration-row">
            <div className="col-xl-10 offset-xl-1 ">
              <div className="illustrations">
                <div className="product">
                  <a href="#" className="link">
                    <img src={this.props.image} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="container">
          <div className="row table-row">
            <div className="col-xl-10 offset-xl-1 ">
              <div className="product-table">
                <div className="wrapper">
                  <div className="column frirst-column">
                    <p className="header">Pack</p>
                    <ul className="list">
                      <li>
                        <a href="" className="link">{packName}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="column second-column">
                    <p className="header">Mood</p>
                    <ul className="list">
                      <li>
                        <a href={moodsLinks.get(mood.toLowerCase())} className="link">{mood}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="column third-column">
                    <p className="header">File types</p>
                    <ul className="list">
                    {fileTypes.map((item, index) =>
                      <li key={index}>
                        <a href={fileTypesLinks.get(item.toLowerCase())} className="link">.{item}</a>
                      </li>
                    )}
                    </ul>
                  </div>
                  <div className="column fourth-column">
                    <p className="header">Licenses</p>
                    <ul className="list">
                    {licenses.map((item, index) =>
                      <li key={index}>
                        <a href="" className="link">{item}</a>
                      </li>
                    )}
                    </ul>
                  </div>
                  <div className="column fifth-column">
                    <p className="header">Keywords</p>
                    <div className="list">
                    {tags.map((tag, index) =>
                      <a href={tagsLinks.get(tag.toLowerCase())} key={index}>
                        <span className="badge outline neutral">{tag}</span>
                      </a>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="illustrations-pack section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="text-center header">More from {packName}</h4>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="illustrations">
              {pictures.map(picture =>
                <Product
                  key={picture.id}
                  cover={picture.cover}
                />
              )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ready-to section">
        <div className="container-custom">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text-center">Like this pack?</h1>
              <p className="description">Unlock access to every existing illustration on Storytale and upcoming releases during whole subscribtion</p>
            </div>
            <div className="col-auto mx-auto position-relative">
              <a href="#" className="large-link mx-auto">Unlock all from $28/month</a>
              <svg className="position-absolute noice-1" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.60488 8.47578C7.20961 5.80537 4.81434 3.13495 2.41906 0.464533C1.16154 -0.931364 -0.844494 1.13213 0.383084 2.52803C2.77836 5.19844 5.17363 7.86886 7.56891 10.5393C8.82642 11.9352 10.8624 9.84133 9.60488 8.47578Z" fill="#FF98E1"/>
              </svg>
              <svg className="position-absolute noice-2" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.64145 6.61685C5.84796 4.5572 4.05447 2.49756 2.26099 0.437908C1.11203 -0.877981 -0.793543 1.06724 0.35541 2.38313C2.1489 4.44278 3.94239 6.50244 5.73588 8.56209C6.91285 9.87798 8.79041 7.93274 7.64145 6.61685Z" fill="#FF98E1"/>
              </svg>
              <svg className="position-absolute noice-3" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15C3.375 15 0 11.625 0 7.5C0 3.375 3.375 0 7.5 0C11.625 0 15 3.375 15 7.5C15 11.625 11.625 15 7.5 15ZM7.5 2.99999C5.03125 2.99999 3 5.03125 3 7.5C3 9.96875 5.03125 12 7.5 12C9.96875 12 12 9.96875 12 7.5C12 5.03125 9.96875 2.99999 7.5 2.99999Z" fill="#F76567"/>
              </svg>
              <svg className="position-absolute noice-4" width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3962 30C12.9263 30 12.5087 29.7432 12.2737 29.3323C10.6814 26.302 5.53895 18.3412 1.12741 17.8533C0.52702 17.8019 0.0832581 17.314 0.00494661 16.749C-0.047261 16.1584 0.318199 15.6191 0.892483 15.465C7.67947 13.4106 10.6292 1.08414 10.6553 0.955739C10.7858 0.442136 11.2296 0.0569304 11.7778 0.00557013C12.2999 -0.0457902 12.8219 0.262378 13.0308 0.750301C15.8239 7.2217 20.0266 14.4378 21.9583 14.7717C22.4281 14.8487 22.7936 15.1826 22.9502 15.6191C23.0807 16.0557 22.9502 16.5436 22.6109 16.8774C20.4965 18.8805 14.9363 24.9667 14.6492 28.8701C14.597 29.4093 14.2054 29.8716 13.6572 30C13.5789 30 13.4745 30 13.3962 30ZM4.4426 16.4409C8.04492 18.4182 11.1774 22.7325 12.9785 25.583C14.5448 21.9364 17.8861 18.1614 19.6872 16.2868C16.8941 14.104 13.9444 8.63411 12.1171 4.78209C10.8902 8.27459 8.46258 13.6674 4.4426 16.4409Z" fill="#FFDF57"/>
              </svg>
              <svg className="position-absolute noice-5" width="37" height="20" viewBox="0 0 37 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.9717 18.9051C34.9613 19.0346 34.9324 19.1626 34.868 19.2691C34.6288 19.6967 34.076 19.8571 33.6484 19.6179L1.99173 1.87992C1.56414 1.64073 1.40232 1.10643 1.64299 0.660349C1.88217 0.232765 2.43498 0.0724342 2.86256 0.311617L34.5193 18.0496C34.8218 18.2229 34.9985 18.5722 34.9717 18.9051Z" fill="#F76567"/>
              </svg>
              <svg className="position-absolute noice-6" width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.68693 20.9747C6.15248 20.9747 5.69092 20.595 5.56946 20.0635C4.30623 15.1025 2.21702 11.0274 1.39106 11.2299C0.759449 11.3565 0.152132 10.9515 0.0306675 10.2934C-0.11509 9.66064 0.273596 9.00255 0.880919 8.85069C2.92152 8.31915 4.64632 3.58599 5.22935 1.18144C5.25365 0.903015 5.35081 0.599276 5.64232 0.320854C6.03101 -0.0335006 6.56547 -0.109428 7.02703 0.168994C7.44001 0.422105 7.65863 0.877692 7.58575 1.3586C8.04732 3.13038 11.7156 8.95193 12.9788 9.1291C13.5618 9.20504 14.0234 9.73657 13.9991 10.3694C13.9748 11.0021 13.5132 11.5084 12.9059 11.559C11.9585 11.6349 8.41171 15.5834 7.85297 19.9369C7.78009 20.5191 7.31852 20.9494 6.75979 21C6.7355 20.9747 6.71122 20.9747 6.68693 20.9747ZM3.60171 9.91375C4.88924 11.2299 5.90955 13.5079 6.68693 15.6594C7.65864 13.4573 9.04333 11.4577 10.4766 10.2428C9.01904 8.82538 7.58576 6.57269 6.58975 4.72499C5.93384 6.49676 4.96211 8.54696 3.60171 9.91375Z" fill="#FFDF57"/>
              </svg>
              <svg className="position-absolute noice-7" width="27" height="40" viewBox="0 0 27 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0595 40C13.5205 40 13.0519 39.5955 12.9582 39.0482C12.9348 38.8816 10.0293 22.3443 1.5942 21.7257C1.40675 21.7257 1.19587 21.7257 1.00843 21.7019C0.422652 21.6305 -0.0225471 21.107 0.000883833 20.5121C0.0243148 19.8935 0.516376 19.4176 1.12558 19.4176C1.2896 19.4176 1.45361 19.4176 1.61763 19.4414C2.53143 19.3938 3.63269 18.8465 4.7808 17.8709C9.13896 14.1828 13.1222 5.66426 13.4971 1.04809C13.544 0.477013 13.9892 0.0487099 14.5515 0.00112052C15.0904 -0.0226742 15.6059 0.334243 15.723 0.905316C16.7774 5.75943 20.6436 18.442 25.9624 18.8703C26.4544 18.9179 26.8527 19.2748 26.9699 19.7507C27.0871 20.2266 26.8528 20.7501 26.431 20.988C26.3373 21.0594 16.2385 27.1509 15.1842 38.953C15.1373 39.5241 14.6686 39.9762 14.1063 40C14.0829 40 14.0829 40 14.0595 40ZM5.20254 20.4408C9.8653 22.844 12.5599 29.1496 13.9423 33.6706C16.0511 26.8653 20.667 22.4633 23.3381 20.3932C19.0268 18.0375 16.1917 10.7801 14.6921 5.9022C13.0753 10.8039 9.81845 16.6098 6.21009 19.6555C5.88205 19.9411 5.53058 20.2028 5.20254 20.4408Z" fill="#FFDF57"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <BeforeFooter/>
      <Footer/>
      </div>
    )
  }

}

export default SingleIllustration;
