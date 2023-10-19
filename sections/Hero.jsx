"use client";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section id="home" className="hero-section pt-8">
      <div className="container sm:w-[320px] lg:w-d pb-[56px]">
        <p className="text-[37px] font-thin uppercase tracking-[1.665px] leading-none text-right">
          <span className="font-medium mr-[5px]">7</span>Days
        </p>
        <span className="text-[12px] font-light tracking-wider uppercase text-right block mb-[24px]">
          Journey
        </span>
        <div className="text-left">
          <h1 className="text-[40px] uppercase font-thin tracking-[-1.6px] leading-[1.4] mb-[24px]">
            <b>Uncover</b> Carpathian’s Secrets
          </h1>
          <p className="font-extralight text-[10px] leading-[1.6] tracking-normal w-[157px] mb-[24px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <p className="text-justify font-extralight leading-[1.428] tracking-normal mb-[26.5px]">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <ScrollLink
          to="contacts"
          spy={true}
          smooth={true}
          offset={50}
          duration={700}
          className=" join-now-btn text-center block leading-[2.66] font-bold text-[18px] uppercase cursor-pointer"
        >
          Join now
        </ScrollLink>
      </div>
    </section>
  );
}
