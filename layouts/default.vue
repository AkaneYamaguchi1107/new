<template>
  <div>
    <header class="header">
      <a class="header__menu js-drawer-trg">
        <i class="fas fa-bars"></i>
      </a>
      <p class="header__logo">
        <nuxt-link to="/">yamashia</nuxt-link>
      </p>
      <ul class="gnav">
        <li class="gnav__item">
          <nuxt-link to="/" exact class="gnav__link">ホーム</nuxt-link>
        </li>
        <li class="gnav__item">
          <nuxt-link to="/services" class="gnav__link">事業案内</nuxt-link>
        </li>
        <li class="gnav__item">
          <nuxt-link to="/about" class="gnav__link">会社案内</nuxt-link>
        </li>
        <li class="gnav__item">
          <nuxt-link to="/contact" class="gnav__link">お問い合わせ</nuxt-link>
        </li>
      </ul>
    </header>
    <nuxt />
    <footer class="footer">
      <ul class="fnav">
        <li class="fnav__item">
          <nuxt-link to="/" class="fnav__link">ホーム</nuxt-link>
        </li>
        <li class="fnav__item">
          <nuxt-link to="/services" class="fnav__link">事業案内</nuxt-link>
        </li>
        <li class="fnav__item">
          <nuxt-link to="/about" class="fnav__link">会社案内</nuxt-link>
        </li>
        <li class="fnav__item">
          <nuxt-link to="contact" class="fnav__link">お問い合わせ</nuxt-link>
        </li>
      </ul>
      <p class="footer__copyright">&copy; yamashia All rights reserved.</p>
    </footer>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.header {
  padding: 0 16px;
  line-height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(black, 0.12);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: #fafafa;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  @include sp {
    width: 100%;
  }
  &__menu {
    display: none;
    @include sp {
      display: block;
      font-size: 32px;
      margin-right: 24px;
    }
  }
  &__logo {
    font-size: 40px;
    @include sp {
      font-size: 32px;
      width: 100%;
    }
  }
}
.gnav {
  display: flex;
  @include sp {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    display: block;
    background: #fff;
    transform: translateX(-100%);
    transition: 0.3s;
    z-index: 100;
  }
  &__item {
    display: block;
    font-size: 14px;
    padding-right: 64px;
    @include sp {
      padding: 40px;
    }
  }
  &__link {
    font-size: 24px;
    padding: 0 24px;
    display: block;
    position: relative;
    display: block;
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: #444;
      opacity: 0;
      transition: opacity 0.3s;
    }
    &:hover:after {
      opacity: 1;
    }
    &.nuxt-link-active {
      font-weight: bold;
    }
  }
}
.footer {
  color: #fafafa;
  padding: 16px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
}
.fnav {
  display: flex;
  @include sp {
    display: none;
  }
  &__link {
    padding: 8px;
    &.nuxt-link-active {
      font-weight: bold;
    }
  }
}
.fnav__item + .fnav__item:before {
  content: '|';
  margin: 0 8px;
}
</style>
