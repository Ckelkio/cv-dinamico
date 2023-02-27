const data = {
    nombre: "Robert",
    apellido: "Smith",
    titulo: "Developer and Startup Entrepreneur",
    edad: 38,
    domicilio: "Callao 2132, torre 10",
    email: "robertsmith@gmail.com",
    telefono: "116287853",
    disponibilidad: "De lunes a viernes de 10 a 18hrs.",
    presentacion: "Estudiante trabajador en busca de empleo. Listo para utilizar mis habilidades y pasión para impulsar la misión de una compañía. Tecnológicamente hábil, ofrece experiencia con muchas plataformas de medios sociales, programas de tecnología de oficina y habilidades informáticas avanzadas. Aportar una actitud positiva y la voluntad y motivación para aprender nuevos programas.",
    formacion: "Ago 2016 - Presente Universidad de Sevilla, Licenciado en Comunicación Estudiando la carrera de Comunicación Nota media: 8,5 Sep 2012 - May 2016 Colegio San Francisco de Paula, Título de Bachillerato Graduado con altos honores Presidente del Club de Periodismo",
    habilidades: [
        "Habilidades de comunicación avanzada",
        "Habilidades de ofimática",
        "Periodismo",
        "Actitud Motivada",
        "Plataformas de medios sociales"
    ],
    experiencia: [
        {
            cargo: "RESPONSABLE DE LOCAL",
            antiguedad: "2016 - ACTUAL",
            empresa: "TEVEO-TECNO",
            tareas: "apertura y cierre de local. Atención al público en venta de artículos de tecnología, celulares, audio, accesorios de PC, fotografía, instrumentos y accesorios de música. Reposición de productos. Pedido a proveedores. Control de stock. Manejo de caja. Responsable de ventas en las cuentas de Mercado Libre y página oficial del negocio. Ingreso y egreso de equipos para servicio técnico en el sistema, control y seguimiento de reparaciones. Facturación en página AFIP.",
        },

        {
            cargo: "VENTAS - PROMOCIÓN",
            antiguedad: "2 0 1 5 - 2016",
            empresa: "GRAVENT",
            tareas: "venta de artículos de tecnología,celulares, audio, accesorios de PC, fotografía, instrumentos y accesorios de música. Reposición de productos.Control de stock. Manejo de caja.Facturación en página AFIP. Rastrillaje de zonas para alta de nuevos clientes(zona microcentro).Confección de base de datos de empresas, venta personal y telefónica de resmas y papelería.",
        },

        {
            cargo: "PROMOTOR",
            antiguedad: "2009 – 2015",
            empresa: "LIBRERIA DEL PROFESIONAL",
            tareas: "Búsqueda de nuevas cuentas – Seguimiento – Fidelización - Visita a grandes clientes – Diseño de Flyers y Catálogos – Asesor Corporativo – Recuperación de Cuentas Perdidas – Análisis y Proyección de Ventas – Control de Precios y Comparativa en el Mercado.",
        },
    ]
}


document.querySelector("#name").innerHTML = data.nombre + " " + data.apellido;
document.querySelector("#title").innerHTML = data.titulo;
document.querySelector("#anos").innerHTML = data.edad;
document.querySelector("#street").innerHTML = data.domicilio;
document.querySelector("#correo").innerHTML = data.email;
document.querySelector("#phone").innerHTML = data.telefono;
document.querySelector("#horario").innerHTML = data.disponibilidad;
document.querySelector("#street").innerHTML = data.domicilio;
document.querySelector("#pres").innerHTML = data.presentacion;
document.querySelector("#form").innerHTML = data.formacion;


let habilidades = document.querySelector("#habilidades");

data.habilidades.forEach(h => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(h));
    habilidades.appendChild(li);
})


let experiencia = document.querySelector("#experiencias");

data.experiencia.forEach(e => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let b_cargo = document.createElement("b");
    let b_antiguedad = document.createElement("b");
    let b_empresa = document.createElement("b");
    let br_cargo = document.createElement("br");
    let br_antiguedad = document.createElement("br");
    let br_empresa = document.createElement("br");
    let br = document.createElement("br");

    b_cargo.appendChild(document.createTextNode("CARGO: " + e.cargo));
    b_antiguedad.appendChild(document.createTextNode("ANTIGUEDAD: " + e.antiguedad));
    b_empresa.appendChild(document.createTextNode("EMPRESA: " + e.empresa));
    p.appendChild(document.createTextNode(e.tareas));

    div.appendChild(b_cargo);
    div.appendChild(br_cargo);
    div.appendChild(b_antiguedad);
    div.appendChild(br_antiguedad);
    div.appendChild(b_empresa);
    div.appendChild(br_empresa);
    div.appendChild(p);
    div.appendChild(br);
    experiencia.appendChild(div);
})

