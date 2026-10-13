<script lang="ts">
  import { onMount } from "svelte";
  import { page } from '$app/stores';

  function copyToClipboard(e: Event) {
    e.preventDefault()
    navigator.clipboard.writeText('minota')
      .catch(err => {
        console.error(err)
      })
  }

  const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  let konamiIndex = 0;


  onMount(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          const img = document.querySelector('img[alt="minota\'s face"]');
          if (img) img.src = "/mino toss.gif";
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    });
  });

  const metas = import.meta.glob('../posts/*.md', {
    eager: true,
    import: 'metadata'
  }) as Record<string, { title: string; date: string; hidden?: boolean } | undefined>;

  const posts = Object.entries(metas)
    .filter(([, meta]) => meta !== undefined)
    .map(([path, meta]) => ({
      title: meta!.title,
      date: meta!.date,
      slug: path.split('/').pop()?.replace('.md', '') ?? '',
      hidden: meta!.hidden ?? false,
      category: meta!.category ?? 'Miscellaneous'
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log(Object.keys(metas).filter((p) => !metas[p]));
</script>

<div class="md:container md:mx-auto flex mx-auto flex-col pl-4 pt-8 gap-4 mb-4">
  <div class="flex flex-row items-center gap-6 mb-2">
    <img alt="minota's face" title="Quite classy looking." class="rounded h-32 w-32 md:h-40 md:w-40 object-cover" src="/me.jpg" />
    <div class="flex flex-col justify-center">
        <div class="flex flex-row gap-3">
          <h1 class="text-2xl md:text-3xl text-slate-200 font-bold"><strong class="text-brand">minota</strong></h1>
          <h2 class="text-lg text-slate-500 mt-1">he/him</h2>
        </div>
        <div class="flex flex-wrap gap-2 mt-3 mb-2 text-center md:text-left">
          {#each [
              { text: "YouTube", href: "https://www.youtube.com/@xminota" },
              { text: "Discord", href: "https://discord.gg/8WAPWCFu8m" },
              { text: "GitHub", href: "https://github.com/minotaa" },
              { text: "Bluesky", href: "https://bsky.app/profile/minota.cc" },
              { text: "Ko-fi", href: "https://ko-fi.com/minota" },
              { text: "Email", href: "mailto:me@minota.cc" }
            ] as link, i}
            <span class="inline-block align-middle mx-1 -ml-1">
              {#if i > 0}
                <span class="text-slate-600 select-none font-bold text-lg align-middle">•</span>
              {/if}
              <a
                class="text-slate-200 font-bold px-1 rounded-none hover:bg-brand hover:text-zinc-900"
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                href={link.href}
                style="border-radius: 0;"
              >{link.text}</a>
            </span>
          {/each}
        </div>
          </div>
  </div>
  <h1 class="text-xl text-brand-alt font-bold text-left">Projects</h1>
  <ul class="flex flex-col gap-0 md:gap-1 md:place-self-start place-self-center list-none p-0 m-0 w-full">
    {#each [
      {
        title: "Beachside Tactics (2026)",
        btns: [
          { text: "Alpha Demo", href: "https://minota.itch.io/beachside-tactics" }
        ]
      },
      {
        title: "Showdown Events (2026)",
        btns: [
          { text: "Website", href: "https://showdown.events" },
          { text: "Discord Server", href: "https://discord.com/invite/2ue62Fz3X6" },
        ]
      },
      {
        title: "Raimu (Hytale Server) (2026)",
        btns: [
          { text: "Website", href: "https://limetta.dev" }
        ]
      },
      {
        title: "Myrkwood: Offshoot (2025)",
        btns: [
          { text: "App Store", href: "https://apps.apple.com/us/app/myrkwood-offshoot/id6757414836" }, 
          { text: "itch.io", href: "https://minota.itch.io/myrkwood-offshoot" },
          { text: "Steam", href: "https://store.steampowered.com/app/3951230/Myrkwood_Offshoot/" },
          { text: "Source Code", href: "https://github.com/minotaa/coloma-co" }          
        ]
      },
      {
        title: "Bulletlane (2025)",
        btns: [
          { text: "Play Store", href: "https://play.google.com/store/apps/details?id=cc.minota.road" },
          { text: "App Store", href: "https://apps.apple.com/us/app/bulletlane/id6743356289" },
          { text: "Source Code", href: "https://github.com/minotaa/road-riot" }
        ]
      },
      {
        title: "Myrkwood (2024-2025)",
        btns: [
          { text: "App Store", href: "https://apps.apple.com/us/app/myrkwood/id6738539616" },
          { text: "Source Code", href: "https://github.com/minotaa/myrkwood" }
        ]
      },
      {
        title: "Beachside Classic (formerly Beachside Tactics) (2024)",
        btns: [
          { text: "App Store", href: "https://apps.apple.com/us/app/beachside-tactics/id6596775495?itscg=30200&itsct=apps_box_badge&mttnsubad=6596775495" },
          { text: "Source Code", href: "https://github.com/minotaa/rhode-island" }
        ]
      },
      {
        title: "ultrahardcore.org (2022-2024)",
        btns: [
          { text: "Source Code", href: "https://github.com/minotaa/ultrahardcore.org" }
        ]
      },
      {
        title: "piglin.club (2023)",
        btns: [
          { text: "Source Code", href: "https://github.com/PiglinClub/Brimstone" }
        ]
      },
      {
        title: "wushi (2019-2021)",
        btns: [
          { text: "Source Code", href: "https://github.com/wushi-bot/wushi" }
        ]
      },
      {
        title: "Xestra UHC, Notzo UHC, applejuice (2018-2024)",
        btns: [
          { text: "Source Code", href: "https://github.com/applejuice-server/Kraftwerk" }
        ]
      }
    ] as project}
      <li class="flex flex-col md:flex-row md:items-center mb-3 md:mb-1 w-full text-slate-300">
        <span class="font-semibold">
          {project.title}
          <span class="hidden md:inline long-arrow"></span>
        </span>
        <span class="flex flex-row gap-2 md:gap-4 md:mt-0 md:ml-2">
          {#each project.btns as btn}
            <a
              title={btn.text}
              href={btn.href}
              target="_blank"
              class="text-brand underline hover:no-underline font-bold px-1 rounded-none hover:bg-brand-alt hover:text-zinc-900"
            >{btn.text}</a>
          {/each}
        </span>
      </li>
    {/each}
  </ul>

  <h1 class="text-xl text-brand-alt font-bold text-left mt-2">Posts</h1>
  <ul class="flex flex-col gap-1 md:place-self-start place-self-center list-none p-0 m-0 w-full">
    {#each posts as post}
      {#if !post.hidden}
        <li class="flex items-center mb-1 w-full text-slate-300">
          <span class="font-semibold whitespace-nowrap bg-brand text-zinc-900 px-1">
            {(() => {
              const d = new Date(post.date);
              const mm = String(d.getMonth() + 1).padStart(2, '0');
              const dd = String(d.getDate() + 1).padStart(2, '0');
              const yyyy = d.getFullYear();
              return `${mm}-${dd}-${yyyy}`;
            })()}</span><p>&nbsp;</p><a class="font-bold hover:text-zinc-900 px-1 hover:bg-brand" href={"/blog/" + encodeURIComponent(post.slug)}>{post.title}</a>
        </li>
      {/if}
    {/each}
  </ul>
</div>
