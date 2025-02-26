<template>
  <form @submit.prevent="submitApplication" class="form-container">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />

    <label for="cv">Upload CV:</label>
    <input type="file" id="cv" @change="handleFileUpload" required />

    <button type="submit" class="submit-button">Submit</button>

    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: "",
      email: "",
      cv: null as File | null,
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    handleFileUpload(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target && target.files) {
        this.cv = target.files[0];
      }
    },
    async submitApplication() {
      if (!this.cv) {
        this.errorMessage = "Please upload a CV.";
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/applications", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: 0,
            name: this.name,
            email: this.email,
            cvLink: "path to cv",
            status: "Pending"
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to submit application.");
        }
        const res = await response.json();
          console.log(res)
          const newApplication = res.application


        this.$emit("application-added", newApplication); // Emit the event with the new data

        this.successMessage = "Application submitted successfully!";
        this.errorMessage = "";

        // Clear the form after submission
        this.name = "";
        this.email = "";
        this.cv = null;
      } catch (error: unknown) {
        if (error instanceof Error) {
          this.errorMessage = error.message;
        } else {
          this.errorMessage = "An unknown error occurred.";
        }
        this.successMessage = "";
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-size: 1em;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="file"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  color: #333;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="file"]:focus {
  border-color: #17A9FD;
  outline: none;
}

.submit-button {
  background-color: #17A9FD;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.success {
  color: green;
  font-weight: bold;
  text-align: center;
}

.error {
  color: red;
  font-weight: bold;
  text-align: center;
}
</style>
