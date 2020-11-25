import React, { Component } from 'react';
import '../../base-css.css';

function WidgetPack(props) {
  return (
    <div className="widget-pack">
      <div className="poster ">
        <a href="#" className="image-link">
          <img src={props.cover} alt="" />
        </a>
      </div>
      <a href="#" className="text-link">
        <h5 className="title">{props.name}</h5>
      </a>
      <p className="description"><span>{props.quantity}</span> illustrations</p>
    </div>
  );
}

export default WidgetPack;
