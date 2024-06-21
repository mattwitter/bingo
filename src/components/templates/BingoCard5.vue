<template>
  <v-container fluid>
    <v-col>
      <v-row>

        <v-card class="card" @click="dialog1 = true">
            <v-img
              v-if="!completedTiles[26]"
              src="../../assets/coxPurp.png"
            >
            </v-img>
            <v-img
              v-if="completedTiles[26]"
              src="../../assets/coxPurpCompleted.png"
            >
            </v-img>
          </v-card>
          <v-dialog
            v-model="dialog1"
            width="500"
          >
            <v-card>
              <v-card-text>
                <h4>Obtain a mega rare (any raid; does not count towards 2 raid purples tile)</h4>
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
  name: "BingoCard5",
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