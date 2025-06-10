<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mercancías

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_01.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Las mercancías son la base del comercio y la economía, abarcando desde productos básicos hasta servicios especializados. Su naturaleza y clasificación ayudan a entender su papel en el mercado, su regulación y su impacto en la cadena de producción y consumo.

    separador

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-4.col-lg-4.col-xl-3.col-6.mb-3
        figure
          img(src="@/assets/curso/temas/tema2/img_02.png", alt='Imagen Descriptiva').mx-auto.mb-4.mb-md-2
      .col-lg-12.col-xl-8.mb-2
        .titulo-segundo.color-acento-contenido
          h2#t_2_1 2.1 Concepto
        .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
          .col-md-8.col-12
            p.mb-md-0 Son un bien que una persona puede vender o comprar a través de una transacción, también se define como cualquier elemento que sea posible intercambiar o comercializar en un mercado. Toda mercancía tiene como característica originaria satisfacer una necesidad del comprador o consumidor; con la venta de la mercancía se cubre una demanda específica.
          .col-md-4.col-4
            figure
              img(src="@/assets/curso/temas/tema2/img_03.svg", alt='Imagen Descriptiva').mx-auto

        separador

        .titulo-segundo.color-acento-contenido
          h2#t_2_1 2.2 Naturaleza
        p La naturaleza de las mercancías se refiere a las características físicas, químicas, biológicas y legales, las cuales definen su manejo y cumplimiento legal. Un análisis adecuado de la naturaleza evita riesgos, multas o deterioro de la mercancía.
        p En el siguiente video podemos estudiar la clasificación de las mercancías, según su naturaleza: 

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/G8gm9ByECkI?si=E_4GD-CZaLbtdSDV" title="En el video se presenta la clasificación de las mercancías según su naturaleza, al igual que las características de cada una." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Nota: Sena (2024).  

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.3 Clasificación
   
    p La clasificación de mercancías es un sistema ordenado que permite agrupar los productos según sus características, composición, función o uso. Su objetivo principal es facilitar la identificación durante las operaciones de comercio exterior, transporte, almacenamiento y el cumplimiento de normativas aduaneras y arancelarias.
    
    .row
      .col-12.col-md-10.mx-auto
       
        .titulo-sexto.mb-4.color-acento-contenido
            h5 Tabla 1. 
            span Clasificación de las mercancías    

        .tabla-a.mb-5
          table
            caption 
              b Fuente: 
              | SENA, 2025.
            thead
              tr
                td Criterio
                td Clasificación
                td Ejemplo
            tr
              td(rowspan="2") Tangibilidad
              td Tangibles (bienes físicos)
              td Alimentos, electrodomésticos, ropa
            tr
              td Intangibles (servicios)
              td Software
            tr
              td(rowspan="2") Durabilidad
              td Perecederos
              td Alimentos, productos de higiene
            tr
              td No perecederos
              td Vehículos
            tr
              td(rowspan="2") Función o consumo
              td De consumo
              td Ropa, comida
            tr
              td Producción
              td Maquinaria, materias primas
            tr
              td(rowspan="3") Regulación
              td Libres (sin restricciones)
              td Ropa, libros
            tr
              td Reguladas (venta controlada)
              td Armas, alcohol, medicamentos
            tr
              td Prohibidas (venta ilegal)
              td Drogas ilícitas, especies en vía de extinción
            tr
              td(rowspan="3") Origen
              td Agrícolas
              td Trigo, leche
            tr
              td Industriales
              td Teléfonos, autos
            tr
              td Minerales
              td Oro, carbón, cobre

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-down")
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr.position-relative Área natural 
            img.pst(src='@/assets/curso/temas/tema2/img_07.svg', alt='Imagen Descriptiva')
    
   
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-lg-12.col-xl-8.mb-2
        p  En épocas anteriores, durante el desarrollo de las operaciones de comercio exterior surgían numerosos inconvenientes debido a la necesidad de cumplir con regulaciones específicas que eran pertinentes para ciertos países o áreas, pero que no eran aplicables en otros. Por lo anterior, la Organización Mundial de Aduanas (OMA) en aras de simplificar el comercio entre las naciones del mundo implementó el Sistema Armonizado de Designación y Codificación de Mercancías, más comúnmente conocido como Sistema Armonizado.
        .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
          .col-md-4.col-4
            figure
              img(src="@/assets/curso/temas/tema2/img_04.svg", alt='Imagen Descriptiva').mx-auto.mb-3.mb-md-0
          .col-md-8.col-12
            .p-3.color-acento-contenido-10.border-radius-4
             p El Sistema Armonizado clasifica las mercancías en 4 categorías:
             ul.bullets.mb-0
              li.d-flex.gap-2.align-items-center
                i.fa.fa-check-circle
                span materias primas
              li.d-flex.gap-2.align-items-center
                i.fa.fa-check-circle
                span Productos brutos
              li.d-flex.gap-2.align-items-center
                i.fa.fa-check-circle
                span Semiproductos
              li.d-flex.gap-2.align-items-center
                i.fa.fa-check-circle
                span Productos elaborados
        
      .col-md-4.col-lg-4.col-xl-3.col-6.mb-3
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/tema2/img_05.png", alt='Imagen Descriptiva').mx-auto.mb-0.mb-md-2
     
    p.mb-0 Este sistema consta de 21 secciones y 97 capítulos que detallan cada tipo de mercancía, además de títulos de cuatro dígitos y subtítulos de seis dígitos. 
    p Para la codificación de las mercancías se implementa la siguiente estructura de 6 dígitos: los primeros 2 dígitos identifican el capítulo (grupo general de productos), los siguientes 2 dígitos (4 en total) corresponden a la partida (subgrupo más específico), los últimos 2 dígitos (6 en total) determinan la subpartida (clasificación detallada del producto).

    p En el siguiente ejemplo podemos evidenciar la implementación de la codificación del Sistema Armonizado utilizada para motores eléctricos para automóviles.

    .row.mb-5
      .col-12.col-md-10.mx-auto
        .titulo-sexto.mb-4.color-acento-contenido
          h5 Figura 2. 
          span Esquema de nomenclatura del Sistema Armonizado    
        figure
          img(src="@/assets/curso/temas/tema2/img_06.svg", alt='Texto alternativo: En la figura 2 se evidencia la estructura de la nomenclatura del Sistema Armonizado. Capítulo 85 máquinas, aparatos Partida 01 motores eléctricos Subpartida 21 para vehículos automóviles Código SA 85.01.10 motores eléctricos para automóviles').mx-auto
          figcaption 
            b Fuente: 
            | SENA, 2025

    .row.mb-4
      .col-12.col-md-10.mx-auto
        .row.d-flex.h-100.align-items-stretch
          .col-12.col-md-6.d-flex
            .p-4.border-radius-4.color-primario-10.w-100.h-100.d-flex.flex-column
              p 
                b Funciones principales del Sistema Armonizado:
              ul.bullets.mb-0.d-flex.flex-column.gap-2
                li.d-flex.gap-2.align-items-center
                  i.fa.fa-check-circle
                  span 
                    b Arancelaria: 
                    | determina los impuestos de importación/exportación.
                li.d-flex.gap-2.align-items-center
                  i.fa.fa-check-circle
                  span 
                    b Estadística:
                    | consolida datos comerciales entre países.
                li.d-flex.gap-2.align-items-center
                  i.fa.fa-check-circle
                  span 
                    b Regulatoria: 
                    | identifica mercancías sujetas a restricciones.

          .col-12.col-md-6.d-flex
            .p-4.border-radius-4.color-secundario-10.w-100.h-100.d-flex.flex-column
              p Podemos mencionar que el Sistema Armonizado ofrece ventajas a los diferentes actores que intervienen en las operaciones de comercio exterior, como lo son:
              ul.bullets.mb-0.d-flex.flex-column.gap-2
                li.d-flex.gap-2.align-items-center
                  i.fa.fa-check-circle
                  span Reduce conflictos en clasificación.
                li.d-flex.gap-2.align-items-center
                  i.fa.fa-check-circle
                  span Evita ambigüedades en mercancías similares.
                li.d-flex.gap-2.align-items-center
                  i.fa.fa-check-circle
                  span Facilita acuerdos comerciales

 
    .row
      .col-12.col-md-10.col-lg-6.mx-auto
        .tarjeta.p-3.color-acento-contenido-10
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img_03.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 
                    b Para ampliar la información del Sistema Armonizado en su última versión, lo invitamos a acceder al siguiente enlace:
                .col-sm-auto
                  a.boton.color-yellow(href="https://www.wcotradetools.org/en/harmonized-system/2022/es" target="_blank")
                    span Descargar
                    i.fas.fa-file-arrow-down



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
