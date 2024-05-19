<template>
    <v-app style="background-color: black;">
      <v-container>
        <v-col cols="12" style="background-color: black;">
          <div>
            <canvas class="confetti-canvas" id="confetti-canvas"></canvas>
            <h1 class="runescape jumbo" style="text-align: center;  position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);">Unmerged Bingo</h1>
            <h1 class="runescape jumbo" style="text-align: center;  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">June 21st - June 23rd</h1>
          </div>
        </v-col>
    </v-container>
  </v-app>
</template>

<script>
import confetti from 'canvas-confetti';

export default {

  name: 'Home',

  components: {
  },

  data: () => ({
    //state

  }),

  mounted() {
  //this.triggerConfetti();
  },

  methods: {
  triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    confetti.create(canvas, {
      resize: true,
      useWorker: true,
    })({ particleCount: 200, spread: 200 });
  },
},
  created() {
   //this.showTeamBoard()
   },
}
</script>

<style>
@font-face {
  font-family: "Runescape UF";
  src: url(https://github.com/runelite/runelite/blob/master/runelite-client/src/main/resources/net/runelite/client/ui/runescape.ttf) format("truetype");
}

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

.confetti-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
}

</style>