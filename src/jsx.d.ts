declare global {
    namespace JSX {
        interface IntrinsicElements {
            'cs-text': {
                'data-contentstorage-id'?: string;
                'data-cs-fallback'?: string;
                class?: string;
                id?: string;
                children?: any; // Use 'any' for React.ReactNode for extreme simplicity
                // Allow any other attribute for this test
                [key: string]: any;
            };
        }
    }
}
export {};