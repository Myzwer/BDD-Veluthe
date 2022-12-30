<template>
    <div>
        <div class="pb-5">
            <h4 class="font-bold text-2xl">{{ time }}</h4>
            <p class="text-lg">{{ event }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScheduleList',
    props: {
        time: {
            type: String,
            required: true,
        },
        event: {
            type: String,
            required: true,
        },
    },
}
</script>
