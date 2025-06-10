<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/img_01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este componente tiene como objetivo proporcionar al aprendiz los conocimientos necesarios sobre el comercio exterior, las mercancías y las normativas que regulan las operaciones internacionales. A través del estudio del concepto, operaciones de importación y exportación, así como de la naturaleza y clasificación de las mercancías, se busca fortalecer la comprensión del marco legal aduanero y arancelario. Para ello, se abordarán los tipos de reglamentaciones, procedimientos, trámites y documentos legales requeridos, con el fin de preparar al estudiante para tramitar correctamente la documentación aduanera. El aprendizaje se desarrollará mediante el análisis conceptual y la aplicación práctica en contextos reales del comercio internacional.

   
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/nTZF6ek4fY4?si=kk1YXF7gk-PyEqzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota: Sena (2024).  

</template>

<script>
export default {
  name: 'Introduccion',
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
