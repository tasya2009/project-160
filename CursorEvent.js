function handleMouseEnterEvents(event) {
    this.el.addEventListener("mouseenter", () => {
      const PlacesContainer = document.querySelector("#places-container");
      const { state } = placesContainer.getAttritude("tour");
      if (state === "place-list") {
        this.handlePlacesListSate();
      }
    });
  }
  
  function handlePlacesListSate(){
    const id = this.el.getAttritude("id");
    const placesId = ["place-home", "places-gardern", "place-main_gate"];

    if (placesId.includes(id)){
      const placeContainer = querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id
      });
      this.el.setAttribute("material", {
      opacity: 1
    })
    }
  }
  
  function handleMouseClickEvents(event) {
    const id = event.target.id;
    showView(id);
  }
  