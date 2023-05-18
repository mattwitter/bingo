<template>
  <v-container fluid>
    <v-col>
      <v-row>
          <v-card class="card" @click="dialog1 = true">
            <v-img 
              v-if="!completedTiles[6]"
              src="../../assets/gnomeScarf.png"
            >
          </v-img>
          <v-img 
              v-if="completedTiles[6]"
              src="../../assets/gnomeScarfCompleted.png"
            >
          </v-img>
          </v-card>
          <v-dialog
            v-model="dialog1"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Gnome Scarf from the Gnome Restaurant Minigame</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog2 = true">
            <v-img
            v-if="!completedTiles[7]"
              src="../../assets/dragonMedHelm.png"
            >
          </v-img>
          <v-img 
              v-if="completedTiles[7]"
              src="../../assets/dragonMedHelmCompleted.png"
            >
          </v-img>
          </v-card>
          <v-dialog
            v-model="dialog2"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Dragon Med Helm from Sarachnis</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog3 = true">
            <v-img
              v-if="!completedTiles[8]"
              src="../../assets/mudStaffSeercull.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[8]"
              src="../../assets/mudStaffSeercullCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog3"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Mud Battlestaff and a Seercull from Dagannoth Kings</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog4 = true">
            <v-img
              v-if="!completedTiles[9]"
              src="../../assets/zenyte.png"
            >
          </v-img>
          <v-img
              v-if="completedTiles[9]"
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
              v-if="!completedTiles[10]"
              src="../../assets/venatorShard.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[10]"
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
              v-if="!completedTiles[11]"
              src="../../assets/dragonPickaxe.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[11]"
              src="../../assets/dragonPickaxeCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog6"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a Dragon Pickaxe</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog7 = true">
            <v-img
              v-if="!completedTiles[12]"
              src="../../assets/vorkathHead.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[12]"
              src="../../assets/vorkathHeadCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog7"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 3x Vorkath Head</h4>
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-card class="card" @click="dialog8 = true">
            <v-img
              v-if="!completedTiles[13]"
              src="../../assets/saraSwordLight.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[13]"
              src="../../assets/saraSwordLightCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog8"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain 2x Saradomin Sword or Saradomin Light</h4>
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