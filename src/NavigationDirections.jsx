/* eslint-disable no-console */
 
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './UserStyle.css';
import { getRoute, getDirectionPhoto } from './API/NavigationAPI';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './components/Header';
import SearchButton from './components/SearchButton';

function NavigationDirections() {
  const { source, destination } = useParams();
  const [imgUrls, setImgUrls] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
  const fetchRouteAndImages = async () => {
    if (source && destination) {
      try {
        const routeData = await getRoute(source, destination);

        console.log('Route data:', routeData); // Log the route data for debugging
        if (Array.isArray(routeData) && routeData.length >= 2) {
          
          const urls = [];
          for (let i = 0; i < routeData.length - 1; i++) {
            try {
              const response = await getDirectionPhoto(routeData[i], routeData[i + 1]);
              urls.push(response.imgUrl);
            } catch (err) {
              console.error(
                `Failed to fetch image for nodes ${routeData[i]} and ${routeData[i + 1]}:`,
                err
              );
            }
          }
          setImgUrls(urls);
        } else {
          setImgUrls([]);
        }
      } catch (err) {
        console.error('Failed to fetch route:', err);
        setImgUrls([]);
      }
    }
  };
  fetchRouteAndImages();
}, [source, destination]);
  return (
    <div style={styles.container}>
      <Header />
      
      {imgUrls.length === 0 ? (
        <div className="loading-animation" data-testid="loading-animation">
          <p style={{color:'black', fontSize: '2rem'}}>Loading...</p>
          {/* You can replace this with a spinner or any loading animation */}
        </div>
      ) : (
        <div className="carousel-container" data-testid="carousel-container">
          <Swiper
            direction="horizontal"
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            style={{ marginTop: '0 !important', paddingTop: '0 !important' }}
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
                      e.target.src = '/fallback.png'; // Fallback image in case of error
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
      )}
      
      <div style={styles.bottomButtonWrapper}>
        <div style={styles.buttonsContainer}>
          <SearchButton onClick={() => navigate('/destination')} style={styles.actionButton}>
            Change destination
          </SearchButton>
          <SearchButton onClick={() => navigate('/qr-scan')} style={styles.actionButton}>
            Lost? Scan QR code
          </SearchButton>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    padding: '2rem', // Scalable padding
    backgroundColor: '#f5f5f5',
    boxSizing: 'border-box', // Ensures padding is included in width/height
  },
  bottomButtonWrapper: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonsContainer: {
    display: 'flex',
    gap: '1rem',
  },
  actionButton: {
    width: '160px',
    height: '50px',
    fontSize: '1.2rem',
    fontWeight: '500',
    backgroundColor: 'rgba(62, 103, 175, 1)', // blue background
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    paddingBottom: '3.5rem',
    fontFamily: 'Lexend',
},
  left: {
    postion: 'absolute',
    left: '0',
  }
};
export default NavigationDirections;


