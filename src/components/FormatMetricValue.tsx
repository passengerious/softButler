/**
 * Renders metric value: smaller dash, less spacing, % after each number in ranges (e.g. 40% – 65%).
 */
export function FormatMetricValue({
  value,
  valueClassName = 'text-2xl font-bold text-[#00B476]',
}: {
  value: string;
  valueClassName?: string;
}) {
  const s = String(value).replace(/^[-–+]/, '');
  const m = s.match(/^(\d+)\s*[-–]\s*(\d+)(.*)$/);
  if (m) {
    const [, a, b, suffix] = m;
    const isPercent = suffix === '%';
    const first = isPercent ? `${a}%` : a;
    const second = isPercent ? `${b}%` : `${b}${suffix}`;
    return (
      <span className="inline-flex items-baseline flex-nowrap">
        <span className={valueClassName}>{first}</span>
        <span className="text-sm mx-0.5 text-[#00B476] font-normal align-baseline opacity-90 shrink-0">–</span>
        <span className={valueClassName}>{second}</span>
      </span>
    );
  }
  return <span className={`${valueClassName} inline-block`}>{s}</span>;
}
