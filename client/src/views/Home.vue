<template>
  <div>
    <p class="font-weight-bold">Our Endangered Birds</p>
    <v-row class="d-flex flex-column pa-0">
      <v-col cols="12" class="pb-2">
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Vorname"
              width="100"
              dense
              v-model="firstName"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <WatchedBirdname :lastWatched="lastWatched" v-if="lastWatched != null" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pt-0"
        ><v-text-field
          label="Nachname"
          width="100"
          dense
          v-model="lastName"
        ></v-text-field
      ></v-col>
    </v-row>
    <p class="subtitle-1">
      Click on the <span class="red--text">eye</span> Icon if you have observed
      that bird!
    </p>

    <v-data-table :headers="headers" :items="birds" class="elevation-1">
      <!-- eslint-disable-next-line -->
      <template v-slot:item.pic="{ item }">
        <v-img :src="item.pic" height="100" width="100"> </v-img>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-btn
          small
          icon
          @click="updateCount(item)"
          :disabled="firstName.length == 0 || lastName.length == 0"
        >
          <v-icon color="red darken-3" small>mdi-eye</v-icon></v-btn
        >
      </template>
    </v-data-table>
  </div>
</template>

<script>
import WatchedBirdname from '@/components/WatchedBirdname.vue';
export default {
  data() {
    return {
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id',
        },
        { text: 'Image', value: 'pic' },
        { text: 'Common Name', value: 'commonName' },
        { text: 'Scientific Name', value: 'scientificName' },
        { text: 'Observed', value: 'count' },
        { text: 'Actions', value: 'actions' },
      ],
      firstName: '',
      lastName: '',
      lastWatched: null,
    };
  },
  methods: {
    updateCount(item) {
      this.lastWatched = item.commonName;
      item.name = this.firstName + ' ' + this.lastName;
      console.log(item);
      this.$emit('updateCount', item);
    },
  },
  props: {
    birds: {
      type: Array,
    },
  },
  components: {
    WatchedBirdname,
  },
};
</script>
