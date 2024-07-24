import Image from 'next/image';
import signature from '../../assets/signature.svg'
import portrait from '../../assets/portrait.png'

const About = () => {
    return (
        <section className="text-white my-32">
            <h1 className="text-[32px]  font-black text-center lg:text-start">Prazer, sou <span className="text-[#FFD911]">Sandro Luz</span></h1>

            <aside className="flex flex-col lg:flex-row my-14 "  >
                <div className='flex flex-col gap-10 '>
                    <p className="text-[16px] text-justify">Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se imprime na pele. Com mais de 10 anos de experiência no mundo da tatuagem, dedico-me a transformar visões e emoções em arte corporal que expressa quem você é e o que você ama.</p>
                    <p className="text-[16px] text-justify">Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço atentamente os desejos e as histórias de meus clientes para que cada peça seja única e pessoal. Especializo-me em vários estilos, desde o delicado traço fino até composições mais robustas e coloridas, garantindo que cada design não só atenda, mas supere as expectativas.</p>
                    <p className="text-[16px] text-justify">Além da dedicação à arte, a segurança e o conforto são prioridades no meu estúdio. Utilizo apenas equipamentos esterilizados e de alta qualidade, e sou rigoroso quanto aos protocolos de higiene e segurança, garantindo uma experiência segura e confortável para todos.</p>
                    <p className="text-[16px] text-justify">Visite meu estúdio e veja como a arte pode se manifestar em sua pele. Estou aqui para ajudá-lo a contar sua história de uma maneira única e eterna. Agende sua consulta e vamos juntos criar algo extraordinário!</p>
                </div>

            </aside>
            <div className='flex items-center justify-center lg:justify-normal'>
                <Image src={signature} alt='signature Sandro Luz' width={120} />
            </div>



        </section>
    )
}

export default About;