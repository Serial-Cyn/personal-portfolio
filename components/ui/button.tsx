import { Tooltip } from "./tooltip";

type ButtonProps = {
  label: string;
  variant: "primary" | "secondary" | "secondary-disabled";
  onClick?: () => void;
};

export default function Button({ label, variant, onClick }: ButtonProps) {
  const buttonStyles = `
        .primary { background: var(--color-sky-400); color: var(--color-zinc-900); }
        .primary:hover { background: var(--color-sky-500); }
        .primary-disabled { background: var(--color-zinc-800); color: var(--color-zinc-600); cursor: not-allowed; }
        .secondary { border: 2px solid var(--color-zinc-400); color: var(--color-zinc-400); }
        .secondary:hover { border-color: var(--color-zinc-200); color: var(--color-zinc-200); }
        .secondary-disabled { border: 2px solid var(--color-zinc-800); color: var(--color-zinc-800); cursor: not-allowed; }
    `;

  function TooltipContent() {
    return <div>Still compiling my projects... (coming soon!)</div>;
  }

  return (
    <>
      <style>{buttonStyles}</style>
      {variant === "secondary-disabled" && (
        <Tooltip content={<TooltipContent />}>
          <span>
            <button
              onClick={onClick}
              className={`btn ${variant} px-4 py-2 rounded-full cursor-not-allowed`}
              disabled
            >
              {label}
            </button>
          </span>
        </Tooltip>
      )}
      {variant !== "secondary-disabled" && (
        <button
          onClick={onClick}
          className={`btn ${variant} px-4 py-2 rounded-full cursor-pointer`}
        >
          {label}
        </button>
      )}
    </>
  );
}
