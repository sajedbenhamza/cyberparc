<template>
    <div class="company-list">
      <div v-for="company in companies" :key="company.id" class="company-card">
        <CompanyCard :company="company" />
      </div>
    </div>
  </template>

  <script lang="ts">
  import CompanyCard from './CompanyCard.vue';

  export default {
    components: {
      CompanyCard
    },
    data() {
      return {
        companies: [
          { id: 1, name: 'Company 1', description: 'Description of Company 1', website: 'https://company1.com' },
          { id: 2, name: 'Company 2', description: 'Description of Company 2', website: 'https://company2.com' },
          // Add more companies here
        ]
      };
    }
  };
  </script>

  <style scoped>

  </style>
