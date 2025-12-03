import { useState } from "react";
import logo from "@/assets/featherwind-logo.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface LogoPopupProps {
  size?: "sm" | "md";
  className?: string;
}

const LogoPopup = ({ size = "md", className = "" }: LogoPopupProps) => {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
  };

  const opacityClasses = {
    sm: "opacity-50 hover:opacity-100",
    md: "opacity-100",
  };

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <a
          href="https://www.featherwindff.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block ${opacityClasses[size]} transition-all duration-300 cursor-pointer hover:scale-110 ${className}`}
        >
          <img
            src={logo}
            alt="Featherwind Spirit"
            className={`${sizeClasses[size]} object-contain`}
          />
        </a>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-64 bg-background/95 backdrop-blur-md border-primary/30 p-4"
        sideOffset={8}
      >
        <a
          href="https://www.featherwindff.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-105 transition-transform duration-300"
        >
          <img
            src={logo}
            alt="Featherwind Spirit"
            className="w-full h-auto max-h-40 object-contain mx-auto"
          />
          <p className="text-center text-xs text-muted-foreground mt-3 font-body">
            Visit Featherwind Freedom Federation
          </p>
        </a>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LogoPopup;
