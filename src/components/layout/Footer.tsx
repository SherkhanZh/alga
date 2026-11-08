import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { footerColumns } from "@/lib/mock-data";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-4 py-12 lg:px-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[195px]">
          <div className="flex flex-col gap-3 lg:w-[559px]">
            <Logo className="h-10 w-[110px]" />
            <p className="text-base lg:text-xl">
              Лучшие достопримечательности, удобные маршруты и новые впечатления в каждом городе
            </p>
            <a href="mailto:abcdefg@abcdef.com" className="text-base lg:text-xl">
              @abcdefg@abcdef.com
            </a>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
              <a href="#" aria-label="Telegram" className="flex size-6 items-center justify-center">
                <Icon name="telegram" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:contents">
            {footerColumns.map((col) => (
              <nav key={col.title} className="flex flex-col gap-3 text-base lg:min-w-[168px] lg:text-xl">
                <h3 className="font-bold">{col.title}</h3>
                {col.links.map((l) => (
                  <Link key={l} href="#" className="hover:underline">
                    {l}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <p className="text-center text-base lg:text-xl">Все права защищены</p>
      </div>
    </footer>
  );
}
