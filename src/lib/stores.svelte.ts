import { writable } from "svelte/store";

export const darkMode = writable<boolean | null>(
  JSON.parse(localStorage.getItem("darkMode") || "null"),
);
