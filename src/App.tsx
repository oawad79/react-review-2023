import "./App.css";
import Banner from "./components/banner";
import ComponentPicker from "./components/componentPicker";
import { useCallback, useState } from "react";
import { navigationContext, navValues } from "./helpers/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
    <navigationContext.Provider value={nav}>
      <div className="flex items-center justify-center">
        <div className="w-3/6">
          <QueryClientProvider client={queryClient}>
            <Banner>Providing houses all over the world</Banner>
            <ComponentPicker currentNavLocation={nav.current} />
          </QueryClientProvider>
        </div>
      </div>
    </navigationContext.Provider>
  );
}

export default App;
