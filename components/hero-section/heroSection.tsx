import Tagline from "./tagline";
import TimeCapsule from "./timeCapsule";

function HeroSection() {
    return (
        <section id="home" className="px-6 w-screen h-screen flex flex-col justify-center items-center space-y-32">
            <Tagline />
            <TimeCapsule />
        </section>
    );
}

export default HeroSection;
