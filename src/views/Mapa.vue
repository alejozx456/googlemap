<template>
  <div>
    <h1>Google Maps Demo</h1>
    <button
      @click="drawMarkers"
      style="width:100px;height: 50px;margin-bottom: 10px;margin-right: 5px;"
    >
      Draw Markers
    </button>
    <button
      @click="drawDirection"
      style="width:100px;height: 50px;margin-bottom: 10px;margin-right: 5px;"
    >
      Draw Direction
    </button>

    <button
      @click="clearMap"
      style="width:100px;height: 50px;margin-bottom: 10px"
    >
      Clear Map
    </button>

    <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="16">
      <GmapMarker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        :clickable="true"
        :icon="item.icon"
        @click="toggleInfoWindow(item, index)"
      />
      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
      </gmap-info-window>
      <gmap-polygon v-if="paths.length > 0" :paths="paths" ref="polygon">
      </gmap-polygon>
    </GmapMap>
  </div>
</template>

<script>
const home = { lat: 53.462118, lng: -2.249097 };
const work = { lat: 53.464144, lng: -2.249828 };
const lugar = { lat: 53.464144, lng: -2.248872 };
const homeToWorkCoords = [home, work,lugar];
export default {
  data() {
    return {
      center: home,
      mapTypeId: "terrain",
      markers: [],
      image: "./assets/ub__marker_pickup_walk.png",
      paths: [],
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        content: "",
        //optional: offset infowindow so it visually sits nicely on top of our marker
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  mounted() {},
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    drawDirection() {
      this.paths = homeToWorkCoords;
    },
    drawMarkers() {
      this.markers = [
        {
          position: work,
          infoText: "<strong>Work</strong>",
          icon: {
            //url: require("./assets/to_location.png"),
            scaledSize: { width: 35, height: 35 },
          },
        },
        {
          position: home,
          infoText: "<strong>Home</strong>",
          icon: {
            //url: require("./assets/from_location.png"),
            scaledSize: { width: 35, height: 35 },
          },
        },
        {
          position: lugar,
          infoText: "<strong>Lugar</strong>",
          icon: {
            //url: require("./assets/from_location.png"),
            scaledSize: { width: 35, height: 35 },
          },
        }
      ];
    },
    clearMap() {
      this.paths = [];
      this.markers = [];
    },
  },
};
</script>

<style scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>