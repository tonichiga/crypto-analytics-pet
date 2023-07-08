import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="p-12">{children}</div>;
};

export default MainLayout;
