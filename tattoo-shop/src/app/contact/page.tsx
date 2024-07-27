
import { inter } from "@/fonts/fonts";
import { MdWhatsapp } from "react-icons/md";
import contact from '../../assets/foto.png'
import Image from "next/image";

const Contact = () => {
    return (
        <section className="flex justify-around items-center h-screen" >
            <div className="flex flex-col items-center lg:items-start text-white  gap-16 ">
                <div className={`${inter.className} text-[24px] leading-[35px] lg:text-[32px] lg:leading-[80px]  tracking-tighter font-black `}  >
                    <h1>Entre em <span className="text-[#FFD911]">Contato</span></h1>
                </div>

                <div>
                    <p className="text-gray-400 text-center lg:text-justify">Clique no botão abaixo e envie uma mensagem.</p>
                    <p className="text-gray-400 text-center lg:text-justify">Vamos conversar!</p>
                </div>

                <div className="flex bg-[#636363] p-5 gap-3 md:max-w-[244px]">
                    <MdWhatsapp color="white" size={30} />
                    <div className="flex flex-col ">
                        <a href="https://wa.me/5511997111111" target="_blank">Enviar Whatsapp</a>

                        <span className="text-gray-400 text-xs
                    ">(+55 11) 99711-1111)</span>
                    </div>
                </div>
            </div>

            <div className="hidden md:block">
                <Image src={contact} alt='Sandro Luz' width={758} />
            </div>

        </section>
    )
}

export default Contact;