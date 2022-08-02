import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Providers: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
