<template>
  <div class="section">
    <div class="container">
      <div class="heading">
        <h2 class="heading__title">
          当社ITの強み
        </h2>
        <p class="heading__text">
          当社は既存の枠にとらわれない一環した案件推進を提供するのが強みの会社です。
        </p>
      </div>
      <div class="row">
        <div class="col col--12">
          <div
            class="animated"
            data-scroll="once toggle(.fadeInDown, .invisible) addHeight"
          >
            <div class="skill">
              <div class="skill__icon">
                <i class="fas fa-handshake" />
              </div>
              <h3 class="skill__title">
                公平かつ円滑な支援を行います
              </h3>
              <p class="skill__text">
                案件のコスト計算、スケジュール作成を始め始めアクセス解析、パフォーマンス解析、etc
                サービスを提供するうえでの課題抽出、および、課題の根本解決への整理・仮説・実行計画よりクリティカルパスを導出。
                UXは「<span class="bold">お客様中心</span>」 に、UIは「<span
                  class="bold"
                  >シンプルに・わかりやすく</span
                >」 開始初期からの徹底した情報共有により推進します。
              </p>
            </div>
          </div>
        </div>
        <div class="col col--12">
          <div
            class="animated"
            data-scroll="once toggle(.fadeInDown, .invisible) addHeight"
          >
            <div class="skill">
              <figure class="skill__icon">
                <i class="fas fa-hand-holding-usd" />
              </figure>
              <h3 class="skill__title">
                費用、効果、リスク等からご相談頂けます
              </h3>
              <p class="skill__text">
                費用対効果、リスク管理、多方面からご相談下さい
                構成管理ツール(Ansible)の導入についても合わせてご相談させて下さい
                ※案件途中の制約付き進行を余儀なくされる場合、またOSやツールのバージョンアップによるセキュリティ/脆弱性の保証が将来的になくなるリスクについては対応出来ない可能性がございます。案件途中でのニュース・脆弱性速報による検知については内容精査のもと別途ご相談となります。予めご了承下さい。
              </p>
            </div>
          </div>
        </div>
        <div class="col col--12">
          <div
            class="animated"
            data-scroll="once toggle(.fadeInDown, .invisible) addHeight"
          >
            <div class="skill">
              <figure class="skill__icon">
                <i class="fas fa-running" />
              </figure>
              <h3 class="skill__title">
                各種サービス/ソリューションを活かしスピーディに案件を進めます
              </h3>
              <p class="skill__text">
                フリーのツール(JIRA,Redmine,TRAC,etc)から有料サービスまでWEB環境での共有環境構築についてご相談頂けます。PDCA＋プロトタイプモデルのスピーディなソリューション(各種クラウド,xampp,conflict5
                etc)のご利用を承っております。マニュアル・手順整備についてもご相談下さい。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="js-drawer-back drawer-back" />
  </div>
</template>
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
.invisible {
  transition: opacity 0.5s ease;
  opacity: 0;
}

.visible {
  transition: opacity 0.5s ease;
  opacity: 1;
}
</style>
