<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryCollection("content").first()
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description,
});
</script>

<template>
  <div class="flex flex-col gap-28">
    <section class="pt-24 text-center max-w-5xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
        Build Faster with <span class="text-primary">DevBlocks</span>
      </h1>

      <p class="mt-6 text-lg text-muted max-w-3xl mx-auto">
        Reusable UI blocks and layouts for every JavaScript framework. Copy,
        paste, and ship beautiful interfaces in minutes.
      </p>

      <div class="mt-10 flex justify-center gap-4">
        <UButton size="xl" trailing-icon="i-lucide-arrow-right">
          Explore Blocks
        </UButton>

        <UButton size="xl" variant="outline" icon="i-simple-icons-github">
          GitHub
        </UButton>
      </div>
    </section>

    <section class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-3xl font-semibold">
          <span class="text-primary">Design once</span>, reuse everywhere
        </h2>

        <p class="mt-4 text-muted">
          DevBlocks helps you skip repetitive UI work by providing reusable,
          framework-friendly blocks and layouts built for real-world projects.
        </p>

        <ul class="mt-8 space-y-6">
          <li class="border-l-2 border-primary pl-4">
            <h3 class="font-medium">Copy-paste ready</h3>
            <p class="text-sm text-muted">
              Drop components directly into your project with zero setup.
            </p>
          </li>

          <li class="border-l-2 border-default pl-4">
            <h3 class="font-medium">Layouts that scale</h3>
            <p class="text-sm text-muted">
              From landing pages to dashboards, blocks adapt to your needs.
            </p>
          </li>

          <li class="border-l-2 border-default pl-4">
            <h3 class="font-medium">Developer-first design</h3>
            <p class="text-sm text-muted">
              Clean structure, readable markup, and easy customization.
            </p>
          </li>
        </ul>
      </div>

      <div
        class="h-80 rounded-xl border bg-muted/30 flex items-center justify-center"
      >
        <span class="text-muted text-sm">UI Preview</span>
      </div>
    </section>

    <section class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-semibold">
        Built for <span class="text-primary">modern developers</span>
      </h2>

      <p class="mt-4 text-muted max-w-2xl mx-auto">
        Everything you need to build interfaces faster without sacrificing
        quality.
      </p>

      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="item in [
            {
              title: 'Reusable UI Blocks',
              desc: 'Buttons, cards, navbars, forms, and more.',
              icon: 'i-lucide-box',
            },
            {
              title: 'Full Page Layouts',
              desc: 'Ready-made sections and complete layouts.',
              icon: 'i-lucide-layout-template',
            },
            {
              title: 'Framework Friendly',
              desc: 'Designed to work smoothly across JS frameworks.',
              icon: 'i-lucide-code',
            },
            {
              title: 'Responsive by Default',
              desc: 'Mobile-first and fully responsive layouts.',
              icon: 'i-lucide-smartphone',
            },
            {
              title: 'Easy Customization',
              desc: 'Minimal styling that’s easy to extend.',
              icon: 'i-lucide-sliders',
            },
            {
              title: 'Fast Prototyping',
              desc: 'Turn ideas into UI in minutes.',
              icon: 'i-lucide-zap',
            },
          ]"
          :key="item.title"
        >
          <template #header>
            <UIcon :name="item.icon" />
          </template>

          <h3 class="font-medium">{{ item.title }}</h3>
          <p class="text-sm text-muted">{{ item.desc }}</p>
        </UCard>
      </div>
    </section>

    <section class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-semibold">
        Build interfaces in <span class="text-primary">3 steps</span>
      </h2>

      <p class="mt-4 text-muted">Go from idea to UI without friction.</p>

      <div class="mt-12 grid md:grid-cols-3 gap-8">
        <UCard>
          <h3 class="font-medium">Browse</h3>
          <p class="text-sm text-muted">Explore UI blocks and layouts.</p>
        </UCard>

        <UCard>
          <h3 class="font-medium">Copy</h3>
          <p class="text-sm text-muted">
            Copy the code and paste it into your project.
          </p>
        </UCard>

        <UCard>
          <h3 class="font-medium">Ship</h3>
          <p class="text-sm text-muted">Customize and ship faster than ever.</p>
        </UCard>
      </div>
    </section>

    <section class="pb-24 text-center max-w-4xl mx-auto">
      <h2 class="text-3xl font-semibold">
        Start building with <span class="text-primary">DevBlocks</span>
      </h2>

      <p class="mt-4 text-muted">Reuse UI. Move faster. Build better.</p>

      <div class="mt-8 flex justify-center gap-4">
        <UButton size="lg" trailing-icon="i-lucide-arrow-right">
          Browse Blocks
        </UButton>

        <UButton size="lg" variant="subtle" icon="i-simple-icons-github">
          GitHub
        </UButton>
      </div>
    </section>
  </div>
</template>
