require('normalize.css/normalize.css');
require('../styles/App.scss');

import React from 'react';
import ImgFigure from './ImgFigure';
/**
 *  load imageData in JSON
 */
let imageDatas = require('../images/imageData.json');

/**
 *  generate image URL function
 */
imageDatas = (function generateImageUrl(imgDataArr) {
  for(let i = 1; i < imgDataArr.length; i++){
    let singleimgData = imgDataArr[i];
    singleimgData.imageUrl = require('../images/' + imgDataArr[i].filename);
    imgDataArr[i] = singleimgData;
  }
  return imgDataArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    let imageFigures = [],
      controllerUnits = [];
    imageDatas.forEach((value) => {
      imageFigures.push(<ImgFigure data={value}/>)
    });
    return (
      <section className="stage">
        <section className="image-sec">
          {imageFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
