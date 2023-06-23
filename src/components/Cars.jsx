import React from "react";
import carData from "../CarData";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../styles/Cars.scss";

const Cars = () => {
  return (
    <div className="collections carsPage">
      <h1>Our Cars Collection</h1>
      <div className="cars">
        {carData.map((el) => {
          return (
            <CarCard
              name={el.car}
              model={el.car_model}
              imgSrc={el.imgSrc}
              price={el.price}
              type={el.type}
              populoarity={el.popularity}
              key={el.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const CarCard = ({ name, model, imgSrc, price, type, populoarity }) => {
  return (
    <div className="car-card">
      <img src={imgSrc} alt="Car" />
      <p>
        $ {price.split("$")[1]}
        <span> /week</span>
      </p>
      <p>{`${name} ${model}`}</p>
      <p>Type: {type} car</p>
      <p>Popularity {populoarity}</p>
      <button>
        <p>Booking Now</p>
        <BsFillTelephoneFill />
      </button>
    </div>
  );
};

export default Cars;
