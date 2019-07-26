<template>
  <div>
    <header class="header">
      <p class="header__logo">
        <nuxt-link to="/">yamashia</nuxt-link>
      </p>
      <ul class="gnav">
        <li class="gnav__item">
          <nuxt-link to="/" class="gnav__link">ホーム</nuxt-link>
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

<style lang="scss" scoped>
.header {
  color: #fff;
  padding: 16px;
  line-height: 56px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(black, 0.12);
  background: rgba(0, 0, 0, 0.7);
  // position: fixed; /* 画面上に固定 */
  // top: 0; /* 固定する垂直方向の位置 */
  // left: 0; /* 固定する水平方向の位置 */
  // width: 100%;
  &__logo {
    font-size: 40px;
  }
}
.gnav {
  display: flex;
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
      background: #fff;
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
  color: #fff;
  padding: 16px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
}
.fnav {
  display: flex;
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
