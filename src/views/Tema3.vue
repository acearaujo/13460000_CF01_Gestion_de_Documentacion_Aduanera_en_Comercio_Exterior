<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa aduanera

    .row.p-0.g-0
      .col-12.mx-auto
        .row.color-secundario-10.p-0.g-0.mb-5
          .col-md-4(
              :style="{'background': `url(${require('@/assets/curso/temas/tema3/img_01.png')}) right no-repeat`,'min-height':'100px','background-size':'cover'}"
            )
          .col-12.col-md-8.p-4
            p.mb-0 Las mercancías son la base del comercio y la economía, abarcando desde productos básicos hasta servicios especializados. Su naturaleza y clasificación ayudan a entender su papel en el mercado, su regulación y su impacto en la cadena de producción y consumo.

    .row
      .col-12.col-lg-10.mx-auto.mb-4
        .p-4.color-acento-contenido-10.border-radius-4.bg01
          .row.align-items-center
            .col-12.col-md-9.order-2.order-md-1
              p 
                b Decreto 659 de 2024
              p El Decreto 659 del 22 de mayo de 2024 establece una nueva normatividad aduanera en Colombia, modificando aspectos clave del régimen de importaciones y exportaciones pertenecientes al Decreto 1165 de 2019. Busca modernizar y simplificar los trámites aduaneros en Colombia, alineándose con estándares internacionales y facilitando el comercio exterior. Además, introduce medidas para fortalecer el control fiscal y la lucha contra el contrabando. De esta manera se logra equilibrar facilidad de comercio con control fiscal, promoviendo la competitividad de Colombia en mercados internacionales. 
            
            .col-4.col-md-3.order-1.order-md-2.mx-auto
              img(src="@/assets/curso/temas/tema3/img_03.png", alt='Imagen Descriptiva').mb-4.mb-md-0


      .col-12.col-lg-10.mx-auto.mb-5
        .tarjeta.p-3.color-primario-10
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img_03.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 
                    b Para ampliar la información del Decreto 659 de 2024, lo invitamos a acceder al siguiente enlace: 
                .col-sm-auto
                  a.boton.color-yellow(href="https://normograma.dian.gov.co/dian/compilacion/docs/decreto_0659_2024.htm" target="_blank")
                    span Enlace
                    i.fas.fa-link
   
        
        
    .row
      .col-12.col-lg-10.mx-auto
        .titulo-sexto.mb-4.color-acento-contenido
            h5 Tabla 2. 
            span Tabla comparativa Decreto 1165 (2019) vs. Decreto 659 (2024)     

        .tabla-a.mb-5
          table
            caption 
              b Fuente: 
              | SENA, 2025.
            thead
              tr
                td Aspecto
                td Decreto 1165 de 2019
                td Decreto 659 de 2024
                td ¿Qué cambia?
            tbody
              tr
                td Digitalización
                td Uso de VUCE (Ventanilla Única de Comercio Exterior).
                td Facturación electrónica obligatoria y mayor integración en VUCE 2.0.
                td Más trámites en línea, menos papel.
              tr
                td Plazos de despacho
                td Despacho ordinario: hasta 5 días hábiles.
                td Despacho express: 24 horas para mercancías de bajo riesgo.
                td Agiliza operaciones para importadores frecuentes.
              tr
                td Valoración aduanera
                td Se basa en valor declarado + métodos tradicionales.
                td Precios de referencia internacionales para evitar subvaluación.
                td Más controles a precios bajos artificiales.
              tr
                td Sanciones
                td Multas hasta 10,000 UVT por infracciones graves.
                td Multas aumentadas hasta 15,000 UVT para contrabando técnico.
                td Mayor rigor en evasión fiscal.
              tr
                td Controles aduaneros
                td Muestreo aleatorio y perfiles de riesgo.
                td Enfoque en inteligencia artificial para detectar irregularidades.
                td Más eficiencia en fiscalización.
              tr
                td Trámites para PYMES
                td Mismos requisitos que grandes empresas.
                td Simplificación de trámites para pequeños importadores/exportadores.
                td Reduce barreras para PYMES.


    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")      
      .col-md-3.col-lg-3.col-6.mb-3
        figure
          img(src="@/assets/curso/temas/tema3/img_04.png", alt='Imagen Descriptiva').mx-auto.mb-4.mb-md-2
      .col-lg-12.col-xl-9.mb-2
        .titulo-segundo.color-acento-contenido
          h2#t_3_1 3.1 Tipos de procedimientos
        p De acuerdo con el Decreto 659 de 2024, los procedimientos aduaneros son "las actuaciones, trámites y controles establecidos por la normativa aduanera, que deben surtirse ante la Dirección de Impuestos y Aduanas Nacionales (DIAN) o ante los operadores de comercio exterior autorizados, para el manejo, despacho y control de las mercancías que ingresan o salen del territorio aduanero nacional."

    .row.mb-5
      .col-12.col-lg-10.mx-auto
        .titulo-sexto.mb-4.color-acento-contenido
          h5 Figura 3. 
          span Etapas del comercio exterior  
        figure
          img(src="@/assets/curso/temas/tema3/img_05.svg", alt='•Principales Importación: introducción de mercancías al territorio aduanero nacional. Exportación: salida de mercancías del territorio aduanero nacional con destino al exterior. Tránsito aduanero: transporte de mercancías bajo control aduanero entre dos puntos de la misma aduana o entre diferentes aduanas. •Especiales Depósito aduanero: almacenamiento de mercancías extranjeras en lugares autorizados sin el pago de tributos. Reembarque: retorno de mercancías extranjeras que no han sido nacionalizadas. Cabotaje: transporte de mercancías entre puertos o puntos nacionales Transbordo: Transferencia de mercancías de un medio de transporte a otro bajo control aduanero. •Regímenes aduaneros especiales Zonas francas: áreas con beneficios tributarios y aduaneros especiales. Admisión temporal: ingreso de mercancías para ser reexportadas en un plazo determinado. Perfeccionamiento activo: importación temporal para transformación y posterior exportación. Perfeccionamiento pasivo: exportación temporal para elaboración y posterior reimportación.').mx-auto.d-none.d-md-block
          img(src="@/assets/curso/temas/tema3/img_05m.svg", alt='•Principales Importación: introducción de mercancías al territorio aduanero nacional. Exportación: salida de mercancías del territorio aduanero nacional con destino al exterior. Tránsito aduanero: transporte de mercancías bajo control aduanero entre dos puntos de la misma aduana o entre diferentes aduanas. •Especiales Depósito aduanero: almacenamiento de mercancías extranjeras en lugares autorizados sin el pago de tributos. Reembarque: retorno de mercancías extranjeras que no han sido nacionalizadas. Cabotaje: transporte de mercancías entre puertos o puntos nacionales Transbordo: Transferencia de mercancías de un medio de transporte a otro bajo control aduanero. •Regímenes aduaneros especiales Zonas francas: áreas con beneficios tributarios y aduaneros especiales. Admisión temporal: ingreso de mercancías para ser reexportadas en un plazo determinado. Perfeccionamiento activo: importación temporal para transformación y posterior exportación. Perfeccionamiento pasivo: exportación temporal para elaboración y posterior reimportación.').mx-auto.d-block.d-md-none
          figcaption 
            b Fuente: 
            | SENA, 2025

        separador

        .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")      
          .col-lg-12.col-xl-9.mb-2
            .titulo-segundo.color-acento-contenido
              h2#t_3_2 3.2 Tipos de reglamentación
            p De acuerdo con el Decreto 659 de 2024, se puede definir la reglamentación aduanera como "las normas, requisitos, condiciones y trámites que deben seguir los importadores, exportadores, agentes de aduana y demás actores del comercio exterior para realizar operaciones legales ante la Dirección de Impuestos y Aduanas Nacionales (DIAN), garantizando el cumplimiento de las obligaciones tributarias, cambiarias y de control."
          .col-md-4.col-lg-4.col-xl-3.col-6.mb-3
            figure
              img(src="@/assets/curso/temas/tema3/img_06.png", alt='Imagen Descriptiva').mx-auto.mb-4.mb-md-2

        .titulo-sexto.mb-4.color-acento-contenido
          h5 Tabla 3. 
          span Etapas del comercio exterior  
        
        .tabla-a.mb-5
          table
            caption 
              b Fuente: 
              | SENA, 2025.
            thead
              tr
                td Reglamentación		
                td Clasificación
                td Descripción
            tr
              td(rowspan="4") Importación
              td Definitiva
              td Bienes que ingresan al territorio aduanero nacional para permanecer definitivamente.
            tr
              td Temporal
              td Bienes que ingresan por un tiempo limitado con suspensión de tributos.
            tr
              td Perfeccionamiento activo
              td Permite importar materias primas o insumos temporalmente sin pagar aranceles, para ser transformados y luego exportados.
            tr
              td Especiales
              td Importación de bienes a zonas francas con beneficios tributarios y aduaneros.
            
            tr
              td(rowspan="4") Exportación
              td Definitiva
              td Ventas de bienes que salen del territorio aduanero nacional de manera permanente.
            tr
              td Temporal
              td Bienes que salen temporalmente del país y deben regresar en un plazo determinado, los cuales pueden tener o no transformación en el exterior.
            tr
              td Perfeccionamiento pasivo
              td Permite exportar mercancías para ser transformadas, reparadas o procesadas en el exterior y luego reimportarlas con beneficios tributarios.
            tr
              td Especiales
              td Ventajas para empresas en zonas francas que exportan sus productos con beneficios tributarios.

            tr
              td(rowspan="2") Depósito
              td Privado
              td Almacenes autorizados por la DIAN, gestionados por privados, donde se guardan mercancías importadas o para exportación. Suspensión de aranceles, IVA e impuestos hasta que la mercancía se nacionalice o exporte.
            tr
              td Público
              td Almacenes operados por el Estado (ejemplo: puertos o aeropuertos), para mercancías en tránsito o pendientes de destinación aduanera.

            tr
              td(rowspan="3") Tránsito
              td Tránsito aduanero
              td Permite el transporte de mercancías bajo control aduanero desde una aduana de entrada hasta una de salida, sin pagar impuestos de importación mientras estén en tránsito.
            tr
              td Cabotaje
              td Consiste en el transporte de mercancías o pasajeros dentro del territorio nacional, pero realizado por vehículos extranjeros.
            tr
              td Transbordo
              td Es la operación en la que mercancías pasan de un vehículo a otro (o de un medio de transporte a otro) bajo control aduanero, sin ser nacionalizadas.

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")      
      .col-lg-12.col-xl-10.mb-2
        .titulo-segundo.color-acento-contenido
          h2#t_3_3 3.3 Tipos de requerimientos

        div.tarjeta-horz.mb-5
          img(src='@/assets/curso/temas/tema3/img_07.png', alt='Imagen decorativa')
          div.texto-tarjeta
            p.mb-0 Los requerimientos aduaneros son los procedimientos y condiciones que deben cumplirse para llevar a cabo la importación y exportación de mercancías. Estos procesos deben realizarse en todas las etapas de las operaciones de comercio exterior: antes, durante y después de que se efectúen.

        .titulo-sexto.mb-4.color-acento-contenido
          h5 Tabla 4. 
          span Tipos de requerimientos aduaneros
        .tabla-a.mb-5
          table
            caption 
              b Fuente: 
              | SENA, 2025.
            thead
              tr
                td Operación
                td Requerimiento
                td Descripción
            tr
              td(rowspan="5") Importación
              td Documentos digitales
              td Factura electrónica, DUA (Declaración Única Aduanera) electrónica, certificado de origen digital, documentos de transporte electrónicos, certificados sanitarios/técnicos digitalizados.
            tr
              td Tributarios
              td Pago electrónico obligatorio de aranceles, IVA, impuestos especiales (cuando aplique). Garantías electrónicas para importación temporal y regímenes suspensivos.
            tr
              td Control y Seguridad
              td Declaración anticipada de carga, sistema de trazabilidad con <em>blockchain</em> para medicamentos, productos agrícolas y bienes de alta fiscalización. Muestreo automatizado.
            tr
              td Operacionales
              td Vinculación obligatoria al SIGA (Sistema Integral de Gestión Aduanera), interoperabilidad con VUCE (Ventanilla Única de Comercio Exterior), prevalidación automática de documentos.
            tr
              td Técnicos Específicos
              td Clasificación arancelaria automatizada, certificados técnicos digitales.

            tr
              td(rowspan="6") Exportación
              td Documentos digitales
              td Factura comercial electrónica, certificado de origen digital, documento Único de Exportación (DUE), documentos de transporte digitalizados.
            tr
              td Previos obligatorios
              td Registro como exportador ante la DIAN, inscripción en el Sistema de Gestión Aduanera (SIGA), registro de productos para sectores regulados. 
            tr
              td Certificaciones y autorizaciones especiales
              td Certificado sanitario electrónico, permiso fitosanitario digital, autorizaciones sectoriales.
            tr
              td Tributarios
              td Declaración de exportación en plataforma DIAN, solicitud de devolución de IVA (cuando aplique), aplicación del Drawback (sistema simplificado para PYMES).
            tr
              td Control y seguridad
              td Certificados de calidad electrónicos, sistema de trazabilidad blockchain para café y banano, productos mineros y manufacturas de alto valor; muestras físicas (solo cuando lo exija autoridad competente).
            tr
              td Logísticos
              td Declaración anticipada de carga, uso de depósitos autorizados para consolidación de la carga, precintos electrónicos para contenedores. 
        
        separador
        .titulo-segundo.color-acento-contenido
          h2#t_3_4 3.4 Tipos de documentos legales 
    
      .row.p-0.g-0
        .col-12.col-lg-10.mx-auto
          .row.color-secundario-10.p-0.g-0.mb-5
            .col-md-6(
                :style="{'background': `url(${require('@/assets/curso/temas/tema3/img_08.png')}) right no-repeat`,'min-height':'100px','background-size':'cover'}"
              )
            .col-12.col-md-6.p-4
              p.mb-0 Los documentos legales aduaneros son aquellos con validez jurídica ante la DIAN y otras autoridades, necesarios para realizar operaciones de comercio exterior.  

        .col-12.col-lg-10.mx-auto
          .titulo-sexto.mb-4.color-acento-contenido
            h5 Tabla 5. 
            span Tipos de documento legales
          .tabla-a.mb-5
            table
              caption 
                b Fuente: 
                | SENA, 2025.
              thead
                tr
                  td Tipo de documento legal
                  td Documentos
                  td Descripción
              tr
                td(rowspan="3") Principales (obligatorios)
                td Declaración Aduanera (DUA o Declaración Andina)
                td Documento legal que formaliza la operación (importación/exportación). Contiene información fiscal, arancelaria y comercial.
              tr
                td Factura comercial original
                td Requisito legal con datos del vendedor, comprador, valor y términos INCOTERM. Debe coincidir con la declaración aduanera.
              tr
                td Documento de transporte
                td BL/AWB/Carta de porte: prueba legal del contrato de transporte.

              tr
                td(rowspan="2") Control y regulación
                td Certificado de origen
                td Avala el país de origen para aplicar preferencias arancelarias (TLC).
              tr
                td Licencias y permisos especiales
                td Sanitarios (INVIMA/ICA), ambientales (ANLA), o de comercio (MINCIT). Sin estos, la mercancía puede ser retenida o destruida.

              tr
                td(rowspan="2") Tributarios y cambiarios
                td Liquidación de tributos aduaneros
                td Detalla aranceles, IVA e impuestos específicos. Tiene efectos legales en auditorías fiscales.
              tr
                td Declaración cambiaria (formulario de cambio) DUA electrónica
                td Obligatoria para operaciones ≥ USD 10,000 (Banco de la República).


              tr
                td(rowspan="3") Electrónicos con validez legal
                td Certificaciones y autorizaciones especiales
                td Equivalente legal a la versión física (Art. 5 del Decreto 659).
              tr
                td Certificados digitales (DIAN)
                td Firmas electrónicas para agentes y operadores.
              tr
                td Notificaciones electrónicas
                td Tienen el mismo valor que una notificación física.

              tr
                td(rowspan="2") Para regímenes especiales
                td Contrato de admisión temporal
                td Sustenta el ingreso temporal de mercancías.
              tr
                td Autorización de zonas francas
                td Emitida por la DIAN con efectos legales en beneficios tributarios.

              tr
                td(rowspan="2") Declaraciones juradas
                td Declaraciones juradas
                td Falsearlas puede acarrear sanciones penales (contrabando, lavado).
              tr
                td Actas de fiscalización o retención
                td Usadas como prueba en procesos judiciales.

          
</template>

<script>
export default {
  name: 'Tema3',
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
