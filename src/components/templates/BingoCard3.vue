<template>
  <v-container fluid>
    <v-col>
      <v-row>

          <v-card class="card" @click="dialog1 = true">
            <v-img
            v-if="!completedTiles[12]"
              src="../../assets/zulrah.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[12]"
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
                <h4>Obtain a 3x Zulrah Unique (No Pet/Mutagen/Jar)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog2 = true">
            <v-img
            v-if="!completedTiles[13]"
              src="../../assets/odiumMalediction.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[13]"
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
                <h4>Complete an Odium or Malediction Ward (Shards 1/2/3 MUST MATCH)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog3 = true">
            <v-img
            v-if="!completedTiles[14]"
              src="../../assets/dt2.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[14]"
              src="../../assets/dt2Completed.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog3"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain any DT2 primary unique (ingot, vestige, axe pieces, virtus pieces)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog4 = true">
            <v-img
            v-if="!completedTiles[15]"
              src="../../assets/crystalSeeds.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[15]"
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
                <h4>Obtain 2x Armour or Weapon Seeds, or 1 Enhanced Crystal Weapon Seed</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog5 = true">
            <v-img
            v-if="!completedTiles[16]"
              src="../../assets/whipTrident.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[16]"
              src="../../assets/whipTridentCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog5"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain one Abyssal Whip and one Trident of the Seas</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog6 = true">
            <v-img
            v-if="!completedTiles[17]"
              src="../../assets/gwd.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[17]"
              src="../../assets/gwdCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog6"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain any GWD Armor Piece (excluding nex: bcp/tassets/bandos boots, arma helm/body/skirt)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog7 = true">
            <v-img
            v-if="!completedTiles[18]"
              src="../../assets/saraSwordLight.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[18]"
              src="../../assets/saraSwordLightCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog7"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain any GWD Weapon (excluding nex: sara sword, acb, steam battlestaff/zammy spear/sotd)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog8 = true">
            <v-img
            v-if="!completedTiles[19]"
              src="../../assets/sceptre.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[19]"
              src="../../assets/sceptreCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog8"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Pharaoh's Sceptre</h4>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
      <v-row>
        <v-card class="card" @click="dialog9 = true">
            <v-img
            v-if="!completedTiles[20]"
              src="../../assets/crystalToolSeed.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[20]"
              src="../../assets/crystalToolSeedCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog9"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Crystal Tool Seed</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog10 = true">
            <v-img
            v-if="!completedTiles[21]"
              src="../../assets/smokeBattlestaff.png"
            >
            </v-img>
            <v-img
            v-if="completedTiles[21]"
              src="../../assets/smokeBattlestaffCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog10"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Smoke Battlestaff from Thermy</h4>
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