/**
 * Generic inline spinner. Pure CSS, no JS animation libs.
 *
 * Sizes via the `size` prop in pixels (default 16). Uses currentColor
 * so it inherits the parent's text color.
 */
type Props = {
  size?: number;
  className?: string;
  label?: string;
};

export function Spinner({ size = 16, className = "", label }: Props) {
  return (
    <span
      className={`spinner ${className}`}
      style={{ width: size, height: size }}
      role="status"
      aria-label={label ?? "Loading"}
    >
      <span className="sr-only">{label ?? "Loading"}</span>
    </span>
  );
}
