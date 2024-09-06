# Mi Página Web con Posicionamiento CSS y Modo Oscuro/Claro

Este proyecto lo hice para practicar el uso de posiciones en CSS como sticky, absolute y otras. También agregué un botón para alternar entre modo claro y oscuro. El diseño tiene un estilo inspirado en cyberpunk y Matrix, usando HTML, CSS y JavaScript.

## ¿Qué tiene este proyecto?

1. **Header Sticky**: El encabezado se mantiene visible siempre, sin importar cuánto bajes en la página. Le puse un fondo oscuro para que resalte.

2. **Navegación Sticky**: La barra de navegación también se queda fija, justo debajo del encabezado. Aquí puedes ver las opciones del menú como "Inicio", "Acerca de", etc., además del botón para cambiar entre el modo claro y oscuro.

3. **Botón "Leer más"**: En cada sección, los textos están acortados, pero cuando haces clic en "Leer más", el texto se expande. Si lo prefieres, puedes ocultarlo de nuevo. El botón tiene un efecto cuando pasas el cursor y un sonido al hacer clic, además de que el cursor cambia de estilo para darle un toque interactivo.

4. **Pie de Página (Footer)**: El footer aparece cuando llegas al final del scroll, con un efecto elegante para que no esté fijo todo el tiempo, sino que solo lo veas al final.

5. **Modo Claro/Oscuro**: Se puede alternar entre un fondo claro o uno oscuro con un botón. El modo oscuro es el que aparece por defecto, pero si te gusta más el fondo claro, puedes cambiarlo en cualquier momento.

6. **Estilo Cyberpunk y Matrix**: El diseño tiene colores brillantes y sombras futuristas, dándole un aspecto inspirado en el estilo cyberpunk.

## Cosas que Aprendí

- Cómo usar `position: sticky` para mantener los elementos visibles mientras navegas por la página.
- Cómo usar `position: absolute` y `relative` para posicionar botones dentro de contenedores de manera precisa.
- Crear efectos de hover en botones y agregar sonidos con JavaScript.
- Cambiar entre temas claro y oscuro usando solo CSS y JavaScript.

## Cómo Funciona el Código

### 1. **HTML**

En el archivo HTML, organizo toda la estructura de la página con etiquetas comunes como `<header>`, `<nav>`, `<section>`, y `<footer>`. El `<header>` contiene el título principal de la página, mientras que `<nav>` tiene una lista de navegación para moverse entre las diferentes secciones. Cada `<section>` tiene un texto inicial que se puede expandir con el botón "Leer más".

Para el botón de modo oscuro/claro, uso un `<button>` dentro del menú de navegación, y este botón tiene un ícono de luna y sol que cambia el tema al hacer clic. Esto lo controlo con un evento en JavaScript.

### 2. **CSS**

En el CSS uso varias propiedades de `position` para darle vida a la página. Por ejemplo:

- El `header` y el `nav` usan `position: sticky` para que se queden fijos en la parte superior cuando el usuario baja por la página.
- Los botones "Leer más" dentro de las secciones están alineados con `position: absolute` en la esquina inferior derecha de cada sección. Para que esto funcione bien, cada sección tiene `position: relative`.
  
Además, en las secciones agrego animaciones para que aparezcan cuando haces scroll hacia abajo, usando `opacity` y `transform`. También hay efectos de hover para que los botones brillen al pasarles el cursor encima, lo que le da ese estilo futurista y de "cyber glow" que recuerda a películas como Matrix o a videojuegos de cyberpunk.

### 3. **JavaScript**

En el JavaScript controlo tres cosas clave:

1. **Cambio de Tema (Claro/Oscuro)**: Cuando el usuario presiona el botón de "Cambiar Modo", el script alterna las clases `light-mode` en varios elementos (`body`, `header`, `nav`, `footer`, y cada sección). Esto cambia los colores y fondos según el tema, dando la opción de un modo más claro y legible, o un modo oscuro más futurista.

2. **Animación al Hacer Scroll**: Usé un `EventListener` para detectar cuándo haces scroll. Cada vez que te desplazas hacia abajo, se evalúa la posición de cada sección y si está lo suficientemente visible, se le agrega la clase `visible`, lo que dispara una animación de desvanecimiento y deslizamiento hacia arriba.

3. **Expansión de Texto**: Cada botón "Leer más" está vinculado a su respectivo párrafo de texto dentro de la sección. Cuando se hace clic, el texto se expande o se oculta, y el botón cambia de texto entre "Leer más" y "Leer menos". Esto le da más dinamismo a la página, permitiendo que el contenido sea más manejable visualmente.

---
