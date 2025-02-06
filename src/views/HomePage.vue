<template>
  <div>
    <main>
      <h1>Welcome to Cyberparc</h1>
      <p>Your one-stop destination for internships and office rentals.</p>
      <router-link to="/login">Go to Login</router-link>
      <router-link to="/signup">Go to Signup</router-link>
      <CompanyList />
    </main>
  </div>
</template>

<script lang="ts" >
 import CompanyList from '../components/CompanyList.vue';
 export default {
    components: {
      CompanyList

    }
  };
</script>

<style>

</style>
