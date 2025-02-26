<template>
  <div class="parent">
  <header class="header">
      <div class="nav-container">
        <div class="nav-links">
          <router-link to="/"
           class="nav-link">Cyberparc
          </router-link>

          <router-link
            v-if="!isAuthenticated"
            to="/login"
            class="nav-link"
          >
            Login
          </router-link>
          <router-link
            v-if="!isAuthenticated"
            to="/signup"
            class="nav-link"
          >
            Signup
          </router-link>
          <router-link
            v-if="isAuthenticated"
            to="/dashboard"
            class="nav-link"
          >
            Dashboard
          </router-link>
          <button
            v-if="isAuthenticated"
            @click="logout"
            class="nav-link"
          >
            Logout
          </button>
        </div>
      </div>

  </header>
  </div>
</template>


<script lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const isAuthenticated = ref(false);
    const router = useRouter();

    onMounted(() => {
      const token = localStorage.getItem("token");
      isAuthenticated.value = !!token;
    });

    const logout = () => {
      localStorage.removeItem("token");
      isAuthenticated.value = false;
      router.push("/login");
    };

    return { isAuthenticated, logout };
  },
};
</script>

<style scoped>
.parent {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
}

.header {
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  border-radius: 15px;
  width: 100%;
  padding: 10px 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.nav-link {
  color: #333;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 5px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin: 0 10px;
}

.nav-link:hover {
  color: #ffffff;
  background-color: #17A9FD;
}

.nav-link.router-link-active {
  color: #ffffff;
  background-color: #17A9FD;
}
</style>
