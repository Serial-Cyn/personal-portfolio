type ButtonProps = {
  label: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({ label, variant, onClick }: ButtonProps) {
  const buttonStyles = `
        .primary { background: var(--color-sky-400); color: var(--color-gray-900); }
        .primary:hover { background: var(--color-sky-500); }
        .secondary { border: 2px solid var(--color-gray-400); color: var(--color-gray-400); }
        .secondary:hover { border-color: var(--color-gray-200); color: var(--color-gray-200); }
    `;

  return (
    <>
      <style>{buttonStyles}</style>
      <button onClick={onClick} className={`btn ${variant} px-4 py-2 rounded-full cursor-pointer`}>
        {label}
      </button>
    </>
  );
}
