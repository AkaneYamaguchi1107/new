<template>
  <div class="section">
    <div class="container">
      <div class="heading">
        <h2 class="heading__title">
          当社ITの強み
        </h2>
        <p class="heading__sub-title">
          当社は既存の枠にとらわれない一環した案件推進を提供するのが強みの会社です。
        </p>
      </div>
      <div class="row">
        <div class="col col--12">
          <div class="skill">
            <div class="skill__item">
              <h3 class="skill__title">
                1.公平かつ円滑な支援を行います
              </h3>
              <p class="skill__text">
                分析された数字をもとにした最適な判断
                ※コスト計算、アクセス解析数値、パフォーマンス解析、etc<br />
                課題根本解決への診断、分析、最適なアクセスパスの見極め<br />
                UXは「お客様中心」に、UIは「シンプルに・わかりやすく」<br />
              </p>
            </div>
          </div>
        </div>
        <div class="col col--12">
          <div class="skill">
            <div class="skill__item">
              <h3 class="skill__title">
                2.費用、効果、リスク等からご相談頂けます
              </h3>
              <p class="skill__text">
                費用対効果、リスク管理、多方面からご相談下さい
                構成管理ツール(Ansible)の導入についても合わせてご相談させて下さい<br />
                ※案件途中の制約付き進行を余儀なくされる場合、またOSやツールのバージョンアップによるセキュリティ/脆弱性の保証が将来的になくなるリスクについては対応出来ない可能性がございます。案件途中でのニュース・脆弱性速報による検知については内容精査のもと別途ご相談となります。予めご了承下さい。
              </p>
            </div>
          </div>
        </div>
        <div class="col col--12">
          <div class="skill">
            <div class="skill__item">
              <h3 class="skill__title">
                3.各種サービス/ソリューションを活かしスピーディに案件を進めます
              </h3>
              <p class="skill__text">
                フリーのツール(JIRA,Redmine,TRAC,etc)から有料サービスまでWEB環境での共有環境構築についてご相談頂けます。<br />
                <!-- PDCA＋プロトタイプモデルのスピーディなソリューション(各種クラウド,xampp,conflict5 etc)のご利用を承っております。マニュアル・手順整備についてもご相談下さい。 -->
              </p>
            </div>
          </div>
        </div>
        <div class="col col--12">
          <div class="skill">
            <div class="skill__item">
              <h3 class="skill__title">
                4.開始初期からの徹底した情報共有により推進します
              </h3>
              <!-- <p class="skill__text">
                分析された数字をもとにした最適な判断
                ※コスト計算、アクセス解析数値、パフォーマンス解析、etc<br />
                課題根本解決への診断、分析、最適なアクセスパスの見極め<br />
                UXは「お客様中心」」に、UIは「シンプルに・わかりやすく」<br />
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section {
  padding: 40px;
  background: #fbf9f7;
}
.heading {
  margin-bottom: 24px;
  color: #444;
  &__title {
    font-size: 32px;
    border-bottom: 2px solid #333;
  }
  &__sub-title {
    font-size: 24px;
  }
}
.skill {
  padding: 40px;
  // background: #333;
  color: #444;
  // border-radius: 12px;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  &__title {
    font-size: 32px;
  }
  &__text {
    padding: 32px;
    font-size: 24px;
  }
}
</style>
