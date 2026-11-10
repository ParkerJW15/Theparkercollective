import { Children, cloneElement, isValidElement } from 'react';

function textLength(nodes) {
  return Children.toArray(nodes).reduce((length, node) => {
    if (typeof node === 'string' || typeof node === 'number') return length + String(node).length;
    return length + (isValidElement(node) ? textLength(node.props.children) : 0);
  }, 0);
}

// Full text stays in the layout and accessibility tree; only the visible characters animate.
export default function TypewriterText({ text, children, offset = 0, trigger = 'viewport' }) {
  const content = text ?? children;
  let characterIndex = offset;
  const step = Math.min(18, 2000 / Math.max(1, textLength(content)));

  function renderNodes(nodes) {
    return Children.map(nodes, node => {
      if (isValidElement(node)) {
        return node.props.children === undefined ? node : cloneElement(node, {}, renderNodes(node.props.children));
      }
      if (typeof node !== 'string' && typeof node !== 'number') return node;
      const value = String(node);
      return (
        <>
          <span className="sr-only">{value}</span>
          <span aria-hidden="true">
            {value.split(/(\s+)/).map((word, wordIndex) => {
              if (/^\s+$/.test(word)) {
                characterIndex += word.length;
                return word;
              }
              return (
                <span className="whitespace-nowrap" key={wordIndex}>
                  {Array.from(word).map(character => {
                    const index = characterIndex++;
                    return <span className="typewriter-character" style={{ '--type-index': index }} key={index}>{character}</span>;
                  })}
                </span>
              );
            })}
          </span>
        </>
      );
    });
  }

  return <span data-typewriter={trigger} style={{ '--type-step': `${step}ms` }}>{renderNodes(content)}</span>;
}
