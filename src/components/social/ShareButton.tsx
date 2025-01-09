import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonProps {
  platform: string;
  icon: LucideIcon;
  label: string;
  bgColor: string;
  hoverColor: string;
  onClick: () => void;
}

export const ShareButton = ({ platform, icon: Icon, label, bgColor, hoverColor, onClick }: ShareButtonProps) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className={`${bgColor} hover:${hoverColor} text-white border-none`}
      onClick={onClick}
    >
      <Icon className="mr-2 h-5 w-5" />
      {label}
    </Button>
  );
};