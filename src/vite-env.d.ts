/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "cs-text": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "data-contentstorage-id"?: string;
    };
  }
}

