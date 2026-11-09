import type { ReactNode } from "react";
import Image from "next/image";
import { Icon } from "./Icons";

/** Title bar of the Windows app window mocks. Shows the app icon unless another lead is given. */
export function WindowBar({ lead, title = "Anehalo" }: { lead?: ReactNode; title?: string }) {
  return (
    <div className="m-title">
      <div className="m-brand">
        {lead ?? <Image src="/icon-small.webp" width={18} height={18} alt="" />}
        {title}
      </div>
      <div className="m-ctl">
        <span>
          <Icon name="min" />
        </span>
        <span>
          <Icon name="max" />
        </span>
        <span>
          <Icon name="x" />
        </span>
      </div>
    </div>
  );
}

/** The green "Saved just now" status shown in editor bars. */
export function SavedStatus() {
  return (
    <span className="status" data-state="saved">
      <span className="dot">
        <Icon name="check" />
      </span>
      Saved just now
    </span>
  );
}
