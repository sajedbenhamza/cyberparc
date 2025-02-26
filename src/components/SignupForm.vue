<template>
  <form @submit.prevent="handleSignup"  class="login-form">
      <h2 class="login-title">Signup</h2>

    <label for="name"  class="form-label">Name:</label>
    <input type="text" id="name" v-model="name" class="form-input" required />

    <label for="email"  class="form-label">Email:</label>
    <input type="email" id="email" v-model="email" class="form-input" required />

    <label for="password"  class="form-label">Password:</label>
    <input type="password" id="password" v-model="password" class="form-input" required />

    <button type="submit" class="login-button">Sign Up</button>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
.login-form {
  background-color: #ffffff; /* bg-white */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  border-radius: 0.5rem; /* rounded-lg */
  padding: 2rem; /* p-8 */
  max-width: 28rem; /* max-w-md */
  width: 100%; /* w-full */
  margin: 0 auto; /* centers the form horizontally */
}

.login-title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold; /* font-bold */
  margin-bottom: 1.5rem; /* mb-6 */
  text-align: center; /* text-center */
  color: #1F2937; /* text-gray-800 */
}

.form-group {
  margin-bottom: 1rem; /* mb-4 for the first group */
}

.form-group:last-of-type {
  margin-bottom: 1.5rem; /* mb-6 for the second group */
}

.form-label {
  display: block; /* block */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #4B5563; /* text-gray-700 */
  margin-bottom: 0.25rem; /* mb-1 */
}

.form-input {
  width: 100%; /* w-full */
  padding: 0.5rem 0.75rem; /* py-2 (0.5rem) and px-3 (0.75rem) */
  border: 1px solid #D1D5DB; /* border with gray-300 color */
  border-radius: 0.375rem; /* rounded-md */
  outline: none;
  transition: box-shadow 0.2s ease-in-out;
}

.form-input:focus {
  box-shadow: 0 0 0 2px #3B82F6; /* focus:ring-2 and focus:ring-blue-500 */
}

.login-button {
  width: 100%; /* w-full */
  margin-top: 10px;
  background-color: #2563EB; /* bg-blue-600 */
  color: #ffffff; /* text-white */
  padding: 0.5rem 1rem; /* py-2 and px-4 */
  border: none;
  border-radius: 0.375rem; /* rounded-md */
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.login-button:hover {
  background-color: #1D4ED8; /* hover:bg-blue-700 */
}

.login-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #3B82F6; /* focus ring similar to the input focus */
}

.error-message {
  margin-top: 1rem; /* mt-4 */
  color: #DC2626; /* text-red-600 */
  font-size: 0.875rem; /* text-sm */
  text-align: center;
}
</style>

