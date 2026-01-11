<script lang="ts" setup>
	definePageMeta({
		layout: 'docs',
	});
</script>

<template>
	<UPageBody>
		<UPageGrid>
			<UPageCard
				v-for="i in 10"
				:key="i"
				title="Introducing Nuxt Icon v1"
				description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects."
				to="/docs/:id"
				:ui="{
					root: 'overflow-hidden group ring-muted',
					header: 'mb-0',
					container: 'p-0 lg:p-0',
					body: 'p-4',
					title: 'text-[15px] font-medium',
					description: 'line-clamp-2 mt-0.5',
				}"
			>
				<template #header>
					<div
						class="rounded-md rounded-b-none border border-muted overflow-hidden aspect-[16/9] -m-px"
					>
						<UColorModeImage
							light="https://nuxt.com/assets/blog/nuxt-icon/cover.png"
							dark="https://nuxt.com/assets/blog/nuxt-icon/cover.png"
							class="group-hover:scale-105 transition-transform size-full"
							:loading="i >= 4 ? 'lazy' : 'eager'"
							width="640"
							height="360"
						/>
					</div>
				</template>
			</UPageCard>
		</UPageGrid>
	</UPageBody>
</template>
