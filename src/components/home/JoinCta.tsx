"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { joinCopy } from "@/lib/mock-data";
import { asset } from "@/lib/asset";

type Who = keyof typeof joinCopy;

export function JoinCta() {
  const [who, setWho] = useState<Who>("driver");
  const copy = joinCopy[who];

  return (
    <section className="bg-blue-900">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row">
        <div className="flex flex-1 flex-col justify-between gap-8 px-4 py-6 lg:h-[577px] lg:px-14 lg:py-12">
          {/* Tabbar */}
          <div role="tablist" className="flex w-full gap-0.5 rounded-[50px] bg-white/10 p-2 lg:w-[532px]">
            {(Object.keys(joinCopy) as Who[]).map((k) => (
              <button
                key={k}
                role="tab"
                type="button"
                aria-selected={who === k}
                onClick={() => setWho(k)}
                className={`flex-1 rounded-[50px] px-6 py-3 text-center text-base font-medium transition-colors lg:text-xl ${
                  who === k ? "bg-white text-blue-900 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" : "text-white"
                }`}
              >
                {joinCopy[k].tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-white" role="tabpanel">
            <h2 className="text-xl font-semibold lg:text-[32px]">{copy.title}</h2>
            <p className="text-base font-medium lg:text-2xl">{copy.text}</p>
          </div>

          <ButtonLink href="#join" variant="secondary" className="h-12 w-full lg:h-14 lg:w-[140px]">
            Подробнее
          </ButtonLink>
        </div>

        <div className="relative hidden w-[796px] shrink-0 self-stretch overflow-hidden lg:block">
          <Image src={asset("/images/driver-bg.webp")} alt="" fill sizes="796px" className="object-cover" />
          <div className="absolute top-[-5px] left-[-63px] h-[587px] w-[921px]">
            <Image src={asset("/images/driver-wheel.webp")} alt="" fill sizes="921px" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
