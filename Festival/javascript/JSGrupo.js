document.addEventListener("DOMContentLoaded", () => {
    const gruposDeMusica = [
        { id: "babymetal", nombre: "BABYMETAL", imagen: "./img/babymetal.png" },
        { id: "gorillaz", nombre: "Gorillaz", imagen: "./img/gorilas.jpg" },
        { id: "riot", nombre: "RIØT", imagen: "./img/riot.jpg" },
        { id: "beatles", nombre: "The Beatles", imagen: "./img/beatels.png" },
        { id: "badbunny", nombre: "Bad Bunny", imagen: "./img/budbuny.jpg" },
        { id: "imaginedragons", nombre: "Imagine Dragons", imagen: "./img/imaginedragons.jpg" },
        { id: "larosalia", nombre: "ROSALÍA", imagen: "./img/rosalia.jpg" },
        { id: "elfary", nombre: "El Fary", imagen: "./img/fary.jpg" },
        { id: "Alfredo", nombre: "ss", url: "./img/gorilas.jpg" }
    ];

    // Datos detallados para cada grupo

    const infoGrupos = {
        babymetal: {
            nombre: "BABYMETAL",
            descripcion: "El grupo idol japonés conocido como BABYMETAL se destaca claramente por su estilo kawaii metal, fusionando ambos mundos en una mezcla de guitarras potentes y baterías agresivas con coreografías y melodías pop seguidas de melodías melodiosas Su gran fama internacional se debe a su originalidad y energéticos conciertos en vivo. ¡No puedes perderte sus baliles y canciones pegadizas!.",
            anioCreacion: "2010",
            componentes: ["SU-METAL (Suzuka Nakamoto)", "MOAMETAL (Moa Kikuchi)", "MOMOMETAL (Momoko Okazaki)"],
            imagen: "./img/babymetal.png",
            video: "https://www.youtube.com/embed/_vur5TnR9Qg?si=B6iQkCfS30v3Jdx2&autoplay=1&mute=1"
        },
        gorillaz: {
            nombre: "Gorillaz",
            descripcion: "Gorillaz es una banda virtual británica creada por el músico Damon Albarn y el artista Jamie Hewlett. Está compuesta por cuatro personajes animados: 2-D, Murdoc, Noodle y Russel. Su música mezcla géneros como rock, hip hop, electrónica y pop. Con álbumes como Demon Days y Plastic Beach, Gorillaz ha sido aclamada por su innovación musical y visual, colaborando con artistas de todo el mundo y presentando sus shows con una fuerte carga audiovisual. ¡¡¡No vas a creer cómo hemos conseguido hacer que los personajes en 2D sean 3D!!!",
            anioCreacion: "1998",
            componentes: ["2-D", "Murdoc Niccals", "Noodle", "Russel Hobbs"],
            imagen: "./img/gorilas.jpg",
            video: "https://www.youtube.com/embed/ECNFBURPpso?si=uQ5ccFcM7dV7wC00&autoplay=1&mute=1"
        },
        riot: {
            nombre: "RIOT",
            descripcion: 'Nacidos y criados en Israel, el dúo DJ que compone RIOT se localizó en Los Ángeles para traer al mundo su mix de canciones con melodías progresivas y bass-lines agresivas, creando tendencia en su género. Su estilo mezcla extremos de música electrónica con metal, influyendo también sus raíces arábigas. RIOT ha lanzado grandes éxitos incluyendo colabroaciones con grandes nombres musicales dentro de su género. ¡Su álbum "Dogma Resistance" ha acumulado más de 85 millones de streams! No esperes más y únete a los disturbios, ¡es hora de mover la cabeza!',
            anioCreacion: "2015",
            componentes: ["Tom Frengler", "Daniel Magid"],
            imagen: "./img/riot.jpg",
            video: "https://www.youtube.com/embed/ABfT0jtWULM?si=I9ESKvkisRTID6tp&autoplay=1&mute=1"
        },
        beatles: {
            nombre: "The Beatles",
            descripcion: "The Beatles, más conocidos en el mundo hispano como Los Beatles, es una banda inglesa de rock formada en Liverpool. Son considerados uno de los iconos culturales más grandes del mundo, ya que desafiaron paradigmas y estereotipos abordando todos los problemas socioculturales de la época. Está considerada como la banda más importante de la historia de la música, si me preguntan, algo sobrevalorados... Prepárate para mover la cadera como nunca lo has hecho con sus últimos temas, lo más de lo más y lo último en tendencias mundiales. ¡Rock and Roll, baby!",
            anioCreacion: "1960",
            componentes: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
            imagen: "./img/beatels.png",
            video: "https://www.youtube.com/embed/C0A7u-PvUeo?si=FISZZ_9BtCT_PmZQ&autoplay=1&mute=1"
        },
        badbunny: {
            nombre: "Bad Bunny",
            descripcion: "Bad Bunny, cuyo nombre real es Benito Antonio Martínez Ocasio, es un cantante y rapero puertorriqueño nacido en 1994. Es una de las figuras más influyentes del reguetón y trap latino, conocido por su estilo innovador, letras directas y versatilidad musical. Saltó a la fama mundial lanzado varios álbumes exitosos, como YHLQMDLG y Un Verano Sin Ti. También es reconocido por romper estereotipos de género en su imagen y expresarse abiertamente sobre temas sociales.",
            anioCreacion: "2016",
            componentes: ["Benito Antonio Martínez Ocasio"],
            imagen: "./img/budbuny.jpg",
            video: "https://www.youtube.com/embed/pwF0JFCZkK8?si=R-REeiZLl0-k7A_6&autoplay=1&mute=1"
        },
        imaginedragons: {
            nombre: "Imagine Dragons",
            descripcion: 'Imagine Dragons es una banda de rock alternativo formada en  Las Vegas, Nevada. Su sonido combina elementos de rock, pop, electrónica y música indie. Está "Demons" y "Believer". Son conocidos por sus letras emotivas y actuaciones enérgicas. ¡No te pierdas esta cita, no puedes imaginar lo increíble que será!',
            anioCreacion: "2008",
            componentes: ["Dan Reynolds", "Wayne Sermon", "Ben McKee", "Daniel Platzman"],
            imagen: "./img/imaginedragons.jpg",
            video: "https://www.youtube.com/embed/m_fx9ghVt7E?si=E7gUDFWumTtoAvYY&autoplay=1&mute=1"
        },
        larosalia: {
            nombre: "ROSALÍA",
            descripcion: "Rosalía es una cantante, compositora y productora española nacida en 1992. Es conocida por fusionar flamenco tradicional con géneros modernos como el pop, el reguetón y la electrónica. Saltó a la fama internacional con su álbum El Mal Querer (2018), que destacó por su estilo innovador y visuales artísticos. Ha colaborado con artistas como J Balvin, Travis Scott y Bad Bunny. Su propuesta artística combina fuerza vocal, estética vanguardista y una reinvención del sonido español. ¡Taconea toda la noche con Rosalía y disfruta de la esencia española!",
            anioCreacion: "2013",
            componentes: ["ROSALÍA"],
            imagen: "./img/rosalia.jpg",
            video: "https://www.youtube.com/embed/OckLYi94_2Q?si=Yia-JsOLkfjsXnIj&autoplay=1&mute=1"
        },
        elfary: {
            nombre: "El Fary",
            descripcion: "Con su célebre cita bastan las presentaciones, *ejem ejem...* 'Yo, de todas maneras, siempre he detestado al hombre blandengue. Y, además, también he podido analizar que la mujer tampoco admite al hombre blandengue... La mujer es muy pícara, valga el sentido de la palabra, porque (como bien he dicho en otras ocasiones) yo lo que más valoro en esta vida es la mujer. Sin la mujer, la vida no tendría sentido. Pero la mujer es granujilla y se aprovecha mucho del hombre blandengue. No sé si se aprovecha o se aburre, y entonces le da capones y todo. Porque es verdad, por eso digo que el hombre debe de estar en su sitio y la mujer en el suyo, no cabe duda, porque la mujer tiene esos derechos que yo respeto... Y más tenía que tener, porque la mujer se lo merece todo. Pero amigo mío: el hombre no debe nunca de blandear. Debe estar ahí porque además, entre otras cosas, creo que la mujer necesita ese pedazo de tío ahí. Al hombre blandengue le detesto. Ese hombre de la bolsa de la compra y... Qué te voy a decir yo, el carrito del niño con el coche... Me parece bien. Pero ya te digo que la mujer abusa mucho de ladebilidad del hombre.'",
            anioCreacion: "1967",
            componentes: ["José Luis Cantero"],
            imagen: "./img/fary.jpg",
            video: "https://www.youtube.com/embed/Ovm_pyv7Ycg?si=ITEB0bgEfaHvdYTu&autoplay=1&mute=1" // Ejemplo de URL de YouTube embebible
        },
          alfredo: {
            nombre: "alfredo",
            descripcion: "Rosalía es una cantante, compositora y productora española nacida en 1992. Es conocida por fusionar flamenco tradicional con géneros modernos como el pop, el reguetón y la electrónica. Saltó a la fama internacional con su álbum El Mal Querer (2018), que destacó por su estilo innovador y visuales artísticos. Ha colaborado con artistas como J Balvin, Travis Scott y Bad Bunny. Su propuesta artística combina fuerza vocal, estética vanguardista y una reinvención del sonido español. ¡Taconea toda la noche con Rosalía y disfruta de la esencia española!",
            anioCreacion: "2013",
            componentes: ["ROSALÍA"],
            imagen: "./img/rosalia.jpg",
            video: "https://www.youtube.com/embed/OckLYi94_2Q?si=Yia-JsOLkfjsXnIj&autoplay=1&mute=1"
        }
    };



    // Función para obtener parámetro de URL
    function obtenerParametro(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const grupoId = obtenerParametro('id');

    const contenedor = document.getElementById("contenidoGrupo");

    if (grupoId && infoGrupos[grupoId]) {
        const grupo = infoGrupos[grupoId];
        contenedor.innerHTML = `
  
        <h2 class="tituloRegistro">${grupo.nombre}</h2>
        <img src="${grupo.imagen}" alt="${grupo.nombre}" class="grupoImagen"/>
        <div class="grupoInfo">
            <p><strong>Descripción:</strong> ${grupo.descripcion}</p>
            <p><strong>Año de creación:</strong> ${grupo.anioCreacion}</p>
            <p><strong>Componentes:</strong> ${grupo.componentes.join(", ")}</p>
        </div>
        <div class="videoContenedor">
            <h3 class="tituloRegistro">Vídeo destacado</h3>
            <iframe src="${grupo.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
        </div>
        
    `;
    } else {
        contenedor.innerHTML = "<p>Grupo no encontrado o no especificado.</p>";
    }
});