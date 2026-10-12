<script lang="ts">
	export let data;
</script>

<style lang="postcss">
@reference "tailwindcss";

@theme {
  --color-brand: oklch(0.7684 0.1204 254.42);
  --color-brand-alt: oklch(0.6795 0.1204 254.42);
}

:global(.blog-content a) {
	@apply text-brand font-bold px-1 rounded-none transition-colors duration-150 hover:bg-brand hover:text-slate-100;
}

:global(.blog-content h1) {
	@apply text-xl text-brand-alt font-bold text-center md:text-left;
}

:global(.blog-content h2),
:global(.blog-content h3) {
	@apply text-lg text-brand-alt font-semibold mt-6;
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
<svelte:head>
  <title>{data.metadata.title} - minota's blog</title>
  <meta name="description" content={data.metadata.description || data.metadata.title} />
  <meta property="og:title" content={data.metadata.title} />
  <meta property="og:description" content={data.metadata.description || data.metadata.title} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={data.metadata.title} />
  <meta name="twitter:description" content={data.metadata.description || data.metadata.title} />
</svelte:head>

<div class="md:container md:mx-auto mx-auto pt-8 gap-4 mb-4 px-4">
  <div class="flex flex-row items-center gap-4 mb-8">
    <img alt="minota's making an announcement" title="I have an announcement to make." class="rounded-lg h-16 w-16 object-cover" src="/announcement.jpg" />
    <a class="text-3xl font-bold text-brand font-bold px-1 rounded-none transition-colors duration-150 hover:bg-brand-alt hover:text-slate-100" href={"/"}>minota's blog</a>
  </div>
  <h1 class="text-3xl mb-2 text-slate-200">{data.metadata.title}</h1>
  <h2 class="font-semibold inline-block whitespace-nowrap bg-brand-alt text-slate-100 text-2xl px-1">
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

  <a class="text-brand-alt font-bold font-bold text-brand font-bold px-1 rounded-none transition-colors duration-150 hover:bg-brand-alt hover:text-slate-100" href={"/"}>← Go back home</a>
</div>