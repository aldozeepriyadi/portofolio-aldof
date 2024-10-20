<template>
  <section class="container py-5">
    <h2 class="text-center mb-5 animate__animated animate__fadeInUp">About Me</h2>
    <p class="text-center animate__animated animate__fadeIn">
      Saya seorang software developer dengan pengalaman dalam PHP, Java, C#, dan framework seperti Spring Boot, Laravel, dan CodeIgniter.
    </p>
    <div class="cv-container text-center mt-5">
      <iframe
        src="/CV_AldoFernandoS.pdf"
        width="100%"
        height="600px"
        style="border: none;"
      ></iframe>
    </div>
 
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.container {
  padding: 50px;
}
</style>
