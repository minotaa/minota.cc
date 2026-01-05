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

  const postFiles = import.meta.glob('../posts/*.md');
  let posts: { title: string, date: string, slug: string, hidden: boolean }[] = [];

  onMount(async () => {
    const loadedPosts = await Promise.all(
      Object.entries(postFiles).map(async ([path, resolver]) => {
        const post = await resolver();
        return {
          title: post.metadata.title,
          date: post.metadata.date,
          slug: path.split('/').pop()?.replace('.md', '') ?? '',
          hidden: post.metadata.hidden ?? false
        };
      })
    );

    posts = loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    console.log(posts)
  });
</script>

<div class="md:container md:mx-auto flex mx-auto flex-col pl-4 pt-8 gap-4 mb-4">
  <div class="flex flex-row items-center gap-6 mb-2">
    <img alt="minota's face" title="Quite classy looking." class="rounded h-32 w-32 md:h-40 md:w-40 object-cover" src="/me.jpg" />
    <div class="flex flex-col justify-center">
      <h1 class="text-2xl md:text-3xl text-slate-200 font-bold"><strong class="text-sky-300">minota</strong></h1>
      <h2 class="text-lg text-slate-500">he/him</h2>
        <div class="flex flex-wrap gap-2 mt-3 mb-2 text-center md:text-left">
          {#each [
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
                class="text-slate-200 font-bold px-1 rounded-none transition-colors duration-150 hover:bg-sky-400 hover:text-zinc-900"
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                href={link.href}
                style="border-radius: 0;"
              >{link.text}</a>
            </span>
          {/each}
        </div>
          </div>
  </div>
  <h1 class="text-xl text-sky-300 font-bold text-left">Projects</h1>
  <ul class="flex flex-col gap-0 md:gap-1 md:place-self-start place-self-center list-none p-0 m-0 w-full">
    {#each [
      {
        title: "Myrkwood: Offshoot (2025)",
        btns: [
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
        title: "Beachside Tactics (2024)",
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
          <span class="hidden md:inline">..........</span>
        </span>
        <span class="flex flex-row gap-2 md:gap-4 md:mt-0 md:ml-2">
          {#each project.btns as btn}
            <a
              title={btn.text}
              href={btn.href}
              target="_blank"
              class="text-sky-400 font-bold px-1 rounded-none transition-colors duration-150 hover:bg-sky-500 hover:text-zinc-900"
            >{btn.text}</a>
          {/each}
        </span>
      </li>
    {/each}
  </ul>

  <h1 class="text-xl text-sky-300 font-bold text-left mt-2">Posts</h1>
  <ul class="flex flex-col gap-1 md:place-self-start place-self-center list-none p-0 m-0 w-full">
    {#each posts as post}
      {#if !post.hidden}
        <li class="flex items-center mb-1 w-full text-slate-300">
          <span class="font-semibold whitespace-nowrap bg-sky-500 text-zinc-900 px-1">
            {(() => {
              const d = new Date(post.date);
              const mm = String(d.getMonth() + 1).padStart(2, '0');
              const dd = String(d.getDate() + 1).padStart(2, '0');
              const yyyy = d.getFullYear();
              return `${mm}-${dd}-${yyyy}`;
            })()}</span><p>&nbsp;</p><a class="hover:text-zinc-900 px-1 hover:bg-sky-500" href={"/blog/" + encodeURIComponent(post.slug)}>{post.title}</a>
        </li>
      {/if}
    {/each}
  </ul>
</div>
