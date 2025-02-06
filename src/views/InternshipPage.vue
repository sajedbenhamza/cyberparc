<template>
    <div>
      <Headerr />
      <main>
        <h1>Apply for an Internship</h1>
        <InternshipForm />
      </main>
      <Footerr />
    </div>
  </template>

  <script lang="ts">
  import Headerr from '../components/HeaderPage.vue';
  import Footerr from '../components/FooterPage.vue';
  import InternshipForm from '../components/InternshipForm.vue';

  export default {
    components: {
      Headerr,
      Footerr,
      InternshipForm,
    },
  };
  </script>

  <style>

  </style>
