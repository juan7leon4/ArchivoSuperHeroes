const modal = document.getElementById('modal-Exitado');

document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Detiene el envío clásico

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value.trim();
    const terms = document.getElementById('contact-terms').checked;

    if (!name || !email || !subject || !message || !terms) {
        alert("Por favor completa todos los campos y acepta los términos y condiciones.");
        return;
    }

    const formData = new FormData();
    formData.append("nombre", name);
    formData.append("email", email);
    formData.append("asunto", subject);
    formData.append("mensaje", message);

    try {
        const response = await fetch("procesar_formulario.php", {
            method: "POST",
            body: formData
        });

        const result = await response.text();
        console.log(result);

        // Mostrar el popup
        modal.style.display = "flex";

        // Ocultarlo automáticamente después de 3 segundos (opcional)
        setTimeout(() => {
            modal.style.display = "none";
            document.getElementById("contact-form").reset(); // Limpiar formulario
        }, 3000);

    } catch (error) {
        alert("Error al enviar el mensaje.");
        console.error("Error:", error);
    }
});
