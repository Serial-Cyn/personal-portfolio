import Motion from "../ui/motion";

type ReasonProps = {
  reason: string;
};

export default function Reason({ reason }: ReasonProps) {
  return (
    <section className="w-full mb-16 p-6 flex items-center justify-center">
      <Motion>
        <h1 className="text-4xl md:text-5xl text-center">{reason}</h1>
      </Motion>
    </section>
  );
}
