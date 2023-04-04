import React from 'react'

import ImageGallery from 'react-image-gallery';
import { images } from '../assets/javascript/gallery-image';
import '../assets/CSS/image-gallory.css';

function Gallery() {
  return (
    <div id='gallerybackground'>
    <div className="app">
      
      <div className="image-gallery-wrapper">
        <ImageGallery items={images} />
      </div>
    </div>
    </div>
  )
}

export default Gallery;