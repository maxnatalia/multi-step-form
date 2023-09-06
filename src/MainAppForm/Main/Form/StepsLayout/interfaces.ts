import { ReactNode } from "react";
export interface StepsLayoutProps {
  icon?: ReactNode;
  aligncenter?: "true" | "false";
  title: string;
  description: string;
  children: ReactNode;
}
