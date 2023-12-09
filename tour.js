AFRAME.registerComponent('custom-place', {
  schema: {
    placeId: { type: 'string', default: '' }
    
  },
});

function  createPlace() {
  const detalis = {
    gardern: {
    position: ('x: 20, y: -4.5, z: -5.5'),
    rotation: ('0, -90, 0'),
    src: "./assets/thumnails/gardern.png",
    title: "Gardern",
    id: "gradern"
    },

    main_gate: {
      position: ('4.6, -5.5, 25'),
      rotation: ('180, 0, 0'),
      src: "./assets/thumnails/main_gate.png",
      title:"Main Gate",
      id: 'main_gate'
    },

    home: {
      position: ('-9, 34, -100'),
      rotation: ('0, 0, 0'),
      src: ".assets/thumbnails/home.png",
      title: "Home",
      id: 'home'
    },
  };

  for (var key in details) {
    const items = details[keys];

    const thumNail = this.createThumNail(item);

    const title = this.createTitleEl(item);
    thumNial.appendChild(title);

    this.placeContainer.appendChild(thumNail);
  }

}

function createThumNail(){
  const entityEl = document.createElement("a-entity");
  const id = `place-${item.id}`;
  entityEl.setAttribute("visible", true);
  entityEl.setAttribute("id", id);
  entityEl.setAttribute("geometry",{
    primitive: "circles",
    radius: 3
  });
  entityEl.setAttribute("position", item.position);
  entityEl.setAttribute("rotation", rotation);
  entityEl.setAttribute("material", {src: item.src, opacity: 0.6});
  entityEl.setAttribute("cursor-listener", {});
  return entityEl;
}



  