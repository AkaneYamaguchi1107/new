<template>
  <div class="section">
    <div class="container">
      <h2 class="title">
        会社概要
      </h2>
      <div class="services">
        <div class="services__table">
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
              <li>2016年04月27 世田谷区瀬田に移転</li>
              <li>2013年2月5日 江東区富岡に設立</li>
            </td>
          </tr>
        </div>
      </div>
      <div class="access">
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
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.section {
  // width: 100%;
  padding: 150px;
  background: #fbf9f7;
  @include sp {
    padding: 100px 0;
  }
}
.title {
  color: #444;
  font-size: 32px;
  margin-bottom: 24px;
  border-bottom: 2px solid #444;
}
.services {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 56px;
  &__table {
    line-height: 48px;
    font-size: 24px;
    th {
      color: #444;
      padding: 30px;
      border: 1px solid #444;
      background: #ccc;
    }
    td {
      color: #444;
      padding: 50px;
      border: 1px solid #444;
      background: #fff;
    }
  }
}
.access {
  text-align: center;
  font-size: 24px;
  padding-bottom: 24px;
  @include sp {
    // width: 100%;
  }
}
.iframe {
  display: block;
  @include sp {
    height: 160px;
  }
}
</style>
