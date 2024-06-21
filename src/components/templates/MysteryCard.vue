<template>
  <v-container fluid>
    <v-col>
      <v-row>
        <v-card class="card" @click="dialog1 = true">
  <v-img
    v-if="!completedTiles[27]"
    src="../../assets/shower.png"
  >
</v-img>
<v-img
    v-if="completedTiles[27]"
    src="../../assets/showerCompleted.png"
  >
</v-img>
</v-card>
<v-dialog
  v-model="dialog1"
  width="500"
>
  <v-card>
    <v-card-text>
      <h4>You all STINK!  Have at least 3 team members post a photo of their shower to prove you can actually find out where it is!!! (1 point)</h4>
    </v-card-text>
  </v-card>
</v-dialog>

<v-card class="card" @click="dialog2 = true">
  <v-img
    v-if="!completedTiles[28]"
    src="../../assets/zebak.png"
  >
</v-img>
<v-img
    v-if="completedTiles[28]"
    src="../../assets/zebakCompleted.png"
  >
</v-img>
</v-card>
<v-dialog
  v-model="dialog2"
  width="500"
>
  <v-card>
    <v-card-text>
      <h4>3+ Team Members must LIVE through a level 4 Zebak (Must send recording for memes) (2 Points)</h4>
    </v-card-text>
  </v-card>
</v-dialog>

<v-card class="card" @click="dialog3 = true">
  <v-img
    v-if="!completedTiles[29]"
    src="../../assets/tunaPotato.png"
  >
</v-img>
<v-img
    v-if="completedTiles[29]"
    src="../../assets/tunaPotatoCompleted.png"
  >
</v-img>
</v-card>
<v-dialog
  v-model="dialog3"
  width="500"
>
  <v-card>
    <v-card-text>
      <h4>Obtain a tuna potato drop from Vardorvis AND Thermy (2 points)</h4>
    </v-card-text>
  </v-card>
</v-dialog>

<v-card class="card" @click="dialog4 = true">
  <v-img
    v-if="!completedTiles[30]"
    src="../../assets/pk.png"
  >
</v-img>
<v-img
    v-if="completedTiles[30]"
    src="../../assets/pkCompleted.png"
  >
</v-img>
</v-card>
<v-dialog
  v-model="dialog4"
  width="500"
>
  <v-card>
    <v-card-text>
      <h4>Get a PK Kill over 3m (Looking at you, calvarion pkers) (2 points)</h4>
    </v-card-text>
  </v-card>
</v-dialog>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    completedTiles: {
      type: Array,
      required: true,
    }
  },

  name: "MysteryCard",
  //state
  card: null,

  data: () => ({
    dialog1: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    dialog5: false,
    dialog6: false,
  }),

  methods: {
    moreInfo(card) {
      console.log(card)
    }
  }
}
</script>

<style>
.card {
  margin: 2px;
  height: 100%;
  width: 20%;
}
</style>