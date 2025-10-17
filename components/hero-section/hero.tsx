import Tagline from "./tagline";
import ShowWorkBtn from "./show-work-btn";
import TimeCapsule from "./time-capsule";

export default function Hero() {
    return (
        <section id="home" className="min-w-full min-h-screen flex flex-col justify-center items-center select-none">
            <Tagline />
            <ShowWorkBtn />
            <TimeCapsule />
        </section>
    );
}