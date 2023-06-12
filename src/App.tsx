import React from "react";
import { AppContainer } from "./App.styled";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AddRecipe, Home } from "./pages";
import { QueryClientProvider, QueryClient } from "react-query";

const App = () => {
    const queryClient = new QueryClient();
    return (
        <AppContainer>
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/addrecipe" element={<AddRecipe />} />
                    </Routes>
                </MemoryRouter>
            </QueryClientProvider>
        </AppContainer>
    );
};

export default App;
