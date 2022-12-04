<template>
	<div>
		<div class="relative">
			<div class="couple-h1-background">
				<div class="content-middle text-white text-center">
					<h1 class="text-7xl mb-2 px-2">About Us</h1>
					<h2 class="text-xl font-bold uppercase body-font">#forresterfairytale</h2>
				</div>
			</div>
		</div>

		<div class="bg-secondary-alt">
			<div class="text-center mx-auto max-w-2xl md:max-w-5xl">
				<div class="grid grid-cols-12 gap-4 pt-10 pb-12">
					<div class="col-span-12 md:col-span-5 px-5">
						<div class="mt-10 px-5">
							<img class="rounded-xl shadow-lg" src="/images/couple/couple-body.jpg" alt="">
						</div>
					</div>

					<div class="col-span-12 md:col-span-7 px-5">
						<h2 class="pt-7 text-5xl text-white text-left">Meet Josh + Katie</h2>
						<p class="text-white text-left pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							ac turpis ac magna tristique imperdiet. Fusce ut magna a sapien semper ullamcorper dictum
							sit amet libero. Nam fermentum vestibulum ipsum, vitae maximus nisl efficitur eu. Sed
							tincidunt augue ut cursus pulvinar. Morbi semper porta eros eget hendrerit. Etiam ultricies
							ligula in aliquet accumsan. Aenean imperdiet lectus ante, vitae porta augue accumsan ac. Nam
							varius vestibulum turpis id condimentum. Proin scelerisque molestie purus, porta sagittis
							eros ullamcorper eget. Curabitur ut malesuada urna.</p>

						<p class="text-white text-left pb-5">Duis pharetra facilisis faucibus. Donec ultricies felis vel
							malesuada interdum. Duis ut fermentum lacus. Etiam egestas neque in lorem scelerisque,
							pulvinar sagittis erat porttitor. Nulla facilisi. Suspendisse potenti. Proin dapibus, justo
							at vestibulum vehicula, turpis odio malesuada justo, in laoreet neque magna vitae lacus.
							Aenean sit amet lobortis diam. Fusce augue lectus, cursus quis massa ut, condimentum cursus
							nulla. Maecenas luctus ante ornare tortor dictum aliquet. Aliquam imperdiet libero nec purus
							pharetra, at pellentesque est sollicitudin. Vivamus at diam eu dolor molestie tempus. In eu
							congue risus. Cras quis placerat tellus. Fusce sit amet tellus risus.</p>

					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MeetCouple"
}
</script>

<style>
/* stylelint-disable color-function-notation */
.couple-h1-background {
	background: linear-gradient(
		rgba(0, 0, 0, 40%),
		rgba(0, 0, 0, 40%)
	), url("~static/images/couple/couple-head-bg.jpg");
	height: 60vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

/* stylelint-enable color-function-notation */
</style>
