<template>
  <div>
    <header class="header">
      <p class="header__title">
        <nuxt-link to="/">yamashia</nuxt-link>
      </p>
      <ul class="gnav">
        <li class="gnav__item">
          <nuxt-link to="/about" class="gnav__link">会社案内</nuxt-link>
        </li>
        <li class="gnav__item">
          <nuxt-link to="/services" class="gnav__link">事業案内</nuxt-link>
        </li>
        <li class="gnav__item">
          <nuxt-link to="/contact" class="gnav__link">お問合わせ</nuxt-link>
        </li>
      </ul>
    </header>
    <nuxt />
    <footer class="footer">
      <p class="footer__copyright">&copy; yamashia</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(black, 0.12);
  &__title {
    font-size: 32px;
  }
}
.gnav {
  display: flex;
  list-style: none;
  &__link {
    font-size: 16px;
    padding-right: 32px;
    display: inline;
    &.nuxt-link-active {
      font-weight: bold;
    }
  }
}
.footer {
  padding: 16px;
  text-align: center;
  font-size: 12px;
}
</style>
