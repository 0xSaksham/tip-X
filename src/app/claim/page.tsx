"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ArrowLeft, Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Web3Provider } from "@/providers/Web3Provider";
import { ConnectKitButton } from "connectkit";

const ClaimPage = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tipAmount, setTipAmount] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  // Function to verify username and check tips
  const verifyUsername = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/verify-tips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to verify username");
      }

      if (data.tipAmount === "0.0") {
        throw new Error("No tips found for this username");
      }

      setTipAmount(data.tipAmount);
      setIsVerified(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to verify username"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error("Failed to claim tips");
      }

      alert("Tips claimed successfully!");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to claim tips. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Web3Provider>
      <div className="min-h-screen bg-gray-100 dark:bg-black p-8">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>

        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Claim Your Tips
            </h1>

            {!isVerified ? (
              // Username verification form
              <form onSubmit={verifyUsername} className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Enter Your Username
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                    focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                    bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="@username"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2
                bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500 dark:ring-offset-gray-800
                disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Checking...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5" />
                      Check Tips
                    </>
                  )}
                </button>
              </form>
            ) : (
              <>
                {/* Tip Amount Display */}
                <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Available Tips
                  </p>
                  <p className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">
                    {tipAmount} ETH
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="text-red-500 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="space-y-4 flex flex-col items-center">
                    <ConnectKitButton />

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2
                        bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-indigo-500 dark:ring-offset-gray-800
                        disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Claim Tips"
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </Web3Provider>
  );
};

export default ClaimPage;
