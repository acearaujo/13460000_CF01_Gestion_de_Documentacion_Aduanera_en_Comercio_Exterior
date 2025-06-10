<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.align-items-center
      .col-1
        img(src="@/assets/curso/sintesis/img_01.svg" alt="Imagen Decorativa")
      .col-9
         p A continuación, se describe una visión general sobre los aspectos clave del desarrollo de las operaciones de comercio exterior. Comienza con generalidades del comercio exterior y sus tipos de operaciones. Incluye lo referente a las mercancías como lo es la naturaleza de estas y como se clasifican. Además, se explora la normativa aduanera que rige en nuestro país y sus componentes. Finalmente, se aborda la normativa arancelaria, describiendo todo lo relacionado a los aranceles y los tipos de procedimientos, trámites y reglamentaciones que deben llevarse a cabo para la entrada y/o salida de mercancías. 
      .col-2
         img(src="@/assets/curso/sintesis/img_02.svg" alt="Imagen Decorativa") 


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        img.w-100.h-100(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="Imagen Decorativa")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
