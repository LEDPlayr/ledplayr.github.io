<h2>How to build</h2>
<p>
  LEDPlayr uses Rust for the backend and Svelte/Typescript for the frontend. Both apps are
  included in this repo and can be built as follows. Ensure that you have up to date Rust and
  Typescript toolchains available to continue.
</p>

<pre>
cd web
pnpm install
pnpm run build
cd ..
cargo build</pre>

<p>
  The Rust build bundles the built web app into a single binary so it is essential to build the
  web interface ahead of time.
</p>

<h2>Development</h2>
When developing it is possible to use the vite proxy and two sessions.

<pre>
# Terminal 1
CONFIG=config.toml cargo run --bin ledplayr</pre>

<pre>
# Terminal 2
cd web
PROXY=http://127.0.0.1:3000 pnpm run dev</pre>

<h2>OpenAPI</h2>
<p>
  The rust application is capable of generating an openapi.json file which can then be used by
  Typescript to generate a client for the frontend. If you update any of the axum endpoints then
  it is essential to rebuild the OpenAPI client.
</p>

<pre>
cargo run --bin gen_openapi
cd web
pnpm run openapi
cd ..</pre>
