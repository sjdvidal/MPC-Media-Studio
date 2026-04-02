const servicios = [
    { icon: 'mdi-movie-open-play-outline', title: 'Producción Comercial', desc: 'Campañas visuales diseñadas para convertir y posicionar marcas en el mercado.' },
    { icon: 'mdi-camera-outline', title: 'Fotografía Editorial', desc: 'Dirección de arte y captura de imágenes que cuentan la historia de tu producto.' },
    { icon: 'mdi-monitor-edit', title: 'Post-Producción', desc: 'Edición de color, VFX y montaje rítmico para darle alma al material crudo.' },
    { icon: 'mdi-palette-outline', title: 'Diseño Gráfico', desc: 'Creación de identidad visual y materiales promocionales que refuerzan la presencia de tu marca.' }
];

const misionVision = [
    { icon: 'mdi-target-variant', title: 'Nuestro Proposito', desc: 'Impulsar la presencia digital de nuestros clientes con contenido auténtico, creativo y profesional.' },
    { icon: 'mdi-lightbulb-on-outline', title: '¿Cómo lo hacemos?', desc: 'Nos especializamos en crear videos, reels, fotografías y campañas publicitarias que ayudan a las marcas a destacar, conectar y crecer.' }
];

const proyectos = [
    { category: 'Comercial', client: 'Plan Básico', precio:'Q 2,000', detalles: ' 4 videos al mes, 5 reels al mes, 12 imágenes personalizadas.', height: '400px', img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800' },
    { category: 'Comercial', client: 'Plan Intermedio', precio:'Q 2,600', detalles: ' 6 videos al mes, 6 reels al mes, 15 imágenes personalizadas.', height: '400px', img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800'},
    { category: 'Comercial', client: 'Plan Premium', precio:'Q 3,200', detalles: ' 8 videos al mes, 10 reels al mes, 20 imágenes personalizadas, publicidad más campañas, 2 capacitaciones en ventas, 2 capacitaciones sobre el uso de redes.', height: '400px', img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800'},
];

const proyectosEmprendedores = [
    { category: 'Emprendedor', client: 'Mini Plan', precio:'Q 1,000', detalles: ' 2 videos al mes, 2 reels al mes, 5 imágenes personalizadas.', height: '400px', img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800' },
    { category: 'Emprendedor', client: 'Plan Emprende', precio:'Q 1,500', detalles: ' 3 videos al mes, 3 reels al mes, 8 imágenes personalizadas, publicidad básica incluida.', height: '400px', img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800'},
    { category: 'Emprendedor', client: 'Plan Impulso', precio:'Q 1,800', detalles: ' 4 videos al mes, 4 reels al mes, 10 imágenes personalizadas, publicidad más asesoría en redes.', height: '400px', img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800'},
];

const serviciosAdicionales = {
    titulo: "Servicios Complementarios",
    descripcion: "Potencia tu producción con estos adicionales exclusivos.",
    items: [
        { nombre: "Video Individual", precio: "Q 300", icon: "mdi-video" },
        { nombre: "Reel Adicional", precio: "Q 100", icon: "mdi-filmstrip" },
        { nombre: "Imagen Personalizada", precio: "Q 50", icon: "mdi-camera" },
        { nombre: "Video en Vivo o Transmisión", precio: "Q 250", icon: "mdi-broadcast" },
        { nombre: "Publicación o Campaña Publicitaria (Por video promocional)", precio: "Q 125", icon: "mdi-bullhorn-outline" }
    ]
};

const videos = [
    { categoria: 'Comercial', titulo: 'Lanzamiento Nike Air', img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1' },
    { categoria: 'Documental', titulo: 'The North Face - Everest', img: 'https://images.unsplash.com/photo-1516655855035-d5215bcb5604?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1' },
    { categoria: 'Evento', titulo: 'Conferencia Tech 2025', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1' },
    { categoria: 'Comercial', titulo: 'Spot Coca-Cola Verano', img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1' },
    { categoria: 'Documental', titulo: 'Artesanos del Café', img: 'https://images.unsplash.com/photo-1503376713635-43a9d45e43bc?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1' },
    { categoria: 'Evento', titulo: 'Festival de Luces', img: 'https://images.unsplash.com/photo-1516655855035-d5215bcb5604?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1' },
    { categoria: 'Evento', titulo: 'El Elian', img: '/home/eliancardona/Pictures', url: 'https://www.youtube.com/embed/vOxmsqd8f58?si=oP6N0KS2JuMoe0Ii'}
];