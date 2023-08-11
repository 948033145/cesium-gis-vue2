<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import "@anov/gis/dist/index.css";
import ANOVGIS from "@anov/gis";
export default {
  name: "App",
  components: {},
  mounted() {
    const cesiumSourcePath = 'http://localhost:8080/resources/';
    ANOVGIS.setBaseUrl(cesiumSourcePath);
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
