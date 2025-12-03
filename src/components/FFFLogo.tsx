import { useState } from "react";
import fffLogo from "@/assets/fff-logo.png";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface FFFLogoProps {
  size?: "sm" | "md";
  className?: string;
}

const FFFLogo = ({ size = "md", className = "" }: FFFLogoProps) => {
  const [open, setOpen] = useState(false);
  
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <a
          href="https://www.featherwindFF.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer ${className}`}
          onMouseEnter={() => setOpen(true)}
          onClick={(e) => {
            // Allow the link to work on click
          }}
        >
          <img
            src={fffLogo}
            alt="Featherwind Freedom Federation"
            className={`${sizeClasses[size]} object-contain`}
          />
        </a>
      </DialogTrigger>
      <DialogContent 
        className="bg-background/95 backdrop-blur-md border-primary/30 max-w-md"
        onMouseLeave={() => setOpen(false)}
      >
        <a
          href="https://www.featherwindFF.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 hover:scale-105 transition-transform duration-300"
        >
          <img
            src={fffLogo}
            alt="Featherwind Freedom Federation"
            className="w-full h-auto max-h-80 object-contain mx-auto"
          />
          <p className="text-center text-sm text-muted-foreground mt-4 font-body">
            Visit Featherwind Freedom Federation
          </p>
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default FFFLogo;
