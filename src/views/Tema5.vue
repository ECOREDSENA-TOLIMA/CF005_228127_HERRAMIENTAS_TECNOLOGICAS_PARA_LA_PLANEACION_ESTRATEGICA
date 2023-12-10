<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Evaluación del plan de tratamiento de riesgos
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Reconocimiento de controles
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Técnicas de auditoria
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_3 5.3 Plan de auditoria
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_4 5.4 Informe de auditoría
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_5 5.5 Plan de mejoramiento

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
