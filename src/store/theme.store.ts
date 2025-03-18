import {create} from "zustand";


interface ThemeState {
  theme: "light" | "dark"; 
  toggleTheme: () => void; 
  initializeTheme: () => void; 
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: "light", 
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    return { theme: newTheme };
  }),
  initializeTheme: () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(savedTheme);
    set({ theme: savedTheme as "light" | "dark" });
  }
}));

export default useThemeStore;
