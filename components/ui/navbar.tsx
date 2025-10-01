export default function Navbar() {
  return (
    <nav>
      <div className="fixed top-0 w-screen h-auto flex justify-center items-center p-6">
        <div className="w-1/4">
            <h1 className="text-lg font-light tracking-wider pointer-events-none select-none">CHRISTIAN</h1>
            <h1 className="pl-4 text-lg font-light tracking-wider pointer-events-none select-none">MAMPLATA</h1>

        </div>
        <div className="w-full">
            <ul className="hidden w-full md:flex justify-end items-center text-lg font-medium space-x-12 lg:space-x-16">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#expertise">Expertise</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a className="px-4 py-2 bg-sky-400 hover:bg-sky-500 text-gray-900 rounded-full" href="#contact">Get in Touch!</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}
