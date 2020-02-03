import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

type Props = $ReadOnly<{| children: React.Node |}>;

export default function Modal({ children }: Props) {
  const modalRef = useRef(document.getElementById("modal-holder"));
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal-inner">{children}</div>
    </div>,
    modalRef.current
  );
}
