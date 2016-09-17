require('normalize.css/normalize.css');
// require('styles/App.css');
require('../styles/App.scss');

import React from 'react';
var imageDatas = require('../images/imageData.json');
/**
 * 生成图片地址
 */
imageDatas = (function generateImageUrl(imgDataArr) {
  for(let i = 1; i < imgDataArr.length; i++){
    let singleimgData = imgDataArr[i];
    singleimgData.imageUrl = require('../images/' + imgDataArr[i].filename);
    imgDataArr[i] = singleimgData;
  }
  return imgDataArr;
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="image-sec">
          <image alt="" src=""/>
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
