<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Ética, familia y formación del ser social',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave sobre la ética, los valores, las normas sociales, la familia y el entorno como ejes formativos del individuo. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué función cumple principalmente la familia en la formación ética del individuo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transmitir conocimientos académicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transmitir valores, normas y principios éticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Facilitar la independencia económica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantizar el éxito profesional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el concepto de ética propuesto por Emmanuel Lévinas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El yo se constituye en la soledad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ética es un conjunto de normas legales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El yo se constituye en relación con el otro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El yo se forma únicamente por educación formal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de familia está formada por uno o ambos miembros con hijos de relaciones anteriores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Monoparental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Adoptiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reconstituida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Extensa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué sanción suele corresponder al incumplimiento de una norma moral?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Multa económica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Culpa o cargo de conciencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Arresto judicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Amonestación pública.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué representa el trabajo en el marco de la Formación Profesional Integral (FPI)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un medio para obtener dinero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una actividad netamente física.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un medio para construir identidad y ciudadanía.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una tarea individual sin relación social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes entornos sociales influye directamente en la salud física y mental?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entorno virtual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entorno material.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Clase social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema legal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué implica vivir de modo humano según el texto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar responsabilidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprometerse con los valores aprendidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Alejarse de la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'bValues',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de norma está impuesta por el Estado y es obligatoria para todos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Religiosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Jurídica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Moral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué componente de la FPI se enfoca en desarrollar la identidad, el carácter y la convivencia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aprender a hacer.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aprender a ser.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aprender a aprender.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Competencias específicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se considera el primer agente de socialización del individuo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La escuela.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los medios de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La familia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El entorno laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La ética solo se forma en la escuela, no en el entorno familiar.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las normas sociales no siempre están expresadas explícitamente.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El entorno virtual es parte del entorno social del individuo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las competencias específicas se aplican en cualquier contexto laboral o social.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La FPI integra tanto la formación técnica como la formación en valores y actitudes.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
