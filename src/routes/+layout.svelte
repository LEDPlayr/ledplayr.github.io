<script lang="ts">
  import "../app.scss";

  import { onMount } from "svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { darkMode } from "$lib/stores.svelte";

  let { children } = $props();
  let prefersDarkMode = $state(false);

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
    // Watch for change of user preferences
    if (window.matchMedia) {
      const wm = window.matchMedia("(prefers-color-scheme: dark)");
      prefersDarkMode = wm.matches;
      wm.onchange = (v) => {
        prefersDarkMode = v.matches;
      };
    }

    // Watch for other tabs changing the local storage
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
