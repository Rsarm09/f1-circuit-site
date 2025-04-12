  import React, { useEffect, useRef } from "react";
  import "./Paragraph.css";
  import gsap from "gsap";
  import SplitType from "split-type";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  import ParagraphGraphic from '/graphics/paragraphgraphic.svg';

  gsap.registerPlugin(ScrollTrigger);

  export default function Paragraph() {
    const paragraphRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
      if (!paragraphRef.current) return;
    
      const splitText = new SplitType(paragraphRef.current, { types: "words" });
    
      gsap.from(splitText.words, {
        opacity: 0.1,
        stagger: 0.6,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top",
          end: "+=100%",
          pin: true,
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
    
      // Add this
      ScrollTrigger.refresh();
    
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);
    

    return (
      <div ref={sectionRef} className="text-container">
        <img src={ParagraphGraphic} alt="Text Graphic" />
        <div className="paragraph-container">
          <p ref={paragraphRef} className="reveal-type">
            These iconic circuits have not only hosted fierce rivalries and
            unforgettable championship battles but have also driven innovation in
            safety, aerodynamics, and race strategy. The evolution of F1
            circuits, from treacherous road courses of the past to the
            cutting-edge, high-tech circuits of today mirrors the sport’s ongoing
            quest for perfection.
          </p>
        </div>
      </div>
    );
  }
