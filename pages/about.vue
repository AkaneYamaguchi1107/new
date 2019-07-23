<template>
  <div class="section">
    <div class="container">
      <div class="services">
        <h2 class="services__title">会社概要</h2>
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
              2013年2月5日 江東区富岡に設立
              <br />2016年4月27日 世田谷区瀬田に移転
            </td>
          </tr>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.services {
  display: flex;
  justify-content: center;
  padding: 30px;
  &__title {
    color: #333;
    font-size: 24px;
    margin: 0 32px 24px 0;
  }
  &__table {
    line-height: 48px;
    th {
      padding: 24px;
      border: 1px solid #333;
      background: #ccc;
    }
    td {
      padding: 8px;
      border: 1px solid #333;
    }
  }
}
</style>
