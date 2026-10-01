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
  ["systems", "C++20 / C++17"],
  ["embedded", "C/C++, Microcontrollers, 6502 Processor"],
  ["frontend", "React, Next.js, TypeScript"],
  ["backend", "Python / Django"],
  ["infra", "AWS CDK (TypeScript)"],
  ["os", "Omarchy · macOS · WSL"],
  ["dev", "Neovim · tmux"],
];

export const swatches = ["#e8c39e", "#c9825a", "#8fa37c", "#7f9bb5", "#a98bb0", "#6f7680"];
