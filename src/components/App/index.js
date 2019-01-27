import React, { Component } from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import VolumeSlider from '../Slider'
import FloatCart from '../FloatCart';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       
        <main>
          <Filter />
          <Shelf />
        </main>
        {/* <FloatCart /> */}
        <VolumeSlider/>
      </React.Fragment>
    );
  }
}

export default App;
