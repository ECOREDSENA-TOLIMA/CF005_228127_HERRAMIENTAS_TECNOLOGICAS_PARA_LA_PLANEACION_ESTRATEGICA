<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Una adecuada gestión del riesgo de manera proactiva y temprana, permitirá hacer frente a cualquier amenaza que se pueda presentar, por ende, resulta fundamental que las organizaciones consideren dentro de sus planes de acción inclusión de políticas y estrategias para el manejo de incidente de seguridad dentro de cada una de sus áreas de trabajo.
    p Realizar los ejercicios de identificación de vulnerabilidades, así como el establecimiento de las salvaguardas apropiadas permitirá establecer planes de acción en pro del beneficio de la organización, este componente formativo brinda las bases sobre la cuales cualquier tipo de empresa pueda identificar y gestionar los riesgos evitando de esta forma el acceso a diferentes incidentes de seguridad. 
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La gestión del riesgo en las organizaciones, parte de la conceptualización relacionada con el riesgo y las posibles amenazas que se encuentran a su alrededor, se basa en la normatividad regulada mediante las normas ISO, y las principales metodologías para su tratamiento, a la vez que tiene en cuenta el establecimiento de controles para su aplicación y tratamiento.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
