$(document).ready(function () {
  let note=[]
  let count=0;
  $("#add").on("click",()=>{
    if($("#iner").val() || $("#text").val()){
      let inor=$("#iner").val()
      let text=$("#text").val()
      let data=new Date().getTime()
      note[count]=`
      <div class="item">
        <h2 id="h1">${inor}</h2>
        <h3 id="h2">${text}</h3>
        <h3 id="data">${new Date(data).toDateString()}</h3>
        <div class="signs">
          <i class="fas fa-trash"></i>
          <i class="fas fa-thumbtack"></i>
          <i class="fas fa-pen"></i>
        </div>
      </div>`
      note.forEach((n)=>{
        $(".notes").append(n)
      })
    }
    else{
      alertify.error("Write something first")
    }
  })
});
