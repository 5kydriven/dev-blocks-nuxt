<script setup lang="ts">
	import { ref, computed } from 'vue';

	const items = [
		{ key: 'npm', label: 'npm', command: 'npm run dev' },
		{ key: 'yarn', label: 'yarn', command: 'yarn dev' },
		{ key: 'pnpm', label: 'pnpm', command: 'pnpm dev' },
		{ key: 'bun', label: 'bun', command: 'bun run dev' },
		{ key: 'deno', label: 'deno', command: 'deno run dev -o' },
	];

	const active = ref('deno');

	const currentCommand = computed(
		() => items.find((i) => i.key === active.value)?.command ?? '',
	);

	const copy = async () => {
		await navigator.clipboard.writeText(currentCommand.value);
	};
</script>

<template>
	<div class="rounded-lg border bg-muted">
		<!-- Tabs -->
		<UTabs
			v-model="active"
			:items="items"
			class="border-b"
		/>

		<!-- Code block -->
		<div class="relative p-4">
			<UButton
				icon="i-heroicons-clipboard"
				size="xs"
				variant="ghost"
				class="absolute right-2 top-2"
				@click="copy"
			/>

			<pre class="text-sm overflow-x-auto">
        <code class="language-bash">
          {{ currentCommand }}
        </code>
      </pre>
		</div>
	</div>
</template>
