<template>
  <form @submit.prevent="handleLogin">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />

    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />

    <button type="submit">Login</button>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script lang="ts">



export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email.trim(),
            password: this.password.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error("Invalid email or password");
        }

        const data = await response.json();
        console.log("Login successful:", data);

        localStorage.setItem("token", data.token);
        this.$router.push("/dashboard");
      } catch (error: unknown) {
        if (error instanceof Error) {
          this.errorMessage = error.message;
        } else {
          this.errorMessage = "An unknown error occurred";
        }
        console.error("Login failed:", error);
      }
    },
  },
};


</script>

<style>

</style>
