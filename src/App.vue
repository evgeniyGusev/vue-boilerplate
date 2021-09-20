<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
import appMiddleware from '@/middleware/appMiddleware';

export default {
  name: 'App',

  created() {
    this.appMiddleware();
  },

  methods: {
    appMiddleware,
  },
};
</script>
