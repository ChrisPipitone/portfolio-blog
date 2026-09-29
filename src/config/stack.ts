/*
  Data for the neofetch-style block on the homepage.
  `logo` is fixed-width block art — every line must be 18 columns or it skews.
*/

export const logo = [
  " ▄████▄   ██████▄ ",
  "██▀   ▀   ██   ▀██",
  "██        ██   ▄██",
  "██        ██████▀ ",
  "██▄   ▄   ██      ",
  " ▀████▀   ██      ",
].join("\n");

export const specs: [string, string][] = [
  ["interface", "React, Next.js, Astro, Tailwind"],
  ["application", "Python / Django, TypeScript"],
  ["systems", "C++17 / C++20, Rust"],
  ["metal", "C11, Microcontrollers, Embedded C++"],
  ["os", "Arch Linux · macOS · WSL"],
  ["wm", "Hyprland"],
  ["editor", "Neovim"],
  ["shell", "zsh + tmux"],
];

export const swatches = ["#e8c39e", "#c9825a", "#8fa37c", "#7f9bb5", "#a98bb0", "#6f7680"];
