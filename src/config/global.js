export default {
  global: {
    componenteFormativo: 'Gestión del riesgo en las organizaciones',
    descripcionCurso:
      'La innovación digital está llevando a que las organizaciones deban hacer frente a nuevos retos relacionados con la gestión segura de la información, dado que el crecimiento de los mercados, la globalización de las comunicaciones, hace mucho más arriesgado la distribución y el manejo de los datos. por ende, saber gestionar el riesgo es fundamental dentro del éxito organizacional, y ese es precisamente el objetivo del presente componente formativo, sentar las bases necesarias para tratar de manera óptima cualquier incidente, que, dentro de este contexto, que pueda enfrentarse una organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Caracterización de amenazas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de riesgo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normatividad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodologías para la gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Herramientas de apoyo para la gestión del riesgo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métricas e indicadores',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Identificación de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas de recolección de información',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Valoración de activos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Identificación de amenazas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Estimación del riesgo',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plan de tratamiento del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Reconocimiento del impacto del riesgo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Establecimiento de controles',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estrategia de implementación de controles',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Evaluación del plan de tratamiento de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Reconocimiento de controles',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas de auditoria',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Plan de auditoria',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Informe de auditoría',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Plan de mejoramiento',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CFA05_228127.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normatividad',
      referencia:
        'ICONTEC (2018). Norma GTC-ISO- 19011:2018 directrices para la auditoría de los sistemas de gestión.',
      tipo: 'Libros digitales',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000109369',
    },
    {
      tema: 'Normatividad',
      referencia:
        'ICONTEC (2018). NTC-ISO 31000:2018 - Gestión del Riesgo. Directrices.',
      tipo: 'Libros digitales',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000098205',
    },
    {
      tema: 'Normatividad',
      referencia:
        'ICONTEC (2018). NTC-ISO-IEC 27001:2013 – Tecnología de la información. Técnicas de seguridad. Sistemas de gestión de la seguridad de la información. Requisitos.',
      tipo: 'Libros digitales',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000074860',
    },
    {
      tema: 'Normatividad',
      referencia:
        'Fernández P., Gómez, L. (2018). Cómo implantar un SGSI según UNE-EN ISO/IEC 27001 y su aplicación en el Esquema Nacional de Seguridad. AENOR - Asociación Española de Normalización y Certificación. (pp 36-57).',
      tipo: 'Libros digitales',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/53624?page=36',
    },
  ],
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'Componente o funcionalidad de un sistema de información susceptible de ser atacado deliberada o accidentalmente con consecuencias para la organización. Incluye: información, datos, servicios, aplicaciones (software), equipos (hardware), comunicaciones, recursos administrativos, recursos físicos y recursos humanos (MAGERIT,2012)',
    },
    {
      termino: 'Autenticidad',
      significado:
        'Propiedad o característica consistente en que una entidad es quien dice ser o bien que garantiza la fuente de la que proceden los datos',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Que la información llegue solamente a las personas autorizadas',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'Disposición de los servicios a ser usados cuando sea necesario',
    },
    {
      termino: 'Integridad',
      significado:
        'Mantenimiento de las características de completitud y corrección de los datos',
    },
    {
      termino: 'PHVA',
      significado: 'Ciclo determinado por Planear, Hacer, Verificar y Actuar',
    },
    {
      termino: 'Salvaguarda',
      significado:
        'Procedimientos o mecanismos tecnológicos que reducen el riesgo',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Aseguramiento de que en todo momento se podrá determinar quién hizo qué y en qué momento',
    },
    {
      termino: 'Vulnerabilidad',
      significado: 'Toda debilidad que puede ser aprovechada por una amenaza',
    },
  ],
  referencias: [
    {
      referencia:
        'Escorial Bonet, Á. Escalera Alcázar, J. & Simón Quintana, S. (2019). Guía para la aplicación de UNE-ISO 31000:2018. AENOR - Asociación Española de Normalización y Certificación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/118154',
    },
    {
      referencia: 'ICONTEC (2015). ISO:9001 Sistemas de gestión de la calidad.',
      link: 'https://www.normas-iso.com/iso-9001/',
    },
    {
      referencia:
        'ICONTEC (2018). NORMA GTC-ISO- 19011:2018 Directrices para la auditoría de los sistemas de gestión.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000109369',
    },
    {
      referencia:
        'ICONTEC (2018). NTC-ISO 31000:2018 - Gestión del Riesgo. Directrices.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000098205',
    },
    {
      referencia:
        'INCIBE (2017). Gestión de riesgos - Una guía de aproximación para el empresario.',
      link:
        'https://www.incibe.es/sites/default/files/contenidos/guias/doc/guia_ciberseguridad_gestion_riesgos_metad.pdf',
    },
    {
      referencia: 'ISO/IEC 27001:2013 (2013). NORMA ISO 27001.',
      link: 'https://normaiso27001.es/',
    },
    {
      referencia:
        'MINTIC. (2016). Seguridad y Privacidad de la Información - Guía de gestión de riesgos.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
    {
      referencia:
        'PAe, Portal Administración Electrónica. (2012). MAGERIT versión 3 (versión española): Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información.',
      link:
        'https://administracionelectronica.gob.es/pae_Home/pae_Documentacion/pae_Metodolog/pae_Magerit.html',
    },
    {
      referencia:
        'Tamayo Saborit, M. González e, D. (2020). La gestión de riesgos: herramienta estratégica de gestión empresarial. Editorial Universo Sur.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/131885',
    },
    {
      referencia: 'Tithink. (2015). Gestión de Riesgos MAGERIT.',
      link: 'https://www.tithink.com/publicacion/MAGERIT.pdf',
    },
    {
      referencia:
        'UpKeep. (2020). ISO:55002 ¿Qué es la gestión de activos e ISO 55000?',
      link:
        'https://upkeep.com/es/learning/asset-management-iso-55000/#%C2%BFcu%C3%A1les-son-algunos-est%C3%A1ndares-que-lo-definen?',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto Temático',
          centro:
            'Regional Norte de Santander  - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Juan Guillermo Zuluaga Saavedra',
          cargo: 'Expero Temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producctor y Animador Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
