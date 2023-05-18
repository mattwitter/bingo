<template>
  <v-container fluid>
    <v-col>
      <v-row>

        <v-card class="card" @click="dialog1 = true">
            <v-img
              v-if="!completedTiles[26]"
              src="../../assets/masori.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[26]"
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
                <h4>Obtain 2x Masori Pieces</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog2 = true">
            <v-img
              v-if="!completedTiles[27]"
              src="../../assets/voidWaker.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[27]"
              src="../../assets/voidWakerCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog2"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Complete a Voidwaker</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog3 = true">
            <v-img
              v-if="!completedTiles[28]"
              src="../../assets/nightmare.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[28]"
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
              v-if="!completedTiles[29]"
              src="../../assets/nex.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[29]"
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
              v-if="!completedTiles[30]"
              src="../../assets/sigils.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[30]"
              src="../../assets/sigils.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog5"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Sigil from Corp</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog6 = true">
            <v-img
              v-if="!completedTiles[31]"
              src="../../assets/coxPurp.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[31]"
              src="../../assets/coxPurpCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog6"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 2x COX Purples (No Scrolls)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog7 = true">
            <v-img
              v-if="!completedTiles[32]"
              src="../../assets/tobPurple.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[32]"
              src="../../assets/tobPurpleCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog7"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 2x TOB Purples</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog8 = true">
            <v-img
              v-if="!completedTiles[33]"
              src="../../assets/revWeapon.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[33]"
              src="../../assets/revWeaponCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog8"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a weapon from Revenants</h4>
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