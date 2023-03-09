import { useState, useEffect } from "react";
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

import FilterComponent from "../../componens/FilterComponent";

function PropertiesList() {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState("ar-AE"); //

  const fetchData = async () => {
    const response = await fetch("http://localhost:3800");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Mock-data-pictures
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

  const currencyOption = currency === "de-AT" ? "EUR" : "USD";

  const { format } = new Intl.NumberFormat(currency, {
    style: "currency",
    currency: currencyOption,
  });

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    getBase64(file, (result) => {
      const idCardBase64 = result;
      console.log(idCardBase64);
    });
  }

  function getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const countryOptions = [
    { label: "Dubai", value: "Dubai" },
    { label: "EU", value: "EU" },
    { label: "Turkey", value: "Turkey" },
  ];

  const currencyOptions = [
    { label: "AED", value: "ar-AE" },
    { label: "EUR", value: "de-AT" },
    { label: "USD", value: "en-US" },
  ];

  const cityOptions = [
    { label: "Dubai", value: "100" },
    { label: "Wien", value: "Wien" },
    { label: "Berlin", value: "Berlin" },
  ];

  const roomOptions = [
    { label: 2, value: "2" },
    { label: 3, value: "3" },
    { label: 4, value: "4" },
    { label: 5, value: "5" },
  ];

  return (
    <>
      {/* <input type="file" onChange={handleFileInputChange} /> */}
      <div className="filter-container">
        <div className="filter-header">
          <span className="filter-span">Filter</span>
          <div className="filter-elements">
            <FilterComponent
              label="Currency:"
              options={currencyOptions}
              onChange={handleCurrencyChange}
              value={currency}
            />
            <FilterComponent label="Country:" options={countryOptions} />
            <FilterComponent label="City:" options={cityOptions} />
            <FilterComponent label="Area:" options={cityOptions} />
            <FilterComponent label="Rooms:" options={roomOptions} />
            <div>
              <label> Price: </label>
              <select>
                <option value="">Select price range</option>
                <option value="$0-$50">$0 - $50</option>
                <option value="$50-$100">$50 - $100</option>
                <option value="$100-$200">$100 - $200</option>
                <option value="$200+">$200+</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="card-grid">
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
                  <div className="price">{format(val.price)}</div>
                </div>

                <div className="card-body">
                  <div>{val.title}</div>
                  <div>{val.desription}</div>
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

export default PropertiesList;
