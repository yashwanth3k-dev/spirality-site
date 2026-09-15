"use client";

import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { HERO_NAV } from "~/lib/content/site";
import { cn } from "~/lib/utils";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  children: readonly NavChild[];
};

const CLOSE_DELAY_MS = 180;
const IDLE: Position = { left: 0, width: 0, opacity: 0 };

export default function SlideTabsNav() {
  const [position, setPosition] = useState<Position>(IDLE);
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setPosition(IDLE);
      setOpenLabel(null);
      closeTimer.current = null;
    }, CLOSE_DELAY_MS);
  };

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <div
      className={cn("ih-slidetabs", openLabel && "is-hot")}
      onPointerEnter={clearCloseTimer}
      onPointerLeave={scheduleClose}
    >
      <ul className="ih-slidetabs-list">
        {(HERO_NAV as readonly NavItem[]).map((item) => (
          <Tab
            key={item.label}
            item={item}
            open={openLabel === item.label}
            setOpenLabel={setOpenLabel}
            setPosition={setPosition}
            onKeepOpen={clearCloseTimer}
          />
        ))}
      </ul>
      <span
        aria-hidden="true"
        className="ih-slidetabs-cursor"
        style={{
          transform: `translate3d(${position.left}px, 0, 0)`,
          width: position.width,
          opacity: position.opacity,
        }}
      />
    </div>
  );
}

function Tab({
  item,
  open,
  setOpenLabel,
  setPosition,
  onKeepOpen,
}: {
  item: NavItem;
  open: boolean;
  setOpenLabel: Dispatch<SetStateAction<string | null>>;
  setPosition: Dispatch<SetStateAction<Position>>;
  onKeepOpen: () => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  const activate = () => {
    onKeepOpen();
    if (!ref.current) return;
    const root = ref.current.closest(".ih-slidetabs");
    const tabBox = ref.current.getBoundingClientRect();
    const rootBox = root?.getBoundingClientRect();
    setPosition({
      left: rootBox ? tabBox.left - rootBox.left : ref.current.offsetLeft,
      width: tabBox.width,
      opacity: 1,
    });
    setOpenLabel(item.label);
  };

  return (
    <li
      ref={ref}
      className={cn("ih-slidetab", open && "is-open")}
      onPointerEnter={activate}
    >
      <button
        type="button"
        className="ih-slidetab-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {item.label}
      </button>

      <div
        className="ih-slidedrop"
        role="menu"
        aria-label={item.label}
        aria-hidden={!open}
        onPointerEnter={onKeepOpen}
      >
        <div className="ih-slidedrop-panel">
          {item.children.map((child) => (
            <a
              key={child.href + child.label}
              href={child.href}
              className="ih-slidedrop-link"
              role="menuitem"
              tabIndex={open ? 0 : -1}
            >
              {child.label}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}
