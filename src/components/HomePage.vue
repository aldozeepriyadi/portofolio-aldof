<template>
  <div class="container text-center py-5">
    <div class="col-lg-3 card mx-auto ">
      <div class="card h-100 animate__animated animate__fadeIn">
        <div class="card-body">
          <img
            :src="require(`@/assets/PasFotoAldo.jpg`)"
            class="card-img-top"
            alt="Project image"
          />
        </div>
      </div>
    </div>
    <h1 class="animate__animated animate__fadeInDown">
      Welcome to Aldo Fernando's Portfolio
    </h1>
    <p class="lead animate__animated animate__fadeInUp">
      Explore my work, skills, and projects. I specialize in PHP, Java, C#, and
      much more!
    </p>
    <a
      href="/projects"
      class="btn btn-primary btn-lg mt-4 animate__animated animate__fadeInUp"
      >View My Projects</a
    >
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.container {
  padding: 50px 0;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.btn {
  font-size: 1.25rem;
  padding: 10px 20px;
}
</style>
