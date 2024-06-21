<template>
  <v-container fluid>
    <v-col>
      <v-row>
          <v-card class="card" @click="dialog1 = true">
            <v-img 
              v-if="!completedTiles[4]"
              src="../../assets/unsired.png"
            >
          </v-img>
          <v-img 
              v-if="completedTiles[4]"
              src="../../assets/unsiredCompleted.png"
            >
          </v-img>
          </v-card>
          <v-dialog
            v-model="dialog1"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain an Unsired from Abyssal Sire</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog2 = true">
            <v-img
            v-if="!completedTiles[5]"
              src="../../assets/grotesqueGuardians.png"
            >
          </v-img>
          <v-img 
              v-if="completedTiles[5]"
              src="../../assets/grotesqueGuardiansCompleted.png"
            >
          </v-img>
          </v-card>
          <v-dialog
            v-model="dialog2"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Unique from the Grotesque Guardians (No Pet/Maul/Dust)</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog3 = true">
            <v-img
              v-if="!completedTiles[6]"
              src="../../assets/scurriusSpine.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[6]"
              src="../../assets/scurriusSpineCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog3"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 3x Scurrius Spine</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog4 = true">
            <v-img
              v-if="!completedTiles[7]"
              src="../../assets/zenyte.png"
            >
          </v-img>
          <v-img
              v-if="completedTiles[7]"
              src="../../assets/zenyteCompleted.png"
            >
          </v-img>
          </v-card>
          <v-dialog
            v-model="dialog4"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Zenyte Shard from Demonic Gorillas</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog5 = true">
            <v-img
              v-if="!completedTiles[8]"
              src="../../assets/venatorShard2.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[8]"
              src="../../assets/venatorShardCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog5"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Venator Shard from the Phantom Muspah</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog6 = true">
            <v-img
              v-if="!completedTiles[9]"
              src="../../assets/cerbCrystals.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[9]"
              src="../../assets/cerbCrystalsCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog6"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a crystal from Cerberus</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog7 = true">
            <v-img
              v-if="!completedTiles[10]"
              src="../../assets/bloodShard.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[10]"
              src="../../assets/bloodShardCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog7"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Blood Shard</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog8 = true">
            <v-img
              v-if="!completedTiles[11]"
              src="../../assets/runeMedHelm.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[11]"
              src="../../assets/runeMedHelmCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog8"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 2x Rune Med Helm from Giant Mole</h4>
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
  name: "BingoCard2",
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