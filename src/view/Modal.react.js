import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

type Props = $ReadOnly<{| children: React.Node |}>;

export default function Modal({ children }: Props) {
  const modalRef = useRef(document.getElementById("modal-holder"));
  return ReactDOM.createPortal(children, modalRef.current);
}
