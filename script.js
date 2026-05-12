const btnDark = document.getElementById('btn-dark');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Cambiamos el texto del botón según el modo
    if (document.body.classList.contains('dark-theme')) {
        btnDark.textContent = '☀️ Modo Claro';
    } else {
        btnDark.textContent = '🌙 Modo Oscuro';
    }
});

// Seleccionamos todos los botones de comprar
const botones = document.querySelectorAll('.btn-comprar');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        alert('¡Excelente elección! Este reloj ha sido añadido a tu lista de interés.');
    });
});

// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto visual al hacer clic en cualquier producto
    const productos = document.querySelectorAll('.flexbox__items');

    productos.forEach(producto => {
        producto.addEventListener('click', () => {
            const nombre = producto.querySelector('.nombre__producto').textContent;
            const precio = producto.querySelector('.precio__producto').textContent;
            
            // Creamos una alerta personalizada simple
            alert(`Has seleccionado el ${nombre}.\nPrecio: ${precio}\n\nUn asesor de Bissun se contactará con usted a la brevedad para proceder con la compra.`);
        });

        // 2. Cambio de estilo suave al pasar el mouse (opcional, refuerza la interactividad)
        producto.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        producto.style.cursor = "pointer";
    });

    // 3. Validación rápida para los enlaces vacíos (Envíos, Quejas, etc.)
    const enlacesVacios = document.querySelectorAll('a[href=""]');
    enlacesVacios.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Esta sección estará disponible próximamente en la versión 2.0 de Bissun.");
        });
    });
});