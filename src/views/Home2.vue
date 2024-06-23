<template>
  <v-app style="background-color: black;">
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <h2 class="ml-12 mr-n12 runescape top jumbo" style="text-align: center;">
              Unmerged Bingo
              <v-btn
                class="mr-12 mt-5 pt-2 pb-1 runescape"
                height="10%"
                color="grey"
                style="color:#ffff00; float: right; font-size: 3rem;"
                @click="dialog = true"
              >
              RULES
              </v-btn>
              <v-dialog
                v-model="dialog"
                width="1000"
                height="1000"
              >
                <v-card class="scroll">
                  <v-card-text>
                    <h2 class="pt-5" style="text-align: center; font-size: 3rem">Unmerged Bingo Rules</h2>
                    <h4 class="pt-10 rules">1. Weekend Bingo starts 6/21/2024 05:00 PM EST and ends 6/23/2024 11:59 PM EST</h4>
                    <h4 class="pt-5 rules">2. Make sure you have the "Clan Events" Plugin enabled with the Bingo Codeword and Date/Time Visible in all tile submissions.</h4>
                    <h4 class="pt-5 rules">3. If you can not complete a tile on the account signed up and must complete on main, please make sure only one account is logged in at a time for the duration of bingo.
                      Players found logged into multiple accounts at once for the duration of bingo will be disqualified. 
                    </h4>
                    <h4 class="pt-5 rules">4. Alts may be used to run supplies, but may not be used to aid in the completion of any tile for any reason (Tanking, Safespotting, etc.)</h4>
                    <h4 class="pt-5 rules">5. Please turn untradeable drop notifications on and set your valuable drop notification threshold to very low.</h4>
                    <h4 class="pt-5 rules">6. All drops must be submitted within one hour of receiving the drop.</h4>
                    <h4 class="pt-5 rules">7. Any Players not actively participating in the event may be removed from the team at mods discretion.</h4>
                    <h4 class="pt-5 rules">8. You may store one CG chest prior to bingo to open right at bingo start</h4>
                    <h4 class="pt-5 rules">9. No PKING or Ragging other bingo enjoyers</h4>
                    <h4 class="pt-5 rules">10. <b>NO COMPLAINING ABOUT TILE SUBMISSIONS AT ALL. MODS WILL HANDLE THIS. YOU WILL BE KICKED FROM BINGO AND FORFEIT WINNINGS AND ENTRY FEE</b></h4>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h2 class="mr-12 ml-n12 runescape jumbo" style="text-align: center; font-size: 3rem;">
              Bingo Code: Absolut Pear
            </h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <h2 class="runescape text-darken-4 jumbo">TEAMS</h2>

            <v-container class="">
            <v-expansion-panels class="runescape">
              <v-expansion-panel v-bind:disabled="disabled2 == 1 || disabled3 == 1 || disabled4 == 1" class="runescape" style="color: #ffff00; background-color: black; text-align: left;"  @click="changeOffDefaultBoard(team1), isTeam1Open()">
                <v-expansion-panel-header class="runescape name">
                  {{ team1.team_name + ' - ' + team1Score}}
                  
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(item,i) in 8"
                  :key="i"
                  class="runescape name"
                >
                 {{ team1.members[i] }}
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel v-bind:disabled="disabled1 == 1 || disabled3 == 1 || disabled4 == 1" class="runescape" style="color: #ffff00; background-color: black; text-align: left;"  @click="changeOffDefaultBoard(team2), isTeam2Open()">
                <v-expansion-panel-header class="runescape name">
                  {{ team2.team_name + ' - ' + team2Score}}
                  
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(item,i) in 8"
                  :key="i"
                  class="runescape name"
                >
                 {{ team2.members[i] }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-spacer></v-spacer>

          <v-spacer></v-spacer>


          
          <v-spacer></v-spacer>
        </v-container>
        </v-col>

          <v-col cols="10">
              <v-app-bar
              color="black"
              flat
              width="80%"
              class="ml-1"
            >
              <v-btn
                width="20%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tier1')"
              >
                1 Point
              </v-btn>
              <v-btn
                width="20%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tier2')"
              >
                2 Points
              </v-btn>
              <v-btn
                width="20%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tier3')"
              >
                5 Points
              </v-btn>
              <v-btn
                width="20%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tier4')"
              >
                8 Points
              </v-btn>
              <v-btn
                width="20%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tier5')"
              >
                10 Points
              </v-btn>
              <v-btn
                width="20%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tierMystery')"
              >
                ???
              </v-btn>
            </v-app-bar>
            <bingo-card-1
              v-if="defaultTier"
              :completed-tiles="[]"
            ></bingo-card-1>
            <bingo-card-2
              v-if="defaultTier2"
              :completed-tiles="[]"
            ></bingo-card-2>
            <bingo-card-3
              v-if="defaultTier3"
              :completed-tiles="[]"
            ></bingo-card-3>
            <bingo-card-4
              v-if="defaultTier4"
              :completed-tiles="[]"
            ></bingo-card-4>
            <bingo-card-5
              v-if="defaultTier5"
              :completed-tiles="[]"
            ></bingo-card-5>
            <mystery-card
              v-if="defaultTierMystery"
              :completed-tiles="[]"
            ></mystery-card>
            <bingo-card-1
              v-if="tier1 && selected_team != null"
              :completed-tiles="selected_team.completedTiles"
            ></bingo-card-1>
            <bingo-card-2
              v-if="tier2 && selected_team != null"
              :completed-tiles="selected_team.completedTiles"
            ></bingo-card-2>
            <bingo-card-3
              v-if="tier3 && selected_team != null"
              :completed-tiles="selected_team.completedTiles"
            ></bingo-card-3>
            <bingo-card-4
              v-if="tier4 && selected_team != null"
              :completed-tiles="selected_team.completedTiles"
            ></bingo-card-4>
            <bingo-card-5
              v-if="tier5 && selected_team != null"
              :completed-tiles="selected_team.completedTiles"
            ></bingo-card-5>
            <mystery-card
              v-if="tierMystery && selected_team != null"
              :completed-tiles="selected_team.completedTiles"
            ></mystery-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BingoCard1 from '../components/templates/BingoCard1.vue'
import BingoCard2 from '../components/templates/BingoCard2.vue'
import BingoCard3 from '../components/templates/BingoCard3.vue'
import BingoCard4 from '../components/templates/BingoCard4.vue'
import BingoCard5 from '../components/templates/BingoCard5.vue'
import MysteryCard from '../components/templates/MysteryCard.vue'

export default {
  name: 'Home',
  components: {
    BingoCard1,
    BingoCard2,
    BingoCard3,
    BingoCard4,
    BingoCard5,
    MysteryCard
  },

  data: () => ({
    //state

    defaultTier: true, 
    defaultTier2: false,
    defaultTier3: false,
    defaultTier4: false,
    defaultTier5: false,
    defaultTierMystery: false,
    tier1: false,
    tier2: false,
    tier3: false,
    tier4: false,
    tier5: false,
    tierMystery: false,
    team1Score: 63,
    team2Score: 36,
    team3Score: 0,
    team4Score: 0,

    disabled1: 0,
    disabled2: 0,
    disabled3: 0,
    disabled4: 0,

    dialog: false,

    completedTiles: null,

    mystery1: false,
    mystery2: false,
    mystery3: false,
    mystery4: false,
    cudgel: false,
    runiteLimbs: false,
    bracelet: false,
    fireCape: false,
    unsired: false,
    grotesqueGuardians: false,
    scurriusSpine: false,
    zenyte: false,
    venator: false,
    cerberusCrystals: false,
    bloodShard: false,
    runeMedHelm: false,
    zulrah: false,
    odiumMalediction: false,
    dt2: false,
    crystalSeed: false,
    whipTrident: false,
    gwdArmor: false,
    gwdWeapon: false,
    sceptre: false,
    crystalToolSeed: false,
    smokeBattlestaff: false,
    raidsPurp: false,
    nightmare: false,
    nex: false,
    corpSigil: false,
    megaRare: false,
    
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
    }*/
    isTeam1Open() {
      if (this.disabled1 == 0)
      {
        this.disabled1 = 1
      }
      else
      {
        this.disabled1 = 0
        this.tier1 = false,
        this.tier2 = false,
        this.tier3 = false,
        this.tier4 = false,
        this.tier5 = false,
        this.tierMystery = false
      }
    },

    isTeam2Open() {
      if (this.disabled2 == 0)
      {
        this.disabled2 = 1
      }
      else
      {
        this.disabled2 = 0
        this.tier1 = false,
        this.tier2 = false,
        this.tier3 = false,
        this.tier4 = false,
        this.tier5 = false,
        this.tierMystery = false
      }
    },

    isTeam3Open() {
      if (this.disabled3 == 0)
      {
        this.disabled3 = 1
      }
      else
      {
        this.disabled3 = 0
        this.tier1 = false,
        this.tier2 = false,
        this.tier3 = false,
        this.tier4 = false,
        this.tier5 = false,
        this.tierMystery = false
      }
    },

    isTeam4Open() {
      if (this.disabled4 == 0)
      {
        this.disabled4 = 1
      }
      else
      {
        this.disabled4 = 0
        this.tier1 = false,
        this.tier2 = false,
        this.tier3 = false,
        this.tier4 = false,
        this.tier5 = false,
        this.tierMystery = false
      }
    },

    changeOffDefaultBoard(team)
    {      
      if (this.defaultTier == true)
      {
        this.tier1 = true
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
        this.defaultTier5 = false
        this.defaultTierMystery = false
        this.selected_team = team
      }
      else if (this.defaultTier2 == true)
      {
        this.tier2 = true
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
        this.defaultTier5 = false
        this.defaultTierMystery = false
        this.selected_team = team
      }
      else if (this.defaultTier3 == true)
      {
        this.tier3 = true
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
        this.defaultTier5 = false
        this.defaultTierMystery = false
        this.selected_team = team
      }
      else if (this.defaultTier4 == true)
      {
        this.tier4 = true
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
        this.defaultTier5 = false
        this.defaultTierMystery = false
        this.selected_team = team
      }
      else if (this.defaultTier5 == true)
      {
        this.tier5 = true
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
        this.defaultTier5 = false
        this.defaultTierMystery = false
        this.selected_team = team
      }
      else if (this.defaultTierMystery == true)
      {
        this.tierMystery = true
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
        this.defaultTier5 = false
        this.defaultTierMystery = false
        this.selected_team = team
      }
      else
      {
        this.tier1 = false
        this.defaultTier = true
        this.selected_team = null
      }
    },

    showBoard(tier) {
      if (tier != "defaultTier")
      {
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
        this.defaultTier5 = false
        this.defaultTierMystery = false
        
        if (tier == "tier1" && this.selected_team != null)
        {
          this.tier1 = true
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tier1" && this.selected_team == null)
        {
          this.defaultTier = true
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tier2" && this.selected_team == null)
        {
          this.defaultTier2 = true
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tier2" && this.selected_team != null)
        {
          this.tier1 = false
          this.tier2 = true 
          this.tier3 = false
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tier3" && this.selected_team == null)
        {
          this.defaultTier3 = true 
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tier3" && this.selected_team != null)
        {
          this.tier1 = false
          this.tier2 = false
          this.tier3 = true
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tier4" && this.selected_team == null)
        {
          this.defaultTier4 = true
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tier4" && this.selected_team != null)
        {
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = true
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tier5" && this.selected_team == null)
        {
          this.defaultTier5 = true
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tier5" && this.selected_team != null)
        {
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
          this.tier5 = true
          this.tierMystery = false
        }
        if (tier == "tierMystery" && this.selected_team == null)
        {
          this.defaultTierMystery = true
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = false
        }
        if (tier == "tierMystery" && this.selected_team != null)
        {
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
          this.tier5 = false
          this.tierMystery = true
        }
      }
      else
      {
        this.defaultTier = true
        this.tier1 = false
        this.tier2 = false
        this.tier3 = false
        this.tier4 = false
        this.tier5 = false
        this.tierMystery = false
      }
    }
  },

  created() {
   //this.showTeamBoard()

   this.team1 = {
      team_name: "Gielinor's Gaggers",
      members: ["Miilky", "Thicc Six", "IM B1G J0HN", "Dacoyda", "Glizzy", "JoeyFool", "PapaPink", "CanceIIed"],
      completedTiles: [
        this.cudgel= false,
        this.runiteLimbs= true,
        this.bracelet= true,
        this.fireCape= true,
        this.unsired= true,
        this.grotesqueGuardians= true,
        this.scurriusSpine= true,
        this.zenyte= true,
        this.venator= true,
        this.cerberusCrystals= true,
        this.bloodShard= false,
        this.runeMedHelm= true,
        this.zulrah= false,
        this.odiumMalediction= false,
        this.dt2= true,
        this.crystalSeed= false,
        this.whipTrident= true,
        this.gwdArmor= true,
        this.gwdWeapon= true,
        this.sceptre= false,
        this.crystalToolSeed= false,
        this.smokeBattlestaff= true,
        this.raidsPurp= true,
        this.nightmare= true,
        this.nex= false,
        this.corpSigil= false,
        this.megaRare= false,
        this.mystery1 = false,
        this.mystery2= true,
        this.mystery3= true,
        this.mystery4= true ]
    },

    this.team2 = {
      team_name: "Blasted Baddies",
      members: ["Bridgebon", "Gamer Fuel", "Renting a gf", "Dunnsterin", "FlannL", "KitsuneWife", "Prey", "Saiyanwho"  ],
      completedTiles: [ 
        this.cudgel= false,
        this.runiteLimbs= true,
        this.bracelet= true,
        this.fireCape= true,
        this.unsired= true,
        this.grotesqueGuardians= false,
        this.scurriusSpine= false,
        this.zenyte= false,
        this.venator= true,
        this.cerberusCrystals= false,
        this.bloodShard= false,
        this.runeMedHelm= false,
        this.zulrah= false,
        this.odiumMalediction= false,
        this.dt2= false,
        this.crystalSeed= true,
        this.whipTrident= false,
        this.gwdArmor= true,
        this.gwdWeapon= true,
        this.sceptre= true,
        this.crystalToolSeed= false,
        this.smokeBattlestaff= true,
        this.raidsPurp= false,
        this.nightmare= false,
        this.nex= false,
        this.corpSigil= false,
        this.megaRare= false,
        this.mystery1 = false,
        this.mystery2= true,
        this.mystery3= true,
        this.mystery4= false ]
    }
  }
}
</script>

<style>
.runescape {
  font-family: 'RuneScape UF';
  color: #ffff00;
  text-align: center;
}     

.rules {
  text-align: left; 
  line-height: 1.02; 
  font-size: 2rem;
}

.top{
  margin-top: 0px;
}

.jumbo {
  font-size: 6rem;
  line-height: 1.02;
  font-weight: 500;
}

.name {
  font-size: 2rem;
  line-height: 1.02;
  font-weight: 500;
}
</style>