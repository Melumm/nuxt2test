<!-- pages/profile.vue -->
<template>
    <main class="m-auto py-20" style="width: 700px">
       
        <!-- if the user is signed in, show them their profile -->
        <div v-if="authenticated">
            <h2 class="text-xl">Hello, {{ profile.email }}</h2>
            <p class="text-gray-400 my-3">User ID: {{ profile.id }}</p>
            <button @click="signOut" class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold">Sign Out</button>
        </div>
        <div v-else>
            <h1 class="text-xl text-center">Please check your email to sign in</h1>
        </div>
    </main>
</template>
<script>
export default {
   
    data: () => ({
        profile: null,
        submitted: false,
        email: ''
    }),
    methods: {
        
    },
    async mounted() {
        /* when the component loads, fetch the user's profile */
        const profile = await this.$supabase.auth.user()
        this.profile = profile
    }
}
</script>