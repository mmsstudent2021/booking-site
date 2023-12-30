import Glide from "@glidejs/glide";
import React, { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    const glide = new Glide(".glide2", {
      type: "carousel",
      startAt: 0,
      perView: 6,
      breakpoints: {
        767: {
          perView: 2,
        },
        1024: {
          perView: 4,
        },
      },
      autoplay: 3000,
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  const images = [
    {
      id: 1,
      img: "../../../src/img/g1.jpg",
    },
    {
      id: 2,
      img: "../../../src/img/g1.5.jpg",
    },
    {
      id: 3,
      img: "../../../src/img/g2.jpg",
    },
    {
      id: 4,
      img: "../../../src/img/g3.jpg",
    },
    {
      id: 5,
      img: "../../../src/img/g4.jpg",
    },
    {
      id: 6,
      img: "../../../src/img/g5.jpg",
    },
    {
      id: 7,
      img: "../../../src/img/g6.jpg",
    },
    {
      id: 8,
      img: "../../../src/img/g7.jpg",
    },
  ];

  return (
    <div className=" px-[15px] mt-[100px] pb-[45px]">
      <h2 className="text-center mb-[50px]">Our Hotel Precious Moments</h2>

      <div className="glide2">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides flex items-end">
            {images.map((image) => (
              <li key={image.id} className="glide__slide px-[10px]">
                <img
                  src={image.img}
                  className="rounded-2xl max-w-full h-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
