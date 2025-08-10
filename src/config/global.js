export default {
  global: {
    Name: 'Soy un ser social',
    Description:
      'El componente formativo aborda la formación ética desde la familia, destacando su papel en la construcción de valores, normas y hábitos que orientan el comportamiento social. También analiza cómo las normas sociales regulan la convivencia y fomentan el respeto mutuo. Además, relaciona la ética con la toma de decisiones, los ambientes sociales y el trabajo como ejes fundamentales para el desarrollo integral del individuo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'La formación ética desde la familia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La familia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'La ética familiar y la formación de valores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'La influencia de la ética en la toma de decisiones',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '¿Cómo me convierto en un ser social?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ambientes sociales: concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'El trabajo como elemento social en su FPI (Formación Profesional Integral)',
            hash: 't_2_2',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'La formación ética desde la familia',
      referencia:
        'Mínguez, R. (2014). Volver Ética de la vida familiar y transmisión de valores morales. Revista de Educación ',
      tipo: 'Artículo',
      descarga: 'downloads/re36309.pdf',
    },
    {
      tema: 'La familia',
      referencia:
        'MENTES EXPERTAS (2020). La importancia de la familia. Mario Alonso Puig. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=UqYP9__KKPM&ab_channel=MENTESEXPERTAS ',
    },
    {
      tema: 'La ética familiar y la formación de valores',
      referencia:
        'Aprendemos Juntos 2030. (2019). Versión Completa. ¿Para qué sirve la ética? Adela Cortina, filósofa. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=HOY0CSVAA4w&ab_channel=AprendemosJuntos2030 ',
    },
    {
      tema: 'La influencia de la ética en la toma de decisiones',
      referencia:
        'IESE Business School. (2013). La ética en la toma de decisiones [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=PIMr2ve0WRs&ab_channel=IESEBusinessSchool ',
    },
    {
      tema: 'Ambientes sociales: concepto',
      referencia:
        'Sevillano, V., & Olivos, P. (2019). Comportamiento social y ambiente: Influencia de las normas sociales en la conducta ambiental. Papeles del Psicólogo / Psychologist Papers, 40(3), 182-189.',
      tipo: 'Artículo ',
      descarga: 'downloads/2898.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Familia',
      significado:
        'grupo de personas unidas por lazos consanguíneos o legales, considerada el primer agente socializador del individuo.',
    },
    {
      termino: 'Ética',
      significado:
        'disciplina que estudia el comportamiento humano en relación con el bien y el mal, guiando la toma de decisiones responsables.',
    },
    {
      termino: 'Normas sociales',
      significado:
        'pautas de comportamiento, generalmente implícitas, que orientan la conducta en un grupo determinado y promueven la convivencia.',
    },
    {
      termino: 'Valores',
      significado:
        'creencias profundas que orientan las decisiones y comportamientos, y que dan sentido a la vida.',
    },
    {
      termino: 'Convivencia',
      significado:
        'proceso de interacción armoniosa basado en el respeto, la solidaridad y el cumplimiento de normas compartidas.',
    },
    {
      termino: 'Formación ética',
      significado:
        'proceso educativo en el que se transmiten valores, principios y normas que permiten el desarrollo moral del individuo.',
    },
    {
      termino: 'Alteridad',
      significado:
        'concepto filosófico que destaca la importancia del otro en la constitución del yo, base de la ética propuesta por Emmanuel Lévinas. ',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'proceso mediante el cual una persona elige entre diferentes opciones, guiada por principios éticos y objetivos claros.',
    },
    {
      termino: 'Entorno social',
      significado:
        'conjunto de relaciones, estructuras y condiciones materiales e inmateriales que influyen en el desarrollo humano.',
    },
    {
      termino: 'FPI (Formación Profesional Integral)',
      significado:
        'enfoque educativo del SENA que integra competencias técnicas, sociales y éticas en el proceso de aprendizaje.',
    },
    {
      termino: 'Competencias básicas',
      significado:
        'capacidades generales como comunicación, pensamiento lógico y participación ciudadana, esenciales para cualquier ámbito.',
    },
    {
      termino: 'Competencias transversales',
      significado:
        'habilidades útiles en diversos contextos, como liderazgo, trabajo en equipo y adaptabilidad.',
    },
    {
      termino: 'Competencias específicas',
      significado:
        'conocimientos y destrezas técnicas relacionadas directamente con un área ocupacional o productiva.',
    },
    {
      termino: 'Trabajo',
      significado:
        'actividad productiva que transforma el entorno y contribuye al desarrollo personal y social del individuo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amador, a. (2004). Vivir y trascender en Familia: a través de los valores humanos, Ed trillas, México, Pág. 127.',
      link: '',
    },
    {
      referencia:
        'Castro Suárez, G. C. (2023). El papel de la ética en la toma de decisiones empresariales. Nexus Research Journal, 2(1), 25-34. ',
      link: 'https://editorialinnova.com/index.php/nrj/article/view/8 ',
    },
    {
      referencia:
        'Díez-Gómez, D. A., Guillén, M., & Rodríguez, M. D. P. (2019). Revisión de la literatura sobre la toma de decisiones éticas en organizaciones. Información Tecnológica, 30(3), 25–38.  ',
      link: 'https://doi.org/10.4067/S0718-07642019000300025',
    },
    {
      referencia:
        'Esteve Zarazaga, J. (2010). Educar: un compromiso con la memoria. Barcelona: Octaedro.',
      link: '',
    },
    {
      referencia:
        'Garzón, N. (2001). Toma de decisiones éticas. Cátedra Manuel Ancizar ética y bioética. Primer semestre.',
      link: '',
    },
    {
      referencia:
        'Lozano, F, Pastor J., Monterde, R. (s.f.). Impacto de los valores éticos en la toma de decisiones. Departamento de Proyectos de Ingeniería ETSII – UPV',
      link: '',
    },
    {
      referencia:
        'Martínez, Y. (2014). Habilidad para la toma de decisiones. Escuela de organización industrial. ',
      link:
        'https://www.eoi.es/blogs/mintecon/2014/05/18/habilidad-para-la-toma-de-decisiones/',
    },
    {
      referencia:
        'Mercado Pérez, Raúl (2013). La responsabilidad ética en la toma de decisiones dentro de las organizaciones. Sincronía, (64),1-12. ',
      link: '',
    },
    {
      referencia:
        'Pierri, H. (2020). La ética en la toma de decisiones. Global Strategy Report 34/2020.  ',
      link:
        'https://repository.umng.edu.co/server/api/core/bitstreams/228da409-a58b-4718-a3ed-8456609ae180/content',
    },
    {
      referencia:
        'Sánchez Eligio, M. (2019). Normas: para qué sirven, tipos, características, importancia. Lifeder. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
