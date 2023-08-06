"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface UserContextType {
  username: string | null;
  setUsername: (username: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

interface ListContextType {
  selectedList: number | null;
  setSelectedList: Dispatch<SetStateAction<number | null>>;
}

const SelectedListContext = createContext<ListContextType | undefined>(
  undefined
);

export function SelectedListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedList, setSelectedList] = useState<number | null>(null);

  return (
    <SelectedListContext.Provider value={{ selectedList, setSelectedList }}>
      {children}
    </SelectedListContext.Provider>
  );
}

export function useSelectedList() {
  return useContext(SelectedListContext);
}
