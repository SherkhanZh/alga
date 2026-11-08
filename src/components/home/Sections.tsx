import Image from "next/image";
import { Carousel } from "@/components/ui/Carousel";
import { Container, SectionTitle } from "@/components/ui/Section";
import { cars, extras, partners, steps } from "@/lib/mock-data";
import { PhotoCard, StatRow } from "./PopularRoutes";

/* ── Как заказать у нас поездку? ───────────────────────────── */
export function HowItWorks() {
  return (
    <section id="about" className="scroll-mt-28 bg-surface">
      <Container className="flex flex-col gap-0 lg:gap-12">
        <h2 className="max-w-[270px] py-6 text-2xl font-semibold text-ink lg:max-w-none lg:py-0 lg:text-[32px] lg:text-black">
          Как заказать у нас поездку?
        </h2>

        {/* Desktop: 4 cards */}
        <ol className="hidden gap-8 lg:flex">
          {steps.map((s) => (
            <li
              key={s.title}
              className="flex h-[250px] flex-1 flex-col items-center justify-center gap-6 rounded-card bg-white p-6 text-center"
            >
              <Image src={s.icon} alt="" width={48} height={48} unoptimized />
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-2xl font-semibold text-heading">{s.title}</h3>
                <p className="max-w-[256px] text-base text-body">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Mobile: list */}
        <ol className="flex flex-col gap-6 pb-6 lg:hidden">
          {steps.map((s) => (
            <li key={s.title} className="flex items-start gap-6">
              <Image src={s.iconSm} alt="" width={32} height={32} unoptimized className="shrink-0" />
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-semibold text-heading">{s.title}</h3>
                <p className="text-sm text-body">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ── Доступные автомобили (desktop only in the Figma) ──────── */
export function Cars() {
  return (
    <section className="hidden overflow-hidden bg-surface lg:block">
      <Container className="flex flex-col gap-6">
        <SectionTitle
          title="Доступные автомобили"
          subtitle="Здесь вы можете увидеть какие автомобили доступны для вашей поездки :)"
        />
        <Carousel label="Доступные автомобили">
          {cars.map((c) => (
            <PhotoCard key={c.id} image={c.image} alt={c.title}>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-white">{c.title}</h3>
                <StatRow items={c.tags} />
              </div>
            </PhotoCard>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

/* ── Дополнительные опции ─────────────────────────────────── */
export function ExtraOptions() {
  return (
    <section className="overflow-hidden bg-surface">
      <Container className="flex flex-col lg:gap-12">
        <h2 className="py-6 text-2xl font-semibold text-ink lg:py-0 lg:text-[32px] lg:text-black">
          Дополнительные опции
        </h2>

        {/* Desktop */}
        <div className="hidden lg:block">
          <Carousel label="Дополнительные опции">
            {extras.map((x) => (
              <article
                key={x.id}
                className="flex w-[calc((100%-24px)/2)] shrink-0 snap-start flex-col gap-6 rounded-card bg-white p-6 drop-shadow-[0px_4px_18px_rgba(0,0,0,0.04)]"
              >
                <div className="relative h-[289px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#c9f1f4] to-[#e4f0c9]">
                  <Image src={x.image} alt="" fill sizes="600px" className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[32px] font-semibold text-ink">{x.title}</h3>
                  <p className="text-2xl font-medium text-ink-2">{x.text}</p>
                </div>
              </article>
            ))}
          </Carousel>
        </div>

        {/* Mobile */}
        <div className="-mx-1 flex flex-col gap-4 pb-6 lg:hidden">
          {extras.map((x) => (
            <article key={x.id} className="flex min-h-[162px] items-center gap-3 rounded-input bg-white p-3 py-4 shadow-card-sm">
              <div className="relative h-[130px] w-20 shrink-0 overflow-hidden rounded-input bg-gradient-to-br from-[#c9f1f4] to-[#e4f0c9]">
                <Image src={x.imageMobile} alt="" fill sizes="80px" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-heading">{x.title}</h3>
                <p className="text-sm text-body">{x.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Наши партнеры ────────────────────────────────────────── */
export function Partners() {
  return (
    <section className="bg-surface">
      <Container className="flex flex-col gap-6 py-6 lg:gap-12 lg:py-0">
        <h2 className="text-2xl font-semibold text-[#161618] lg:text-[32px]">Наши партнеры</h2>
        <ul className="grid grid-cols-2 gap-4 lg:flex lg:items-start lg:justify-between">
          {partners.map((p) =>
            p.logo ? (
              <li key={p.id} className="relative h-12 lg:h-[81px] lg:w-[251px]">
                <Image src={p.logo} alt={p.name} fill sizes="251px" className="object-contain object-left" />
              </li>
            ) : (
              <li key={p.id} aria-label="Логотип партнёра" className="h-12 bg-[#c4c4c4] lg:h-20 lg:w-[243px]" />
            ),
          )}
        </ul>
      </Container>
    </section>
  );
}
