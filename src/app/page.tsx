import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home">
        {/* <div className="font-bold text-2xl">Welcome!</div>
        <Link href="./projects/home" >
          <div className="p-3 m-3 rounded bg-cyan-300 inline-block">
            Home Page
          </div>

          
        </Link> */}
        <Link href="./projects/home">
          <Image src="https://www.webpagescreenshot.info/image-url/a9SxHmCkg" alt="slek image" className="w-full" />
        </Link>
        <Image src="https://static.wixstatic.com/media/f29db6_c933960b4fc14b45b7f46b63cf157bea~mv2.jpeg" alt="slek image"  className="w-full" />
        <Image src="https://static.wixstatic.com/media/f29db6_bf01e7a760644fe1b2c85802ac9a834d~mv2.jpg/v1/fill/w_1701,h_1134,al_c,q_90/f29db6_bf01e7a760644fe1b2c85802ac9a834d~mv2.webp" alt="slek image"  className="w-full" />
        <Image src="https://static.wixstatic.com/media/f29db6_b3a478f352984f669a448a19eab6a727~mv2.jpg/v1/fill/w_882,h_1004,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f29db6_b3a478f352984f669a448a19eab6a727~mv2.jpg" alt="slek image"  className="w-full" />

      </div>
    </>
  )
}
