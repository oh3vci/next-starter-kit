"use client";

import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";

type IconName = "file" | "globe" | "window";
type IconProps = HTMLAttributes<SVGSVGElement> & {
  name: IconName;
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
};

const ICON_LIBRARY_PATH = "/assets/icons.svg";

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ height = 16, name, width = 16, ...props }, ref) => {
    return (
      <svg {...props} ref={ref} style={{ height, width }} viewBox="0 0 16 16">
        <use xlinkHref={`${ICON_LIBRARY_PATH}#${name}`} />
      </svg>
    );
  },
);

Icon.displayName = "Icon";

export default Icon;
