export default {
  global: {
    Name: 'Operaciones y documentación aduanera',
    Description:
      'Este componente desarrolla conocimientos fundamentales sobre comercio exterior, incluyendo operaciones de importación y exportación, la clasificación y naturaleza de las mercancías, y el análisis de la normativa aduanera y arancelaria. Proporciona las bases para comprender los procedimientos legales, los tipos de trámites y documentos requeridos en las actividades comerciales internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Comercio exterior',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Operación de importación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Operación de exportación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Naturaleza',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Clasificación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normativa aduanera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de procedimientos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de reglamentación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de requerimientos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipos de documentos legales',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normativa arancelaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Arancel',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de procedimientos arancelarios',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de reglamentación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Tipos de trámites',
            hash: 't_4_4',
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
      tema: 'Sistema armonizado',
      referencia:
        'Fernando Muñoz. (2024). El sistema armonizado de designación y codificación de mercancías. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RZXMWctJhEY&t=34s',
    },
    {
      tema: 'Normativa aduanera',
      referencia:
        'Legistrade. (2024). Decreto 0659 de 2024 - Régimen aduanero colombiano. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_lp7XHscat0',
    },
    {
      tema: 'Normativa arancelaria',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Análisis arancelario: partida arancelaria. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Hi4nnravO3M?si=ZgrTM4kmzOklukEW',
    },
  ],
  glosario: [
    {
      termino: 'Arancel',
      significado:
        'es un impuesto manejado por la mayoría de los países en donde la mano del Estado se hace participe activamente para poder obtener un recaudo.',
    },
    {
      termino: 'Bienes',
      significado:
        'son todos los objetos materiales o inmateriales, corporales o incorporales, muebles o inmuebles, tangibles o intangibles, que sean susceptibles de apropiación o que tengan un valor económico.',
    },
    {
      termino: 'Comercio exterior',
      significado:
        'es el intercambio de bienes y servicios entre países que cuentan con economías abiertas, en el se requiere cumplir con trámites, procedimientos tributarios y normativa vigente.',
    },
    {
      termino: 'DIAN',
      significado: 'Dirección de Impuestos y Aduanas Nacionales.',
    },
    {
      termino: 'DUA',
      significado:
        'Documento Único Aduanero, es el documento oficial que se utiliza en las operaciones de comercio exterior para declarar mercancías ante la autoridad aduanera.',
    },
    {
      termino: 'Exportación',
      significado:
        'se refiere a la venta de productos o servicios hacia otros países.',
    },
    {
      termino: 'Gravar',
      significado:
        'someter algo (un bien, ingreso, actividad o derecho) al pago de un impuesto, tasa o contribución, es decir, aplicar una obligación fiscal sobre ello.',
    },
    {
      termino: 'Importación',
      significado:
        'se refiera al proceso de comprar productos o servicios de otros países para usarlos, venderlos o transformarlos de manera interna.',
    },
    {
      termino: 'Mercancía',
      significado:
        'son un bien que una persona puede vender o comprar a través de una transacción, también se define como cualquier elemento que sea posible intercambiar o comercializar en un mercado.',
    },
    {
      termino: 'OMA',
      significado: 'Organización Mundial de Aduanas.',
    },
    {
      termino: 'Perfeccionamiento',
      significado:
        'se refiere al momento en que una operación de comercio exterior (importación, exportación o régimen aduanero especial) cumple con todos los requisitos legales y se considera formalmente completada ante la autoridad aduanera.',
    },
    {
      termino: 'Sistema armonizado',
      significado:
        'es una nomenclatura internacional estandarizada para la clasificación de mercancías en el comercio exterior.',
    },
    {
      termino: 'VUCE',
      significado: 'Ventanilla Única de Comercio Exterior.',
    },
    {
      termino: 'Zona franca',
      significado:
        'es un territorio delimitado dentro del país que cuenta con un régimen aduanero, tributario y de comercio exterior especial, diseñado para promover la inversión, la industrialización, la generación de empleo y las exportaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Appolo. (2023). Trámites aduaneros en Colombia: documentación, requisitos y procedimientos.',
      link:
        'https://appolo.com.co/tramites-aduaneros-requisitos-documentos-procedimientos/',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (2023). Normativa sobre la Clasificación Arancelaria de las mercancías.',
      link:
        'https://www.dian.gov.co/aduanas/Documents/Manual-clasificacion-arancelaria.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN). (2017). Regulación Aduanera en Colombia. ',
      link:
        'https://www.dian.gov.co/aduanas/Documents/Nueva%20Regulaci%C3%B3n%20Aduanera%20en%20Colombia.pdf',
    },
    {
      referencia:
        'Fundación Confemetal. (2020). Conceptos de Iniciación al Comercio Exterior. ',
      link:
        'https://fundacionconfemetal.com/wp-content/uploads/2020/09/Pages_from_ComercioExterio_2020_1.pdf',
    },
    {
      referencia:
        'Legiscomex. (2020). Entidades de Comercio Exterior en Colombia. ',
      link:
        'https://www.legiscomex.com/Documentos/links-interes-colombia-entidades',
    },
    {
      referencia:
        'Organización Mundial de Aduanas. (2022). Sistema Armonizado. ',
      link: 'https://www.wcotradetools.org/en/harmonized-system/2022/es',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2021). Zajuna Semilla. 134600_1_Virtual-Operaciones de Comercio Exterior. ',
      link: 'https://zajuna.sena.edu.co/zajuna/course/view.php?id=32448',
    },
    {
      referencia:
        'Zona Franca Parque Central. (2023). Comercio exterior: una introducción al intercambio de bienes y servicios a nivel global. ',
      link:
        'https://zonafrancapc.co/comercio-exterior-una-introduccion-al-intercambio-de-bienes-y-servicios-a-nivel-global/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
