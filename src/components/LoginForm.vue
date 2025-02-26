<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <h2 class="login-title">Login</h2>
    <div class="form-group">
      <label for="email" class="form-label">Email:</label>
      <input
        type="email"
        id="email"
        v-model="email"
        required
        class="form-input"
      />
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Password:</label>
      <input
        type="password"
        id="password"
        v-model="password"
        required
        class="form-input"
      />
    </div>
    <button type="submit" class="login-button">
      Login
    </button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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

        const data = await response.json();

        if (!response.ok) {
          this.errorMessage = data.message;
        } else {
          console.log("Login successful:", data.token);
          localStorage.setItem("token", data.token);
          if (data.email == "admin@gmail.com") {
            localStorage.setItem("role", "admin");
            localStorage.setItem("email", data.email);
          }
          else {
            localStorage.setItem("role", "user");
            localStorage.setItem("email", data.email);

          }
          this.$router.push("/dashboard");
        }
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
<style scoped>

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
  font-size: 2em; /* text-2xl */
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
  font-size: 1em; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #4B5563; /* text-gray-700 */
  margin-bottom: 0.25rem; /* mb-1 */
}

.form-input {
  width: 100%; /* w-full */
  padding: 0.75rem 1rem; /* py-2 (0.5rem) and px-3 (0.75rem) */
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
  background-color: #2563EB; /* bg-blue-600 */
  color: #ffffff; /* text-white */
  padding: 0.75rem 1rem; /* py-2 and px-4 */
  border: none;
  border-radius: 0.375rem; /* rounded-md */
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, transform 0.3s ease;
}

.login-button:hover {
  background-color: #1D4ED8; /* hover:bg-blue-700 */
  transform: translateY(-2px);
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
