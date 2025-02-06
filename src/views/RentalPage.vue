<template>
    <div>
      <HeaderPage />
      <main>
        <h1>Request Office Rental</h1>
        <RentalForm />
      </main>
      <FooterPage/>
    </div>
  </template>

  <script lang="ts">
  import HeaderPage from '../components/HeaderPage.vue';
  import FooterPage from '../components/FooterPage.vue';
  import RentalForm from '../components/RentalForm.vue';


  export default {
    components: {
      HeaderPage,
      FooterPage,
      RentalForm,
    },
  };
  </script>

  <style>

  </style>
