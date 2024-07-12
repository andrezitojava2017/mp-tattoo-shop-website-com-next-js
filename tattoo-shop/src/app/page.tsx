import Image from "next/image";
import sv from "../assets/textBgSvg.svg";
import portrait from "../assets/portrait.png";
import { inter } from "@/fonts/fonts";
import { COLORS } from "@/utils/themes";

export default function Home() {
  return (
    <section className="flex flex-row min-h-screen justify-between items-center">
      <div
        className={`${inter.className} text-[80px] tracking-tighter font-black leading-[80px]`}
      >
        <h1 className="text-[#636363]">INSPIRE-SE</h1>
        <h1 className="text-[#636363]">EXPRESSE-SE</h1>
        <h1 className="text-[#FFD911]">TATUE-SE</h1>
      </div>
      <aside>
        <Image src={portrait} alt="Imagem Sandro Luz" width={365} />
      </aside>
    </section>
  );
}
