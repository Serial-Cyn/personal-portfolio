import Image from "next/image";
import Link from "next/link";

type SocialsProps = {
  filename: string;
  altText: string;
  label: string;
  href: string;
};

export default function DisplaySocials({
  filename,
  altText,
  label,
  href,
}: SocialsProps) {
  return (
    <Link
      className="w-full flex items-center text-right"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="object-contain"
        src={filename}
        alt={altText}
        width={32}
        height={32}
      />
      <p className="ml-4 text-base sm:text-xl">{label}</p>
    </Link>
  );
}
