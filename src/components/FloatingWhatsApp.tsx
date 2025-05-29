"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {MessageSquare} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
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
              className={`rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 ${
                isHovered ? "scale-110" : ""
              }`}
            >
              <MessageSquare className="h-6 w-6 text-white" />
              <span className="sr-only">WhatsApp Contact</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-green-500 text-white border-green-600">
            <p>Fale comigo no WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
