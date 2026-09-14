"use client";

/** Prints the one-pager; the print stylesheet lays it out as a single A4 sheet. */
export default function PrintButton() {
  return (
    <button className="op-print" type="button" onClick={() => window.print()}>
      Print / Save as PDF
    </button>
  );
}
