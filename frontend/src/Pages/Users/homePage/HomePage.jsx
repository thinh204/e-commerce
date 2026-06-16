import React from 'react';
import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import pet1Img from "@/Assets/Users/images/categories/pet-1.jpg";
import pet2Img from "@/Assets/Users/images/categories/pet-2.jpg";
import pet3Img from "@/Assets/Users/images/categories/pet-3.jpg";
import pet4Img from "@/Assets/Users/images/categories/pet-4.jpg";
import pet5Img from "@/Assets/Users/images/categories/pet-5.jpg";
import featured1Img from "@/Assets/Users/images/featured/featured-1.jpg";
import featured2Img from "@/Assets/Users/images/featured/featured-2.jpeg";
import featured3Img from "@/Assets/Users/images/featured/featured-3.jpeg";
import featured4Img from "@/Assets/Users/images/featured/featured-4.jpg";
import featured5Img from "@/Assets/Users/images/featured/featured-5.jpg";
import featured6Img from "@/Assets/Users/images/featured/featured-6.jpg";
import featured7Img from "@/Assets/Users/images/featured/featured-7.jpg";
import featured8Img from "@/Assets/Users/images/featured/featured-8.jpg";
import accessory1Img from "@/Assets/Users/images/accessory/accessory-1.jpeg";
import accessory2Img from "@/Assets/Users/images/accessory/accessory-2.jpeg";
import accessory3Img from "@/Assets/Users/images/accessory/accessory-3.jpeg";
import accessory4Img from "@/Assets/Users/images/accessory/accessory-4.jpeg";
import accessory5Img from "@/Assets/Users/images/accessory/accessory-5.jpeg";
import accessory6Img from "@/Assets/Users/images/accessory/accessory-6.jpg";
import accessory7Img from "@/Assets/Users/images/accessory/accessory-7.jpg";
import banner1Img from "@/Assets/Users/images/hero/banner1.jpg";
import banner2Img from "@/Assets/Users/images/hero/banner2.avif";
import "./homePage.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const formatter = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

const HomePage = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const sliderItems = [
    { bgImg: pet1Img, name: 'Mèo xám xinh', price: 15000000 },
    { bgImg: pet2Img, name: 'Mèo xám chân lùn Lilac', price: 20000000 },
    { bgImg: pet3Img, name: 'Mèo anh lông dài xám', price: 12000000 },
    { bgImg: pet4Img, name: 'Poodle mơ kem yêu', price: 15000000 },
    { bgImg: pet5Img, name: 'Phốc sốc bé xíu cưng xĩu', price: 20000000 },
  ];

  const featProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        { img: featured1Img, name: 'Phốc sốc bé xíu cưng xĩu', price: 20000000 },
        { img: featured2Img, name: 'Poodle vàng mơ siêu cưng', price: 15000000 },
        { img: featured3Img, name: 'Samoyed trắng tinh xinh yêu', price: 16000000 },
        { img: featured4Img, name: 'Mèo xám xinh', price: 15000000 },
        { img: featured5Img, name: 'Mèo xám chân lùn LiLac', price: 20000000 },
        { img: featured6Img, name: 'Mèo anh lông dài xám', price: 12000000 },
        { img: featured7Img, name: 'Poodle mơ kem yêu', price: 15000000 },
        { img: featured8Img, name: 'Phốc sốc vàng xinh', price: 20000000 },
        { img: accessory1Img, name: 'Đệm ngồi ô tô chuyên dùng cho thú cưng', price: 750000 },
        { img: accessory2Img, name: 'Yếm họa tiết cute', price: 50000 },
        { img: accessory3Img, name: 'Mũ cute cho boss', price: 60000 },
        { img: accessory4Img, name: 'Đệm ô tô ghế sau', price: 1200000 },
        { img: accessory5Img, name: 'Cát đậu nành miso', price: 140000 },
        { img: accessory6Img, name: 'Pate thức ăn ướt cho chó', price: 25000 },
        { img: accessory7Img, name: 'Pate thức ăn ướt cho mèo', price: 25000 },
      ],
    },
    dog: {
      title: 'Chó',
      products: [
        { img: featured1Img, name: 'Phốc sốc bé xíu cưng xĩu', price: 20000000 },
        { img: featured2Img, name: 'Poodle vàng mơ siêu cưng', price: 15000000 },
        { img: featured3Img, name: 'Samoyed trắng tinh xinh yêu', price: 16000000 },
        { img: featured7Img, name: 'Poodle mơ kem yêu', price: 15000000 },
        { img: featured8Img, name: 'Phốc sốc vàng xinh', price: 20000000 },

      ],
    },
    cat: {
      title: 'Mèo',
      products: [
        { img: featured4Img, name: 'Mèo xám xinh', price: 15000000 },
        { img: featured5Img, name: 'Mèo xám chân lùn LiLac', price: 20000000 },
        { img: featured6Img, name: 'Mèo anh lông dài xám', price: 12000000 },
      ],
    },
    accessory: {
      title: 'Phụ kiện',
      products: [
        { img: accessory1Img, name: 'Đệm ngồi ô tô chuyên dùng cho thú cưng', price: 750000 },
        { img: accessory2Img, name: 'Yếm họa tiết cute', price: 50000 },
        { img: accessory3Img, name: 'Mũ cute cho boss', price: 60000 },
        { img: accessory4Img, name: 'Đệm ô tô ghế sau', price: 1200000 },
        { img: accessory5Img, name: 'Cát đậu nành miso', price: 140000 },
        { img: accessory6Img, name: 'Pate thức ăn ướt cho chó', price: 25000 },
        { img: accessory7Img, name: 'Pate thức ăn ướt cho mèo', price: 25000 },
      ],
    },
  };
  

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);
      
      const tabPanelItems = data[key].products.map((item, j) => (
        <div className="col-lg-3" key={j}>
          <div className="featured__item">
            <div className="featured__item__pic"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <ul className="featured__item__pic__hover">
                <li>
                  <AiOutlineEye/>
                </li>
                <li>
                  <AiOutlineShoppingCart/>
                </li>
              </ul>
            </div>
            <div className="featured__item__text">
              <h6>
                <Link to="">{item.name}</Link>
              </h6>
              <h5>{formatter(item.price)}</h5>
            </div>
          </div>
        </div>
      ));
      
      tabPanels.push(
        <TabPanel key={index}>
          <div className="row">{tabPanelItems}</div>
        </TabPanel>
      );
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels}
      </Tabs>
    );
  };


  return (
    <>
      {/* Categories Begin */}
      <div className="container container__categories_slider">
        <div className="section-title">
          <h2>SẢN PHẨM MỚI</h2>
          <Carousel responsive={responsive} className="categories_slider">
            {sliderItems.map((item, key) => (
              <div className="categories_slider_item"
                style={{ backgroundImage: `url(${item.bgImg})` }}
                key={key}>
                <p>{item.name}</p>  
              </div>  
            ))}
          </Carousel>
        </div>  
      </div>
      {/* Categories End */}
      {/* Categories Begin */}      
      <div className="container">
          <div className="featured">
            <div className="section-title">
              <h2>SẢN PHẨM NỔI BẬT</h2>
            </div>  
            {renderFeaturedProducts(featProducts)}
          </div>
      </div>  
      {/* Categories End */}
      {/* Categories Begin */}   
      <div className="container">
        <div className="banner">
          <div className="banner__pic"> 
            <img src={banner1Img} alt="banner" />
          </div>
          <div className="banner__pic"> 
            <img src={banner2Img} alt="banner" />
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(HomePage); 
