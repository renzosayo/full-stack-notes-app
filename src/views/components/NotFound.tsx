import React from "react";
import UtilityBar from "./UtilityBar";

export default function NotFound({
  utilityBarChildren,
}: {
  utilityBarChildren: React.JSX.Element;
}) {
  return (
    <>
      <UtilityBar children={utilityBarChildren} />
      <div className="notFound">Not found</div>
    </>
  );
}
