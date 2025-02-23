
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface UserCredentials {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: UserCredentials) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    }

    toast({
      title: "Success!",
      description: "Please check your email to confirm your account.",
    });
    return { data };
  } catch (error) {
    console.error("Error:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred",
      variant: "destructive",
    });
    return { error };
  }
};

export const signIn = async ({ email, password }: UserCredentials) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    }

    toast({
      title: "Welcome back!",
      description: "You have successfully logged in.",
    });
    return { data };
  } catch (error) {
    console.error("Error:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred",
      variant: "destructive",
    });
    return { error };
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      return { error };
    }

    toast({
      title: "Goodbye!",
      description: "You have been logged out.",
    });
    return { error: null };
  } catch (error) {
    console.error("Error:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred",
      variant: "destructive",
    });
    return { error };
  }
};
