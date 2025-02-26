<template>
    <div>
      <HeaderPage />
      <main>
        <AdminDashboard />
      </main>
      <FooterPage />
    </div>
  </template>

  <script lang="ts">
  import HeaderPage from '../components/HeaderPage.vue';
  import FooterPage from '../components/FooterPage.vue';
  import AdminDashboard from '../components/AdminDashboard.vue';

  export default {
    components: {
      HeaderPage,
      FooterPage,
      AdminDashboard,
    },
  };
  </script>

  <style>

  </style>
