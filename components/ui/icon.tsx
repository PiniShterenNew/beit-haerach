export type IconName =
  | "meal"
  | "cooking"
  | "package"
  | "delivery"
  | "home"
  | "family"
  | "volunteer"
  | "donation"
  | "calendar"
  | "candles"
  | "location"
  | "phone"
  | "document"
  | "certificate"
  | "accessibility"
  | "arrow"
  | "check"
  | "error"
  | "dental"
  | "torah"
  | "graduation"
  | "community"
  | "transparency"
  | "whatsapp"
  | "mail"
  | "arch";

const paths: Record<IconName, React.ReactNode> = {
  meal: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12a4 4 0 0 1 8 0" />
    </>
  ),
  cooking: (
    <>
      <path d="M4 12a8 4 0 0 0 16 0" />
      <path d="M6 12V9a6 6 0 0 1 12 0v3" />
      <path d="M9 5V3M12 5V2M15 5V3" />
    </>
  ),
  package: (
    <>
      <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" />
      <path d="M3.5 8v8L12 20l8.5-4V8" />
      <path d="M12 12v8" />
    </>
  ),
  delivery: (
    <>
      <path d="M3 16V7a1 1 0 0 1 1-1h9v10" />
      <path d="M13 10h4l3 3v3h-2" />
      <circle cx="7.5" cy="18" r="1.75" />
      <circle cx="16.5" cy="18" r="1.75" />
    </>
  ),
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="7" r="2.5" />
      <circle cx="16" cy="7" r="2.5" />
      <path d="M3 20v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4" />
      <path d="M13 20v-1a4 4 0 0 1 4-4h1a3 3 0 0 1 3 3v2" />
    </>
  ),
  volunteer: (
    <>
      <path d="M12 20s-7-4.4-9.3-8.8C1.3 8 3 4.8 6.3 4.5c1.9-.2 3.4.8 4.2 2.2.8-1.4 2.3-2.4 4.2-2.2 3.3.3 5 3.5 3.6 6.7C19 15.6 12 20 12 20Z" />
    </>
  ),
  donation: (
    <>
      <path d="M12 3v11" />
      <path d="M8 7l4-4 4 4" />
      <path d="M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16" />
      <path d="M8 3.5v3M16 3.5v3" />
    </>
  ),
  candles: (
    <>
      <path d="M9 21V11a1 1 0 0 1 2 0v10" />
      <path d="M13 21V11a1 1 0 0 1 2 0v10" />
      <path d="M4 21h16" />
      <path d="M10 8c0-1.5-1-2-1-3.5S10 2 10 2s1 1.5 1 3-1 2-1 3Z" />
      <path d="M14 8c0-1.5-1-2-1-3.5S14 2 14 2s1 1.5 1 3-1 2-1 3Z" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  phone: (
    <>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C11.5 17.6 6.4 12.5 5 6.1A1.5 1.5 0 0 1 6.5 3.5Z" />
    </>
  ),
  document: (
    <>
      <path d="M7 3.5h7l4 4V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 12.5h6M9 16h6" />
    </>
  ),
  certificate: (
    <>
      <rect x="3.5" y="4" width="17" height="12" rx="1.5" />
      <path d="M9 21l3-2.5L15 21l-.7-4.3h-4.6Z" />
      <path d="M7 8h10M7 11.5h6" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="12" cy="5" r="1.8" />
      <path d="M5 9h14" />
      <path d="M12 9v11" />
      <path d="M8 21l4-6 4 6" />
      <path d="M8.5 13.5h7" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  check: (
    <>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </>
  ),
  error: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v5" />
      <circle cx="12" cy="16" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  dental: (
    <>
      <path d="M12 3c-2.2 0-3.6 1.3-4.5 1.3-1.2 0-2 1-2 2.4 0 3 1 5 1.6 8.4.3 1.7.8 3.4 1.9 3.4 1.4 0 1.3-3.5 3-3.5s1.6 3.5 3 3.5c1.1 0 1.6-1.7 1.9-3.4.6-3.4 1.6-5.4 1.6-8.4 0-1.4-.8-2.4-2-2.4-.9 0-2.3-1.3-4.5-1.3Z" />
    </>
  ),
  torah: (
    <>
      <path d="M12 5c-2-1-4.5-1.3-7-1v14c2.5-.3 5 0 7 1 2-1 4.5-1.3 7-1V4c-2.5-.3-5 0-7 1Z" />
      <path d="M12 5v14" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9l10-4.5L22 9l-10 4.5L2 9Z" />
      <path d="M6 11.3V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.7" />
      <path d="M22 9v5.5" />
    </>
  ),
  community: (
    <>
      <circle cx="7" cy="8.5" r="2.3" />
      <circle cx="17" cy="8.5" r="2.3" />
      <circle cx="12" cy="7" r="2.3" />
      <path d="M3 20v-1a4 4 0 0 1 4-4h1a4 4 0 0 1 3 1.4" />
      <path d="M21 20v-1a4 4 0 0 0-4-4h-1a4 4 0 0 0-3 1.4" />
      <path d="M8.5 20v-1.3a3.5 3.5 0 0 1 7 0V20" />
    </>
  ),
  transparency: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5v17M3.5 12h17" />
      <path d="M7 7l10 10" opacity="0.5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M6.5 17.5 4 20l2.6-.7A8 8 0 1 0 4 12a7.9 7.9 0 0 0 1.1 4Z" />
      <path d="M9 10c0 3 2 5 5 5 .6 0 1-.5 1-1v-.7l-1.8-.7-.6.9c-1-.5-1.9-1.4-2.4-2.4l.9-.6-.7-1.8H9.7c-.5 0-.7.4-.7 1Z" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4.5 6.5 12 12l7.5-5.5" />
    </>
  ),
  arch: (
    <>
      <path d="M5 21V12C5 7 8 3 12 3s7 4 7 9v9" />
    </>
  ),
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
  style,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-6 w-6"}
      style={style}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
