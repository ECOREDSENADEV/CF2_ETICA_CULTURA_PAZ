<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-5(data-aos="fade-left")
          p.mb-0 El componente formativo <b>Soy un ser social</b> promueve la comprensión de la familia como núcleo esencial de la sociedad, donde se transmiten los primeros valores y normas que orientan la conducta. Desde este enfoque, se reconoce que el desarrollo del individuo está estrechamente ligado a la convivencia, el respeto mutuo y la responsabilidad compartida dentro de este entorno.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/2.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Además, se resalta la importancia de las normas sociales como reguladoras de las interacciones humanas, permitiendo la cohesión y el orden en la vida comunitaria. Estas normas, junto con los valores éticos, son fundamentales para fomentar relaciones basadas en la solidaridad, la justicia y el respeto por la diversidad.

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.col-xl-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/3.svg", data-aos="zoom-in")
      .col-lg-8.col-xl-10.order-lg-1
        .bg-color-22.p-4(data-aos="fade-left")
          p.mb-0 Por último, el componente enfatiza la influencia de la ética en la toma de decisiones y en el ejercicio de la ciudadanía responsable. Se plantea que el aprendizaje de valores y la interacción en diferentes ambientes sociales, como la familia, la escuela y el trabajo, son pilares para la construcción de una sociedad más equitativa y consciente.

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
