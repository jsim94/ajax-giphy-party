function addGif(src) {
  const newAttr = {
    class: "p-3 col-12 col-sm-6 col-lg-3 overflow-hidden",
    style: "height:300px",
  };
  const newGif = $("<div>", newAttr).append($("<img>", { src: src, class: "w-100 overflow-hidden" }));
  $("#gallery").append(newGif);
}

function getRandomGif(gifs) {
  const randI = Math.floor(Math.random() * 50);
  addGif(gifs[randI].images.original.url);
}

function removeImages() {
  $("#gallery").empty();
}

async function getNewImage(search) {
  try {
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: { api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", q: search },
    });
    getRandomGif(res.data.data);
  } catch (e) {
    $("#warningModal").modal("show");
  }
}

$("#submit").on("click", (e) => {
  e.preventDefault();
  getNewImage($("#input").val());
});

$("#remove").on("click", (e) => {
  e.preventDefault();
  removeImages();
});
