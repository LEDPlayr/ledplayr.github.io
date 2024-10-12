<script lang="ts">
  import { base } from "$app/paths";

  const images = [
    { title: "About page on Desktop", img: `desktop/about.png` },
    { title: "Sequences page on Desktop", img: `desktop/sequences.png` },
    { title: "Playlists page on Desktop", img: `desktop/playlists.png` },
    { title: "Schedules page on Desktop", img: `desktop/schedules.png` },
    { title: "Outputs page on Desktop", img: `desktop/outputs.png` },
    { title: "3D Virtual Display page on Desktop", img: `desktop/display.png` },
    { title: "About page on Mobile", img: `mobile/about.png` },
    { title: "Sequences page on Mobile", img: `mobile/sequences.png` },
    { title: "Playlists page on Mobile", img: `mobile/playlists.png` },
    { title: "Schedules page on Mobile", img: `mobile/schedules.png` },
    { title: "Outputs page on Mobile", img: `mobile/outputs.png` },
    { title: "3D Virtual Display page on Mobile", img: `mobile/display.png` },
  ];

  let modal: HTMLDialogElement;
  let curr = $state(0);

  const next = () => {
    curr++;
    if (curr > images.length) curr = 0;
  };

  const prev = () => {
    curr--;
    if (curr < 0) curr = images.length - 1;
  };

  const showModal = (idx: number) => {
    curr = idx;
    modal.showModal();
  };
</script>

<svelte:head>
  <title>LEDPlayr: Screenshots</title>
</svelte:head>

<dialog bind:this={modal} class="modal">
  <div class="container card modal-box card-compact max-w-none bg-base-100 shadow-xl">
    <img
      class="modal-img max-h-full flex-grow object-contain"
      src="{base}/screenshots/{images[curr].img}"
      alt={images[curr].title} />

    <div
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <button onclick={prev} class="btn btn-circle">❮</button>
      <button onclick={next} class="btn btn-circle">❯</button>
    </div>

    <form method="dialog">
      <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
    </form>

    <div class="card-body flex-none">
      <h2 class="card-title mx-auto">{images[curr].title}</h2>
    </div>
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>Close popup</button>
  </form>
</dialog>

<div class="container mx-auto p-4">
  <ul class="flex flex-wrap gap-4">
    {#each images as img, idx}
      <li class="thumb m-auto flex-grow text-center">
        <button
          onclick={() => {
            showModal(idx);
          }}>
          <figure class="border">
            <img
              class="thumb-img m-auto object-cover p-2 align-bottom"
              src="{base}/screenshots/{img.img}"
              alt={img.title} />
            <figcaption class="border-t p-2 text-center">{img.title}</figcaption>
          </figure>
        </button>
      </li>
    {/each}
  </ul>
</div>

<style>
  .modal-box {
    min-height: calc(100vh - 5em);
  }
  .modal-img {
    max-height: calc(100vh - 12em);
  }
  :root {
    --img-m-h: 50vh;
    --img-m-w: 76vw;
  }
  .thumb {
    max-height: var(--img-m-h);
    max-width: var(--img-m-w);
  }
  .thumb-img {
    max-height: calc(var(--img-m-h) - 3.5rem);
    max-width: calc(var(--img-m-w) - 1.5rem);
  }
  @media (min-width: 640px) {
    :root {
      --img-m-w: 65vw;
    }
  }
  @media (min-width: 768px) {
    :root {
      --img-m-w: 55vw;
    }
  }
  @media (min-width: 1024px) {
    :root {
      --img-m-w: 45vw;
    }
  }
  @media (min-width: 1280px) {
    :root {
      --img-m-w: 35vw;
    }
  }
  @media (min-width: 1536px) {
    :root {
      --img-m-w: 25vw;
    }
  }
</style>
