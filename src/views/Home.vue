<template>
  <v-app style="background-color: black;">
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <h2 class="runescape top jumbo">
              Unmerged Bingo
            </h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <h2 class="runescape text-darken-4 jumbo">TEAMS</h2>

            <v-container class="mx-16">
            <v-expansion-panels class="runescape">
              <v-expansion-panel class="runescape mx-5" style="color: #ffff00; background-color: black; text-align: left;">
                <v-expansion-panel-header class="runescape mx-5">
                  {{ cummy_cummers.team_name }}
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(item,i) in 4"
                  :key="i"
                  class="mx-5"
                >
                 {{ cummy_cummers.members[i] }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-spacer></v-spacer>

            <v-expansion-panels class="runescape">
              <v-expansion-panel class="runescape mx-5" style="color: #ffff00; background-color: black; text-align: left;">
                <v-expansion-panel-header class="runescape mx-5">
                  {{ cummy_clusters.team_name }}
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(item,i) in 4"
                  :key="i"
                  class="mx-5"
                >
                 {{ cummy_clusters.members[i] }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            </v-container>
          </v-col>

          <v-col cols="3">

            <tile-card
              v-if="selected_team"
              color="green"
              :tileName="'TOB'"
              :tileInfo="'Theatre of Blood'"
            >
            </tile-card>
          </v-col>

          <v-col cols="6">
            <bingo-card></bingo-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TileCard from '../components/templates/TileCard.vue'
import BingoCard from '../components/templates/BingoCard.vue'

export default {
  name: 'Home',
  components: {
    TileCard,
    BingoCard
  },

  data: () => ({
    //state
    cummy_cummers: {
      team_name: "Cummy Cummers",
      members: ["B1G J0HN", "Miilky", "Bridgebon", "Curti"]
    },

    cummy_clusters: {
      team_name: "Cummy Clusters",
      members: [":Dacoyda:", "Pappy_TV", "Hematemesis", "Imsofatt"]
    },

    selected_team: null
  }),

  methods: {
    /*showTeamBoard(name) {
      if (this.selected_team == null)
      {
        this.selected_team = {
          teamName: ""
        }
      }
      else
      {
        this.selected_team = {
          teamName: name
        }
      }
    } */
  },

  created() {
   //this.showTeamBoard()
  }
}
</script>

<style>
.runescape {
  font-family: 'RuneScape UF';
  color: #ffff00;
  text-align: center;
}           

.top{
  margin-top: 80px;
}

.jumbo {
  font-size: 6rem;
  line-height: 1.02;
  font-weight: 500;
}

.teamname {
  font-size: 2rem;
}
</style>