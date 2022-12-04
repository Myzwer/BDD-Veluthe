<template>
	<div>
		<div class="relative">
			<div class="index-h1-background">
				<div class="content-middle text-white text-center">
					<h1 class="text-7xl mb-2 px-2">Josh + Katie</h1>
					<h2 class="text-xl font-bold uppercase body-font">#forresterfairytale</h2>
				</div>
			</div>
		</div>

		<div class="bg-tertiary py-10">
			<div class="text-center mx-auto md:max-w-2xl">
				<h2 class="body-font text-xl font-bold pb-1">Save The Date</h2>
				<h1 class="body-font text-3xl uppercase">November 18th, 2023</h1>

				<div class="grid grid-cols-12 gap-4 pt-10 pb-12">
					<div class="col-span-6 md:col-span-3">
						<p class="font-bold text-6xl body-font">{{ daysRemaining[0] }}</p>
						<p class="font-bold text-2xl "> Days</p>
					</div>

					<div class="col-span-6 md:col-span-3">
						<p class="font-bold text-6xl body-font">{{ daysRemaining[1] }}</p>
						<p class="font-bold text-2xl "> Hours</p>
					</div>
					<div class="col-span-6 md:col-span-3">
						<p class="font-bold text-6xl body-font">{{ daysRemaining[2] }}</p>
						<p class="font-bold text-2xl "> Minutes</p>
					</div>
					<div class="col-span-6 md:col-span-3">
						<p class="font-bold text-6xl body-font">{{ daysRemaining[3] }}</p>
						<p class="font-bold text-2xl "> Seconds</p>
					</div>

				</div>
			</div>
			<div class="text-center mb-10">
				<a href="#"
				   class="bg-primary text-white uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-purple-hover mt-10">
					RSVP!
				</a>
			</div>
		</div>

		<div class="bg-secondary-alt">
			<div class="text-center mx-auto max-w-2xl md:max-w-5xl">
				<div class="grid grid-cols-12 gap-4 pt-10 pb-12">
					<div class="col-span-12 md:col-span-6 px-5">
						<div class="text-center mx-auto max-w-sm md:max-w-xs px-5">
							<img class = "rounded-xl shadow-lg" src="/images/index/josh-headshot.jpg" alt="">
						</div>

						<div class="mb-10">
						<h2 class = "pt-7 text-5xl text-white">About Josh</h2>
						<p class = "text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed nulla id id varius....</p>
						</div>

						<div class="text-center mb-10">
							<a href="#"
							   class="text-white uppercase rounded-md font-bold border-white border-2 text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-purple-hover mt-10">
								Read More
							</a>
						</div>
					</div>

					<div class="col-span-12 md:col-span-6 px-5">
						<div class="text-center mx-auto max-w-sm md:max-w-xs px-5">
							<img class = "rounded-xl shadow-lg" src="/images/index/katie-headshot.jpg" alt="">
						</div>

						<div class="mb-10">
							<h2 class = "pt-7 text-5xl text-white">About Katie</h2>
							<p class = "text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed nulla id id varius....</p>
						</div>

						<div class="text-center mb-10">
							<a href="#"
							   class="text-white uppercase rounded-md font-bold border-white border-2 text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-purple-hover mt-10">
								Read More
							</a>
						</div>
					</div>


				</div>
			</div>
		</div>

	</div>
</template>

<script>

export default {
	name: 'IndexPage',
	computed: {
		daysRemaining() {
			const weddingDate = new Date("Nov 18, 2023 17:00:00").getTime();
			const now = new Date().getTime();
			const distance = weddingDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			return [days, hours, minutes, seconds];
		}
	},
}
</script>

<style>
/* stylelint-disable color-function-notation */
.index-h1-background {
	background: linear-gradient(
		rgba(0, 0, 0, 70%),
		rgba(0, 0, 0, 70%)
	), url("~static/images/index/index-head-bg.jpg");
	height: 60vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}

/* stylelint-enable color-function-notation */
</style>
