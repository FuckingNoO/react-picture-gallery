import React from 'react';
//load style sheet
class ImageFigure extends React.Component{
  render () {
    return (
      <figure>
        <img className="img-figure" src={this.props.data.imageUrl} alt={this.props.data.title}/>
        <figcaption>
          <h2>
            {this.props.data.title}
          </h2>
        </figcaption>
      </figure>
    );
  }
}

export default ImageFigure;
