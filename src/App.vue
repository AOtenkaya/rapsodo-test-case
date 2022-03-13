<template>
  <v-app>
    <v-app-bar
      app
      color="#232021"
      dark
    >
      <v-layout row wrap align-center>
        <v-flex shrink>
          <v-img
            alt="rapsodo-logo"
            class="shrink mr-2"
            contain
            src="./assets/logos/rapsodo-logo.png"
            transition="scale-transition"
            width="40"
          />
        </v-flex>

        <v-flex shrink>
          <h1 class="ml-2">Rapsodo Store</h1>
        </v-flex>

        <v-spacer/>

        <v-flex shrink>
          <router-link to="/" class="no-text-decoration">
            <v-btn
              class="mx-2"
              fab
              text
              icon
            >
              <v-icon>
                mdi-store
              </v-icon>
            </v-btn>
          </router-link>

          <router-link to="/basket" class="no-text-decoration">
            <v-btn
              class="mx-2"
              fab
              text
              icon
            >
              <v-icon>
                mdi-cart
              </v-icon>
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
};
</script>
