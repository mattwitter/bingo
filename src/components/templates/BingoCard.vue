<template>
  <v-container fluid>
    <v-col>
      <v-row>
          <v-card class="card" @click="moreInfo('seeds')">
            <v-img
              src="../../assets/seeds.png"
            >
          </v-img>
          </v-card>
          <v-card class="card">
            <v-img
              src="../../assets/raidsweapons.png"
            >
            </v-img>
          </v-card>
          <v-card class="card">
            <v-img
              src="../../assets/whip.png"
            >
            </v-img>
          </v-card>
          <v-card class="card">
            <v-img
              src="../../assets/sceptre.png"
            >
            </v-img>
          </v-card>
      </v-row>
      <v-row>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
      </v-row>
      <v-row>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
      </v-row>
      <v-row>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
          <v-card class="card">
            <v-card-text>
              test
            </v-card-text>
          </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "BingoCard",
  //state
  card: null,

  data: () => ({

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