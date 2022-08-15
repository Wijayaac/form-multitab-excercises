class TabForm {
  constructor() {
    this.root = $("main");
    if (!this.root) {
      return;
    }
    this.show();
  }
  show() {
    $(".tab-button").each(function (indexInArray, valueOfElement) {
      $(this).click(function (e) {
        e.preventDefault();
        let target = $(this).attr("data-target");

        $("[data-form]").removeClass("show");

        setTimeout(() => {
          $('[data-form="' + target + '"]').addClass("show");
        }, 100);
      });
    });
  }
}

const tabForm = new TabForm();
