deno install --allow-read --allow-run --allow-write --allow-net --unstable https://deno.land/x/denon@2.3.2/denon.ts
export PATH="/root/.deno/bin:$PATH"
denon run --allow-net ./main.js
