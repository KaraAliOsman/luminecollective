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
      {markOnly ? (
        <Image
          alt={alt}
          className="h-auto w-12 object-contain"
          height={128}
          priority
          src={markSrc}
          width={128}
        />
      ) : (
        <span className="relative block aspect-[2.45/1] w-44 overflow-hidden">
          <Image
            alt={alt}
            className="object-cover object-center"
            fill
            priority
            sizes="176px"
            src={fullSrc}
          />
        </span>
      )}
    </Link>
  );
}
