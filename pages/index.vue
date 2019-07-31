<template>
  <div>
    <div class="hero">
      <div class="animated fadeIn">
        <h1 class="hero__title">Let's Enjoy job!</h1>
        <p class="hero__sub-title">Now is the time.</p>
        <div class="sns-icon">
          <i class="fab fa-facebook-square"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style lang="scss" scoped>
.hero {
  height: 900px;
  padding: 16px;
  background: center/cover url(/images/hero-1.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  @include sp {
    height: 490px;
  }
  // margin-bottom: 24px;
  // line-height: 1.8;
  &__title {
    color: #fafafa;
    font-size: 40px;
    margin-bottom: 24px;
    @include sp {
      font-size: 32px;
    }
  }
  &__sub-title {
    text-align: center;
    color: #fafafa;
    font-size: 32px;
    margin-bottom: 16px;
    font-weight: bold;
    @include sp {
      font-size: 24px;
    }
  }
}
.sns-icon {
  text-align: center;
  padding: 8px;
  color: #fafafa;
}
.fab {
  font-size: 50px;
}
.animated {
  animation-duration: 1.5s;
}
</style>
