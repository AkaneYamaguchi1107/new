<template>
  <div>
    <div class="hero">
      <h1 class="hero__title">Let's Enjoy job!</h1>
      <p class="hero__sub-title">Now is the time.</p>
      <div class="hero__button">
        <button class="btn">
          <nuxt-link to>お問合わせ</nuxt-link>
        </button>
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
  color: #333;
  // margin-bottom: 24px;
  // line-height: 1.8;
  &__title {
    font-size: 32px;
    margin-bottom: 24px;
  }
  &__sub-title {
    font-size: 24px;
    margin-bottom: 16px;
    font-weight: bold;
  }
}
</style>
