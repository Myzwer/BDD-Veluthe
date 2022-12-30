<template>
    <div>
        <div class="relative">
            <div class="schedule-h1-background">
                <div class="content-middle text-white text-center">
                    <h1 class="text-7xl mb-2 px-2">Schedule</h1>
                    <h2 class="text-xl font-bold uppercase body-font">
                        {{ hashtag }}
                    </h2>
                </div>
            </div>
        </div>

        <div class="bg-tertiary">
            <div class="text-center mx-auto max-w-2xl md:max-w-5xl">
                <div class="grid grid-cols-12 gap-4 md:gap-10 pt-10 pb-12">
                    <div class="col-span-12 md:col-span-6 text-left px-5">
                        <img
                            src="~static/images/schedule/schedule-side.jpg"
                            alt="Schedule Side"
                            class="shadow-lg rounded-lg"
                        />
                    </div>
                    <div class="col-span-12 md:col-span-6 text-left px-5">
                        <h2 class="text-5xl pb-5">Schedule</h2>
                        <ScheduleList
                            v-for="schedule in schedules"
                            :key="schedule.time"
                            :time="schedule.time"
                            :event="schedule.event"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ScheduleList from '~/components/ScheduleList'
import { schedules, tagline } from '~/data/data.json'
export default {
    name: 'EventSchedule',
    components: { ScheduleList },
    data() {
        return {
            schedules,
            hashtag: tagline.hashtag,
        }
    },
}
</script>

<style>
/* stylelint-disable color-function-notation */
.schedule-h1-background {
    background: linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 60%)),
        url('~static/images/schedule/schedule-head.jpg');
    height: 60vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* stylelint-enable color-function-notation */
</style>
