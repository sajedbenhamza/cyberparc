<template>
  <footer class="bottom">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <p class="text-center text-sm text-gray-500">
        &copy; {{ currentYear }} Cyberparc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  setup() {
    const currentYear = computed(() => new Date().getFullYear());
    return { currentYear };
  }
});
</script>
<style scoped>
.bottom {
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff; /* ensures the footer has a white background */
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1); /* optional: adds a subtle shadow */
  z-index: 1000; /* ensures the footer stays on top of other content */
  padding: 10px 0; /* smaller padding for a more compact footer */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-center {
  text-align: center;
  font-size: 0.875rem; /* smaller font size for a modern look */
  color: #555; /* slightly darker text color */
}
</style>
