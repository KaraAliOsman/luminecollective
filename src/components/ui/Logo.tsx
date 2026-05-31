import Image from "next/image";
import Link from "next/link";

import { brand } from "@/lib/constants/brand";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  markOnly?: boolean;
  className?: string;
  fullSrc?: string;
  markSrc?: string;
  alt?: string;
};

export function Logo({
  markOnly = false,
  className,
  fullSrc = brand.logoFull,
  markSrc = brand.logoMark,
  alt = brand.name,
}: LogoProps) {
  return (
    <Link
      aria-label={`${brand.name} home`}
      className={cn("inline-flex items-center", className)}
      href="/"
    >
      <Image
        alt={alt}
        className={cn("h-auto object-contain", markOnly ? "w-12" : "w-40")}
        height={markOnly ? 128 : 300}
        priority
        src={markOnly ? markSrc : fullSrc}
        width={markOnly ? 128 : 400}
      />
    </Link>
  );
}
