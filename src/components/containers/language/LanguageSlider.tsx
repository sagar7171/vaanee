import React from "react";
import Image from "next/image";
import canada from "public/images/flag/canada.png";
import usa from "public/images/flag/usa.png";
import uk from "public/images/flag/uk.png";
import irish from "public/images/flag/irish.png";
import turkish from "public/images/flag/turkish.png";
import italy from "public/images/flag/italy.png";
import french from "public/images/flag/french.png";
import japan from "public/images/flag/japan.png";
import china from "public/images/flag/china.png";
import india from "public/images/flag/india.png";
import bangladesh from "public/images/flag/bangladesh.png";
import malay from "public/images/flag/malay.png";
import filipine from "public/images/flag/filipine.png";
import portugal from "public/images/flag/portugal.png";
import australia from "public/images/flag/australia.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const LanguageSlider = () => {
  return (
    <section
      className="section language pb-0"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div className="section__header">
              <h3 className="h3">Unification of Human Languages In The World 
</h3>
              <p>
              Vaanee believes in unification of diversity of global languages to understand humans better. Vaanee AI Engine allows you to clone your voice once and use it in any language to connect with your global audience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        speed={5000}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        grabCursor={false}
        className="language__slider"
      >
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={canada} alt="Image" priority />
            </div>
            <p className="fw-5">canada english</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={usa} alt="Image" priority />
            </div>
            <p className="fw-5">USA English</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={uk} alt="Image" priority />
            </div>
            <p className="fw-5">british english</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={irish} alt="Image" priority />
            </div>
            <p className="fw-5">irish english</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={turkish} alt="Image" priority />
            </div>
            <p className="fw-5">turkish</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={italy} alt="Image" priority />
            </div>
            <p className="fw-5">italian</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={french} alt="Image" priority />
            </div>
            <p className="fw-5">french</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={japan} alt="Image" priority />
            </div>
            <p className="fw-5">japanese</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={china} alt="Image" priority />
            </div>
            <p className="fw-5">chinese</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={india} alt="Image" priority />
            </div>
            <p className="fw-5">hindi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={bangladesh} alt="Image" priority />
            </div>
            <p className="fw-5">bengali</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={malay} alt="Image" priority />
            </div>
            <p className="fw-5">malay</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={filipine} alt="Image" priority />
            </div>
            <p className="fw-5">filipino</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={portugal} alt="Image" priority />
            </div>
            <p className="fw-5">Portuguese</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="language__slider-single">
            <div className="thumb">
              <Image src={australia} alt="Image" priority />
            </div>
            <p className="fw-5">Australia</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div dir="rtl">
        <Swiper
          speed={7000}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          freeMode={true}
          grabCursor={false}
          className="language__slider-rtl"
        >
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={canada} alt="Image" priority />
              </div>
              <p className="fw-5">canada english</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={usa} alt="Image" priority />
              </div>
              <p className="fw-5">USA English</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={uk} alt="Image" priority />
              </div>
              <p className="fw-5">british english</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={irish} alt="Image" priority />
              </div>
              <p className="fw-5">irish english</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={turkish} alt="Image" priority />
              </div>
              <p className="fw-5">turkish</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={italy} alt="Image" priority />
              </div>
              <p className="fw-5">italian</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={french} alt="Image" priority />
              </div>
              <p className="fw-5">french</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={japan} alt="Image" priority />
              </div>
              <p className="fw-5">japanese</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={china} alt="Image" priority />
              </div>
              <p className="fw-5">chinese</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={india} alt="Image" priority />
              </div>
              <p className="fw-5">hindi</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={bangladesh} alt="Image" priority />
              </div>
              <p className="fw-5">bengali</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={malay} alt="Image" priority />
              </div>
              <p className="fw-5">malay</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={filipine} alt="Image" priority />
              </div>
              <p className="fw-5">filipino</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={portugal} alt="Image" priority />
              </div>
              <p className="fw-5">Portuguese</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="language__slider-single">
              <div className="thumb">
                <Image src={australia} alt="Image" priority />
              </div>
              <p className="fw-5">Australia</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default LanguageSlider;
