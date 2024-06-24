<template>
  <v-app style="background-color: black;">
    <v-container class="container">
      <v-col xl="12" md="6" sm="3" style="background-color: black;">
        <div class="content">
          <canvas class="confetti-canvas" id="confetti-canvas"></canvas>
          <h1 class="runescape jumbo" style="text-align: center;">GIELINOR'S GAGGERS WIN!!!</h1>
          
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import confetti from 'canvas-confetti';

export default {
  name: 'Home',
  components: {},
  data: () => ({}),
  mounted() {
    this.triggerConfetti();
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
  font-family: 'Runescape UF';
  src: url('../assets/fonts/runescape.ttf') format('truetype');
}

.runescape {
  font-family: 'Runescape UF';
  font-weight: bold;
  color: #ffff00;
  text-align: center;
}

.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Take full viewport height */
}

.content {
  text-align: center; /* Center content inside the div */
}

.rules {
  text-align: left;
  line-height: 1.02;
  font-size: 2rem;
}

.title {
  font-size: 6rem;
}

.subtitle {
  font-size: 3rem;
}
.top {
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
