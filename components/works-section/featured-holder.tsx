
type HolderProps = {
    imgSrc: string;
    title: string;
    link: string;
};

export default function Holder({ imgSrc, title, link }: HolderProps) {

    return (
        <div className="min-w-full min-h-full">
            <img src={imgSrc} alt={title} />
            <h1>{title}</h1>
        </div>
    );
}