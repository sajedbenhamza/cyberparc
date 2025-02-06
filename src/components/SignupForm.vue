<template>
  <form @submit.prevent="handleSignup">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />

    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />

    <button type="submit">Sign Up</button>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    async handleSignup() {
      try {
        const response = await fetch("http://localhost:5000/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
        });

        if (!response.ok) {
          throw new Error("Signup failed. Try again.");
        }

        const data = await response.json();
        console.log("Signup successful:", data);

        this.successMessage = "Signup successful! You can now log in.";
        this.errorMessage = "";

        // Redirect user to login page after signup
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      } catch (error: unknown) {
        if (error instanceof Error) {
          this.errorMessage = error.message;
        } else {
          this.errorMessage = "An unknown error occurred";
        }
        this.successMessage = "";
        console.error("Signup failed:", error);
      }
    },
  },
};
</script>

<style>

</style>
