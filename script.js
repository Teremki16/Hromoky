$(document).ready(function () {
  
  let count = JSON.parse(localStorage.getItem("count")) || 0;
  let note = JSON.parse(localStorage.getItem("data")) || []
  draw()

  let lastChange = 0;
  $("#add").on("click", () => {
    if ($("#iner").val() && ($("#text").val() || !$("#text").val())) {
      let inor = $("#iner").val()
      let text = $("#text").val()
      let data = new Date().getTime()
      note[count] = `
      <div class="item i${count}">
        <h2 id="title${count}">${inor}</h2>
        <h3 id="text${count}">${text}</h3>
        <h4 id="data">${new Date(data).toDateString()}</h4>
        <div class="signs">
          <i class="fas fa-trash"></i>
          <i class="fas fa-thumbtack"></i>
          <i class="fas fa-pen"></i>
        </div>
      </div>`
      count++;
      draw()
      $("#iner").val('')
      $("#text").val('')
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
  function delere(e) {
    note = note.filter((n) => n.indexOf(e) == -1)
  }
  function draw() {
    $(".notes").empty()
    note.forEach((n) => {
      $(".notes").append(n)
    })
    localStorage.setItem('data', JSON.stringify(note));
    localStorage.setItem('count', JSON.stringify(count));
  }

  $(document).on("click", ".fa-pen", function () {
    $(".overlay").css("display", "flex");
    let newTitle = $(this).parent().parent().children("h2").text()
    let newText = $(this).parent().parent().children("h3").text()
    $("#changeTitle").val(newTitle)
    $("#changeText").val(newText)
    lastChange = $(this).parent().parent().attr("class")
  })
  $("#change").on("click", function () {
    newTitle = $('#changeTitle').val()
    newText = $("#changeText").val()
    console.log(lastChange.slice(6))
    let elem = note.find(e => e.indexOf(lastChange) != -1)
    note[note.indexOf(elem)] = `
    <div class="${lastChange}">
    <h2 id="title${lastChange.slice(6)}">${newTitle}</h2>
    <h3 id="text${lastChange.slice(6)}">${newText}</h3>
    <h4 id="data">${new Date(new Date().getTime()).toDateString()}</h4>
    <div class="signs">
      <i class="fas fa-trash"></i>
      <i class="fas fa-thumbtack"></i>
      <i class="fas fa-pen"></i>
    </div>
  </div>`
    $(".overlay").css("display", "none");
    draw()
  })

  $("#cancel").on("click", function () {
    $(".overlay").css("display", "none");
  })
})




