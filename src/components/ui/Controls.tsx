"use client";

import { Minus } from "lucide-react";
import { Icon } from "./Icon";

/** Item/Radio — 24px, Green/100 when active with white centre dot. */
export function Radio({
  checked,
  onChange,
  label,
  name,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  name: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-base font-medium whitespace-nowrap text-ink">
      <input type="radio" name={name} checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        aria-hidden
        className={`relative size-6 shrink-0 rounded-full border-2 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-green-100 ${
          checked ? "border-green-100 bg-green-100" : "border-gray-400 bg-white"
        }`}
      >
        {checked && <span className="absolute inset-[30%] rounded-full bg-white" />}
      </span>
      {label}
    </label>
  );
}

/** Item/Checkbox — 24px rounded square, Green/100 with white check. */
export function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-base font-medium text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      {checked ? (
        <span className="rounded-md peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-green-100">
          <Icon name="checkbox-checked" />
        </span>
      ) : (
        <span
          aria-hidden
          className="size-6 shrink-0 rounded-md border-2 border-gray-400 bg-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-green-100"
        />
      )}
      {label}
    </label>
  );
}

/** Minus / value / plus selector (36px square buttons). */
export function Counter({
  value,
  onChange,
  min = 0,
  max = 20,
  label,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={`Уменьшить: ${label}`}
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex size-9 items-center justify-center rounded-lg bg-white text-ink hover:bg-gray-100 disabled:opacity-40"
      >
        <Minus className="size-5 text-ink" strokeWidth={1.75} />
      </button>
      <span className="min-w-3 text-center text-base font-medium text-ink-2" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        aria-label={`Увеличить: ${label}`}
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="flex size-9 items-center justify-center rounded-lg bg-white text-ink hover:bg-gray-100 disabled:opacity-40"
      >
        <Icon name="plus" />
      </button>
    </div>
  );
}
