import Image from "next/image";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container sm:py-[55px]">
        <h2 className="text-[40px] font-thin leading-[1.4] uppercase tracking-[-1.6px] mb-[24px] ">
          Our <b>gallery</b>
        </h2>
        <ul>
          <li className="mb-[24px]">
            <Image
              src={"/assets/images/mountains-m.jpg"}
              alt="Carpathian's mountains from a high view"
              width={280}
              height={187}
            />
          </li>

          <li className="mb-[24px]">
            <Image
              src={"/assets/images/lake-m.jpg"}
              alt="Carpathian lake against the backdrop of a forest and mountains."
              width={280}
              height={187}
            />
          </li>
          <li className="mb-[24px]">
            <Image
              src={"/assets/images/forest-m.jpg"}
              alt="Tiny old house located in Carpathian's mountains among the forest"
              width={280}
              height={187}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
