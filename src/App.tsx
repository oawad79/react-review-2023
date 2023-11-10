import "./App.css";
import Banner from "./components/banner";
import { useCallback, useState } from "react";
import { navigationContext, navValues } from "./helpers/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import House from "./components/house";
import React from "react";
import LoadingIndicator from "./components/loadingIndicator";
import loadingStatus from "./helpers/loadingStatus";
import AddHouse from "./components/addHouse";

const queryClient = new QueryClient();

const HouseListLazy = React.lazy(() => import("./components/houseList"));

function App() {
  const navigate = useCallback(
    (navTo: string, param?: House): void =>
      setNav({ current: navTo, param, navigate }),
    []
  );

  const [nav, setNav] = useState<ContextProps>({
    current: navValues.home,
    navigate,
  });

  return (
    <BrowserRouter>
      <navigationContext.Provider value={nav}>
        <QueryClientProvider client={queryClient}>
          <div className="flex items-center justify-center">
            <div className="w-3/6">
              <Banner>Providing houses all over the world</Banner>
              <Routes>
                <Route
                  path="/"
                  element={
                    <React.Suspense
                      fallback={
                        <LoadingIndicator
                          loadingStatus={loadingStatus.isLoading}
                        />
                      }
                    >
                      <HouseListLazy />
                    </React.Suspense>
                  }
                />
                <Route path="/house/:id" Component={House} />
                <Route path="/addHouse" Component={AddHouse} />
              </Routes>
            </div>
          </div>
        </QueryClientProvider>
      </navigationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
