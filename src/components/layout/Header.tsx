"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { nav } from "@/lib/mock-data";

/** Logo placeholder — the Figma uses a grey 110×40 block until the real logo lands. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="ALGA trip — на главную" className={`block bg-placeholder ${className}`} />
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Desktop — 1440 × 112, px 56 / py 32 */}
      <div className="mx-auto hidden max-w-[1440px] items-start justify-between px-14 py-8 lg:flex">
        <div className="flex items-center gap-16">
          <Logo className="h-10 w-[110px]" />
          <nav className="flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-semibold text-ink-2 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <Button variant="secondary" className="h-12">
              Войти в систему
            </Button>
            <ButtonLink href="#search" className="h-12">
              Заказать поездку
            </ButtonLink>
          </div>
          <button type="button" className="flex items-center gap-3 text-base font-semibold text-ink">
            Язык
            <Icon name="chevron-down" />
          </button>
        </div>
      </div>

      {/* Mobile — Bars / Nav Bars: Standard, 56px */}
      <div className="relative flex h-14 items-center p-4 lg:hidden">
        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink"
        >
          {open ? <X className="size-6" /> : <Icon name="menu" />}
        </button>
        <Link
          href="/"
          className="absolute top-1/2 left-1/2 flex h-6 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-placeholder text-base font-semibold text-ink-2"
        >
          Logo
        </Link>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-14 border-t border-gray-100 bg-white px-4 pb-6 shadow-card lg:hidden">
          <nav className="flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="secondary" className="h-12 w-full">
              Войти в систему
            </Button>
            <ButtonLink href="#search" className="h-12 w-full">
              Заказать поездку
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
