import Motion from "../ui/motion";

type ReasonProps = {
  reason: string;
};

export default function Reason({ reason }: ReasonProps) {
  return (
    <section className="w-full min-h-screen p-6 flex items-center justify-center">
      <Motion>
        <h1 className="text-4xl md:text-6xl text-center leading-tight">{reason}</h1>
      </Motion>
    </section>
  );
}
