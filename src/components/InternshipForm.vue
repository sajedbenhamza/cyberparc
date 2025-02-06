<template>
    <form @submit.prevent="submitApplication">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="cv">Upload CV:</label>
      <input type="file" id="cv" @change="handleFileUpload" required />

      <button type="submit">Submit</button>
    </form>
  </template>

  <script lang="ts">
  export default {
    data() {
      return {
        name: '',
        email: '',
        cv: null as File | null
      };
    },
    methods: {
      handleFileUpload(event: Event) {
        const target = event.target as
          HTMLInputElement;
          if(target && target.files)
            this.cv = target.files[0];
      },
      submitApplication() {
        // Add application submission logic here
        console.log('Submitting application for', this.name);
      },
    },
  };
  </script>

  <style>

  </style>
