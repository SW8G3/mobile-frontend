import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './UserStyle.css';
import { useRoute } from './RouteContext';
import { getDirectionPhoto } from './API/NavigationAPI';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaArrowLeft } from 'react-icons/fa'; // Import an icon from react-icons
function NavigationDirections() {
  const { route } = useRoute();
  const [imgUrls, setImgUrls] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  useEffect(() => {
    const fetchImageUrls = async () => {
      if (route && route.length >= 2) {
        const urls = [];
        for (let i = 0; i < route.length - 1; i++) {
          try {
            const response = await getDirectionPhoto(route[i], route[i + 1]);
            console.log(response);
            urls.push(response.imgUrl); // Add the image URL to the array
          } catch (err) {
            console.error(
              `Failed to fetch image for nodes ${route[i]} and ${
                route[i + 1]
              }:`,
              err
            );
          }
        }
        setImgUrls(urls); // Update the state with the fetched URLs
      }
    };
    fetchImageUrls();
  }, [route]);
  return (
    <div className="user-view-container">
      <div style={{
        width: '100%',
        maxWidth: '360px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '1.5rem',
      }}>
        <button
          onClick={() => navigate('/destination')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#333',
          }}
          title="Back"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#333',
          }}
          title="Home"
        >
          🏠
        </button>
      </div>
      <h1>Direction Photos</h1>
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
      <div style={styles.bottomButtonWrapper}>
        <div style={styles.buttonsContainer}>
          <button onClick={() => navigate('/destination')} style={styles.actionButton}>
          Find another path
          </button>
          <button onClick={() => navigate('/qr-scan')} style={styles.actionButton}>
            Lost? Scan QR code
          </button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  bottomButtonWrapper: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '1rem',
  },
  actionButton: {
    width: '160px',
    height: '50px',
    fontSize: '1rem',
    fontWeight: '500',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
  },
};
export default NavigationDirections;


