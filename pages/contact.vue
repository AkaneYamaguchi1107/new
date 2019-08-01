<template>
  <div class="section">
    <div class="container">
      <div class="heading">
        <h2 class="heading__title">
          お問い合わせ
        </h2>
        <p class="heading__text">
          お仕事の依頼やご質問、採用については新卒／中途退学問わず受け付けております。
          詳しくは弊社までお問い合わせください。
        </p>
        <div class="form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSenlgfdR-srhwjoVluFGtObjstE3IhLxbW24LUn1_v7mmKtng/viewform?embedded=true"
            width="100%"
            height="1144"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            読み込んでいます…
          </iframe>
        </div>
        <!-- <div class="row">
          <div class="col col--6">
            <div class="mail">
              <i class="fas fa-envelope"></i>
              メール
            </div>
            <p class="mail__btn">
              <button class="btn">
                info.yamashia
              </button>
            </p>
          </div>
          <div class="col col--6">
            <div class="line">
              <i class="fab fa-line"></i>
              LINE
            </div>
            <p class="line__btn">
              <button class="btn">
                ID:yamashia
              </button>
            </p> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section {
  padding: 150px;
  background: #fbf9f7;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 100%;
  @include sp {
    padding: 100px 0 0 0;
  }
}
.contact {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  // margin: 0 auto;
  // padding: 0 100px;
  &__title {
    // color: #444;
    font-size: 32px;
    // padding: 0 0 16px 0;
    border-bottom: 2px solid #333;
    // line-height: 56px;
  }
  &__text {
    // color: #444;
    font-size: 24px;
    padding: 16px;
    margin-bottom: 24px;
  }
}
.mail {
  padding: 8px;
}
.line {
  padding: 8px;
}
.form {
  text-align: center;
}
</style>
