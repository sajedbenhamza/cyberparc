<template>
    <div class="border p-4 rounded-lg">
      <h3 class="font-semibold text-xl">{{ company.name }}</h3>
      <p>{{ company.description }}</p>
      <a :href="company.website" target="_blank" class="text-blue-500">Visit Website</a>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      company: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  