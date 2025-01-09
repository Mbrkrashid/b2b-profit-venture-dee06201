import { useToast } from "@/components/ui/use-toast";

interface ShareConfig {
  title: string;
  text: string;
  url: string;
}

export const useShare = () => {
  const { toast } = useToast();
  const shareUrl = window.location.origin;
  const shareText = "Join B2B Profit Investment - Your gateway to smart investments in Northern Nigeria! 💰✨";
  
  const shareConfig: ShareConfig = {
    title: "B2B Profit Investment",
    text: shareText,
    url: shareUrl,
  };

  const generateShareLink = (platform: string): string => {
    switch (platform) {
      case "whatsapp":
        return `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
      case "telegram":
        return `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
      default:
        return "";
    }
  };

  const handleShare = async (platform: string) => {
    if (platform === "other" && navigator.share) {
      try {
        await navigator.share(shareConfig);
        return;
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }

    const shareLink = generateShareLink(platform);
    
    if (shareLink) {
      window.open(shareLink, "_blank", "noopener,noreferrer");
    } else {
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      toast({
        title: "Link copied!",
        description: "Share it with your friends and family",
      });
    }
  };

  return { handleShare, shareConfig };
};