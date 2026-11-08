"use client";

import { X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { useState, type ReactNode } from "react";
import { Checkbox, Counter, Radio } from "@/components/ui/Controls";

type TripType = "oneway" | "round";

/** Search input shell (Figma "Search input"): white, Gray/400 border, soft shadow. */
function Field({
  icon,
  children,
  className = "",
}: {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label
      className={`flex items-center gap-2 border border-gray-400 bg-white px-2.5 shadow-input focus-within:border-green-100 ${className}`}
    >
      <span className="shrink-0 text-ink-2">{icon}</span>
      {children}
    </label>
  );
}

const inputCls =
  "min-w-0 flex-1 bg-transparent font-inter text-sm leading-5 tracking-[-0.05px] text-ink placeholder:text-ink-2 outline-none";

export function SearchForm() {
  const [trip, setTrip] = useState<TripType>("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [stops, setStops] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(0);
  const [opts, setOpts] = useState({ places: true, baggage: true, guide: true });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true); // mock — wire to the routes search page later
  };

  const tripSwitch = (
    <div className="flex items-center gap-4 lg:gap-6">
      <Radio name="trip" label="В одну сторону" checked={trip === "oneway"} onChange={() => setTrip("oneway")} />
      <Radio name="trip" label="Туда-обратно" checked={trip === "round"} onChange={() => setTrip("round")} />
    </div>
  );


  return (
    <form id="search" onSubmit={submit} className="w-full scroll-mt-32">
      {/* ── Desktop: one row ───────────────────────────────── */}
      <div className="hidden flex-col gap-6 rounded-input bg-white p-6 lg:flex">
        {tripSwitch}
        <div className="flex items-center gap-2">
          <Field icon={<Icon name="search" />} className="h-14 w-[274px] rounded-input">
            <input className={inputCls} placeholder="Откуда: Город" value={from} onChange={(e) => setFrom(e.target.value)} />
          </Field>
          <Field icon={<Icon name="search" />} className="h-14 w-[274px] rounded-input">
            <input className={inputCls} placeholder="Куда: Город" value={to} onChange={(e) => setTo(e.target.value)} />
          </Field>
          <Field icon={<Icon name="calendar" />} className="h-14 min-w-0 flex-1 rounded-input">
            <input
              className={inputCls}
              placeholder={trip === "round" ? "Туда — обратно" : "Сегодня"}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => !e.target.value && (e.target.type = "text")}
            />
          </Field>
          <div className="flex h-14 shrink-0 items-center gap-6 rounded-input border border-gray-400 bg-white px-2.5 shadow-input">
            <span className="flex items-center gap-3 font-inter text-sm leading-5 tracking-[-0.05px] text-ink-2">
              <Icon name="users" />
              Пассажиры
            </span>
            <Counter value={passengers} onChange={setPassengers} label="пассажиры" />
          </div>
          <button
            type="submit"
            className="flex h-14 w-[180px] shrink-0 items-center justify-center gap-3 rounded-lg bg-green-100 px-6 text-base font-bold text-white transition-colors hover:bg-green-120"
          >
            <Icon name="plus-circle-white" />
            Поехали!
          </button>
        </div>
        <div className="flex items-center gap-6">
          <Checkbox label="Места по пути" checked={opts.places} onChange={(v) => setOpts({ ...opts, places: v })} />
          <Checkbox label="Есть багаж" checked={opts.baggage} onChange={(v) => setOpts({ ...opts, baggage: v })} />
          <Checkbox label="Нужен Гид/Переводчик" checked={opts.guide} onChange={(v) => setOpts({ ...opts, guide: v })} />
        </div>
      </div>

      {/* ── Mobile: stacked card, white/70 ─────────────────── */}
      <div className="flex flex-col gap-6 rounded-3xl bg-white/70 p-4 backdrop-blur-sm lg:hidden">
        {tripSwitch}

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-base font-semibold text-ink">Локация</legend>
          <div className="flex flex-col gap-2">
            <Field icon={<Icon name="search" />} className="h-12 rounded-3xl">
              <input className={inputCls} placeholder="Откуда?" value={from} onChange={(e) => setFrom(e.target.value)} />
            </Field>
            {stops.map((s, i) => (
              <Field key={i} icon={<Icon name="location" />} className="h-12 rounded-3xl">
                <input
                  className={inputCls}
                  placeholder={`Остановка ${i + 1}`}
                  value={s}
                  onChange={(e) => setStops(stops.map((v, j) => (j === i ? e.target.value : v)))}
                />
                <button
                  type="button"
                  aria-label="Удалить остановку"
                  onClick={() => setStops(stops.filter((_, j) => j !== i))}
                  className="text-ink-2"
                >
                  <X className="size-5" />
                </button>
              </Field>
            ))}
            <Field icon={<Icon name="location" />} className="h-12 rounded-3xl">
              <input className={inputCls} placeholder="Куда?" value={to} onChange={(e) => setTo(e.target.value)} />
            </Field>
            <button
              type="button"
              onClick={() => setStops([...stops, ""])}
              className="flex w-full items-center justify-center gap-3 rounded-[50px] border border-gray-400 bg-gray-25 px-6 py-3 text-sm font-semibold text-ink-2"
            >
              <Icon name="plus-circle-gray" />
              Добавить остановки
            </button>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-base font-semibold text-ink">Дата</legend>
          <Field icon={<Icon name="calendar" />} className="h-12 rounded-3xl">
            <input
              className={inputCls}
              placeholder="Туда"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => !e.target.value && (e.target.type = "text")}
            />
          </Field>
          {trip === "round" && (
            <Field icon={<Icon name="calendar" />} className="h-12 rounded-3xl">
              <input
                className={inputCls}
                placeholder="Обратно"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => !e.target.value && (e.target.type = "text")}
              />
            </Field>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-base font-semibold text-ink">Пассажиры</legend>
          <div className="flex h-12 items-center gap-2 rounded-3xl border border-gray-400 bg-white px-2.5 shadow-input">
            <Icon name="users" size={18} />
            <span className="flex-1 text-base font-medium text-ink-2">Пассажиры</span>
            <Counter value={passengers} onChange={setPassengers} label="пассажиры" />
          </div>
        </fieldset>

        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center rounded-lg bg-green-100 text-base font-bold text-white"
        >
          Поехали!
        </button>
      </div>

      {sent && (
        <p role="status" className="mt-3 rounded-lg bg-white/90 px-4 py-2 text-sm text-ink">
          Демо: поиск маршрута {from || "—"} → {to || "—"}, пассажиров: {passengers}. Страница «Маршруты» будет
          подключена на следующем шаге.
        </p>
      )}
    </form>
  );
}
