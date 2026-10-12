'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-[#0A0A0A] px-5 py-2 font-label-mono text-[11px] uppercase tracking-widest font-bold hover:bg-white transition-colors"
    >
      Print
    </button>
  );
}
