<script lang="ts">
  import { base } from "$app/paths";

  const desktop_images = [
    { title: "About page on Desktop", img: `desktop/about.png` },
    { title: "Sequences page on Desktop", img: `desktop/sequences.png` },
    { title: "Playlists page on Desktop", img: `desktop/playlists.png` },
    { title: "Schedules page on Desktop", img: `desktop/schedules.png` },
    { title: "Outputs page on Desktop", img: `desktop/outputs.png` },
    { title: "3D Virtual Display page on Desktop", img: `desktop/display.png` },
  ];

  const mobile_images = [
    { title: "About page on Mobile", img: `mobile/about.png` },
    { title: "Sequences page on Mobile", img: `mobile/sequences.png` },
    { title: "Playlists page on Mobile", img: `mobile/playlists.png` },
    { title: "Schedules page on Mobile", img: `mobile/schedules.png` },
    { title: "Outputs page on Mobile", img: `mobile/outputs.png` },
    { title: "3D Virtual Display page on Mobile", img: `mobile/display.png` },
  ];
</script>

<svelte:head>
  <title>LEDPlayr: Screenshots</title>
</svelte:head>

<div class="container mx-auto">
  <h1 class="py-4 text-2xl">Desktop Screenshots</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {#each desktop_images as img}
      <figure class="m-4 border">
        <img src="{base}/screenshots/{img.img}" class="w-full" alt={img.title} />
        <figcaption class="text-md border-t p-2 text-center">{img.title}</figcaption>
      </figure>
    {/each}
  </div>

  <h1 class="py-4 text-2xl">Mobile Screenshots</h1>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
    {#each mobile_images as img}
      <figure class="m-4 border">
        <img src="{base}/screenshots/{img.img}" class="w-full" alt={img.title} />
        <figcaption class="text-md border-t p-2 text-center">{img.title}</figcaption>
      </figure>
    {/each}
  </div>
</div>
