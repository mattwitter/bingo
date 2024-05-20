<template>
  <v-app style="background-color: black;">
    <v-container>
      <v-col cols="12" style="background-color: black;">
        <div>
          <canvas class="confetti-canvas" id="confetti-canvas"></canvas>
          <h1 class="runescape jumbo" style="text-align: center; position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);">Unmerged Bingo</h1>
          <h1 class="runescape jumbo" style="text-align: center; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%);">June 21st - June 23rd</h1>
          <h1 class="runescape" style="text-align: center; position: absolute; top: 47%; left: 50%; transform: translate(-50%, -50%);">5:00 PM EST - 11:59 PM EST</h1>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<style>
/* Common styles for all screen sizes */
.runescape {
  font-family: 'Runescape UF', sans-serif;
  color: #ffff00;
  text-align: center;
}

.rules {
  text-align: left;
  line-height: 1.02;
  font-size: 2rem;
}

.top {
  margin-top: 0px;
}

.jumbo {
  font-size: 6rem;
  line-height: 1.02;
  font-weight: 500;
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

/* Media queries for responsiveness */
@media screen and (max-width: 768px) {
  .jumbo {
    font-size: 4rem; /* Adjust font size for smaller screens */
  }
  .runescape {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
  /* Adjust positioning for smaller screens */
  .jumbo,
  .runescape {
    top: 50%;
  }
}
</style>
