import { Share2, Facebook, Send } from "lucide-react";
import { ShareButton } from "./ShareButton";
import { useShare } from "./useShare";

export const SocialShare = () => {
  const { handleShare } = useShare();

  const shareButtons = [
    {
      platform: "whatsapp",
      icon: Send,
      label: "WhatsApp",
      bgColor: "bg-green-500",
      hoverColor: "bg-green-600",
    },
    {
      platform: "facebook",
      icon: Facebook,
      label: "Facebook",
      bgColor: "bg-blue-600",
      hoverColor: "bg-blue-700",
    },
    {
      platform: "telegram",
      icon: Send,
      label: "Telegram",
      bgColor: "bg-blue-400",
      hoverColor: "bg-blue-500",
    },
    {
      platform: "other",
      icon: Share2,
      label: "More",
      bgColor: "bg-gray-600",
      hoverColor: "bg-gray-700",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 mt-8 animate-fade-in delay-800">
      <p className="text-white text-lg font-medium mb-2">Share and Earn Rewards!</p>
      
      <div className="flex space-x-4">
        {shareButtons.map((button) => (
          <ShareButton
            key={button.platform}
            {...button}
            onClick={() => handleShare(button.platform)}
          />
        ))}
      </div>
    </div>
  );
};