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
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    console.log(route);
    const fetchImageUrls = async () => {
      if (route && route.length >= 2) {
        const urls = [];
        for (let i = 0; i < route.length - 1; i++) {
          try {
            const response = await getDirectionPhoto(route[i], route[i + 1]);
            urls.push(response.imgUrl); // Add the image URL to the array
          } catch (err) {
            console.error(`Failed to fetch image for nodes ${route[i]} and ${route[i + 1]}:`, err);
          }
        }
        setImgUrls(urls); // Update the state with the fetched URLs
      }
    };

    fetchImageUrls();
  }, [route]);

  return (
    <div className="user-view-container">
      <h1>Direction Photos</h1>
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
          {imgUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="step-content">
                <img
                  src={url}
                  alt={`Step ${index + 1}`}
                  className="step-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/fallback.png"; // Fallback image in case of error
                  }}
                />
                <p className="step-instruction">Step {index + 1}</p>
              </div>
            </SwiperSlide>
          ))}
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