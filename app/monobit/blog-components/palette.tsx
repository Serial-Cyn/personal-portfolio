import { Tooltip } from "@/components/ui/tooltip";

export default function Palette() {
  const demoPalette = ["#2C73C7", "#17AD57", "#8E44AD", "#FF4B4B", "#F49000"];

  return (
    <div className="flex justify-between items-center gap-16 my-32">
      <p className="w-2/5 text-zinc-400">
        This pretty much sums up the color palette I used for the entire design.
      </p>
      <div
        className="flex w-3/5 min-h-64 justify-center items-center gap-6 rounded-2xl"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        {demoPalette.map((color, index) => (
          <Tooltip key={index} content={color}>
            <div
              key={index}
              className="w-24 h-24 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
