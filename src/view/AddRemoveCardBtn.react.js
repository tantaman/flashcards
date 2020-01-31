import React from "react";
import "./AddRemoveCardBtn.css";

type Props = $ReadOnly<{|
  mode: "add" | "remove"
|}>;

function AddRemoveCardBtn({ mode }: Props) {
  let classNames = "AddRemoveCardBtn";
  let symbol = "+";
  if (mode === "remove") {
    classNames += " remove";
    symbol = "-";
  }
  return <span className={classNames}>{symbol}</span>;
}

export default AddRemoveCardBtn;
