import Image from "next/image";

/**
 * Icons exported from the ALGA trip Figma file (public/icons). Colours are baked
 * into the SVGs exactly as designed, so each icon is rendered as an image.
 */
const icons = {
  "arrow-right": [20, 20],
  calendar: [24, 24],
  "checkbox-checked": [24, 24],
  "chevron-down": [20, 12],
  "chevron-down-green": [24, 24],
  "chevron-up-green": [24, 24],
  "chevron-right": [24, 24],
  instagram: [24, 24],
  location: [24, 24],
  menu: [24, 24],
  plus: [20, 20],
  "plus-circle-gray": [20, 20],
  "plus-circle-white": [20, 20],
  search: [24, 24],
  stat: [24, 24],
  telegram: [17, 19],
  users: [24, 24],
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, size, className = "" }: { name: IconName; size?: number; className?: string }) {
  const [w, h] = icons[name];
  const s = size ? size / Math.max(w, h) : 1;
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt=""
      aria-hidden
      width={Math.round(w * s)}
      height={Math.round(h * s)}
      unoptimized
      className={`shrink-0 ${className}`}
    />
  );
}
