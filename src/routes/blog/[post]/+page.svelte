<script lang="ts">
	export let data;
</script>

<style>
:global(.blog-content a) {
	@apply text-sky-400 font-bold px-1 rounded-none transition-colors duration-150 hover:bg-sky-500 hover:text-zinc-900;
}

:global(.blog-content h1) {
	@apply text-xl text-sky-300 font-bold text-center md:text-left;
}

:global(.blog-content h2),
:global(.blog-content h3) {
	@apply text-lg text-sky-300 font-semibold mt-6;
}

:global(.blog-content ul) {
	@apply list-disc list-inside my-4;
}

:global(.blog-content ol) {
	@apply list-decimal list-inside my-4;
}

:global(.blog-content) {
  font-family: 'Departure Mono', monospace;
}
</style>

<div class="md:container md:mx-auto mx-auto pt-8 gap-4 mb-4 px-4">
  <h1 class="text-3xl mb-2 text-slate-200">{data.metadata.title}</h1>
  <h2 class="font-semibold inline-block whitespace-nowrap bg-sky-500 text-slate-100 text-2xl px-1">
  {(() => {
    const d = new Date(data.metadata.date);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${mm}-${dd}-${yyyy}`;
  })()}</h2>

  <div class="md:container container blog-content prose font-[Departure Mono] mt-4 text-slate-300 space-y-4 mb-4">
    <svelte:component this={data.content} />
  </div>

  <a class="text-sky-400 font-bold px-1 rounded-none transition-colors duration-150 hover:bg-sky-500 hover:text-zinc-900" href={"/"}>← Go back home</a>
</div>