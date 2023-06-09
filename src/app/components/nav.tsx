const Nav = () => {
    return (
        <nav className="fixed w-full h-[90px] font-bold text-center flex items-center">
            <div className="w-[90%] sm:w-10/12 lg:w-7/12 h-[54px] mx-auto text-white flex justify-between items-center gap-2 bg-[rgba(20,20,20,0.8)] rounded-2xl">
                <div className="pl-4 text-xl">
                    <a href="" className="sm:hover:scale-110 sm:hover:-translate-y-1 transition ease-in-out duration-200">PBJ</a>
                </div>

                <div className="flex gap-4 pr-4 capitalize text-sm font-bold ">
                    <a href="#about" className="hover:text-[red] transition ease-in-out duration-200">About</a>
                    <a href="#skills" className="hover:text-[red] transition ease-in-out duration-200">Skills</a>
                    <a href="#projets" className="hover:text-[red] transition ease-in-out duration-200">projets</a>
                    <a href="#contact" className="hover:text-[red] transition ease-in-out duration-200">Contact</a>
                </div>
                    
            </div>
        </nav>
    );
}

export default Nav;