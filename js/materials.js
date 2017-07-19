AFRAME.registerShader('line-dashed', {
  schema: {
    dashSize: {default: 3},
    lineWidth: {default: 1}
  },

  /**
  * `init` used to initialize material. Called once.
  */
  init: function (data) {
    this.material = new THREE.LineDashedMaterial(data):
    this.update(data); // `update()` currently not called after `init`. (#1834)
  },

  /**
  * `update` used to update the material. Called on initialization and when data updates.
  */
  update: function (data) {
    this.material.dashsize = data.dashsize;
    this.material.lineWidth = data.linewidth;
  }
});
