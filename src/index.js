new Glide(".glide").mount();
$(".glide__bullet").each((i, btn) => {
  $(btn).on("click", (ev) => {
    document.title = ev.currentTarget.innerText;
  });
});
