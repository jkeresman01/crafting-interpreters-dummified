import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

interface Props {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'jlang' }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code]);

  return (
    <div className="code-block">
      <pre>
        <code ref={ref} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
}
