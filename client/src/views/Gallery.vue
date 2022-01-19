<template>
  <div class="text-center">
    <h1>Our Birds</h1>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in gallery"
        :key="i"
        :src="item"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
