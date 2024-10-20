<template>
  <section class="container py-5">
    <h2 class="text-center mb-5 animate__animated animate__fadeInUp">Contact</h2>
    <form class="w-50 mx-auto">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style scoped>
.container {
  padding: 50px;
}
</style>
