<template>
  <div>
    <main>
      <h1 class="middle header">Welcome to Cyberparc</h1>
      <p class="middle">Your one-stop destination for internships and office rentals.</p>
      <div class="middle" v-if="token === null">
        <button class="button loginButton">
          <img src="../assets/icons/lo.png" alt="User Icon" class="icon" />
          <router-link class="whiteWriting" to="/login">Login</router-link>
        </button>
        <button class="button registerButton">
          <img src="../assets/icons/re.png" alt="User Icon" class="icon" />
          <router-link class="whiteWriting" to="/signup">Signup</router-link>
        </button>
      </div>
      <div class="middle" v-else>
        <button class="button loginButton">
          <img src="../assets/icons/lo.png" alt="User Icon" class="icon" />
          <router-link class="whiteWriting" to="/dashboard">Dashboard</router-link>
        </button>
      </div>
      <div class="container"><CompanyList /></div>
    </main>
  </div>
</template>

<script lang="ts">
import CompanyList from '../components/CompanyList.vue';
export default {
   data() {
    return {
      token: localStorage.getItem('token'),
    };
  },
  components: {
    CompanyList
  }
};
</script>

<style scoped>
.header {
  margin-top: 50px;
  font-family: 'Arial', sans-serif;
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  padding-bottom: 40px;
}

.middle {
  text-align: center;
}

.button {
  text-align: center;
  border: none;
  border-radius: 5px;
  width: 200px; /* Fixed width for consistency */
  height: 40px;
  margin: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button img {
  margin-right: 10px;
}

.loginButton {
  background-color: #1877F2;
}

.loginButton:hover {
  background-color: #145db2;
  transform: translateY(-2px);
}

.registerButton {
  background-color: #F29318;
}

.registerButton:hover {
  background-color: #c76b12;
  transform: translateY(-2px);
}

.whiteWriting {
  color: white;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
}

.icon {
  width: 24px;
  height: 24px;
  color: white;
}
</style>
