<template>
  <v-app>
    <app-toolbar/>

    <v-main>
      <router-view/>
    </v-main>

    <notifications position="bottom right" :close-on-click="true" />
  </v-app>
</template>

<script>
import AppToolbar from './components/AppToolbar.vue';

export default {
  name: 'App',
  components: {
    AppToolbar,
  },
  data: () => ({
  }),
};
</script>
