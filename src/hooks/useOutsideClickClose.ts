import { useEffect } from "react";

interface Props {
  ref: React.RefObject<HTMLElement>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useCloseOnclickOutside = ({ ref, setShow }: Props): void => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShow]);
};
