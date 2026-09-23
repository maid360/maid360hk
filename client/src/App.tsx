import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import FloatingSocialIcons from "./components/FloatingSocialIcons";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import EmployerGuide from "./pages/EmployerGuide";
import Resources from "./pages/Resources";
import Search from "./pages/Search";
import Search1 from "./pages/Search1";
import Search2 from "./pages/Search2";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/services/:type"} component={ServiceDetail} />
      <Route path={"/employer-guide"} component={EmployerGuide} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/search"} component={Search} />
      <Route path={"/search1"} component={Search1} />
      <Route path={"/search2"} component={Search2} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <FloatingSocialIcons />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
