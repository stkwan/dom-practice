$(document).ready(function() {
  // alert("Hello World!")
  let $form = $("form");
  let $currentKey;

  $form.on("click", (event) => {
    event.preventDefault();
    $currentKey = $("#currentkey").val();

    $(document).off("keypress").on("keypress", (e) => {
      let pressedKey = e.key;
      if ($currentKey !== pressedKey) { return; }
      $("a").trigger("click");
    });
  });

  $("a").on("click", (e) => {
    e.preventDefault();
    $("#accordian").slideToggle();
  });
});