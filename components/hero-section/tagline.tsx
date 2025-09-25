import { Zain } from "next/font/google";

const zain = Zain({
  subsets: ["latin"],
  weight: ["300", "700"],
});

function Tagline() {
    return (
        <div id="tagline" className="w-2xs h-auto flex flex-col items-center justify-center text-center">
            <div className="-mb-4 w-full flex justify-between">
                <h1 className={`${zain.className} font-bold text-6xl`}>FUN</h1>
                <h1 className={`${zain.className} font-bold text-6xl`}>IS</h1>
                <h1 className={`${zain.className} font-bold text-6xl`}>MY</h1>
            </div>
            <div className="-mb-4 w-full flex justify-center">
                <h1 className={`${zain.className} font-bold text-6xl`}>FRAMEWORK</h1>
            </div>
            <div className="-mb-4 w-full flex justify-between">
                <h2 className={`${zain.className} text-4xl`}>TO</h2>
                <h2 className={`${zain.className} text-4xl`}>TURN</h2>
                <h2 className={`${zain.className} text-4xl`}>IDEAS</h2>
                <h2 className={`${zain.className} text-4xl`}>INTO</h2>
            </div>
            <div className="w-full">
                <h1 className={`${zain.className} -mb-4 w-full text-4xl text-left text-purple-400`}>MEANINGFUL</h1>
                <h1 className={`${zain.className} w-full text-4xl text-right text-purple-400`}>EXPERIENCES</h1>
            </div>
        </div>
    );
}

export default Tagline;