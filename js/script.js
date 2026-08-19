(function () {
    "use strict";

    /* =====================================================================
       PERFIL — TODOS LOS DATOS REALES EXTRAÍDOS DE TU CV. EDITA AQUÍ.
       ===================================================================== */
    const PERFIL = {
        nombre: "Eduardo López",
        alias: "eduplopez",
        rol: "Desarrollador de Aplicaciones Multiplataforma · IA & Backend",
        email: "edup.lopez@gmail.com",
        telefono: "+34 648 500 255",
        ubicacion: "A Coruña, Galicia",
        stats: [
            { v: 2, sufijo: "", decimales: 0, etiqueta: "proyectos destacados" },
            { v: 4, sufijo: "", decimales: 0, etiqueta: "meses en laboratorio de IA" },
            { v: 4, sufijo: "", decimales: 0, etiqueta: "idiomas de trabajo" },
            { v: 10, sufijo: "+", decimales: 0, etiqueta: "tecnologías en el stack" }
        ],
        trayectoria: [
            {
                fecha: "mar — jun 2026", puesto: "Desarrollador en el Laboratorio de IA",
                empresa: "Zucchetti Centro Sistemi · Sede central, Italia",
                descripcion: "Participación en el ciclo completo de diseño, entrenamiento y fase de pruebas de modelos de inteligencia artificial. Desarrollo e implementación de soluciones basadas en IA orientadas a la automatización de tareas y la optimización de flujos de trabajo corporativos.",
                tags: ["Entrenamiento y validación de modelos", "Automatización de procesos", "YOLO · SAM", "Experiencia internacional"]
            },
            {
                fecha: "recién titulado", puesto: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
                empresa: "CPR Afundación · A Coruña",
                descripcion: "Formación superior especializada en desarrollo móvil multiplataforma: diseño de interfaces, acceso a datos, programación y publicación de apps para Android e iOS.",
                tags: ["Android · iOS", "Ciclo formativo de grado superior"]
            },
            {
                fecha: "especialización", puesto: "Curso de Iniciación al Desarrollo con IA",
                empresa: "Big School",
                descripcion: "Introducción al desarrollo con inteligencia artificial: fundamentos, modelos y su integración en aplicaciones reales.",
                tags: ["Fundamentos de IA"]
            }
        ],
        barras: [
            // Porcentajes orientativos: ajústalos a tu criterio.
            { grupo: "Móvil", items: [["Android", 80], ["iOS", 70]] },
            { grupo: "Backend", items: [["Python · Django", 85], ["Java", 75], ["SQL · bases de datos relacionales", 80]] },
            { grupo: "Inteligencia artificial", items: [["YOLO", 80], ["SAM (Segment Anything)", 70], ["Ollama · LLM en local", 75], ["Openclaw", 70]] },
            { grupo: "Sistemas", items: [["Linux", 80], ["Docker", 75]] }
        ],
        chips: ["Python", "Django", "Java", "Android", "iOS", "YOLO", "SAM", "Ollama", "Openclaw", "Linux", "Docker", "SQL", "APIs REST", "Git", "Raspberry Pi", "Edge AI"],
        proyectos: [
            {
                nombre: "Tony", sub: "Sistema de visión artificial · Edge AI", estado: "Lab IA", privado: true,
                descripcion: "Sistema automatizado para la identificación de herramientas médicas. Modelos de visión por ordenador (YOLO y Segment Anything Model) ejecutados de forma local sobre hardware de bajo consumo, una Raspberry Pi 5, sin dependencia de la nube.",
                stack: ["Python", "YOLO", "Segment Anything Model", "Raspberry Pi 5", "Edge AI"],
                metricas: "Inferencia en local · sin dependencia de la nube · hardware de bajo consumo"
            },
            {
                nombre: "PartyCoruña", sub: "Backend y API para eventos sociales", estado: "Backend", privado: true,
                descripcion: "Arquitectura y desarrollo de la API de una plataforma de eventos sociales. Construida con Python y Django, con bases de datos relacionales y lógica de relaciones direccionales para el sistema de seguidores.",
                stack: ["Python", "Django", "SQL", "API REST"],
                metricas: "Bases de datos relacionales · sistema de seguidores con relaciones direccionales"
            }
        ],
        servicios: [
            { titulo: "Desarrollo de apps multiplataforma", texto: "Aplicaciones Android e iOS con una única lógica de negocio: menos costes, más alcance." },
            { titulo: "Backend y APIs con Python", texto: "Django, bases de datos relacionales y lógica de negocio preparada para crecer." },
            { titulo: "IA aplicada y visión artificial", texto: "YOLO, SAM y modelos en local que resuelven problemas reales, también en hardware modesto." },
            { titulo: "Automatización de procesos", texto: "Flujos de trabajo que se ejecutan solos: menos tareas manuales, menos errores." },
            { titulo: "Despliegue con Linux y Docker", texto: "Entornos reproducibles y estables, del portátil al servidor." }
        ],
        idiomas: [
            { locale: "es_ES.UTF-8", idioma: "Español", nivel: "nativo", pct: 100 },
            { locale: "gl_ES.UTF-8", idioma: "Gallego", nivel: "nativo", pct: 100 },
            { locale: "en_US.UTF-8", idioma: "Inglés", nivel: "intermedio-avanzado", pct: 75 },
            { locale: "it_IT.UTF-8", idioma: "Italiano", nivel: "básico", pct: 35 }
        ]
    };

    /* =====================================================================
       UTILIDADES — todo el renderizado usa textContent/createElement (anti-XSS)
       ===================================================================== */
    const $ = (s, c) => (c || document).querySelector(s);
    const $$ = (s, c) => Array.prototype.slice.call((c || document).querySelectorAll(s));
    const movReducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function crear(tag, clase, texto) {
        const nodo = document.createElement(tag);
        if (clase) nodo.className = clase;
        if (texto !== undefined) nodo.textContent = texto;   // nunca innerHTML
        return nodo;
    }

    /* ============ SECUENCIA DE ARRANQUE ============ */
    (function arranque() {
        const boot = $("#boot");
        if (!boot) return;
        if (movReducido) { boot.remove(); return; }
        const lineas = ["[ OK ] núcleo cargado", "[ OK ] módulos de diseño montados", "[ OK ] integridad verificada · 0 vulnerabilidades", "[ .. ] iniciando interfaz gráfica", "acceso concedido. benvido."];
        const pre = $("#boot-txt");
        let li = 0, ci = 0;
        const paso = setInterval(function () {
            if (li >= lineas.length) { fin(); return; }
            ci += 3;
            pre.textContent = lineas.slice(0, li).join("\n") + (li ? "\n" : "") + lineas[li].slice(0, ci);
            if (ci >= lineas[li].length) { li++; ci = 0; }
        }, 18);
        function fin() {
            clearInterval(paso);
            setTimeout(function () {
                boot.classList.add("apagado");
                setTimeout(function () { boot.remove(); }, 500);
            }, 250);
        }
        setTimeout(function () { if (document.body.contains(boot)) { boot.classList.add("apagado"); setTimeout(function () { boot.remove(); }, 500); } }, 3000);
        boot.addEventListener("click", fin);
    })();

    /* ============ FONDO: LLUVIA DE GLIFOS (tenue) INTERACTIVA ============ */
    (function lluvia() {
        const cv = $("#lluvia"); if (!cv) return;
        const ctx = cv.getContext("2d");
        const CELL = 17, GLIFOS = "アイウエオカキクケコサシスセソタチツテト01<>/\\|=+*#$_";
        let W = 0, H = 0, gotas = [], impulso = 0, prevY = window.scrollY, mx = -999, my = -999, rafId = null;

        function nueva(alAzar) {
            return {
                y: alAzar ? Math.random() * H : -20 - Math.random() * H * 0.4,
                v: 1.4 + Math.random() * 3.4,
                ambar: Math.random() < 0.06
            };
        }
        function medir() {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            W = window.innerWidth; H = window.innerHeight;
            cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
            cv.style.width = W + "px"; cv.style.height = H + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const cols = Math.ceil(W / CELL);
            gotas = [];
            for (let i = 0; i < cols; i++) gotas.push(nueva(true));
        }
        function pintarBase() { ctx.fillStyle = "#030907"; ctx.fillRect(0, 0, W, H); }

        if (movReducido) {
            medir(); pintarBase();
            ctx.font = '15px "JetBrains Mono", monospace';
            for (let i = 0; i < gotas.length * 1.5; i++) {
                ctx.fillStyle = "rgba(56,255,155,0.05)";
                ctx.fillText(GLIFOS[(Math.random() * GLIFOS.length) | 0], Math.random() * W, Math.random() * H);
            }
            window.addEventListener("resize", function () { medir(); });
            return;
        }

        function marco() {
            // Borrado más opaco = estelas más cortas y menos protagonismo
            ctx.fillStyle = "rgba(3,9,7,0.22)";
            ctx.fillRect(0, 0, W, H);
            ctx.font = '15px "JetBrains Mono", monospace';
            for (let i = 0; i < gotas.length; i++) {
                const g = gotas[i];
                g.y += g.v * (1 + impulso * 0.06);          // el scroll acelera la lluvia
                const x = i * CELL;
                const cerca = (x - mx) * (x - mx) + (g.y - my) * (g.y - my) < 19600; // radio ~140px
                const glifo = GLIFOS[(Math.random() * GLIFOS.length) | 0];
                // Alfas bajos: la lluvia queda en segundo plano frente al contenido
                ctx.fillStyle = cerca ? "rgba(214,255,236,0.45)"
                    : g.ambar ? "rgba(255,180,84,0.22)"
                        : "rgba(56,255,155,0.20)";
                ctx.fillText(glifo, x, g.y);
                if (cerca) {
                    ctx.fillStyle = "rgba(56,255,155,0.30)";
                    ctx.fillText(GLIFOS[(Math.random() * GLIFOS.length) | 0], x, g.y - CELL);
                }
                if (g.y > H + 40) gotas[i] = nueva(false);
            }
            impulso *= 0.92; if (impulso < 0.01) impulso = 0;
            rafId = requestAnimationFrame(marco);
        }

        medir(); pintarBase(); rafId = requestAnimationFrame(marco);

        let t;
        window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(medir, 150); }, { passive: true });
        window.addEventListener("scroll", function () {
            const y = window.scrollY;
            impulso = Math.min(impulso + Math.abs(y - prevY) * 0.12, 26);
            prevY = y;
        }, { passive: true });
        window.addEventListener("pointermove", function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) { cancelAnimationFrame(rafId); rafId = null; }
            else if (!rafId) { rafId = requestAnimationFrame(marco); }
        });
    })();

    /* ============ TERMINAL INTERACTIVA DEL HERO ============ */
    (function terminal() {
        const salida = $("#term-salida"), form = $("#term-form"), entrada = $("#term-in");
        if (!salida) return;
        const MAX_LINEAS = 60;
        function imprimir(texto, tipo) {
            const p = crear("p", "linea " + (tipo || "out"), texto);
            salida.appendChild(p);
            while (salida.children.length > MAX_LINEAS) salida.removeChild(salida.firstChild);
            $("#term-cuerpo").scrollTop = $("#term-cuerpo").scrollHeight;
        }
        const guion = [
            ["cmd", "whoami"], ["out", "eduplopez — desarrollador de apps multiplataforma · IA & backend"],
            ["cmd", "ls ~/stack"], ["out", "python/ django/ android/ ios/ yolo/ sam/ ollama/ openclaw/ docker/"],
            ["cmd", "./estado --ahora"], ["out", "● abierto a oportunidades · A Coruña / remoto"],
            ["sys", "Escribe «help» para explorar esta terminal."]
        ];
        function activar() { entrada.disabled = false; }
        if (movReducido) {
            guion.forEach(function (l) { imprimir(l[1], l[0]); }); activar();
        } else {
            let i = 0;
            (function siguiente() {
                if (i >= guion.length) { activar(); return; }
                const linea = guion[i++];
                if (linea[0] === "cmd") {
                    const p = crear("p", "linea cmd"); salida.appendChild(p);
                    let c = 0;
                    const t = setInterval(function () {
                        c++; p.textContent = linea[1].slice(0, c);
                        if (c >= linea[1].length) { clearInterval(t); setTimeout(siguiente, 160); }
                    }, 22);
                } else { imprimir(linea[1], linea[0]); setTimeout(siguiente, 220); }
            })();
        }
        const comandos = {
            help: function () {
                return [
                    "comandos disponibles:",
                    "  whoami      → quién soy",
                    "  skills      → tecnologías principales",
                    "  proyectos   → lista rápida de proyectos",
                    "  contacto    → cómo escribirme",
                    "  estado      → disponibilidad actual",
                    "  clear       → limpia la pantalla",
                    "  sudo        → inténtalo bajo tu responsabilidad"];
            },
            whoami: function () { return [PERFIL.nombre + " — " + PERFIL.rol.toLowerCase(), PERFIL.ubicacion]; },
            skills: function () { return PERFIL.barras.map(function (g) { return g.grupo + ": " + g.items.map(function (i) { return i[0]; }).join(", "); }); },
            proyectos: function () { return PERFIL.proyectos.map(function (p) { return "· " + p.nombre + " [" + p.estado + "] — " + p.sub; }); },
            contacto: function () { return ["email: " + PERFIL.email, "tel: " + PERFIL.telefono, "o baja hasta la sección contacto — el formulario está listo."]; },
            estado: function () { return ["● abierto a oportunidades", "respuesta media: < 24 h laborables"]; },
            clear: function () { salida.textContent = ""; return []; },
            sudo: function () { return ["[sudo] permiso denegado: en esta web solo manda el usuario."]; },
            hack: function () { return ["iniciando exploit… es broma. La seguridad es lo primero.", "Acceso concedido: a mi trabajo, en la sección proyectos."]; },
            exit: function () { return ["para salir, sigue haciendo scroll — hay mucho más abajo."]; }
        };
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const crudo = entrada.value.trim(); entrada.value = "";
            if (!crudo) return;
            imprimir(crudo, "cmd");
            const clave = crudo.toLowerCase();
            const fn = comandos[clave];
            const res = fn ? fn() : ["comando no encontrado: " + clave + " — escribe «help»."];
            res.forEach(function (l) { imprimir(l, fn ? "out" : "err"); });
        });
        $("#term-cuerpo").addEventListener("click", function () { if (!entrada.disabled) entrada.focus(); });
    })();

    /* ============ RENDERIZADO DE DATOS (seguro: solo textContent) ============ */
    function pintarStats() {
        const cont = $("#stats"); if (!cont) return;
        PERFIL.stats.forEach(function (s, i) {
            const li = document.createElement("li");
            const num = crear("span", "num"); const b = crear("b");
            b.setAttribute("data-valor", s.v); b.setAttribute("data-decimales", s.decimales || 0);
            num.appendChild(b); num.appendChild(document.createTextNode(s.sufijo));
            li.appendChild(num); li.appendChild(crear("span", "etq", s.etiqueta));
            li.classList.add("reveal"); li.style.transitionDelay = (i * 90) + "ms";
            cont.appendChild(li);
        });
    }
    function pintarTrayectoria() {
        const cont = $("#trayectoria"); if (!cont) return;
        PERFIL.trayectoria.forEach(function (h, i) {
            const li = crear("li", "hito reveal"); li.style.transitionDelay = (i * 70) + "ms";
            li.appendChild(crear("span", "hito-fecha mono", h.fecha));
            const cuerpo = crear("div");
            cuerpo.appendChild(crear("h3", null, h.puesto));
            cuerpo.appendChild(crear("p", "hito-emp", h.empresa));
            cuerpo.appendChild(crear("p", null, h.descripcion));
            const tags = crear("ul", "hito-tags");
            h.tags.forEach(function (t) { tags.appendChild(crear("li", null, t)); });
            cuerpo.appendChild(tags); li.appendChild(cuerpo); cont.appendChild(li);
        });
    }
    function pintarBarras() {
        const cont = $("#barras"); if (!cont) return;
        PERFIL.barras.forEach(function (g) {
            const bloque = crear("div", "grupo-barras reveal");
            bloque.appendChild(crear("h3", "mono", g.grupo));
            g.items.forEach(function (item, idx) {
                const it = crear("div", "barra-item reveal");
                it.style.transitionDelay = (idx * 80) + "ms";
                const cab = crear("div", "barra-cab");
                cab.appendChild(crear("span", null, item[0]));
                cab.appendChild(crear("span", "pct", item[1] + " %"));
                const barra = crear("div", "barra");
                const fill = crear("span", "fill"); fill.style.setProperty("--p", item[1] + "%");
                barra.appendChild(fill); it.appendChild(cab); it.appendChild(barra);
                bloque.appendChild(it);
            });
            cont.appendChild(bloque);
        });
    }
    function pintarChips() {
        const cont = $("#chips"); if (!cont) return;
        PERFIL.chips.forEach(function (c) { cont.appendChild(crear("li", null, c)); });
    }
    function pintarProyectos() {
        const cont = $("#destacados"); if (!cont) return;
        PERFIL.proyectos.forEach(function (p, i) {
            const art = crear("article", "proyecto-card tilt reveal");
            art.style.transitionDelay = (i * 120) + "ms";
            const cab = crear("header", "pc-cab");
            cab.appendChild(crear("span", "estado" + (p.estado === "Backend" ? " beta" : ""), p.estado));
            cab.appendChild(crear("span", "p-num", "expediente_0" + (i + 1)));
            art.appendChild(cab);
            art.appendChild(crear("h3", null, p.nombre));
            art.appendChild(crear("p", "p-sub", p.sub));
            art.appendChild(crear("p", "p-desc", p.descripcion));
            const chips = crear("ul", "chips");
            p.stack.forEach(function (s) { chips.appendChild(crear("li", null, s)); });
            art.appendChild(chips);
            art.appendChild(crear("p", "p-metricas", p.metricas));
            if (p.privado) {
                art.appendChild(crear("p", "p-privado", "▩ proyecto corporativo · código bajo confidencialidad · detalles bajo petición"));
            }
            cont.appendChild(art);
        });
    }
    function pintarServicios() {
        const cont = $("#lista-servicios"); if (!cont) return;
        PERFIL.servicios.forEach(function (s, i) {
            const li = crear("li", "servicio");
            li.appendChild(crear("span", "idx", "0" + (i + 1)));
            const cuerpo = crear("div");
            cuerpo.appendChild(crear("h3", null, s.titulo));
            cuerpo.appendChild(crear("p", null, s.texto));
            li.appendChild(cuerpo);
            li.appendChild(crear("span", "flecha", "→"));
            cont.appendChild(li);
        });
    }
    function pintarIdiomas() {
        const cont = $("#idiomas-lista"); if (!cont) return;
        PERFIL.idiomas.forEach(function (idm, i) {
            const li = crear("li", "idioma reveal"); li.style.transitionDelay = (i * 90) + "ms";
            li.appendChild(crear("span", "loc mono", idm.locale));
            const cuerpo = crear("div");
            const h = crear("h3", null, idm.idioma);
            h.appendChild(crear("span", null, " — " + idm.nivel));
            cuerpo.appendChild(h);
            const barra = crear("div", "barra");
            const fill = crear("span", "fill"); fill.style.setProperty("--p", idm.pct + "%");
            fill.style.width = idm.pct + "%"; fill.style.transitionDelay = (i * 120) + "ms";
            barra.appendChild(fill); cuerpo.appendChild(barra);
            li.appendChild(cuerpo); cont.appendChild(li);
        });
    }
    function pintarTicker() {
        const cont = $("#ticker-track"); if (!cont) return;
        const lista = PERFIL.chips.slice(0, 14);
        for (let vuelta = 0; vuelta < 2; vuelta++) {
            lista.forEach(function (c) {
                cont.appendChild(crear("span", null, c));
                cont.appendChild(crear("b", null, "▮"));
            });
        }
    }
    pintarStats(); pintarTrayectoria(); pintarBarras(); pintarChips();
    pintarProyectos(); pintarServicios(); pintarIdiomas(); pintarTicker();

    /* ============ EFECTOS: decode, reveal, contadores ============ */
    const POOL = "!<>-_/\\[]{}=+*^?#01";
    function decodificar(el) {
        const objetivo = el.getAttribute("data-decode") || el.textContent;
        if (movReducido) { el.textContent = objetivo; return; }
        let cuadro = 0; const total = Math.min(objetivo.length * 2.2, 40);
        const t = setInterval(function () {
            cuadro++;
            const fijas = Math.floor(objetivo.length * (cuadro / total));
            let salida = objetivo.slice(0, fijas);
            for (let i = fijas; i < objetivo.length; i++) {
                salida += objetivo[i] === " " ? " " : POOL[(Math.random() * POOL.length) | 0];
            }
            el.textContent = salida;
            if (cuadro >= total) { el.textContent = objetivo; clearInterval(t); }
        }, 28);
    }
    function contarUp(el) {
        const fin = parseFloat(el.getAttribute("data-valor"));
        const dec = parseInt(el.getAttribute("data-decimales") || "0", 10);
        if (movReducido) { el.textContent = fin.toFixed(dec).replace(".", ","); return; }
        const inicio = performance.now(), dur = 1300;
        (function paso(ahora) {
            const p = Math.min((ahora - inicio) / dur, 1);
            const suave = 1 - Math.pow(1 - p, 3);
            el.textContent = (fin * suave).toFixed(dec).replace(".", ",");
            if (p < 1) requestAnimationFrame(paso);
        })(inicio);
    }
    const observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) {
            if (!en.isIntersecting) return;
            const el = en.target;
            el.classList.add("in");
            if (el.hasAttribute("data-decode")) decodificar(el);
            if (el.hasAttribute("data-valor")) contarUp(el);
            observador.unobserve(el);
        });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    $$(".reveal, [data-decode], [data-valor], .barra-item").forEach(function (el) { observador.observe(el); });

    /* ============ NAV: sección activa, compacta, menú móvil ============ */
    const enlaces = $$(".nav-link");
    const vigia = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) {
            if (!en.isIntersecting) return;
            enlaces.forEach(function (a) {
                const activa = a.getAttribute("href") === "#" + en.target.id;
                a.classList.toggle("activa", activa);
                if (activa) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
            });
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { vigia.observe(s); });

    const nav = $(".nav");
    window.addEventListener("scroll", function () {
        nav.classList.toggle("compacta", window.scrollY > 40);
        $("#arriba").classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });

    const menu = $("#menu-movil"), abrir = $("#abrir-menu"), cerrar = $("#cerrar-menu");
    function fijarMenu(abierto) {
        menu.hidden = !abierto;
        abrir.setAttribute("aria-expanded", abierto ? "true" : "false");
        document.body.style.overflow = abierto ? "hidden" : "";
    }
    abrir.addEventListener("click", function () { fijarMenu(true); });
    cerrar.addEventListener("click", function () { fijarMenu(false); cerrar.focus(); });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { fijarMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) fijarMenu(false); });

    $("#arriba").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: movReducido ? "auto" : "smooth" });
    });

    /* ============ IMPRIMIR CV (la web como currículum) ============ */
    const btnImprimir = $("#btn-imprimir");
    if (btnImprimir) {
        btnImprimir.addEventListener("click", function () { window.print(); });
    }

    /* ============ INCLINACIÓN 3D DE TARJETAS ============ */
    if (!movReducido && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
        $$(".tilt").forEach(function (el) {
            el.addEventListener("pointermove", function (e) {
                const r = el.getBoundingClientRect();
                const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
                const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
                el.style.transform = "perspective(800px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg)";
            });
            el.addEventListener("pointerleave", function () { el.style.transform = ""; });
        });
    }

    /* ============ FORMULARIO DE CONTACTO (producción: Formspree) ============
   Cada envío llega a tu email a través de Formspree. El destino se lee del
   atributo action del <form>, así solo tienes que configurar tu ID una vez. */
    const formContacto = $("#form-contacto");
    if (formContacto) {
        const REG_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const botonEnvio = formContacto.querySelector('button[type="submit"]');
        function marcar(idCampo, idError, mensaje) {
            const campo = document.getElementById(idCampo), err = document.getElementById(idError);
            campo.setAttribute("aria-invalid", mensaje ? "true" : "false");
            err.textContent = mensaje || "";
            return !mensaje;
        }
        formContacto.addEventListener("submit", function (e) {
            e.preventDefault();
            $("#form-error").hidden = true;
            const nombre = $("#f-nombre").value.trim();
            const email = $("#f-email").value.trim();
            const mensaje = $("#f-mensaje").value.trim();
            let ok = true;
            ok = marcar("f-nombre", "e-nombre", nombre.length >= 2 ? "" : "Introduce tu nombre (mínimo 2 caracteres).") && ok;
            ok = marcar("f-email", "e-email", REG_EMAIL.test(email) ? "" : "Introduce un correo válido.") && ok;
            ok = marcar("f-mensaje", "e-mensaje", mensaje.length >= 10 ? "" : "Cuéntame algo más (mínimo 10 caracteres).") && ok;
            if (!ok) return;
            botonEnvio.disabled = true;
            botonEnvio.textContent = "[ enviando… ]";
            fetch(formContacto.getAttribute("action"), {
                method: "POST",
                body: new FormData(formContacto),
                headers: { "Accept": "application/json" }
            }).then(function (respuesta) {
                if (!respuesta.ok) { throw new Error("error de envío"); }
                formContacto.reset();
                formContacto.hidden = true;
                $("#form-ok").hidden = false;
            }).catch(function () {
                $("#form-error").hidden = false;
                botonEnvio.disabled = false;
                botonEnvio.textContent = "[ enviar_mensaje ]";
            });
        });
        $("#form-reset").addEventListener("click", function () {
            formContacto.reset(); formContacto.hidden = false;
            $("#form-ok").hidden = true; $("#form-error").hidden = true;
            botonEnvio.disabled = false; botonEnvio.textContent = "[ enviar_mensaje ]";
            $("#f-nombre").focus();
        });
    }
})();