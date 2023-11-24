import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimeOne from "public/images/anime-one.png";
import AnimeTwo from "public/images/anime-two.png";
import Thumb from "public/images/clone-thumb.png";
import CloneItem from "./CloneItem";
const CloneLight = () => {
  return (
    <section className="section clone pt-0">
      <div className="container">
        <div className="row items-gap align-items-center">
          <div className="col-12 col-lg-6">
            <div
              className="clone__thumb"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <CloneItem
                img={Thumb}
                audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              />
              <div className="text-end">
                <CloneItem
                  img={Thumb}
                  audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                />
              </div>
              <div className="anime">
                <Image
                  src={AnimeOne}
                  priority
                  alt="Image"
                  className="anime-one"
                />
                <Image
                  src={AnimeTwo}
                  priority
                  alt="Image"
                  className="anime-two"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="clone__content section__content">
              <h2 className="h2">Pitch Perfect Voice Clones</h2>
              <div
                className="paragraph"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <p className="fw-5 text-lg">
                  Vaanee&apos;s AI voice engine lets you create realistic
                  human-like voiceovers in seconds.
                </p>
                <p>
                Let your content and audience go beyond the language barrier with our advanced Vaanee AI Voice Engine. Generate high-quality voice cloning video output in your own voice, style, and language. Our Voice Cloning Engine revolutionises content creation with realistic voices, benefiting creators.
                </p>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Emotions
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Speech-To-Speech
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Localize
                </li>
              </ul>
              <div
                className="section__content-cta"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <Link href="/contact-us" className="btn btn--primary">
                  request A Demo
                </Link>
                <Link href="/about-us" className="btn btn--quaternary">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloneLight;
