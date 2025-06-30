import React from "react";

export type TabsItem = {
  title: string;
  isActive: boolean;
  items: React.ReactNode;
}