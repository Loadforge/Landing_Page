import { create } from "zustand";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  initializeTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark", 
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return { theme: newTheme };
    }),
  initializeTheme: () => {
    let savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      savedTheme = prefersDark ? "dark" : "light";
    }

    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    set({ theme: savedTheme as "light" | "dark" });
  },
}));

export default useThemeStore;
