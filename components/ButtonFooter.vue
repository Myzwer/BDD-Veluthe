<template>
<div>
	<div class="bg-secondary-alt">
		<div class="text-center mx-auto max-w-2xl md:max-w-6xl pt-10 pb-20">
			<div class="grid grid-cols-12 gap-4">

				<div class="col-span-12 text-center mx-auto">
					<h3 class="pb-5 text-5xl text-left text-white">View More {{ currentPath }}</h3>
				</div>


			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: "ButtonFooter",

	computed: {
		currentPath() {
			return this.$nuxt.$route.name
		},

	}
}
</script>
