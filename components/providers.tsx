'use client';

import Loading from "@/app/loading";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ChakraProvider value={defaultSystem}>
                <Loading />
                {children}
            </ChakraProvider>
        </Provider>
    );
}