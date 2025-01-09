import { Share2, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const SocialShare = () => {
  const { toast } = useToast();
  const shareUrl = window.location.origin;
  const shareText = "Join B2B Profit Investment - Your gateway to smart investments in Northern Nigeria! 💰✨";

  const handleShare = async (platform: string) => {
    let shareLink = "";

    switch (platform) {
      case "whatsapp":
        shareLink = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
        break;
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "telegram":
        shareLink = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      default:
        if (navigator.share) {
          try {
            await navigator.share({
              title: "B2B Profit Investment",
              text: shareText,
              url: shareUrl,
            });
            return;
          } catch (error) {
            console.error("Error sharing:", error);
          }
        }
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        toast({
          title: "Link copied!",
          description: "Share it with your friends and family",
        });
        return;
    }

    window.open(shareLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-8 animate-fade-in delay-800">
      <p className="text-white text-lg font-medium mb-2">Share and Earn Rewards!</p>
      
      <div className="flex space-x-4">
        <Button
          variant="outline"
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white border-none"
          onClick={() => handleShare("whatsapp")}
        >
          <Send className="mr-2 h-5 w-5" />
          WhatsApp
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white border-none"
          onClick={() => handleShare("facebook")}
        >
          <Facebook className="mr-2 h-5 w-5" />
          Facebook
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="bg-blue-400 hover:bg-blue-500 text-white border-none"
          onClick={() => handleShare("telegram")}
        >
          <Send className="mr-2 h-5 w-5" />
          Telegram
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="bg-gray-600 hover:bg-gray-700 text-white border-none"
          onClick={() => handleShare("other")}
        >
          <Share2 className="mr-2 h-5 w-5" />
          More
        </Button>
      </div>
    </div>
  );
};