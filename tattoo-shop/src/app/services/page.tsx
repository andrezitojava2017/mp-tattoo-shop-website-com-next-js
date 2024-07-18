
const Services = () => {
    return (
        <section className="text-white my-32">
            <h1 className="text-[32px] text-[#FFD911] font-black">Serviços</h1>

            <aside className="flex flex-col md:flex-row  my-24  gap-8 ">
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-[18px] font-black">Tatuagens Personalizadas</h3>
                    <p className="text-[14px] font-extralight text-[#CCCCCC] text-center lg:text-justify">Oferecemos a criação de tatuagens personalizadas, onde cada design é desenvolvido em colaboração direta com o cliente. A partir de uma ideia inicial, trabalhamos juntos para criar uma obra de arte única que reflete sua personalidade e sentimentos.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-[18px] font-black">Cover-Up</h3>
                    <p className="text-[14px] font-extralight text-[#CCCCCC] text-center lg:text-justify">Especializamo-nos em transformar tatuagens antigas ou indesejadas em novas obras de arte. Se você tem uma tatuagem que não representa mais quem você é, nós podemos ajudá-lo a reformulá-la com um design criativo e original.</p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-[18px] font-black">Restauração</h3>
                    <p className="text-[14px] font-extralight text-[#CCCCCC] text-center lg:text-justify">Com o tempo, algumas tatuagens podem desbotar ou perder a definição. Oferecemos serviços de restauração para revitalizar sua tatuagem antiga, realçando as cores e contornos para que ela volte a ter a aparência de quando foi feita pela primeira vez.</p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-[18px] font-black">Henna</h3>
                    <p className="text-[14px] font-extralight text-[#CCCCCC] text-center lg:text-justify">Para aqueles que não estão prontos para um compromisso permanente ou desejam testar um design antes de tatuá-lo definitivamente, oferecemos tatuagens temporárias de alta qualidade que duram de algumas semanas a alguns meses.</p>
                </div>
            </aside>
        </section>
    )
}

export default Services;