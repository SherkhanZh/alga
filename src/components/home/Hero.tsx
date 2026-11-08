import Image from "next/image";
import { SearchForm } from "./SearchForm";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Desktop background: photo + rgba(12,15,1,0.5) overlay */}
      <div aria-hidden className="absolute inset-0 -z-10 hidden lg:block">
        <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(12,15,1,0.5)]" />
      </div>
      {/* Mobile background: photo with white fade from the top */}
      <div aria-hidden className="absolute inset-0 -z-10 lg:hidden">
        <Image src="/images/hero-mobile.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-x-0 top-0 h-[806px] bg-gradient-to-b from-white from-[12.8%] to-white/0" />
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-4 pt-6 pb-12 lg:min-h-[648px] lg:items-start lg:justify-center lg:px-14 lg:py-12">
        <div className="flex max-w-[700px] flex-col gap-2 text-center text-ink lg:gap-6 lg:text-left lg:text-white">
          <h1 className="text-2xl leading-[30px] font-bold lg:text-[64px] lg:leading-[68px] lg:font-semibold lg:tracking-[-0.03em]">
            <span className="lg:hidden">Исследуйте города легко и&nbsp;удобно</span>
            <span className="hidden lg:inline">Находите интересные места и исследуйте города легко и удобно</span>
          </h1>
          <p className="text-base lg:text-2xl lg:font-medium">
            Лучшие достопримечательности, удобные маршруты и новые впечатления в каждом городе
          </p>
        </div>
        <div className="w-full max-w-[328px] lg:max-w-none">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
