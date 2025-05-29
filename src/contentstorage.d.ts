// 1. Import the consumer's specific generated type
import type { ContentRoot } from "./content/content-types";
//    ^ This 'ContentRoot' should be the interface generated from your FLATTENED JSON,
//      so its keys are like 'HomePage.Login', 'Settings.Header', etc.
//    ^ The path "./src/content/content-types" must be correct relative to this .d.ts file.

// 2. Declare augmentation for your library's module
declare module "@contentstorage/core" {
  // <-- This string MUST EXACTLY match how you import your library
  //     e.g., if you use `import { getText } from '@contentstorage/core'`, this is correct.

  // 3. Augment the placeholder interface from your library
  export interface ContentStructure extends ContentRoot {}
  //   ^ 'ContentStructure' MUST be the exact name of the placeholder interface
  //     that your library (@contentstorage/core) exports for this purpose.
  //     (In some previous examples, I might have used 'CustomContentStructure' – ensure names match).
  //   ^ 'extends ContentRoot' merges all properties from the consumer's specific
  //     'ContentRoot' into your library's 'ContentStructure' type for this project.
}
