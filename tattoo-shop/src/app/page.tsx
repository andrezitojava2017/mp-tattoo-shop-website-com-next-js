import Image from "next/image";
import portrait from "../assets/portrait.png";
import { inter } from "@/fonts/fonts";

export default function Home() {
  return (
    <section className="flex flex-row 
    lg:justify-between items-center 
    sm:bg-none 
    lg:bg-[url(../assets/textBgSvg.svg)] 
    bg-no-repeat 
    bg-[left_8rem]">
      <div
        className={`${inter.className} text-[40px] leading-[35px] lg:text-[80px] lg:leading-[80px]  tracking-tighter font-black  `}
      >
        <h1 className="text-[#636363]">INSPIRE-SE</h1>
        <h1 className="text-[#636363]">EXPRESSE-SE</h1>
        <h1 className="text-[#FFD911]">TATUE-SE</h1>
      </div>
      <aside >
        <Image src={portrait} alt="Imagem Sandro Luz" height={800} />
      </aside>
    </section>
  );
}
