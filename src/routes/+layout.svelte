<script lang="ts">
  import "../app.scss";

  import { onMount } from "svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { darkMode } from "$lib/stores.svelte";

  let { children } = $props();

  let prefersDarkMode = $state(false);
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").onchange = (v) => {
      prefersDarkMode = v.matches;
    };
  }

  $effect(() => {
    let theme: string;

    if ($darkMode === null) {
      theme = prefersDarkMode ? "dark" : "light";
    } else {
      theme = $darkMode ? "dark" : "light";
    }

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("darkMode", JSON.stringify($darkMode));
  });

  onMount(() => {
    const updateDarkMode = (ev: StorageEvent) => {
      if (ev.key == "darkMode") {
        $darkMode = JSON.parse(ev.newValue || "null");
      }
    };
    window.addEventListener("storage", updateDarkMode);

    return () => {
      window.removeEventListener("storage", updateDarkMode);
    };
  });
</script>

<Navbar />
{@render children()}
