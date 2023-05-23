<script>

export default{
    layout: "empty",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async signIn(){
    const { data, error } = await this.$supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password
      })
      this.$router.push('/home');
      console.log(data, error)
  },

          
    
  }}
</script>

<template>
  <div>
    <main class="m-auto py-20" style="width: 700px">
    <form @submit.prevent="signIn">
      <div class="flex flex-col">
            <h2 class="text-2xl">Sign In </h2>
            <input v-model="email" type="email" placeholder="Email" class="border py-2 px-4 rounded mt-4" />
            <input v-model="password" type="password" placeholder="Password" class="border py-2 px-4 rounded mt-4" />
            <button class="mt-4 py-4 px-20 w-full bg-red-500 text-white font-bold"><i class="material-icons mr-2">email</i>Sign in with Google</button>
            <button class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold"><i class="material-icons mr-2">facebook</i>Sign in with Facebook</button>
            <button type="submit" class="mt-4 py-4 px-20 w-full bg-gray-500 text-white font-bold">Sign In</button>
            <NuxtLink to="/">Don't have an account? Sign In</NuxtLink>
        </div>
      </form>
    </main>
      
      
  
    
      
      
          
    </div>
</template>

