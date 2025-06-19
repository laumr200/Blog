"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const options = [
    {
      value: "system",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="8" width="16" height="12" rx="2" stroke="currentColor" />
          <rect x="10" y="18" width="8" height="2" rx="1" fill="currentColor" />
        </svg>
      ),
      label: "Système",
    },
    {
      value: "light",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="14" cy="14" r="6" stroke="currentColor" />
          <line x1="14" y1="3" x2="14" y2="7" stroke="currentColor" />
          <line x1="14" y1="21" x2="14" y2="25" stroke="currentColor" />
          <line x1="3" y1="14" x2="7" y2="14" stroke="currentColor" />
          <line x1="21" y1="14" x2="25" y2="14" stroke="currentColor" />
          <line x1="6.22" y1="6.22" x2="9" y2="9" stroke="currentColor" />
          <line x1="19" y1="19" x2="21.78" y2="21.78" stroke="currentColor" />
          <line x1="6.22" y1="21.78" x2="9" y2="19" stroke="currentColor" />
          <line x1="19" y1="9" x2="21.78" y2="6.22" stroke="currentColor" />
        </svg>
      ),
      label: "Clair",
    },
    {
      value: "dark",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <path
            d="M21 18.5A9 9 0 0 1 9.5 7c0-1.1.2-2.1.5-3A9 9 0 1 0 24 19c-1 .3-1.9.5-3 .5z"
            stroke="currentColor"
            fill="none"
          />
          <circle cx="22" cy="10" r="1.5" fill="currentColor" />
        </svg>
      ),
      label: "Sombre",
    },
  ];

  return (
    <div className="flex items-center bg-[#f5f6f8] rounded-full px-3 py-2 shadow-inner w-fit">
      {options.map((opt) => (
        <button
          key={opt.value}
          aria-label={opt.label}
          className={`mx-1 p-1 rounded-full flex items-center justify-center transition
            ${theme === opt.value
              ? "bg-white shadow ring-2 ring-[#e0e0e0]"
              : "hover:bg-[#ececec]"}
          `}
          style={{
            width: 48,
            height: 48,
            color: "#222",
          }}
          onClick={() => setTheme(opt.value)}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}