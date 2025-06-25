// contexts/PopupContext.tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type PopupContextType = {
  isOpen: boolean;
  text: string;
  openPopup: (text: string) => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const openPopup = (msg: string) => {
    setText(msg);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setText("");
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
