<template>
   <div class="company-card">
    <img :src="company.logo" alt="Company Logo" class="company-logo" />
    <h3 class="company-card-title">{{ company.name }}</h3>
    <p class="company-card-description">{{ company.description }}</p>
    <a :href="company.website" target="_blank" class="company-card-website">Visit Website</a>
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

.company-card {
  width: 250px; /* Fixed width */
  height: 350px; /* Increased height for better spacing */
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.company-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.company-logo {
  max-width: 100px; /* Increased logo size */
  max-height: 100px;
  object-fit: contain; /* Ensures logos fit well */
  margin-bottom: 15px;
}

.company-card-title {
  font-size: 1.5em; /* Increased font size */
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.company-card-description {
  font-size: 1em;
  color: #666;
  margin-bottom: 15px;
}

.company-card-website {
  font-size: 1em;
  color: #17A9FD;
  text-decoration: none;
  transition: color 0.3s ease;
}

.company-card-website:hover {
  color: #0056b3;
}

  </style>
