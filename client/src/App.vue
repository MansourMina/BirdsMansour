<template>
  <v-app>
    <v-app-bar color="blue darken-2" absolute dark app>
      <v-toolbar-title class="mr-2"
        ><v-img src="@/assets/bird.png" width="50"></v-img
      ></v-toolbar-title>

      <v-toolbar-title class="text-uppercase">Bird Watch</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="ma-3 blue darken-1" to="/"> Home </v-btn>
      <v-btn class="blue darken-1" to="/gallery"> Gallery </v-btn>
      <v-btn class="ma-3 blue darken-1" to="/about">About </v-btn>
    </v-app-bar>
    <v-main>
      <v-container 
        ><router-view
          :birds="birds"
          :gallery="birds.map((e) => e.pic)"
          @updateCount="updateCount"
      /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',

  data: () => ({
    birds: [],
  }),
  created() {
    this.getBirds();
  },
  methods: {
    async getBirds() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/birds',
        method: 'GET',
      });
      this.birds = data;
    },
    async updateCount(item) {
      await axios({
        url: 'http://127.0.0.1:3000/bird/' + item.id,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          count: item.count + 1,
          name: item.name,
        },
      });
      this.getBirds();
    },
  },
};
</script>
