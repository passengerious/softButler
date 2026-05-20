import React from 'react';

/**
 * Renders metric value: adds a proper non-breaking space after leading signs,
 * formats ranges with clear en-dash and spacing, and ensures percentage symbols are styled consistently.
 */
export function FormatMetricValue({
  value,
  valueClassName = 'text-2xl font-bold text-[#00B476]',
}: {
  value: string;
  valueClassName?: string;
}) {
  if (!value) return null;
  
  const str = String(value).trim();
  
  // Extract optional leading sign (+ or - or en-dash)
  let prefix = '';
  let rest = str;
  const prefixMatch = str.match(/^([+–-])\s*/);
  if (prefixMatch) {
    prefix = prefixMatch[1];
    rest = str.slice(prefixMatch[0].length).trim();
  }
  
  // Check if it's a range like "40% – 60%" or "40-60%"
  const rangeMatch = rest.match(/^(\d+)\s*(%?)\s*[-–]\s*(\d+)\s*(%?)(.*)$/);
  if (rangeMatch) {
    const [, firstNum, firstPct, secondNum, secondPct, extra] = rangeMatch;
    
    // We want both to have % if either has it or if it is a percentage range
    const isPercent = firstPct === '%' || secondPct === '%' || extra.includes('%');
    const first = isPercent ? `${firstNum}%` : firstNum;
    const second = isPercent ? `${secondNum}%${extra.replace('%', '')}` : `${secondNum}${extra}`;
    
    return (
      <span className="inline-flex items-baseline flex-nowrap">
        {prefix && <span className={`${valueClassName} mr-1.5 select-none`}>{prefix}</span>}
        <span className={valueClassName}>{first}</span>
        <span className="text-sm mx-1.5 text-[#00B476] font-normal align-baseline opacity-90 shrink-0 select-none">–</span>
        <span className={valueClassName}>{second}</span>
      </span>
    );
  }
  
  // Single value case
  return (
    <span className="inline-flex items-baseline flex-nowrap">
      {prefix && <span className={`${valueClassName} mr-1.5 select-none`}>{prefix}</span>}
      <span className={valueClassName}>{rest}</span>
    </span>
  );
}
