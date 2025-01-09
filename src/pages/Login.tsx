import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <img src="/logo.png" alt="B2B Profit Investment" className="h-12 mx-auto mb-8" />
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#1E3A8A',
                  brandAccent: '#166534',
                },
              },
            },
          }}
          providers={[]}
        />
      </div>
    </div>
  );
};

export default Login;