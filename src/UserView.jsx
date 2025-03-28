import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./UserStyle.css";
import { useRoute } from "./RouteContext";
import { getDirectionPhoto } from "./API/NavigationAPI";

function UserView() {
  const { route } = useRoute();
  console.log("Context is here: " + route);
  const [nodePair, setNodePair] = useState((null, null));

  useEffect(() => {
    console.log("Route effect: " + route)
    if (route && route.length >= 2) {
      setNodePair(route[0], route[1]);
    }
    console.log("Node pair: " + nodePair)
  }, [route]);

  const getImageUrl = async () => {
    if (nodePair[0] !== null && nodePair[1] !== null) {
      const response = await getDirectionPhoto(nodePair[0], nodePair[1]);
      return response;
    } else {
      console.error("Invalid nodePair: ", nodePair);
    }
  };

  return (
    <div className="user-view-container">
      <div className="carousel-container" data-testid="carousel-container">
        <Swiper
          direction="horizontal"
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
        >
          {/* {steps.map((step) => (
            <SwiperSlide key={step.id}>
              <div className="step-content">
                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className="step-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/fallback.png";
                  }}
                />
                <p className="step-instruction">{step.instruction}</p>
              </div>
            </SwiperSlide>
          ))} */}
          <div
            className="swiper-button-next"
            data-testid="swiper-button-next"
          ></div>
          <div
            className="swiper-button-prev"
            data-testid="swiper-button-prev"
          ></div>
        </Swiper>
      </div>
    </div>
  );
}

export default UserView;
