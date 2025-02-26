<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <HeaderPage />
    <main class="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div>
        <LoginForm />
      </div>
    </main>
    <FooterPage />
  </div>
</template>

<script setup lang="ts">
import HeaderPage from '../components/HeaderPage.vue';
import LoginForm from '../components/LoginForm.vue';
import FooterPage from '../components/FooterPage.vue';
</script>
<style>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.signup-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* 🌟 Form Inputs */
.signup-form label {
  display: block;
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
}

.signup-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* 🌟 Submit Button */
.signup-form button {
  width: 100%;
  padding: 10px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.signup-form button:hover {
  background: #564caf;
}

/* 🌟 Success & Error Messages */
.success {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

.error {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

/* 🌟 Responsive Design */
@media (max-width: 500px) {
  .signup-form {
    padding: 1.5rem;
    width: 90%;
  }
}</style>
