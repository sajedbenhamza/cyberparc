<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
          <li v-if="!isAuthenticated"><router-link to="/signup">Signup</router-link></li>
          <li v-if="isAuthenticated"><router-link to="/dashboard">Dashboard</router-link></li>
          <li v-if="isAuthenticated"><button @click="logout">Logout</button></li>
        </ul>
      </nav>
    </header>
  </template>

  <script lang="ts">
  export default {
    data() {
      return {
        isAuthenticated: false, // Replace with Vuex state or prop
      };
    },
    methods: {
      logout() {
        // Add logout logic here
        this.isAuthenticated = false;
      },
    },
  };
  </script>

  <style>

  </style>
