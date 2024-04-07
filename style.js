/*const btnAbrirModal =
    document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
    document.querySelector("#btn-cerrar-modal");
const modal =
    document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
    modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
    modal.close();
});


const btnAbrirModal1 =
    document.querySelector("#btn-abrir-modal1");
const btnCerrarModal1 =
    document.querySelector("#btn-cerrar-modal1");
const modal1 =
    document.querySelector("#modal1");

btnAbrirModal1.addEventListener("click", () => {
    modal1.showModal();
});

btnCerrarModal1.addEventListener("click", () => {
    modal1.close();
});


const btnAbrirModal3 =
    document.querySelector("#btn-abrir-modal3");
const btnCerrarModal3 =
    document.querySelector("#btn-cerrar-modal3");
const modal3 =
    document.querySelector("#modal3");

btnAbrirModal3.addEventListener("click", () => {
    modal3.showModal();
});

btnCerrarModal3.addEventListener("click", () => {
    modal3.close();
});


const btnAbrirModal4 =
    document.querySelector("#btn-abrir-modal4");
const btnCerrarModal4 =
    document.querySelector("#btn-cerrar-modal4");
const modal4 =
    document.querySelector("#modal4");

btnAbrirModal4.addEventListener("click", () => {
    modal4.showModal();
});

btnCerrarModal4.addEventListener("click", () => {
    modal4.close();
});*/


const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
})
}


