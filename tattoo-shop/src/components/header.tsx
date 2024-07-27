import { londrina } from "@/fonts/fonts";
import { COLORS } from "@/utils/themes";
import Link from "next/link";



const Header = () => {

  return (
    <nav className={`flex my-6 text-[#ffffff] tracking-[-1] ${londrina.className} `}>
      <div className="text-[32px] leading-6 flex-1">
        <Link href={'/'} >
          <p className="text-[32px] leading-6">Sandro <span className="text-[#FFD911]">Luz</span></p>
          <p>Tattoo</p>
          <p>Shop</p>
        </Link>
      </div>
      <div className="flex flex-1 gap-8 items-center justify-end flex-wrap">
        <Link href={'/services'}><span className="hover:text-[#FFD911] hover:text-xl  ">Serviços</span></Link>
        <Link href={'/about'}><span className="hover:text-[#FFD911] hover:text-xl">Sobre mim</span></Link>
        <Link href={'/contact'}><span className="hover:text-[#FFD911] hover:text-xl">Contato</span></Link>
      </div>
    </nav>
  );
};

export default Header;
