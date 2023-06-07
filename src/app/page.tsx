export default function World() {
    return (
        <>
            <section className="w-full h-[600px] sm:min-h-[1024px] bg-gradient-to-b from-black to-[#111010] flex">
                <div className="max-[400px]:h-64 max-[400px]:w-10/12 h-72 w-[400px] sm:w-[600px] sm:h-96 m-auto bg-[#ff1313] rounded-[45px] grid grid-rows-3 shadow-2xl shadow-[rgb(42,56,255)] hover:shadow-[rgb(134,42,255)] hover:scale-110 transiton duration-300 ">
                    <div className="row-span-1 text-white text-center flex">
                        <div className="m-auto">
                            <div className="text-5xl sm:text-7xl font-bold uppercase">Hello</div>
                            <div className="text-2xl sm:text-3xl font-bold ">my name is</div>
                        </div>
                    </div>
                    <div className="row-span-2 bg-white h-[95%] w-[95%] mx-auto rounded-t-none rounded-b-[45px] flex">
                        <div className="font-marker font-bold text-5xl sm:text-7xl m-auto text-center">Juan Lagunas</div>
                    </div>
                </div>
            </section>
            <main></main>
        </>
    );
}