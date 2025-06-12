import { createContext, useContext, useState } from "react";

interface EmployerContextType {
  selectedEmployer: string;
  setSelectedEmployer: (value: string) => void;
}

const EmployerContext = createContext<EmployerContextType>(
  {} as EmployerContextType,
);

export const EmployerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedEmployer, setSelectedEmployer] = useState("");

  return (
    <EmployerContext.Provider value={{ selectedEmployer, setSelectedEmployer }}>
      {children}
    </EmployerContext.Provider>
  );
};

export const useEmployer = () => {
  const context = useContext(EmployerContext);
  if (!context) {
    throw new Error("useEmployer must be used within EmployerProvider");
  }
  return context;
};
