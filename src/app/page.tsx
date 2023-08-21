import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home p-5">
        <div className="font-bold text-2xl">Welcome!</div>
        <Link href="./projects/home" >
          <div className="p-3 m-3 rounded bg-cyan-300 inline-block">
            Home Page
          </div>
          
        </Link>
      </div>
    </>
  )
}
