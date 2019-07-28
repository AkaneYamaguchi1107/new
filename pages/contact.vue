<template>
  <div class="section">
    <div class="container">
      <div class="contact">
        <h2 class="contact__title">お問い合わせ</h2>
        <p class="contact__text">
          お仕事の依頼やご質問、採用については新卒／中途退学問わず受け付けております。<br />
          詳しくは弊社までお問い合わせください。
        </p>
        <div class="row">
          <div class="col col--6">
            <div class="mail">
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
              LINE
            </div>
            <p class="line__btn">
              <button class="btn">
                ID:yamashia
              </button>
            </p>
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
.contact {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  margin: 0 auto;
  // padding: 0 100px;
  &__title {
    color: #444;
    font-size: 32px;
    padding: 0 0 16px 0;
    // line-height: 56px;
  }
  &__text {
    color: #444;
    font-size: 24px;
    margin-bottom: 24px;
  }
}
.mail {
  padding: 8px;
}
.line {
  padding: 8px;
}
</style>
