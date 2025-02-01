"use client";
import React, { useState, useEffect, useRef } from "react";

const Banner2 = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const sliderRef = useRef(null);

  // Handle next button click
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous button click
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle pagination dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 50) {
      nextSlide();
      setIsSwiping(false);
    } else if (diff < -50) {
      prevSlide();
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition duration-300 z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Image Slide */}
      <div className="flex w-full h-96 relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition duration-300 z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner2;
