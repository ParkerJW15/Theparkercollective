// Explicit editorial lines keep wrapping and accessible text predictable.
export default function RevealLine({ children, index = 0, className = '' }) {
  return (
    <span className={`text-reveal-line ${className}`} style={{ '--line-index': index }}>
      <span className="text-reveal-content">{children}</span>
    </span>
  );
}
