
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReduxProvider } from "./providers/ReduxProvider";
import TripExecutionManagement from "./pages/TripExecutionManagement";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./config/app.config";
import TripExecutionForm from "./pages/TripExecutionForm";
import Dashboard from "./pages/Dashboard";
import GridDemo from "./pages/GridDemo";
import HubBasicSearch from "./pages/HubBasicSearch";
import QuickBillingManagement from "./pages/QuickBilling/QuickBillingManagement";
import BasicDetails from "./pages/QuickBilling/CreateQuickBilling/BasicDetails";
import ResourceGroupDetails from "./pages/QuickBilling/CreateQuickBilling/ResourceGroupDetails";
import QuickBillingForm, { CreateQuickBilling } from "./pages/QuickBilling/CreateQuickBilling";
import DynamicPanelDemo from "./pages/DynamicPanelDemo";
import CreateOrder from "./pages/CreateOrder";
import ExcelGrid from "./pages/ExcelGrid";
// import UpgradedGrid from "./pages/UpgradedGrid";
// import ExpandableGrid from "./pages/ExpandableGrid";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: (failureCount, error: any) => {
        console.log('🔄 Query retry attempt:', failureCount, error?.message);
        return failureCount < 3;
      },
    },
    mutations: {
      retry: (failureCount, error: any) => {
        console.log('🔄 Mutation retry attempt:', failureCount, error?.message);
        return failureCount < 2;
      },
    },
  },
});

const App = () => {
  console.log('🚀 App component initialized');

  return (
      <ReduxProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>  
                <Route path={ROUTES.HOME} element={<Dashboard />} />
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                <Route path={"/quick-billing"} element={<QuickBillingManagement />} />
                <Route path={"/create-billing"} element={<BasicDetails />} />
                <Route path={"/create-billing/resourceGroup"} element={<ResourceGroupDetails />} />
                <Route path={"/ExcelDataManagement"} element={<ExcelGrid />} />
                <Route path={"/hub-search"} element={<HubBasicSearch />} />
                {/* <Route path={"/UpgradedGrid"} element={<UpgradedGrid />} />
                <Route path={"/ExpandableGrid"} element={<ExpandableGrid />} /> */}
                <Route path={"/create-order"} element={<CreateOrder />} />
                <Route path="/trip-execution" element={<TripExecutionManagement />} />
                <Route path="/trip-form" element={<TripExecutionForm />} />
                <Route path="/grid-demo" element={<GridDemo />} />
                <Route path="/dynamic-panel" element={<DynamicPanelDemo />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ReduxProvider>
  );
};

export default App;
