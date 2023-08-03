<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import "anov-gis-sdk/dist/anov-gis-sdk/index.css";
import ANOVGIS from "anov-gis-sdk/dist/anov-gis-sdk/anov-gis-sdk.js";
global.ANOVGIS = ANOVGIS;

export default {
  name: "App",
  components: {},
  mounted() {
    window.viewer = new ANOVGIS.Viewer("cesiumContainer", {
      vrButton: false,
      baseLayerPicker: true,
      fullscreenButton: true,
      homeButton: true,
      sceneModePicker: true,
      navigationHelpButton: true,
    });
    ANOVGIS.WidgetsControl.showAllControls({
      index: 4,
    });
  },
};
</script>

<style>
html,
body,
#cesiumContainer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
