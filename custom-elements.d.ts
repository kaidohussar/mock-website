import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "cs-text": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "data-contentstorage-id"?: string;
      };
    }
  }
}

export {};
