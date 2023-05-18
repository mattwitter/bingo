<template>
  <v-container fluid>
    <v-col>
      <v-row>

          <v-card class="card" @click="dialog1 = true">
            <v-img
            v-if="!completedTiles[14]"
              src="../../assets/zulrah.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[14]"
              src="../../assets/zulrahCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog1"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a 3x Zulrah Unique</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog2 = true">
            <v-img
            v-if="!completedTiles[15]"
              src="../../assets/odiumMalediction.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[15]"
              src="../../assets/odiumMaledictionCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog2"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Complete an Odium or Malediction Ward</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog3 = true">
            <v-img
            v-if="!completedTiles[16]"
              src="../../assets/elidinisLightbearer.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[16]"
              src="../../assets/elidinisLightbearerCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog3"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Lightbearer or an Elidinis Ward</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog4 = true">
            <v-img
            v-if="!completedTiles[17]"
              src="../../assets/crystalSeeds.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[17]"
              src="../../assets/crystalSeedsCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog4"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 2x Crystal Tool, Armour, or Weapon Seeds</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog5 = true">
            <v-img
            v-if="!completedTiles[18]"
              src="../../assets/prayerScrolls.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[18]"
              src="../../assets/prayerScrollsCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog5"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Cox Prayer Scroll (Arcane or Dex)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog6 = true">
            <v-img
            v-if="!completedTiles[19]"
              src="../../assets/holyElixir.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[19]"
              src="../../assets/holyElixirCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog6"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Holy Elixir from Corp</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog7 = true">
            <v-img
            v-if="!completedTiles[20]"
              src="../../assets/steamZamorak.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[20]"
              src="../../assets/steamZamorakCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog7"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 2x Steam Battlestaff or Zamorakian Spear</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          
          <v-card class="card" @click="dialog8 = true">
            <v-img
            v-if="!completedTiles[21]"
              src="../../assets/armaBandos.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[21]"
              src="../../assets/armaBandosCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog8"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain Bandos/Arma Top AND Bottom (1 top/1 bottom, does not need to match)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          
          <v-card class="card" @click="dialog9 = true">
            <v-img
            v-if="!completedTiles[22]"
              src="../../assets/hilts.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[22]"
              src="../../assets/hiltsCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog9"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain Bandos, Arma, Sara, or Zammy Hilt</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          
          <v-card class="card" @click="dialog10 = true">
            <v-img
            v-if="!completedTiles[23]"
              src="../../assets/barrows.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[23]"
              src="../../assets/barrowsCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog10"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a full Barrows set (1 piece for each slot, does not need to match)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          
          <v-card class="card" @click="dialog11 = true">
            <v-img
            v-if="!completedTiles[24]"
              src="../../assets/acb.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[24]"
              src="../../assets/acbCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog11"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain an Armadyl Crossbow</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          
          <v-card class="card" @click="dialog12 = true">
            <v-img
            v-if="!completedTiles[25]"
              src="../../assets/bloodShard.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[25]"
              src="../../assets/bloodShardCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog12"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Blood Shard</h4>
              </v-card-text>
            </v-card>
          </v-dialog>
      </v-row>
      <v-row>
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
  name: "BingoCard3",
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
    dialog9: false,
    dialog10: false,
    dialog11: false,
    dialog12: false,
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