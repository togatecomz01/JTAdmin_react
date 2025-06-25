import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type TextType = { message: string | null; button: string | null };

type PopupContextType = {
  isOpen: boolean;
  text: TextType;
  openPopup: (text: TextType) => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState<{
    message: string | null;
    button: string | null;
  }>({ message: null, button: null });

  const openPopup = (msg: TextType) => {
    setText(msg);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setText({ message: null, button: null });
  };

  return (
    <PopupContext.Provider value={{ isOpen, text, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) throw new Error("usePopup must be used within a PopupProvider");
  return context;
};
