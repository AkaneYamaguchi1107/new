<template>
  <div class="section">
    <div class="container">
      <div class="heading">
        <h2
          v-scroll-trigger="{ buff: 10 }"
          class="heading__title animated fadeInUp"
        >
          会社概要
        </h2>
      </div>
      <div class="services">
        <table class="services__table">
          <tbody>
            <tr>
              <th>社名</th>
              <td>株式会社ヤマシア</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>UI/UX支援、案件支援、案件受託、テスト</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>東京都世田谷区瀬田</td>
            </tr>
            <tr>
              <th>沿革</th>
              <td>
                <li>2016/04/27 世田谷区瀬田に移転</li>
                <li>2013/02/05 江東区富岡に設立</li>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <div v-scroll-trigger="{ buff: 10 }" class="access animated fadeInUp"> -->
      <!-- <div> -->
      <!-- <div v-scroll-trigger="{ buff: 10 }" class="access animated fadeInUp"> -->
      <!-- <div v-scroll-trigger class="access animated fadeInUp"> -->
      <!-- <div v-scroll-class:fadeInUp="400" class="access animated"> -->
      <div v-scroll-trigger:fadeInUp="{ buff: 400 }" class="access">
        <h2 class="animated fadeInUp">
          ACCESS
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.297004619258!2d139.62748611519908!3d35.620403940913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f412cc4882cb%3A0xc85163cc3a779fdb!2z44CSMTU4LTAwOTUg5p2x5Lqs6YO95LiW55Sw6LC35Yy654Cs55Sw77yU5LiB55uu77yS77yT4oiS77yV!5e0!3m2!1sja!2sjp!4v1564391107217!5m2!1sja!2sjp"
        width="100%"
        height="450"
        frameborder="0"
        style="border:0"
        allowfullscreen
      />
    </div>
  </div>
</template>
<script>
import VueScrollClass from 'vue-scroll-class'
export default {
  directives: {
    'scroll-class': VueScrollClass
  }
}
</script>
<style lang="scss" scoped>
.heading__title {
  opacity: 0;
}
.section {
  padding: 150px;
  background: #fbf9f7;
  @include sp {
    padding: 100px 0;
  }
}
.services {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 56px;
  &__table {
    line-height: 48px;
    font-size: 24px;
    @include sp {
      display: block;
      text-align: center;
      font-size: 16px;
    }
    th {
      padding: 32px;
      border: 1px solid #444;
      background: #f2f2f2;
      @include sp {
        padding: 16px;
        display: block;
      }
    }
    td {
      padding: 32px;
      border: 1px solid #444;
      background: #fafafa;
      @include sp {
        display: block;
        padding: 16px;
      }
    }
  }
}
.animated {
  animation-duration: 3s;
}
.access {
  font-size: 24px;
  margin-bottom: 16px;
  opacity: 0;
}
.fadeInUp {
  transition: opacity 0.5s;
}
.iframe {
  display: block;
  @include sp {
    height: 160px;
  }
}
.active {
  opacity: 1;
}
</style>
