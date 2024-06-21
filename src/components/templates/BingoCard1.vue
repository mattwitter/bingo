<template>
  <v-container fluid>
    <v-col>
      <v-row>
          <v-card class="card" @click="dialog1 = true">
            <v-img
              v-if="!completedTiles[0]"
              src="../../assets/cudgel.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[0]"
              src="../../assets/cudgelCompleted.png"
            >
          </v-img>
          </v-card>
          <v-dialog
            v-model="dialog1"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Cudgel from Sarachnis</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog2 = true">
            <v-img
              v-if="!completedTiles[1]"
              src="../../assets/runiteLimbs.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[1]"
              src="../../assets/runiteLimbsCompleted.png"
            >
          </v-img>
          </v-card>
          <v-dialog
            v-model="dialog2"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 3x runite limbs from Deranged archaeologist</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog3 = true">
            <v-img
              v-if="!completedTiles[2]"
              src="../../assets/braceleteOfEthereum.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[2]"
              src="../../assets/braceleteOfEthereumCompleted.png"
            >
          </v-img>
          </v-card>
          <v-dialog
            v-model="dialog3"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 3 Bracelets of Ethereum from Revenants</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog4 = true">
            <v-img
              v-if="!completedTiles[3]"
              src="../../assets/fireCape.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[3]"
              src="../../assets/fireCapeCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog4"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Complete the Fight Caves in under 37 Minutes</h4>
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

  name: "BingoCard1",
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