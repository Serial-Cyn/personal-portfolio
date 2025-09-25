/*
PROJECTS:
GODOT game project
Java Heroes
Monobit
Project Portfolio - Maam Roan / Sir ron


*/

function Projects() {
    return(
        <div id="projects" className="w-full mb-32 px-6">
            <div>
                <h1 className="text-6xl font-bold">FEATURED</h1>
                <h1 className="text-6xl font-bold">WORKS</h1>
            </div>
            <div className="mt-6">
                <ul>
                    <li>
                        {/* Card DIV */}
                        <div className="w-full h-auto rounded-4xl">
                            {/* IMAGE HERE */}
                            <div className="w-full p-6">
                                <img className="rounded-2xl" src="#" alt="Project 1" />
                            </div>
                            
                            {/* Content DIV */}
                            <div className="p-6">
                                <h2 className="text-4xl font-bold">Project Title</h2>
                                <p className="mt-4 text-lg">DD/MM/YYYY</p>
                                <p className="mt-4 text-lg">Brief description of the project goes here.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;