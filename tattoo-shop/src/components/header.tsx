import { londrina } from "@/fonts/fonts";
import { COLORS } from "@/utils/themes";
import Link from "next/link";



const Header = () => {

  return (
    <nav className={`flex my-6 text-[#ffffff] tracking-[-1] ${londrina.className} `}>
      <div className="text-[32px] leading-6 flex-1">
        <p className="text-[32px] leading-6">JS <span className="text-[#FFD911]">Andre</span></p>
        <p>Tattoo</p>
        <p>Shop</p>
      </div>
      <div className="flex flex-1 gap-8 items-center justify-end flex-wrap">
        <Link href={'/services'}><span>Serviços</span></Link>
        <span>Sobre mim</span>
        <span>Contato</span>
      </div>
    </nav>
  );
};

export default Header;
