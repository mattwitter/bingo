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
                    <h4 class="pt-10 rules">1. Bingo Starts on 5/21/2023 at 12:00 AM EST</h4>
                    <h4 class="pt-5 rules">2. You MUST complete Three Tier One tiles to unlock Tier Two, Two Tier Two tiles to unlock Tier Three, and One Tier Three tile to unlock Tier 4.  Any tiles completed in locked tiers 
                      will not be acknowledged and must be completed again once the respective tier is unlocked.</h4>
                    <h4 class="pt-5 rules">3. Barrows logs must be shared in your respective teams discord channels once bingo has begun.</h4>
                    <h4 class="pt-5 rules">4. Make sure you have the "Clan Events" Plugin enabled with the Bingo Codeword and Date/Time Visible in all tile submissions.</h4>
                    <h4 class="pt-5 rules">5. If you can not complete a tile on the account signed up and must complete on main, please make sure only one account is logged in at a time for the duration of bingo.
                      Players found logged into multiple accounts at once for the duration of bingo will be disqualified. 
                    </h4>
                    <h4 class="pt-5 rules">6. Alts may be used to run supplies, but may not be used to aid in the completion of any tile for any reason (Tanking, Safespotting, etc.)</h4>
                    <h4 class="pt-5 rules">7. Any Players not actively participating in the event may be removed from the team at mods discretion.</h4>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h2 class="mr-12 ml-n12 runescape jumbo" style="text-align: center; font-size: 3rem;">
              Bingo Code: TBA
            </h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <h2 class="runescape text-darken-4 jumbo">TEAMS</h2>

            <v-container class="">
            <v-expansion-panels class="runescape">
              <v-expansion-panel v-bind:disabled="disabled2 == 1 || disabled3 == 1 || disabled4 == 1" class="runescape" style="color: #ffff00; background-color: black; text-align: left;"  @click="changeOffDefaultBoard(team1), isTeam1Open()">
                <v-expansion-panel-header class="runescape">
                  {{ team1.team_name + ' - ' + team1Score}}
                  
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(item,i) in 5"
                  :key="i"
                  class=""
                >
                 {{ team1.members[i] }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-spacer></v-spacer>

            <v-expansion-panels class="runescape">
              <v-expansion-panel v-bind:disabled="disabled1 == 1 || disabled3 == 1 || disabled4 == 1" class="runescape" style="color: #ffff00; background-color: black; text-align: left;" @click="changeOffDefaultBoard(team2), isTeam2Open()">
                <v-expansion-panel-header class="runescape">
                  {{ team2.team_name + ' - ' + team2Score}}
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(item,i) in 5"
                  :key="i"
                  class=""
                >
                 {{ team2.members[i] }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

          <v-spacer></v-spacer>

            <v-expansion-panels class="runescape">
              <v-expansion-panel v-bind:disabled="disabled1 == 1 || disabled2 == 1 || disabled4 == 1" class="runescape" style="color: #ffff00; background-color: black; text-align: left;"   @click="changeOffDefaultBoard(team3), isTeam3Open()">
                <v-expansion-panel-header class="runescape">
                  {{ team3.team_name + ' - ' + team3Score}}
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(item,i) in 5"
                  :key="i"
                  class=""
                >
                 {{ team3.members[i] }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          
          <v-spacer></v-spacer>

            <v-expansion-panels class="runescape">
              <v-expansion-panel v-bind:disabled="disabled1 == 1 || disabled2 == 1 || disabled3 == 1" class="runescape" style="color: #ffff00; background-color: black; text-align: left;"   @click="changeOffDefaultBoard(team4), isTeam4Open()">
                <v-expansion-panel-header class="runescape">
                  {{ team4.team_name + ' - ' + team4Score}}
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  v-for="(item,i) in 5"
                  :key="i"
                  class=""
                >
                {{ team4.members[i] }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
                width="25%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tier1')"
              >
                Tier 1
              </v-btn>
              <v-btn
                width="25%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tier2')"
              >
                Tier 2
              </v-btn>
              <v-btn
                width="25%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tier3')"
              >
                Tier 3
              </v-btn>
              <v-btn
                width="25%"
                class="mr-1 runescape" 
                color="grey"
                style="color:#ffff00;"
                @click="showBoard('tier4')"
              >
                Tier 4
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

export default {
  name: 'Home',
  components: {
    BingoCard1,
    BingoCard2,
    BingoCard3,
    BingoCard4,
  },

  data: () => ({
    //state

    defaultTier: true, 
    defaultTier2: false,
    defaultTier3: false,
    defaultTier4: false,
    tier1: false,
    tier2: false,
    tier3: false,
    tier4: false,
    team1Score: 0,
    team2Score: 0,
    team3Score: 0,
    team4Score: 0,

    disabled1: 0,
    disabled2: 0,
    disabled3: 0,
    disabled4: 0,

    dialog: false,

    completedTiles: null,

    mystery: false,
    lockpick: false,
    thread: false,
    pureEss: false,
    bracelet: false,
    fireCape: false,
    gnomeScarf: false,
    dragonMed: false,
    seerCull: false,
    zenyte: false,
    venator: false,
    dpick: false,
    vorkathHead: false,
    saraSwordLight: false,
    zulrah: false,
    odiumMalediction: false,
    wardRing: false,
    crystalSeed: false,
    coxPrayer: false,
    holyElixir: false,
    zammy: false,
    bandosArmaArmour: false,
    gwdHilt: false,
    barrows: false,
    acb: false,
    bloodShard: false,
    masori: false,
    voidwaker: false,
    nightmare: false,
    nex: false,
    corpSigil: false,
    coxPurple: false,
    tobPurple: false,
    revWeapon: false,
    
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
        this.selected_team = team
      }
      else if (this.defaultTier2 == true)
      {
        this.tier2 = true
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
        this.selected_team = team
      }
      else if (this.defaultTier3 == true)
      {
        this.tier3 = true
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
        this.selected_team = team
      }
      else if (this.defaultTier4 == true)
      {
        this.tier4 = true
        this.defaultTier = false
        this.defaultTier2 = false
        this.defaultTier3 = false
        this.defaultTier4 = false
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

        if (tier == "tier1" && this.selected_team != null)
        {
          this.tier1 = true
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
        }
        if (tier == "tier1" && this.selected_team == null)
        {
          this.defaultTier = true
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
        }
        if (tier == "tier2" && this.selected_team == null)
        {
          this.defaultTier2 = true
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
        }
        if (tier == "tier2" && this.selected_team != null)
        {
          this.tier1 = false
          this.tier2 = true 
          this.tier3 = false
          this.tier4 = false
        }
        if (tier == "tier3" && this.selected_team == null)
        {
          this.defaultTier3 = true 
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
        }
        if (tier == "tier3" && this.selected_team != null)
        {
          this.tier1 = false
          this.tier2 = false
          this.tier3 = true
          this.tier4 = false
        }
        if (tier == "tier4" && this.selected_team == null)
        {
          this.defaultTier4 = true
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = false
        }
        if (tier == "tier4" && this.selected_team != null)
        {
          this.tier1 = false
          this.tier2 = false
          this.tier3 = false
          this.tier4 = true
        }
      }
      else
      {
        this.defaultTier = true
        this.tier1 = false
        this.tier2 = false
        this.tier3 = false
        this.tier4 = false
      }
    }
  },

  created() {
   //this.showTeamBoard()
   this.team1 = {
      team_name: "Nieve's Naughty Boys",
      members: ["B1G J0HN", "Miilky", "Ya_Boy_Pappy", "He was NR1", "PapaPink"],
      completedTiles: [this.mystery = false, this.lockpick = false, this.thread = false, this.pureEss = false, this.bracelet = false, this.fireCape = false, this.gnomeScarf = false, this.dragonMed = false, this.seerCull = false, this.zenyte = false, this.venator = false, this.dpick = false, this.vorkathHead = false, this.saraSwordLight = false, this.zulrah = false, this.odiumMalediction = false, this.wardRing = false, this.crystalSeed = false, this.coxPrayer = false, this.holyElixir = false, this.zammy = false, this.bandosArmaArmour = false, this.gwdHilt = false, this.barrows = false, this.acb = false, this.bloodShard = false, this.masori = false, this.voidwaker = false, this.nightmare = false, this.nex = false, this.corpSigil = false, this.coxPurple = false, this.tobPurple = false, this.revWeapon = false ]
    },
    
    this.team2 = {
      team_name: "DASG Whorehouse",
      members: [":Dacoyda:", "Thicc Six", "Renting a gf", "HighAlchemist", "l glizzy l"],
      completedTiles: [this.mystery = false, this.lockpick = false, this.thread = false, this.pureEss = false, this.bracelet = false, this.fireCape = false, this.gnomeScarf = false, this.dragonMed = false, this.seerCull = false, this.zenyte = false, this.venator = false, this.dpick = false, this.vorkathHead = false, this.saraSwordLight = false, this.zulrah = false, this.odiumMalediction = false, this.wardRing = false, this.crystalSeed = false, this.coxPrayer = false, this.holyElixir = false, this.zammy = false, this.bandosArmaArmour = false, this.gwdHilt = false, this.barrows = false, this.acb = false, this.bloodShard = false, this.masori = false, this.voidwaker = false, this.nightmare = false, this.nex = false, this.corpSigil = false, this.coxPurple = false, this.tobPurple = false, this.revWeapon = false ]
    },

    this.team3 = {
      team_name: "Existential Confirmation",
      members: ["Dun", "Britster34", "Lossow", "I am budcode", "Wake"],
      completedTiles: [this.mystery = false, this.lockpick = false, this.thread = false, this.pureEss = false, this.bracelet = false, this.fireCape = false, this.gnomeScarf = false, this.dragonMed = false, this.seerCull = false, this.zenyte = false, this.venator = false, this.dpick = false, this.vorkathHead = false, this.saraSwordLight = false, this.zulrah = false, this.odiumMalediction = false, this.wardRing = false, this.crystalSeed = false, this.coxPrayer = false, this.holyElixir = false, this.zammy = false, this.bandosArmaArmour = false, this.gwdHilt = false, this.barrows = false, this.acb = false, this.bloodShard = false, this.masori = false, this.voidwaker = false, this.nightmare = false, this.nex = false, this.corpSigil = false, this.coxPurple = false, this.tobPurple = false, this.revWeapon = false ]
    },

    this.team4 = {
      team_name: "Thurgo's Thotties",
      members: ["Bridgebon", "Gamer fuel", "Sycrem", "Some Guy"],
      completedTiles: [this.mystery = false, this.lockpick = false, this.thread = false, this.pureEss = false, this.bracelet = false, this.fireCape = false, this.gnomeScarf = false, this.dragonMed = false, this.seerCull = false, this.zenyte = false, this.venator = false, this.dpick = false, this.vorkathHead = false, this.saraSwordLight = false, this.zulrah = false, this.odiumMalediction = false, this.wardRing = false, this.crystalSeed = false, this.coxPrayer = false, this.holyElixir = false, this.zammy = false, this.bandosArmaArmour = false, this.gwdHilt = false, this.barrows = false, this.acb = false, this.bloodShard = false, this.masori = false, this.voidwaker = false, this.nightmare = false, this.nex = false, this.corpSigil = false, this.coxPurple = false, this.tobPurple = false, this.revWeapon = false ]
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

.teamname {
  font-size: 2rem;
}
</style>