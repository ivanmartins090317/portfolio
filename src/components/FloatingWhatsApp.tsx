"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const phoneNumber = "13981400137";
  const message = "Olá! Vi seu portfólio e gostaria de conversar.";

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              size="icon"
              style={{
                backgroundColor: isDark ? "#131315" : "#ffffff",
                border: isDark ? "1.5px solid #404040" : "1.5px solid #171717",
                color: isDark ? "#f5f5f5" : "#171717",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
              className="rounded-full w-14 h-14 shadow-lg transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="sr-only">WhatsApp Contact</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent
            style={{
              backgroundColor: isDark ? "#1b1b1d" : "#171717",
              color: "#f5f5f5",
              border: "none",
            }}
          >
            <p>Fale comigo no WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
