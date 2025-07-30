import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScoringFormat from "./pages/ScoringFormat";
import Scarecrow from "./pages/Scarecrow";
import GambleSands from "./pages/GambleSands";
import Quicksands from "./pages/Quicksands";
import Inn from "./pages/Inn";
import Leaderboard from "./pages/Leaderboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/scoring" element={<ScoringFormat />} />
          <Route path="/scarecrow" element={<Scarecrow />} />
          <Route path="/gamble-sands" element={<GambleSands />} />
          <Route path="/quicksands" element={<Quicksands />} />
          <Route path="/inn" element={<Inn />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
