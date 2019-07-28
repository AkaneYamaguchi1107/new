<template>
  <div>
    <div class="hero">
      <h1 class="hero__title">Let's Enjoy job!</h1>
      <p class="hero__sub-title">Now is the time.</p>
      <div class="sns-icon">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>
  </div>
</template>

<script></script>
<style lang="scss" scoped>
.hero {
  height: 600px;
  padding: 16px;
  background: center/cover url(/images/hero-1.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  // margin-bottom: 24px;
  // line-height: 1.8;
  &__title {
    color: #444;
    font-size: 32px;
    margin-bottom: 24px;
  }
  &__sub-title {
    color: #444;
    font-size: 24px;
    margin-bottom: 16px;
    font-weight: bold;
  }
}
.sns-icon {
  padding: 8px;
}
.fab {
  padding: 24px;
  font-size: 40px;
}
</style>
