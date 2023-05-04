

const Technology = () => {
    return (
        <section id="technology" className="py-8 min-h-screen bg-cover bg-center bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop">
            <div className="grid py-8">
                <h2 className="text-center py-4 text-xl lg:text-3xl uppercase text-white md:justify-self-start md:py-8 lg:col-start-1 lg:self-end">
                    <span className="pr-4 font-bold text-gray-500 ">03</span>
                    Space launch 101
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">

                    <picture className="w-full ">
                        <img className="hidden md:block aspect-video object-contain" src="/images/technology/image-launch-vehicle-portrait.jpg" />
                        <img className="md:hidden" src="/images/technology/image-launch-vehicle-landscape.jpg" />
                    </picture>


                </div>
                <div className="flex justify-center gap-4">
                    <button className="rounded-full w-12 h-12 bg-white aspect-square">1</button>
                    <button className="rounded-full w-12 h-12 bg-white aspect-square">2</button>
                    <button className="rounded-full w-12 h-12 bg-white aspect-square">3</button>
                </div>

            </div>
        </section>
    );
}

export default Technology;
