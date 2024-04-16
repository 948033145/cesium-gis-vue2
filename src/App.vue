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
    window.viewer = new ANOVGIS.Viewer("cesiumContainer", {
      geocoderType: ANOVGIS.GeocoderType.TIANDITU,
      vrButton: false,
      baseLayerPicker: true,
      fullscreenButton: true,
      homeButton: true,
      sceneModePicker: true,
      navigationHelpButton: true,
      copyRight: false,
      showMapInfo: true,
    });
    viewer.setOptions({
      showAtmosphere: false,
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
