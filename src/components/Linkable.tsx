import { PropsWithChildren, ReactElement, useEffect, useRef } from "react";

export default function Linkable({
  id,
  children,
}: PropsWithChildren<{ id: string }>): ReactElement {
  const ref = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (window.location.href.endsWith(`#${id}`) && ref.current) {
      ref.current.scrollIntoView();
    }
  }, [id]); // scroll after mount
  return (
    <div ref={ref} id={id}>
      {children}
    </div>
  );
}
