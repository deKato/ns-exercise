import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from "./App.styled";
import { AppRouter } from "./Routing/AppRouter";
import { AuthContextProvider } from "./store/auth/AuthContextProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: false,
      refetchOnReconnect: true,
      retry: 1,
      staleTime: 30000,
    },
  },
});

const App = () => {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AppRouter />
      </QueryClientProvider>
    </AuthContextProvider>
  );
};
export default App;
