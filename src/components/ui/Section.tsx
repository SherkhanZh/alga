import type { ReactNode } from "react";

/** Shared page gutter: 16px on mobile, 56px on desktop (Figma 1440 frame). */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-4 lg:px-14 ${className}`}>{children}</div>;
}

export function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-1 text-ink lg:gap-2">
        <h2 className="text-2xl font-semibold lg:text-[32px]">{title}</h2>
        {subtitle && <p className="text-base font-medium lg:text-xl">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
