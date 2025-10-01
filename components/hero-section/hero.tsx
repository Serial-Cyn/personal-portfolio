import Tagline from "./tagline";
import ShowWorkBtn from "./showWorkBtn";
import TimeCapsule from "./time-capsule";

export default function Hero() {
    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center select-none">
            <Tagline />
            <ShowWorkBtn />
            <TimeCapsule />
        </section>
    );
}