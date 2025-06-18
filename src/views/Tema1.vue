<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comercio exterior


    div.tarjeta-horz.mb-3
      img(src='@/assets/curso/temas/tema1/img_01.png', alt='Imagen decorativa')
      div.texto-tarjeta
        p.mb-0 La temática que vamos a desarrollar está orientada a conocer los conceptos básicos, procesos clave y el impacto de las operaciones de comercio exterior, resaltando su relevancia en un mundo globalizado; con el fin de satisfacer demandas internas, aprovechar ventajas competitivas y fortalecer el crecimiento económico del país.
        
    separador
    .bg_waves.bg_01.bg_top
      .titulo-segundo.color-acento-contenido
        h2#t_1_1 1.1 Concepto

      .row.mb-5.align-items-center
        .col-md-2.col-4.mb-3.mb-md-0.mx-auto
          img(src='@/assets/curso/temas/tema1/img_06.svg', alt='Imagen decorativa')
        .col-md-10
          p El comercio exterior puede definirse como el intercambio de bienes y servicios entre países que cuentan con economías abiertas, en el que se requiere   cumplir con trámites, procedimientos tributarios y normativa vigente. El comercio exterior comprende dos tipos de operaciones: importación y exportación.
          p.mb-0 Para que se desarrolle de manera eficaz el comercio exterior entre países, es necesario cumplir con las siguientes etapas:

      .row.mb-5
        .col-md-10.mx-auto
          .titulo-sexto.mb-4.color-acento-contenido
            h5 Figura 1. 
            span Etapas del comercio exterior  

          figure.mb-5
            img.mb-3(src='@/assets/curso/temas/tema1/img_02.svg', alt='En la figura 1 se presentan las cinco etapas necesarias en toda operación de comercio exterior. Negociación: comprador y vendedor se ponen de acuerdo en diferentes aspectos como la fecha y lugar de entrega, el precio y los medios o formas de pago.  Contratación: se trata de documentar todas las condiciones de la contratación de forma clara y legal.  Documentación: en esta etapa se desarrollan operaciones propias del comercio exterior y que generan documentos y trámites como los certificados comerciales, de transporte, aduanas y otros. Transporte y seguro: se realiza el transporte de los productos o insumos hasta su destino, generalmente se cubre mediante un seguro. Fiscalidad: se refiere a las operaciones que están sometidas a gastos e impuestos, como el despacho de aduanas, aranceles y el IVA.').mx-auto.d-none.d-md-block
            img.mb-3(src='@/assets/curso/temas/tema1/img_02m.svg', alt='En la figura 1 se presentan las cinco etapas necesarias en toda operación de comercio exterior. Negociación: comprador y vendedor se ponen de acuerdo en diferentes aspectos como la fecha y lugar de entrega, el precio y los medios o formas de pago.  Contratación: se trata de documentar todas las condiciones de la contratación de forma clara y legal.  Documentación: en esta etapa se desarrollan operaciones propias del comercio exterior y que generan documentos y trámites como los certificados comerciales, de transporte, aduanas y otros. Transporte y seguro: se realiza el transporte de los productos o insumos hasta su destino, generalmente se cubre mediante un seguro. Fiscalidad: se refiere a las operaciones que están sometidas a gastos e impuestos, como el despacho de aduanas, aranceles y el IVA.').mx-auto.d-md-none.d-block
            figcaption 
              b Fuente: 
              | Zona Franca Parque Central, 2023

          .tarjeta.p-3.color-acento-contenido-10
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/tema1/img_03.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0 
                      b Colombia cuenta con entidades que promueven e intervienen en las operaciones de comercio exterior, las cuales pueden ser consultadas en el siguiente enlace:
                  .col-sm-auto
                    a.boton.color-yellow(href="https://www.legiscomex.com/Documentos/links-interes-colombia-entidades" target="_blank")
                      span Enlace
                      i.fas.fa-link

    separador


    .bg_waves.bg_01
      .titulo-segundo.color-acento-contenido
        h2#t_1_2 1.2 Operación de importación

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-md-6.col-lg-3.col-8.mb-3
          figure
            img(src="@/assets/curso/temas/tema1/img_04.png", alt='Imagen Descriptiva').mx-auto
        .col-lg-8.col-xl-8.mb-2
          p La operación de importación se refiere al proceso de comprar productos o servicios de otros países para usarlos, venderlos o transformarlos de manera interna. Para hacerlo, hay que cumplir con ciertas reglas, pagar impuestos como el IVA y entregar documentos requeridos, como facturas y certificados. En Colombia, esto se hace por medio de la DIAN y herramientas tecnológicas como la Ventanilla Única de Comercio Exterior (VUCE). Las empresas que importan deben tener en cuenta las normas para el comercio internacional, la tasa de cambio y las restricciones según el producto. 
          p Para lograr que las importaciones se desarrollen de manera eficiente, se requiere conocimiento especializado en comercio internacional, logística y legislación aduanera. De esta forma, se contribuye a la obtención de productos que no se producen en el país, el acceso a tecnologías, y/o adquirirlos a precios más competitivos.
          p.mb-0 Lo anterior genera impactos económicos en los países, de distintas formas como, por ejemplo: salida de divisas, se complementa la oferta nacional, se puede afectar la balanza comercial y se estimula la competitividad empresarial.



      .titulo-segundo.color-acento-contenido
        h2#t_1_3 1.3 Operación de exportación

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_05.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p La exportación se refiere a la venta de productos o servicios hacia otros países. Para lograr que esta operación se lleve a cabo, hay que cumplir con la normativa local y del país al que se envían, como lo son los certificados de calidad, permisos sanitarios y documentos de transporte. En Colombia, los exportadores pueden aprovechar beneficios como el Plan Vallejo y el apoyo de ProColombia.
            br 
            br
            | Exportar genera importantes beneficios como el ingreso de divisas al país, fortalece la economía, fomenta la creación de empleos, promueve la innovación tecnológica y estimula a las empresas para que sean más competitivas. 




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
