
type HolderProps = {
    imgSrc: string;
    title: string;
    link: string;
};

export default function Holder({ imgSrc, title, link }: HolderProps) {

    return (
        <div className="relative min-w-full min-h-full h-screen flex flex-col justify-center items-center overflow-hidden">
            <img className="absolute inset-0 object-cover w-full h-full brightness-50 z-0" src={imgSrc} alt={title} />
            <h1 className="w-full text-8xl text-center font-bold uppercase z-10">{title}</h1>
        </div>
    );
}