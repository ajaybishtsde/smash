export type ThemeMode = "light" | "dark" | "system";

export const themeModes: ThemeMode[] = ["light", "dark", "system"];

export const colors = {
  light: {
    primary: "#7C3AED",
    background: "#FAF9FC",
    foreground: "#18151F",
    muted: "#6B6675",
    card: "#FFFFFF",
    border: "#E8E4EF",
  },

  dark: {
    primary: "#A78BFA",
    background: "#100D16",
    foreground: "#F5F3F7",
    muted: "#A9A3B2",
    card: "#19151F",
    border: "#302A38",
  },
};
