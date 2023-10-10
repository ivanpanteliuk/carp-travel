import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery">
      <h2>
        Our <b>gallery</b>
      </h2>
      <ul>
        <li>
          <Image
            src={"/assets/images/mountains-m.jpg"}
            alt="Carpathian's mountains from a high view"
            width={280}
            height={187}
          />
        </li>

        <li>
          <Image
            src={"/assets/images/lake-m.jpg"}
            alt="Carpathian lake against the backdrop of a forest and mountains."
            width={280}
            height={187}
          />
        </li>
        <li>
          <Image
            src={"/assets/images/forest-m.jpg"}
            alt="Tiny old house located in Carpathian's mountains among the forest"
            width={280}
            height={187}
          />
        </li>
      </ul>
    </section>
  );
}
