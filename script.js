$(document).ready(function () {
  let note = []
  let count = 0;
  $("#add").on("click", () => {
    if ($("#iner").val() || $("#text").val()) {
      let inor = $("#iner").val()
      let text = $("#text").val()
      let data = new Date().getTime()
      note[count] = `
      <div class="item i${count}">
        <h2 id="h1">${inor}</h2>
        <h3 id="h2">${text}</h3>
        <h3 id="data">${new Date(data).toDateString()}</h3>
        <div class="signs">
          <i class="fas fa-trash"></i>
          <i class="fas fa-thumbtack"></i>
          <i class="fas fa-pen"></i>
        </div>
      </div>`
      count++;
      draw()
    }
    else {
      alertify.error("Write something first")
    }
  })
  $(document).on("click", ".fa-thumbtack", function () {
    $(this).parent().parent().toggleClass("done")
  })
  $(document).on("click", ".fa-trash", function () {
    delere($(this).parent().parent().attr("class"))
    draw()
  })
  $(document).on("click", ".fa-thumbtack", function () {
  });
  function delere(e) {
    note = note.filter((n) => n.indexOf(e) == -1)
  }
  function draw(){
    $(".notes").empty()
    note.forEach((n) => {
      $(".notes").append(n)
    })
  }

})



