<template>
    <div>
      <HeaderPage />
      <main>
        <h1>Signup</h1>
        <SignupForm />
      </main>
      <FooterPage />
    </div>
  </template>

  <script lang="ts">
  import HeaderPage from '../components/HeaderPage.vue';
  import FooterPage from '../components/FooterPage.vue';
  import SignupForm from '../components/SignupForm.vue';

  export default {
    components: {
      HeaderPage,
      FooterPage,
      SignupForm,
    },
  };
  </script>

  <style>

  </style>
