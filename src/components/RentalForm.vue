<template>
  <form @submit.prevent="submitRentalRequest" class="form-container">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />

    <label for="officeSize">Office Size:</label>
    <input type="number" id="officeSize" v-model="officeSize" required />

    <label for="comments">Additional Comments:</label>
    <textarea id="comments" v-model="comments"></textarea>

    <button type="submit" class="submit-button">Submit</button>

    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: '',
      email: '',
      officeSize: '',
      comments: '',
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async submitRentalRequest() {
      try {
        const response = await fetch("http://localhost:5000/api/rentals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            officeSize: this.officeSize,
            comments: this.comments
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to submit rental request.");
        }

          const res = await response.json();
          console.log(res)
          const newRental = res.rental

        this.$emit("rental-added", newRental); // Emit the event with the new data

        this.successMessage = "Rental request submitted successfully!";
        this.errorMessage = "";

        // Clear the form after submission
        this.name = "";
        this.email = "";
        this.officeSize = "";
        this.comments = "";
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
input[type="number"],
textarea {
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
input[type="number"]:focus,
textarea:focus {
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
