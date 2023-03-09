import React from "react";
import Logo from "../../assets/sukanaLogo.png";

import house1 from "../../assets/house_1.jpg";
import house2 from "../../assets/house_2.jpg";
import house3 from "../../assets/house_3.jpg";
import house4 from "../../assets/house_4.png";
import house5 from "../../assets/house_5.png";
import house6 from "../../assets/house_6.png";
import house7 from "../../assets/house_7.png";
import house8 from "../../assets/house_8.png";
import house9 from "../../assets/house_9.png";
import house10 from "../../assets/house_10.png";



import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilBedDouble } from "@iconscout/react-unicons";
import { UilBath } from "@iconscout/react-unicons";
import { UilArrowResizeDiagonal } from "@iconscout/react-unicons";


import { useState, useEffect } from "react";

const arrayOfImages = [
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7,
  house8,
  house9,
  house10,
];
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;



export default function Home() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
      const response = await fetch("http://localhost:3800/home");
      const data = await response.json();
      setData(data);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    console.log(data);


  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h2>About us</h2>
          <p className="about-text">
            Welcome to Surkana! Whether you're in the market for a
            new home, looking to sell your current property, or interested in
            investing in real estate, we're here to help. Our website is your
            one-stop-shop for all things property-related, with a wide range of
            listings and resources to help you make informed decisions.
            <br />
            <br />
            We
            understand that buying or selling a property can be a daunting
            process, which is why we've made it our mission to provide a
            user-friendly platform that's easy to navigate. Our listings are
            comprehensive and up-to-date, so you can be sure you're getting the
            most accurate information possible. In addition to our listings, we
            also offer a range of resources to help you navigate the property
            market.
            <br />
            <br />
            From guides on buying and selling, to tips on interior
            design and renovation, we're here to provide you with all the
            information you need to make the most of your property investment.
            Thank you for choosing our website as your go-to source for property
            information.
          </p>
        </div>
        <div className="hero-right">
          <img src={house2} alt="house" className="hero-img" />
        </div>
      </div>
      <div className="animation"></div>

<div className="examples">
  <div className="link-container">
      <a href="/properties"> Our Properties</a>
  </div>

   <div className="card-grid-home">
          {data?.map((val, index) => {
            return (
              <div key={val._id} className="card card-shadow">
                <div key={index} className="card-header card-image">
                  <img
                    src={arrayOfImages[random(0, arrayOfImages.length)]}
                    alt="house"
                  />
                </div>
                <div className="card-details">
                  <div className="street-container">
                    <p className="icon">{<UilLocationPoint />} </p>
                    {val.location}
                  </div>
                </div>

                <div className="card-body">
                  <div>{val.title}</div>
                  <div className="card-rooms">
                    <p className="card-rooms">
                      <UilArrowResizeDiagonal /> {val.size}
                    </p>
                    <p className="card-rooms">
                      <UilBedDouble /> {val.bedroom}
                    </p>
                    <p className="card-rooms">
                      <UilBath /> {val.bathroom}
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn">Details</button>
                  <button className="btn btn-outline">Contact Seller</button>
                </div>
              </div>
            );
          })}
        </div>
</div>
    </>
  );
}
