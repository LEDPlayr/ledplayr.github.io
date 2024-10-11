<script lang="ts">
  import { route } from "$lib/ROUTES";

  interface Props {
    class: string;
  }
  let { class: cls }: Props = $props();
</script>

<ul class={cls}>
  <li><a href={route("/")}>Home</a></li>
  <li><a href={route("/about")}>About</a></li>
  <li><a href={route("/getting_started")}>Getting Started</a></li>
  <li><a href={route("/roadmap")}>Roadmap</a></li>
  <li><a href={route("/developers")}>Developers</a></li>
  <li><a href={route("/screenshots")}>Screenshots</a></li>
</ul>
