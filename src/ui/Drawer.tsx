import { PropsWithChildren, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

interface Props {
  isOpen: boolean;
  maskClosable?: boolean;
  onClose?: () => void;
}

export default function Drawer({
  children,
  isOpen,
  maskClosable,
  onClose = () => undefined,
}: PropsWithChildren<Props>) {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return createPortal(
    <CSSTransition
      in={isOpen}
      timeout={300}
      nodeRef={nodeRef}
      classNames="drawer-fade"
      unmountOnExit
      onEnter={() => {
        document.body.style.overflow = "hidden";
      }}
      onExited={() => {
        document.body.style.overflow = "auto";
      }}
    >
      <div
        ref={nodeRef}
        onClick={() => maskClosable && onClose()}
        className="fixed left-0 top-0 z-20 h-screen w-screen bg-app-black/60"
      >
        <div
          className="absolute right-0 top-0 h-screen w-3/4 overflow-y-auto bg-app-black flex flex-col items-end gap-[1.5rem]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-[3.125rem] flex items-center justify-end px-[1.25rem]">
            <img
              width={16}
              height={16}
              alt="Close"
              className="shrink-0 w-[1rem] h-[1rem]"
              src="/images/close-white.svg"
              onClick={onClose}
            />
          </div>
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
}
