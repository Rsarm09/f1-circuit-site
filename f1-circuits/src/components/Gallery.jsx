import React, { useRef, useEffect } from 'react';
import './Gallery.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//images
import MonzaPoster from '/images/MonzaPoster.png';
import MonacoPoster from '/images/MonacoPoster.png';
import SilverstonePoster from '/images/SilverstonePoster.png';
import SpaPoster from '/images/SpaPoster.png';
import GillesVillneuvePoster from '/images/GillesVilleneuvePoster.png';




export default function Gallery() {
  const galleryItems = [
    { id: 1, name: 'monza', image: MonzaPoster },
    { id: 2, name: 'monaco', image: MonacoPoster },
    { id: 3, name: 'silverstone', image: SilverstonePoster },
    { id: 4, name: 'spa', image: SpaPoster },
    { id: 5, name: 'monza', image: GillesVillneuvePoster }
  ];

  const imageContainerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    let totalWidth = 0;

    // Calculate the total width of all images in the gallery
    imageRefs.current.forEach((img) => {
      if (img) totalWidth += img.offsetWidth;
    });

    // Animate the gallery from left to right
    gsap.to(imageContainerRef.current, {
      x: -(totalWidth - window.innerWidth),  // Move gallery from left to right
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.gallery-section',
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 3,
        pin: true,
      }
    });
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-container" ref={imageContainerRef}>
        {galleryItems.map((item, index) => (
          <div key={item.id} className="gallery-item">
            <img
              src={item.image}
              alt={item.name}
              className="gallery-image"
              ref={(el) => (imageRefs.current[index] = el)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
