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
	@apply text-brand font-bold px-1 rounded-none hover:bg-brand hover:text-slate-100;
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
  font-family: 'PT Mono', monospace;
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

<div class="md:container md:mx-auto mx-auto min-h-screen pt-8 gap-4 mb-4 px-4 flex flex-col">
  <div class="flex-1">
    <div class="flex flex-row items-center gap-4 mb-8">
      <img alt="minota's making an announcement" title="I have an announcement to make." class="rounded-lg h-16 w-16 object-cover" src="/announcement.jpg" />
      <a class="text-3xl font-bold text-brand font-bold px-1 rounded-none hover:bg-brand-alt hover:text-slate-100" href={"/"}>minota's blog</a>
    </div>
    <div class="flex flex-col sm:flex-row gap-1 sm:gap-4">
      <h1 class="text-3xl mb-2 text-slate-200 font-bold">{data.metadata.title}</h1>
      <h2 class="font-semibold inline-block whitespace-nowrap bg-brand text-slate-100 text-2xl px-1 mt-1 mb-4 w-fit">
      {(() => {
        const d = new Date(data.metadata.date);
        const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
        const dd = String(d.getUTCDate()).padStart(2, '0');
        const yyyy = d.getUTCFullYear();
        return `${mm}-${dd}-${yyyy}`;
      })()}</h2>
    </div>

    <div class="md:container container blog-content prose font-medium font-[PT Mono] mt-4 text-slate-300 space-y-4 mb-4 sm:px-4">
      <svelte:component this={data.content} />
    </div>
  </div>

  <footer class="mt-auto py-4 flex flex-col">
    <a class="text-brand-alt font-bold font-bold text-brand font-bold px-1 rounded-none hover:bg-brand-alt hover:text-slate-100 w-fit" href={"/"}>← Go back home</a>
  </footer>
</div>