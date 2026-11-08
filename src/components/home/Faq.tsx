"use client";

import { Icon } from "@/components/ui/Icon";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { faq } from "@/lib/mock-data";

function ContactForm() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (phone.trim()) setSent(true);
      }}
      className="flex flex-col gap-2"
    >
      <div className="flex w-full gap-2">
        <input
          type="tel"
          inputMode="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Номер телефона"
          aria-label="Номер телефона"
          className="h-14 min-w-0 flex-1 rounded-lg bg-gray-100 px-[18px] text-base font-medium text-ink outline-none placeholder:text-ink-muted focus:ring-2 focus:ring-green-100"
        />
        <Button type="submit" className="h-14">
          Отправить
        </Button>
      </div>
      {sent && (
        <p role="status" className="text-sm text-green-100">
          Спасибо! Мы скоро перезвоним.
        </p>
      )}
    </form>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 bg-surface">
      <Container className="flex flex-col gap-6 py-6 lg:flex-row lg:gap-20 lg:py-0">
        <h2 className="text-2xl font-semibold text-[#242424] lg:hidden">Часто задаваемые вопросы</h2>

        <div className="flex flex-1 flex-col">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="flex flex-col gap-6 border-b border-gray-100 py-6 lg:py-8">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 text-left"
                >
                  <span className="flex-1 text-base font-semibold text-ink lg:text-2xl">{item.q}</span>
                  <span className="rounded-full bg-gray-100 p-1">
                    <Icon name={isOpen ? "chevron-up-green" : "chevron-down-green"} />
                  </span>
                </button>
                {isOpen && <p className="text-sm font-medium text-ink-2 lg:text-xl">{item.a}</p>}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-6 lg:w-[480px] lg:shrink-0 lg:gap-10">
          <h2 className="hidden text-[32px] font-semibold text-[#242424] lg:block">Часто задаваемые вопросы</h2>
          <p className="text-sm font-medium text-ink-3 lg:text-xl">
            Не нашли ответа на свой вопрос? Оставьте свой номер телефона и мы свяжемся с вами для консультации
          </p>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
