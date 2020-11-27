import React, { Component } from 'react';

import Browse from "./Browse"
import SingleIllustration from "./SingleIllustration"

import image from "./img/packs/no-gravity/01.png";
const tagsArray = ['Design', 'Illustrations', '3D', 'UI/UX Tool', 'Design', 'Illustrations', '3D', 'UI/UX Tool', 'Design', 'Illustrations', '3D', 'UI/UX Tool'];
const packName = 'Stubborn Generator';
const illustrationName = 'Solving Problems';
const mood = 'Handdrawn';
const fileTypes = ['SVG', 'PNG'];
const licenses = ['Personal', 'Commercial'];



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
       <Browse/>
    );
  }

}

export default App;
