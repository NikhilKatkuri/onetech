// Supports both image URL and ReactComponent imports
declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const app: string;
  export default app;
}
