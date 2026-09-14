"use client";

import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { motion } from "motion/react";
import { HERO_NAV } from "~/lib/content/site";

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

export default function SlideTabsNav() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
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
      setPosition((prev) => ({ ...prev, opacity: 0 }));
      setOpenLabel(null);
      closeTimer.current = null;
    }, CLOSE_DELAY_MS);
  };

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <ul
      className="ih-slidetabs"
      onPointerEnter={clearCloseTimer}
      onPointerLeave={scheduleClose}
    >
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
      <Cursor position={position} />
    </ul>
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
    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
    setOpenLabel(item.label);
  };

  return (
    <li
      ref={ref}
      className={`ih-slidetab${open ? "is-open" : ""}`}
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

function Cursor({ position }: { position: Position }) {
  return (
    <motion.li
      aria-hidden="true"
      animate={position}
      className="ih-slidetabs-cursor"
    />
  );
}
