<template>
  <v-container fluid>
    <v-col>
      <v-row>

        <v-card class="card" @click="dialog1 = true">
            <v-img
              v-if="!completedTiles[22]"
              src="../../assets/masori.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[22]"
              src="../../assets/masoriCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog1"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 2x Raids Purples (Any raid, mix and match, no mega rares)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog3 = true">
            <v-img
              v-if="!completedTiles[23]"
              src="../../assets/nightmare.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[23]"
              src="../../assets/nightmareCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog3"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Nightmare Unique (No Pet/No Tablet)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog4 = true">
            <v-img
              v-if="!completedTiles[24]"
              src="../../assets/nex.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[24]"
              src="../../assets/nexCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog4"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Nex Unique (No Pet)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog5 = true">
            <v-img
              v-if="!completedTiles[25]"
              src="../../assets/sigils.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[25]"
              src="../../assets/sigilsCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog5"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Sigil or Holy Elixir from Corp</h4>
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
  name: "BingoCard4",
  //state
  card: null,

  data: () => ({
    dialog1: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    dialog5: false,
    dialog6: false,
    dialog7: false,
    dialog8: false,
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