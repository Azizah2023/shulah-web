import { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

export function MainLayout({ children }: LayoutProps) {
  return <div className="min-h-screen">{children}</div>;
}
