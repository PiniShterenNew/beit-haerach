"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/icon";

export interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-(--color-border-subtle) border-y border-(--color-border-subtle)">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-start"
              >
                <span className="text-base font-medium text-(--color-text-primary)">{item.question}</span>
                <Icon
                  name="arrow"
                  className={`h-4 w-4 shrink-0 text-(--color-text-tertiary) transition-transform duration-(--motion-base) ${
                    open ? "-rotate-90" : "rotate-90"
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-5 text-sm leading-relaxed text-(--color-text-secondary)"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
