<template>
    <div class="col-span-12 md:col-span-4 text-left text-black">
        <h3 class="body-font text-2xl font-bold pb-3">
            {{ store }}
        </h3>
        <h4 class="text-lg">{{ item1 }}</h4>
        <h4 class="text-lg">{{ item2 }}</h4>
        <h4 class="text-lg">{{ item3 }}</h4>

        <div class="py-5">
            <a
                :href="link"
                target="_blank"
                class="bg-accent text-white uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
            >
                View Website
                <font-awesome-icon
                    icon="fa-solid fa-arrow-up-right-from-square"
                />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegistryLinks',
    props: {
        store: {
            type: String,
            required: true,
        },
        item1: {
            type: String,
            required: true,
        },
        item2: {
            type: String,
            default: null,
            required: false,
        },
        item3: {
            type: String,
            default: null,
            required: false,
        },
        link: {
            type: String,
            required: true,
        },
    },
}
</script>
