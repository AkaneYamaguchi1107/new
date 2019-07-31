<template>
  <div>
    <div class="hero">
      <div class="animated fadeIn">
        <h1 class="hero__title">
          Let's Enjoy job!
        </h1>
        <p class="hero__sub-title">
          Now is the time.
        </p>
        <div class="sns-icon">
          <a
            href="https://www.facebook.com/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%83%A4%E3%83%9E%E3%82%B7%E3%82%A2-405790622855161/"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style lang="scss" scoped>
.hero {
  height: 975px;
  padding: 16px;
  background: center/cover url(/images/hero-1.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  // width: 100%;
  @include sp {
    height: 630px;
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
