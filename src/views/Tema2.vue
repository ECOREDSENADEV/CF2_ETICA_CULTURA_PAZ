<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 ¿Cómo me convierto en un ser social?
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-21.p-5(data-aos="fade-left")
          p.mb-0 Desde el momento del nacimiento, los seres humanos no solo necesitan alimento y cuidado físico, sino también interacción con otros. Convertirse en un ser social implica desarrollar la capacidad de comunicarse, colaborar, compartir normas y asumir roles dentro de una comunidad. Este proceso ocurre en distintos entornos y mediante múltiples relaciones que forman parte de nuestra vida cotidiana. Es un proceso progresivo que inicia en la familia y se expande hacia otros ambientes sociales como la escuela, el entorno laboral, la comunidad y los medios digitales.

    separador
    
    .bg-full-width.bg-color-23.mb-5
      .px-4.px-md-5
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 La Ambientes sociales: concepto
        
        p.mb-5 Los seres humanos construimos un espacio social donde interactuamos, crecemos y nos desarrollamos. Este espacio está compuesto por infraestructuras, relaciones interpersonales y el universo cultural que nos rodea.

        .row.justify-content-center.mb-5
          .col-xl-10
            .bg-color-15.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/2.svg', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") El entorno social está constituido, en su aspecto físico, por ciudades y otros asentamientos humanos, y en su aspecto inmaterial, por las relaciones sociales, estructuras culturales, políticas y económicas que inciden sobre las personas. Este concepto puede equipararse con expresiones como sociedad, contexto social, ámbito o ambiente social.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right").ms-3.ms-md-0
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Características del entorno social
          
        p.mb-5 El entorno social tiene dos dimensiones fundamentales:

        .tarjeta--container.row.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .col-md.tarjeta.color-primario.bg-color-27.p-5(data-aos="fade-up")
            .row.justify-content-center.mb-4.align-items-center
              .col-lg-10
                figure
                  img(src='@/assets/curso/tema2/3.png', alt='Texto que describa la imagen')
            div.text-white
              h2 Material
              p Incluye viviendas, servicios públicos, infraestructura vial, pueblos, ciudades, etc. Lugares como el hogar, la escuela y el trabajo impactan directamente la salud física y mental.

          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .col-md.tarjeta.color-acento-botones.bg-color-15.p-5(data-aos="fade-down")
            .row.justify-content-center.mb-4.align-items-center
              .col-lg-10
                figure
                  img(src='@/assets/curso/tema2/4.png', alt='Texto que describa la imagen')
            h2 Inmaterial
            p Se refiere a relaciones familiares, idioma, clase social, valores culturales y religiosos, así como relaciones de poder. Todo esto comienza en el núcleo familiar.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right").ms-3.ms-md-0
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Elementos del entorno social
      
    p.mb-5 Los elementos del entorno social varían según el contexto cultural y geográfico del individuo. Cada uno ejerce una influencia particular en la formación del ser social.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-20.tarjeta.p-3
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Familia
              p Es el primer agente de socialización. El respeto, el amor, el nivel socioeconómico y educativo de los padres moldean la percepción infantil del entorno. Un ambiente familiar sano favorece vínculos positivos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Escuela
              p Espacio clave para aprender a convivir. Un entorno escolar positivo favorece tanto el aprendizaje académico como la socialización. Entornos escolares conflictivos pueden afectar el desarrollo emocional y cognitivo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Sociedad
              p La sociedad está formada por miles o millones de personas que comparten valores. Factores como la religión o los principios éticos influyen de forma distinta en cada individuo.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Entorno virtual
              p Las redes sociales permiten nuevas formas de interacción y comunidad. Aunque pueden fortalecer vínculos, también presentan riesgos como el <em>ciberbullying</em> o el <em>grooming</em>.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Empresa
              p En el ámbito laboral, el entorno social se construye a partir de relaciones entre empleados, comunicación interna y condiciones laborales. Recursos Humanos debe garantizar espacios dignos y de bienestar.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-26.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.bg-color-28 Importante:
                p.mb-0.text-white Revisa la reflexión incluida en el material complementario: expertos le explican por qué la familia colombiana está en crisis
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 El trabajo como elemento social en su FPI (Formación Profesional Integral)
    
    p.mb-5 Según el Proyecto Educativo Institucional (PEI), la Formación Profesional Integral (FPI) impartida por el SENA es un proceso educativo de carácter teórico-práctico y con enfoque integral, orientado no solo al desarrollo de conocimientos técnicos y tecnológicos, sino también de actitudes y valores para la convivencia social. Esta formación permite a la persona actuar de forma crítica y creativa tanto en el mundo del trabajo como en la vida en sociedad.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/11.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Uno de los principios fundamentales de la FPI es el trabajo productivo, entendido como el medio mediante el cual el ser humano transforma intencionalmente su entorno físico y social, desarrollando así sus facultades personales. Este principio reconoce que el trabajo no solo genera bienes o servicios, sino que también construye identidad, dignidad y ciudadanía.
    
    p.mb-5 El mundo del trabajo, en el marco de la FPI, se entiende como un escenario doble:

    .row.justify-content-center
      .col-xl-10
        .bg-color-15.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/12.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color-25
                    p.mb-0 En el ámbito laboral, representa la actividad productiva formal o independiente.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color-25
                    p.mb-0 En el mundo de la vida, representa la construcción de dimensiones personales y sociales del ser humano.

    p.mb-5 La FPI responde a las necesidades y demandas de los sectores productivos y sociales mediante currículos adaptados a niveles tecnológicos y empresariales diversos. Esto implica que la persona debe dominar una ocupación desde el saber técnico, pero también ser capaz de adaptarse a los cambios, resolver problemas y actuar de forma eficaz.

    .row.justify-content-center
      .col-lg-10
        .bg-color-3.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/13.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") El modelo formativo del SENA se basa en el aprendizaje por proyectos, centrado en el desarrollo de competencias laborales que integran el saber, el hacer y el ser.
    
    p.mb-5 Los componentes del desarrollo integral del aprendiz en la FPI son: 

    .bg-full-width-2.bg-fondo-1
      .px-4.pb-md-3.p-5
        SlyderF(columnas="col-12 col-md-6 col-lg-4").mb-5
          .bg-color-white.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema2/14.png' alt='AvatarTop' , style="max-width: 230px").mx-auto.mb-5
            h4.text-center.mb-4 Aprender a aprender
            p.text-center Desarrollo de la autonomía, la autorregulación y la capacidad de adquirir nuevo conocimiento de manera continua.
          .bg-color-white.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema2/15.png' alt='AvatarTop' , style="max-width: 230px").mx-auto.mb-5
            h4.text-center.mb-4 Aprender a hacer
            p.text-center Aplicación práctica del conocimiento mediante el desarrollo de habilidades técnicas, operativas y tecnológicas.
          .bg-color-white.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema2/16.png' alt='AvatarTop' , style="max-width: 230px").mx-auto.mb-5
            h4.text-center.mb-4 Aprender a ser
            p.text-center Formación ética, emocional y social; fortalece la identidad, el carácter, el sentido de responsabilidad y la convivencia.
          .bg-color-white.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema2/17.png' alt='AvatarTop' , style="max-width: 230px").mx-auto.mb-5
            h4.text-center.mb-4 Competencias básicas
            p.text-center Capacidades humanas generales: comunicación, lógica, pensamiento crítico y participación social.
          .bg-color-white.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema2/18.png' alt='AvatarTop' , style="max-width: 230px").mx-auto.mb-5
            h4.text-center.mb-4 Competencias transversales
            p.text-center Habilidades aplicables a diversos contextos: trabajo en equipo, liderazgo, adaptabilidad, gestión del tiempo.
          .bg-color-white.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema2/19.png' alt='AvatarTop' , style="max-width: 230px").mx-auto.mb-5
            h4.text-center.mb-4 Competencias específicas
            p.text-center Habilidades técnicas vinculadas directamente al área ocupacional o productiva específica.

        p.mb-5 En este enfoque, el aprendiz es protagonista del proceso formativo: construye su conocimiento, asume su responsabilidad frente al entorno y fortalece su carácter social mediante la interacción con los demás.

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
