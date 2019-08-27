<template>
  <div>
    <header class="header" :class="{ 'drawer-is-open': isDrawerOpen }">
      <a class="header__menu-trg" @click="isDrawerOpen = true">
        <i class="fas fa-bars"></i>
      </a>
      <p class="header__logo">
        <nuxt-link to="/">yamashia</nuxt-link>
      </p>
      <!-- <ul class="gnav" v-bind:class="{ active: isMenuActive }"> -->
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
      <div class="drawer-overlay" @click="isDrawerOpen = false"></div>
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
<script>
export default {
  data() {
    return {
      isDrawerOpen: false
    }
  }
}
</script>
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
    justify-content: flex-start;
  }
  &__menu-trg {
    display: none;
    @include sp {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 24px;
      // .is-open & {
      //   top: transform: rotate(45deg)
      //   middle: opacity: 0
      //   bottom: transform: rotate(-45deg)
      // }
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
.fas {
  font-size: 32px;
  color: #444;
}
// .gnav {
//   display: flex;
//   @include sp {
//     text-align: center;
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 100%;
//     display: block;
//     background: #fafafa;
//     // transform: translateX(-100%);
//     transform: translateX(0);
//     transition: 0.5s;
//     z-index: 100;
//     width: 240px;
//     &.nuxt-link-active {
//       font-weight: bold;
//     }
//   }
//   &__item {
//     display: block;
//     font-size: 14px;
//     padding-right: 64px;
//     @include sp {
//       padding: 0;
//     }
//   }
//   &__link {
//     font-size: 24px;
//     padding: 0 24px;
//     display: block;
//     position: relative;
//     display: block;
//     &:after {
//       content: '';
//       display: block;
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 100%;
//       height: 3px;
//       background: #444;
//       opacity: 0;
//       transition: opacity 0.3s;
//       @include sp {
//         display: none;
//       }
//     }
//     &:hover:after {
//       opacity: 1;
//     }
//     &.nuxt-link-active {
//       font-weight: bold;
//     }
//     @include sp {
//       font-size: 18px;
//       text-align: center;
//       padding: 0;
//     }
//   }
// }

// .drawer-back {
//   visibility: hidden;
//   display: block;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #000;
//   opacity: 0;
//   transition: 0.3s;
//   .is-drawer-open & {
//     opacity: 1;
//     visibility: visible;
//   }
// }
.gnav {
  display: flex;
  &__item {
    display: block;
    font-size: 24px;
    padding-right: 64px;
    @include sp {
      font-size: 16px;
      padding: 0;
      text-align: center;
    }
  }
  &__link {
    padding: 8px;
    display: inline;
    &.nuxt-link-active {
      font-weight: bold;
    }
  }
  @include sp {
    position: fixed;
    background: #fff;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 240px;
    transition: 0.3s;
    transform: translateX(-100%);
    .drawer-is-open & {
      transform: translateX(0);
    }
  }
}
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0;
  transition: 0.3s;
  visibility: hidden;
  .drawer-is-open & {
    visibility: visible;
    opacity: 0.8;
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
