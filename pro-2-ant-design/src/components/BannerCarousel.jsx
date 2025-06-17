import React from 'react';
import { Carousel } from 'antd';
import './BannerCarousel.css';

const banners = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg',
  '/images/banner4.jpg'
];

export default function BannerCarousel() {
  return (
    <Carousel autoplay>
      {banners.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`banner-${index}`} className="banner-img" />
        </div>
      ))}
    </Carousel>
  );
}
