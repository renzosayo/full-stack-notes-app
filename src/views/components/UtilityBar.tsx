import React from "react";

export default function UtilityBar({
  children,
}: {
  children: React.JSX.Element;
}) {
  return <div className="utility-bar front">{children}</div>;
}
