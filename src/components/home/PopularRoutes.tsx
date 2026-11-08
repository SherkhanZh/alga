import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Container, SectionTitle } from "@/components/ui/Section";
import { routes, type Route } from "@/lib/mock-data";

export function BestBadge({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`rounded-3xl bg-green-100 text-white ${
        small ? "px-2 py-1 text-xs leading-[14px] font-semibold" : "px-3 py-1.5 text-base font-bold"
      }`}
    >
      Топ продаж
    </span>
  );
}

/** Stats row with 1px white/25 dividers (km · people · stops). */
export function StatRow({ items }: { items: string[] }) {
  return (
    <ul className="flex items-center justify-between py-3">
      {items.map((t, i) => (
        <li key={i} className="flex items-center">
          {i > 0 && <span aria-hidden className="mr-3 h-6 w-px bg-white/25 xl:mr-4" />}
          <span className="flex items-center gap-3 text-base font-medium whitespace-nowrap text-white">
            <Icon name="stat" />
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Desktop 430×480 photo card with blurred bottom panel. */
export function PhotoCard({
  image,
  alt,
  badge,
  children,
}: {
  image: string;
  alt: string;
  badge?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className="relative h-[480px] w-[430px] shrink-0 snap-start overflow-hidden rounded-card bg-white shadow-card">
      <Image src={image} alt={alt} fill sizes="430px" className="object-cover" />
      {/* backdrop blur fading in towards the bottom */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[290px] bg-[rgba(27,158,187,0.01)] backdrop-blur-[31px] [mask-image:linear-gradient(to_top,black_55%,transparent)]"
      />
      <div className="relative flex h-full flex-col items-end justify-between p-6">
        <div>{badge && <BestBadge />}</div>
        <div className="flex w-full flex-col gap-6">{children}</div>
      </div>
    </article>
  );
}

function RouteCard({ route }: { route: Route }) {
  return (
    <PhotoCard image={route.image} alt={route.title} badge={route.best}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 text-white">
          <h3 className="text-2xl font-semibold">{route.title}</h3>
          <p className="text-xl">{route.priceFrom}</p>
        </div>
        <StatRow items={[route.distance, route.minPeople, route.stops]} />
      </div>
      <Button variant="secondary" className="h-12 w-full">
        Забронировать
      </Button>
    </PhotoCard>
  );
}

function RouteTile({ route }: { route: Route }) {
  return (
    <Link href={`#route-${route.id}`} className="flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-input bg-white">
        <Image src={route.image} alt={route.title} fill sizes="50vw" className="object-cover" />
        {route.best && (
          <span className="absolute top-2 right-2">
            <BestBadge small />
          </span>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-base font-medium text-ink">{route.title}</h3>
        <p className="text-sm text-ink-2">{route.priceFrom}</p>
      </div>
    </Link>
  );
}

export function PopularRoutes() {
  return (
    <section id="routes" className="scroll-mt-28 overflow-hidden bg-surface">
      <Container className="flex flex-col py-6 lg:gap-6 lg:py-0">
        <SectionTitle
          title="Популярные маршруты"
          subtitle="Не упустите свой шанс посмотреть красоты Казахстана!"
          action={
            <Link href="#routes" aria-label="Все маршруты" className="text-ink lg:hidden">
              <Icon name="chevron-right" />
            </Link>
          }
        />

        {/* Desktop carousel */}
        <div className="hidden lg:block">
          <Carousel label="Популярные маршруты">
            {routes.map((r) => (
              <RouteCard key={r.id} route={r} />
            ))}
          </Carousel>
        </div>

        {/* Mobile 2-column grid */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 lg:hidden">
          {routes.map((r) => (
            <RouteTile key={r.id} route={r} />
          ))}
        </div>

        <div className="mt-6 flex justify-center lg:mt-0">
          <ButtonLink href="#routes" className="h-12 w-full lg:w-[430px]">
            Показать все маршруты
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
