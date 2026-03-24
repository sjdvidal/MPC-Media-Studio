$(document).ready(function(){
    //Inicializar AOS
    AOS.init({
        once: true,
        offset: 50,
        duration: 800
    });

    // Inicializar Typed.js
    new Typed('#typed-text', {
        strings: ['la esencia.', 'la visión.', 'el momento.', 'la realidad.'],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 2500,
        loop: true,
        cursorChar: '|'
    });

    // Renderizado de servicios
    const $servicesContainer = $('#services-container');
        $.each(servicios, function(index, srv) {
        // Incorporamos los bordes sutiles y la sombra que te gusta, usando el azul oscuro (bg-dark)
        const html = `
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="${index * 150}">
                    <div class="card h-100 bg-dark border-0 shadow-sm rounded-0 p-4 transition-hover">
                        <div class="card-body text-center text-md-start">
                            <i class="mdi ${srv.icon} text-primary fs-1 mb-4 d-block opacity-75"></i>
                            <h6 class="fw-bold text-white mb-3 text-uppercase ls-wide">${srv.title}</h6>
                            <p class="small mb-0">${srv.desc}</p>
                        </div>
                    </div>
                </div>
            `;
            $servicesContainer.append(html);
        });

    
    // Base de Datos de Mision y Vision

    const $misionVisionContainer = $('#mision-vision-container');
        $.each(misionVision, function(index, mv) {
        const html = `
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="${index * 150}">
                    <div class="card h-100 bg-dark border-0 shadow-sm rounded-0 p-4 transition-hover">
                        <div class="card-body text-center text-md-start">
                            <i class="mdi ${mv.icon} text-primary fs-1 mb-4 d-block opacity-75"></i>
                            <h6 class="fw-bold text-primary opacity-80 mb-3 text-uppercase ls-wide">${mv.title}</h6>
                            <p class="small  mb-0">${mv.desc}</p>
                        </div>
                    </div>
                </div>
            `;
            $misionVisionContainer.append(html);
        });


    const $portfolioGrid = $('#portfolio-grid');
    $.each(proyectos, function(index, proj) {
    // Separamos el string por las comas para crear un Array de detalles
            const listaDetalles = proj.detalles.split(',');
            let detallesHTML = '<ul class="list-unstyled mt-4 mb-5">';
                
            // Iteramos sobre cada detalle para crear un <li> eleganteD">El 
            $.each(listaDetalles, function(i, detalle) {
                detallesHTML += `
                    <li class="small mb-3 d-flex align-items-center">
                        <i class="mdi mdi-check-circle-outline text-primary me-3 fs-5"></i> 
                        ${detalle.trim()}
                    </li>
                `;
            });
            detallesHTML += '</ul>';

            // Cambiamos el tamaño de columnas a col-md-6 para que queden como tarjetas de presentación grandes y legibles.
            const html = `
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="${index * 150}">
                    <div class="card bg-transparent border-dark border-2 rounded-0 overflow-hidden position-relative h-100 p-1">
                            
                        <!-- Fondo de imagen con muchísima menos opacidad (0.1) para priorizar la lectura -->
                        <div class="position-absolute w-100 h-100 top-0 start-0" style="background-image: url('${proj.img}'); background-size: cover; background-position: center; opacity: 0.1; transition: opacity 0.4s ease;" onmouseover="this.style.opacity='0.3'" onmouseout="this.style.opacity='0.1'"></div>
                            
                        <!-- Contenido de la tarjeta posicionado por encima del fondo -->
                        <div class="card-body p-5 d-flex flex-column position-relative" style="z-index: 2;">
                            <div class="row">
                                <div class="col-9">
                                    <span class="small text-uppercase text-primary fw-bold ls-widest mb-2 d-block">${proj.category}</span>
                                    <h6 class="display-6 fw-bold text-white mb-0">${proj.client}</h6>
                                </div>
                            </div>
                                
                            <hr class="border-secondary opacity-25 my-4">
                                
                            <!-- Aquí inyectamos la lista que generamos arriba -->
                            ${detallesHTML}
                                
                            <!-- Precio -->
                            <div class="mb-4 text-center">
                                <span class="h5 fw-bold text-white opacity-75">${proj.precio}</span>
                            </div>
                                
                            <!-- Botón que se empuja hacia abajo con mt-auto -->
                            <a href="#" class="btn btn-primary btn-sm text-uppercase ls-wide w-100 mt-auto py-3 rounded-0">
                                Solicitar Propuesta
                            </a>
                        </div>
                    </div>
                </div>
            `;
            $portfolioGrid.append(html);
    });


    // ==========================================
    // 1. MOTOR DE VIDEOS (GALERÍA FILTRABLE)
    // ==========================================
    // He ampliado la base de datos para que veas cómo el filtro funciona perfectamente.


    const $videoGrid = $('#video-grid');
            
    // Función constructora aislada. Recibe la categoría a mostrar.
    function renderizarGaleria(filtroCategoria) {
    // Vaciamos el contenedor (fadeOut para que no sea un golpe visual)
    $videoGrid.hide().empty(); 

    let contadorRetraso = 0; // Para la animación en cascada

    $.each(videos, function(index, vid) {
    // Si el filtro es "all" o coincide con la categoría del video, lo renderizamos
        if (filtroCategoria === 'all' || vid.categoria === filtroCategoria) {
                        
    // Añadimos una pequeña animación CSS propia de Bootstrap/jQuery para la carga
        const html = `
            <div class="col-md-6 col-lg-4" style="animation: fadeIn 0.5s ease forwards; opacity: 0; animation-delay: ${contadorRetraso * 0.1}s;">
                <div class="card bg-dark border-0 rounded-0 overflow-hidden position-relative shadow-sm h-100" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#videoModal" data-video-url="${vid.url}">
                    <div class="ratio ratio-16x9">
                        <div class="w-100 h-100 zoom-hover" style="background-image: url('${vid.img}'); background-size: cover; background-position: center; opacity: 0.6;"></div>
                            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25 transition-hover">
                                <i class="mdi mdi-play-circle-outline text-white opacity-75 display-1"></i>
                            </div>
                        </div>
                    <div class="card-footer bg-transparent border-0 p-4 position-absolute bottom-0 w-100 bg-gradient-dark">
                        <span class="small text-uppercase text-primary fw-bold ls-widest mb-1 d-block">${vid.categoria}</span>
                        <h6 class="text-white mb-0 text-truncate">${vid.titulo}</h6>
                    </div>
                </div>
            </div>
            `;
                $videoGrid.append(html);
                contadorRetraso++;
                }
        });
                
    // Mostramos el contenedor con un fadeIn suave de jQuery
                $videoGrid.fadeIn(400);
            }

            // Inicializamos la galería mostrando todos los videos
            renderizarGaleria('all');

            // Lógica de los botones de filtro
            $('#video-filters button').on('click', function() {
                // Quitamos la clase 'active' y 'btn-primary' a todos
                $('#video-filters button').removeClass('active btn-primary').addClass('btn-outline-primary');
                
                // Se la agregamos solo al botón clickeado
                $(this).removeClass('btn-outline-primary').addClass('active btn-primary');
                
                // Obtenemos el valor del filtro de nuestro atributo data-filter
                const filtroSeleccionado = $(this).data('filter');
                
                // Re-renderizamos la galería
                renderizarGaleria(filtroSeleccionado);
            });

            // Modal: Inyectar URL
            $('#videoModal').on('show.bs.modal', function (event) {
                const button = $(event.relatedTarget); 
                const urlVideo = button.data('video-url'); 
                $('#videoPlayerIframe').attr('src', urlVideo);
            });

            // Modal: Detener Video
            $('#videoModal').on('hidden.bs.modal', function () {
                $('#videoPlayerIframe').attr('src', '');
            });

});