"use client";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import Cookies from 'js-cookie';
interface AuthFormProps {
  formType: "login" | "signup" | "forgotPassword" |"resetPassword";
}

export const AuthForm: React.FC<AuthFormProps> = ({ formType }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false); 
  
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
  const emailFromQuery = params.get("email");
  if (emailFromQuery) {
    setEmail(emailFromQuery);
  }
    if (typeof window !== "undefined") {
      return;
    }
  }, []);



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      switch (formType) {
        case "login": {
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
        //  console.log(error)
          if(error?.message==="Invalid login credentials")
          {
            setError("Invalid email")
            setShowForgotPassword(true); 
            return;
          }
          // if (error?.message==="Invalid password") {
          //   setError("Incorrect Password")
          //   setShowForgotPassword(true); 
          //   return;
          // }
          if(error) throw error;
     const now = new Date();
      const expiresIn = new Date(now.getTime() + 5 * 60 * 1000);

             // Store the access token in a cookie
             Cookies.set('access_token', data.session?.access_token || '', { expires: expiresIn });
             console.log('Access Token Cookie:', Cookies.get('access_token'))
          router.push("/home");
          break;
        }
        case "signup": {
          if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
          }
          
          const { error } = await supabase.auth.signUp({
            email,
            password,
          });
        
          if (error) {
            console.error("Signup error:", error);
            setError("An error occurred during signup. Please try again.");
            return;
          }
        
          alert("Confirmation email sent! Please check your inbox.");
         // router.push("/home");
          break;
        }
        
        case "forgotPassword": {
          const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'http://localhost:3001/reset-password'});
          if (error) throw error;
          alert('Password reset email sent!');
        //  router.push("/reset-password");
          break;
        }
        case "resetPassword":{
          if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
          }
          
          const {error}=await supabase.auth.updateUser({password});
          if(error) throw error;
          alert("Password updated successfully")
          router.push("/login");
          break;
        }
        
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderFormContent = () => {
    switch (formType) {
      case "login":
        return (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </>
        );
      case "signup":
        return (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              required
            />
          </>
        );
      case "forgotPassword":
        return (
          
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
             
            />);
      case "resetPassword":
        return(
              <>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              required
            />
            </>
        )
        
      
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-2xl font-semibold text-center">
        <h2 className="text-2xl font-semibold text-center">
          {formType === "login" && "Login"}
          {formType === "signup" && "Signup"}
          {formType === "forgotPassword" && "Forgot Password"}
          {formType=== "resetPassword" && "Reset Password"}

        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {renderFormContent()}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            disabled={loading}
          >
            {loading ? "Processing" : "Submit"}
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
     
        <div>
          {formType === "login" && (
            <>
              <p>
                Don&apos;t have an account?{" "}
                <a href="/signup" className="text-blue-500">
                  Sign up
                </a>
              </p>
              {showForgotPassword && (
                <p>
                  Forgot your password?{" "}
                  <a
                    href="#"
                    className="text-blue-500"
                    onClick={() => router.push(`/forgot-password?email=${email}`)}
                  >
                    Reset Password
                  </a>
                </p>
              )}
            </>
          )}
          {formType === "signup" && (
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-blue-500">
                Login
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};








// // /components/AuthForm.tsx
// "use client";
// import { supabase } from "@/utils/supabase";
// import { useRouter } from "next/navigation";
// import { FormEvent, useEffect, useState } from "react";
// import Cookies from "js-cookie";

// interface AuthFormProps {
//   formType: "login" | "signup" | "forgotPassword" | "resetPassword";
// }

// export const AuthForm: React.FC<AuthFormProps> = ({ formType }) => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [confirmPassword, setConfirmPassword] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter();

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       switch (formType) {
//         case "login": {
//           const { data, error } = await supabase.auth.signInWithPassword({
//             email,
//             password,
//           });
//           if (error) {
//             setError("Invalid login credentials");
//             return;
//           }

//           // Save the token in cookies
//           Cookies.set("access_token", data.session?.access_token || "", { expires: 5 / 1440 }); // 5 mins
//           router.push("/home");
//           break;
//         }
//         case "signup": {
//           if (password !== confirmPassword) {
//             throw new Error("Passwords do not match");
//           }
//           const { error } = await supabase.auth.signUp({
//             email,
//             password,
//           });
//           if (error) {
//             setError(error.message);
//             return;
//           }
//           alert("Confirmation email sent! Please check your inbox.");
//           router.push("/login");
//           break;
//         }
//         case "forgotPassword": {
//           const { error } = await supabase.auth.resetPasswordForEmail(email, {
//             redirectTo: "http://localhost:3000/reset-password",
//           });
//           if (error) {
//             setError(error.message);
//             return;
//           }
//           alert("Password reset email sent!");
//           break;
//         }
//         case "resetPassword": {
//           if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             return;
//           }
//           const { error } = await supabase.auth.updateUser({ password });
//           if (error) {
//             setError(error.message);
//             return;
//           }
//           alert("Password updated successfully");
//           router.push("/login");
//           break;
//         }
//       }
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-form">
//       <form onSubmit={handleSubmit}>
//         {["login", "signup"].includes(formType) && (
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//         )}
//         {formType !== "forgotPassword" && (
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//           />
//         )}
//         {formType === "signup" || formType === "resetPassword" ? (
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm Password"
//             required
//           />
//         ) : null}
//         {error && <p>{error}</p>}
//         <button type="submit" disabled={loading}>
//           {loading ? "Loading..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };



