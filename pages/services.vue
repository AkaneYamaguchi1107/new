<template>
  <div class="section">
    <div class="container">
      <div class="heading">
        <h2 class="heading__title">
          当社の強み
        </h2>
      </div>
      <div class="row">
        <div v-scroll-trigger:fadeInDown="{ buff: 10 }" class="col col--12">
          <div class="skill animated fadeInDown">
            <div class="skill__icon">
              <i class="fas fa-handshake" />
            </div>
            <h3 class="skill__title">
              公平かつ円滑な支援を行います
            </h3>
            <div class="skill__text">
              <p>
                当社は既存の枠にとらわれない一環した案件推進を提供するのが強みの会社です。
              </p>
              <p>
                トップダウン・ボトムアップ各アプローチによるアウトプットを素早く統合し、一本化したパスを定め、よりスムーズにサービスインを促進します。
              </p>
              <p>
                案件のコスト計算、スケジュール作成を始め始めアクセス解析、パフォーマンス解析、etc
              </p>
              <p>
                サービスを提供へ向けての課題抽出、および、課題の根本解決への整理・仮説・実行計画よりクリティカルパスを導出。
              </p>
              UXは「<span class="bold">お客様中心</span>」 に、UIは「<span
                class="bold"
                >シンプルに・わかりやすく</span
              >」 開始初期からの徹底した情報共有により推進します。
            </div>
          </div>
        </div>
        <div v-scroll-trigger:fadeInDown="{ buff: 200 }" class="col col--12">
          <div class="skill animated fadeInDown">
            <figure class="skill__icon">
              <i class="fas fa-hand-holding-usd" />
            </figure>
            <h3 class="skill__title">
              費用、効果、リスク等からご相談頂けます
            </h3>
            <div class="skill__text">
              <p>
                費用対効果、リスク管理、全方位からご相談下さい。
              </p>
              <p>
                構成管理ツールの導入についても合わせてご相談させて下さい。
              </p>
              <p>
                ※案件途中の制約付き進行を余儀なくされる場合、またOSやツールのバージョンアップによるセキュリティ/脆弱性の保証が将来的になくなるリスクについては対応出来ない可能性がございます。案件途中でのニュース・脆弱性速報による検知については内容精査のもと別途ご相談となります。予めご了承下さい。
              </p>
            </div>
          </div>
        </div>
        <div v-scroll-trigger:fadeInDown="{ buff: 300 }" class="col col--12">
          <div class="skill animated fadeInDown">
            <figure class="skill__icon">
              <i class="fas fa-running" />
            </figure>
            <h3 class="skill__title">
              各種サービス/ツールを活かしスピーディに案件を進めます
            </h3>
            <p class="skill__text">
              保守・運用を円滑に行う各種サービス/ツール(Slack,Chatwork,Discord,JIRA,etc)類を有効に活用しWEB環境での共有環境構築についてご相談頂けます。
              マニュアル・手順整備についてもご相談下さい。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueScrollClass from 'vue-scroll-class'
export default {
  directives: {
    'scroll-class': VueScrollClass
  }
  // head() {
  //   return {
  //     title: '会社案内',
  //     meta: {
  //       hid: 'description',
  //       name: 'description',
  //       content: 'SERVICESページ'
  //     }
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.section {
  padding: 150px;
  background: #fbf9f7;
  @include sp {
    padding: 100px 0;
  }
}
.skill {
  padding: 16px 40px 40px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  background: #fafafa;
  box-sizing: border-box;
  @include sp {
    max-width: 100%;
  }
  &__icon {
    font-size: 120px;
    padding-bottom: 24px;
    @include sp {
      text-align: center;
    }
  }
  &__title {
    font-size: 32px;
    padding-bottom: 16px;
    @include sp {
      text-align: center;
      font-size: 24px;
    }
  }
  &__text {
    letter-spacing: 0.8pt;
    line-height: 40px;
    font-size: 24px;
    @include sp {
      line-height: 32px;
      font-size: 16px;
    }
  }
}
.animated {
  animation-duration: 1.5s;
}
.bold {
  font-weight: bold;
}
.fas {
  font-size: 100px;
}
.fadeInDown {
  transition: opacity 1s;
}
.col {
  opacity: 0;
}
.active {
  opacity: 1;
}
</style>
