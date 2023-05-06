<template>
  <v-card
    class="mx-auto"
    height="100%"
  >
    <v-card-text class="pt-0">
      <div class="text-h6 font-weight-light mb-2">
        {{ tileName }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TileCard",

  props: {
    color: {
      type: String,
      required: true
    },

    tileName: {
      type: String,
      required: true,
    },

    tileInfo: {
      type: String,
      required: true,
    },
  },
}
</script>