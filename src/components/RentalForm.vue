<template>
    <form @submit.prevent="submitRentalRequest">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="officeSize">Office Size:</label>
      <input type="number" id="officeSize" v-model="officeSize" required />

      <label for="comments">Additional Comments:</label>
      <textarea id="comments" v-model="comments"></textarea>

      <button type="submit">Submit</button>
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
      };
    },
    methods: {
      submitRentalRequest() {
        // Add rental request submission logic here
        console.log('Submitting rental request for', this.name);
      },
    },
  };
  </script>

  <style>

  </style>
