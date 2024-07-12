import { londrina } from "@/fonts/fonts";
import { COLORS } from "@/utils/themes";



const Header = () => {
    
  return (
    <nav className= {`flex my-6 text-[#ffffff] tracking-[-1] ${londrina.className} `}>
      <div className= "text-[32px] leading-6 flex-1">
        <p className="text-[32px] leading-6">JS <span className="text-[#FFD911]">Andre</span></p>
        <p>Tattoo</p>
        <p>Shop</p>
      </div>
      <div className="flex flex-1 gap-16 items-center justify-evenly ">
        <span>Serviços</span>
        <span>Sobre mim</span>
        <span>Contato</span>
      </div>
    </nav>
  );
};

export default Header;
