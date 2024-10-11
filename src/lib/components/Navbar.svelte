<script lang="ts">
  import PhGithubLogo from "virtual:icons/ph/github-logo";
  import PhList from "virtual:icons/ph/list";

  import { darkMode } from "$lib/stores.svelte";
  import Navigation from "./Navigation.svelte";
</script>

<div
  class="sticky top-0 z-30 h-16 w-full bg-base-100 bg-opacity-90 text-base-content shadow-sm backdrop-blur">
  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <PhList class="text-xl" />
        </div>
        <Navigation
          class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow" />
      </div>
    </div>

    <div class="navbar-center hidden lg:flex">
      <Navigation class="menu menu-horizontal px-1" />
    </div>

    <div class="navbar-end">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Theme</summary>
            <ul class="rounded-t-none bg-base-100 p-2">
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  bind:group={$darkMode}
                  class="btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="System"
                  value={null} />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  bind:group={$darkMode}
                  class="btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Light"
                  value={false} />
              </li>
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  bind:group={$darkMode}
                  class="btn btn-ghost btn-sm btn-block justify-start"
                  aria-label="Dark"
                  value={true} />
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <a
        href="https://github.com/LEDPlayr/ledplayr"
        target="_blank"
        class="btn btn-circle btn-ghost"><PhGithubLogo class="text-xl" /></a>
    </div>
  </div>
</div>
