import React, { useRef, useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../styles/home.scss";
import imgSrc from "../assests/porsche-main.png";
import aboutImgSrc from "../assests/cars-about.jpg";
import carData from "../CarData";
import { useNavigate } from "react-router-dom";
import {
  SiHonda,
  SiMercedes,
  SiAudi,
  SiNissan,
  SiBentley,
  SiHyundai,
  SiToyota,
  SiTesla,
} from "react-icons/si";

import carSvg from "../assests/car.svg";
import circles from "../assests/circle.svg";
import clockSvg from "../assests/clock.svg";

const ServiceCard = [
  {
    imgSrc: carSvg,
    title: "Quality Choice",
    desc: "Search from a wide selection of cars curated by Renty partners with fast and easy way",
  },
  {
    imgSrc: circles,
    title: "Exclusive Service",
    desc: "Renty Partners are ready to help you find your dream car for your holiday in the citys",
  },
  {
    imgSrc: clockSvg,
    title: "Fast and Safe",
    desc: "Transactions process is completed within 24 hours (verified by Bank Indonesia)",
  },
];

const Home = () => {
  let refCount = 0;
  let carCount = 0;
  const [carDisplayState, setCarDisplayState] = useState("popular");

  const aboutAnimationRef = useRef(null);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");

        observer.unobserve(entry.target);
      }

      return () => {
        observer.disconnect();
      };
    }, []);
    // console.log(aboutAnimationRef.current);
    observer.observe(aboutAnimationRef.current);
    refs.current.map((el) => {
      if (el !== null) {
        return observer.observe(el);
      }
      return null;
    });
    // observer.observe(servicesAnimationRef.current);
  }, []);

  const getPopularCars = () => {
    let Cars = [...carData];
    Cars.sort((a, b) => b.popluarity - a.popluarity);
    Cars.splice(6, Infinity);

    return Cars;
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cars");
  };

  return (
    <>
      {/* Home Section */}
      <div id="home" className="home">
        <article>
          <h1>Search and find your best car rental with easy way</h1>
          <p>
            Drive performance and your cross-functional with easy-to-use
            dashboards, data visualizations, and automated insights in one click
          </p>

          <div>
            <button>
              <p>Booking now</p>
              <BsFillTelephoneFill />
            </button>
            <h3>See all cars</h3>
          </div>
        </article>
        <img src={imgSrc} alt="Porsche" />
      </div>

      <div id="about" className="divider">
        <SiHonda />
        <SiMercedes />
        <SiAudi />
        <SiNissan />
        <SiBentley />
        <SiHyundai />
        <SiToyota />
        <SiTesla />
      </div>

      {/* About Section */}
      <div ref={aboutAnimationRef} className="about">
        <img src={aboutImgSrc} alt="Cars" />
        <article>
          <h3>about us</h3>
          <h1>More than 150+ special collection cars</h1>
          <p>
            Get the car of your dreams with installments of your choice.There
            are various attractive offers from Moladin through our collabration
            with various trusted leasing partners
          </p>
          <button onClick={handleClick}>See all cars &#8640;</button>
        </article>
      </div>

      {/* Services */}

      <div
        id="services"
        className="services"
        ref={(el) => (refs.current[refCount++] = el)}
      >
        <article>
          <h3>Our Services</h3>
          <h2>We have best services for the rent cars</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            voluptates similique aut quo ipsa, sit voluptatibus. Velit
            distinctio
          </p>
        </article>
        <div
          className="cards-list"
          ref={(el) => (refs.current[refCount++] = el)}
        >
          {ServiceCard.map((el, ind) => {
            return (
              <Card
                title={el.title}
                desc={el.desc}
                cardImage={el.imgSrc}
                key={ind}
              />
            );
          })}
        </div>
      </div>

      {/* Car Collections */}

      <div
        className="collections"
        ref={(el) => (refs.current[refCount++] = el)}
      >
        <h2>Collections</h2>
        <p>Our Collection Cars</p>

        <ul className="nav-cars">
          <p className="active">
            <li
              onClick={(e) => {
                setCarDisplayState("popular");
                e.currentTarget.parentElement.classList.add("active");
                e.currentTarget.parentElement.nextElementSibling.classList.remove(
                  "active"
                );
                e.currentTarget.parentElement.nextElementSibling.nextElementSibling.classList.remove(
                  "active"
                );
              }}
            >
              Popular
            </li>
          </p>
          <p>
            <li
              onClick={(e) => {
                setCarDisplayState("small");
                carCount = 0;
                e.currentTarget.parentElement.classList.add("active");
                e.currentTarget.parentElement.previousElementSibling.classList.remove(
                  "active"
                );
                e.currentTarget.parentElement.nextElementSibling.classList.remove(
                  "active"
                );
              }}
            >
              Small Cars
            </li>
          </p>
          <p>
            <li
              onClick={(e) => {
                setCarDisplayState("large");
                carCount = 0;
                e.currentTarget.parentElement.classList.add("active");
                e.currentTarget.parentElement.previousElementSibling.classList.remove(
                  "active"
                );
                e.currentTarget.parentElement.previousElementSibling.previousElementSibling.classList.remove(
                  "active"
                );
              }}
            >
              large cars
            </li>
          </p>
        </ul>

        <div className="cars" ref={(el) => (refs.current[refCount++] = el)}>
          {carDisplayState === "popular"
            ? getPopularCars().map((el) => {
                return (
                  <CarCard
                    name={el.car}
                    model={el.car_model}
                    imgSrc={el.imgSrc}
                    price={el.price}
                    key={el.id}
                  />
                );
              })
            : carData.map((el) => {
                var flag = true;
                if (carDisplayState === "small" && el.type !== "small") {
                  flag = false;
                } else if (carDisplayState === "large" && el.type !== "large") {
                  flag = false;
                }

                if (flag && carCount < 6) {
                  carCount++;
                  return (
                    <CarCard
                      name={el.car}
                      model={el.car_model}
                      imgSrc={el.imgSrc}
                      price={el.price}
                      key={el.id}
                    />
                  );
                }
                return null;
              })}
        </div>
        <button onClick={handleClick}>
          See all cars <span>&#8640;</span>
        </button>
      </div>
    </>
  );
};

const Card = ({ title, desc, cardImage }) => {
  return (
    <div className="service-card">
      <img src={cardImage} alt="card-svg" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

const CarCard = ({ name, model, imgSrc, price }) => {
  return (
    <div className="car-card">
      <img src={imgSrc} alt="Car" />
      <p>
        $ {price.split("$")[1]}
        <span> /week</span>
      </p>
      <p>{`${name} ${model}`}</p>
      <button>
        <p>Booking Now</p>
        <BsFillTelephoneFill />
      </button>
    </div>
  );
};

export default Home;
