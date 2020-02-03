import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function AddCardModal() {
  const modalRef = useRef(document.getElementById("modal-holder"));
  return ReactDOM.createPortal(<div>Hello</div>, modalRef.current);
}
