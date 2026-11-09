"use client";

import { usePathname } from "next/navigation";
import { BIZDAPTIVE_NAV, BIZDAPTIVE_SIGN_IN } from "~/lib/content/site";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export default function BizdaptiveSubnav() {
  const pathname = normalize(usePathname() || "/");

  return (
    <nav className="bz-subnav" aria-label="Bizdaptive">
      <ul className="bz-subnav-list">
        {BIZDAPTIVE_NAV.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a href={BIZDAPTIVE_SIGN_IN} rel="noopener noreferrer">
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
}
