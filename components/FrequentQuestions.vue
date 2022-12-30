<template>
    <div class="col-span-12 px-5 text-left">
        <div class="pb-3">
            <h4 class="font-bold text-xl">
                {{ question }}
            </h4>
            <p class="text-md">{{ answer }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrequentQuestions',
    props: {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
    },
}
</script>
