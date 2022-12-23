<template>
    <div class="grid grid-cols-12 gap-4 pt-10 pb-12">
        <div class="col-span-6 md:col-span-3">
            <p class="font-bold text-6xl body-font">{{ days }}</p>
            <p class="font-bold text-2xl">Days</p>
        </div>

        <div class="col-span-6 md:col-span-3">
            <p class="font-bold text-6xl body-font">{{ hours }}</p>
            <p class="font-bold text-2xl">Hours</p>
        </div>
        <div class="col-span-6 md:col-span-3">
            <p class="font-bold text-6xl body-font">{{ minutes }}</p>
            <p class="font-bold text-2xl">Minutes</p>
        </div>
        <div class="col-span-6 md:col-span-3">
            <p class="font-bold text-6xl body-font">{{ seconds }}</p>
            <p class="font-bold text-2xl">Seconds</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CountdownToDate',
    data() {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    },
    methods: {
        // Update the DATE here
        daysRemaining() {
            const weddingDate = new Date('Nov 18, 2023 17:00:00').getTime()
            const now = new Date().getTime()
            const distance = weddingDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            )
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            return [days, hours, minutes, seconds]
        },

        updateTime() {
            const [days, hours, minutes, seconds] = this.daysRemaining()
            this.days = days
            this.hours = hours
            this.minutes = minutes
            this.seconds = seconds
        },
    },

    // Ignore this error, it has to be after or the code won't work.
    mounted() {
        this.updateTime() // run once on mount
        setInterval(this.updateTime, 1000) // run every second
    },
}
</script>
