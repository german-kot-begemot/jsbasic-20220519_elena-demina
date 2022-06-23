import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.elem = this.createModal();
  }

  createModal() {
    let elem = createElement(`
      <div class="modal">
          <!--Прозрачная подложка перекрывающая интерфейс-->
          <div class="modal__overlay"></div>

          <div class="modal__inner">
            <div class="modal__header">
              <!--Кнопка закрытия модального окна-->
              <button type="button" class="modal__close">
                <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
                </button>

              <h3 class="modal__title"></h3>
            </div>
            <div class="modal__body"></div>
          </div>

        </div>
    `);

    elem.querySelector(".modal__close").addEventListener("click", (event) => {
      event.preventDefault();
      this.close();
    });

    document.addEventListener(
      "keydown",
      (event) => {
        if (event.code == "Escape") {
          this.close();
        }
      },
      { once: true }
    );

    return elem;
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add("is-modal-open");
  }

  setBody(node) {
    let modalBody = this.elem.querySelector(".modal__body");
    modalBody.innerHTML = ``;
    modalBody.append(node);
  }

  setTitle(text) {
    let modalTitle = this.elem.querySelector(".modal__title");
    modalTitle.innerText = text;
  }

  close() {
    document.body.classList.remove("is-modal-open");
    document.querySelector(".modal")?.remove();
  }
}
