import Motion from "@/components/ui/motion"

export default function Demo() {
  
  return (
    <section id="demo" className="flex w-full h-screen p-6">
      <Motion>
        <iframe
          title="Figma prototype"
          className="w-full h-full border-0 rounded-2xl"
          src="https://embed.figma.com/proto/Lpmarxfv5IuZxLBSfuQkfJ/2B-%7C-MAMPLATA--CHRISTIAN-B.---HCI?node-id=1289-78458&scaling=scale-down&content-scaling=fixed&page-id=1017%3A19490&starting-point-node-id=1289%3A78458&show-proto-sidebar=1&embed-host=share"
          allowFullScreen
          loading="lazy"
          style={{
            height:
              "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
          }}
        />
      </Motion>
    </section>
  );
}
