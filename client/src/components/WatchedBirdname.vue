<template>
  <v-alert color="red darken-4 text-center" dark dense >
    Last watched:
    {{ lastWatched }}</v-alert
  >
</template>

<script>
export default {
  props: {
    lastWatched: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
