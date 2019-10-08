<template>
  <div>
    <nav class="nav justify-content-center">
      <div class="nav_left">
        <a class="nav-link active" href="#">豆瓣</a>
        <a class="nav-link" href="#">读书</a>
        <a class="nav-link disabled" href="#">电影</a>
        <a class="nav-link active" href="#">音乐</a>
        <a class="nav-link" href="#">同城</a>
        <a class="nav-link disabled" href="#">小组</a>
        <a class="nav-link active" href="#">阅读</a>
        <a class="nav-link" href="#">FM</a>
        <a class="nav-link disabled" href="#">时间</a>
        <a class="nav-link active" href="#">豆品</a>
        <a class="nav-link" href="#">更多</a>
      </div>
      <div class="nav_right">
        <a class="nav-link disabled" href="#" @mouseover="onload" @mouseleave="leave">下载豆瓣客户端</a>
        <a class="nav-link active" href="#">登录/注册</a>
        <div id="doubanapp-tip" style="display: none;" ref="wx">
          <a href="https://www.douban.com/doubanapp/app?channel=qipao" class="tip-link">
            豆瓣
            <img
              style="width:80px;height:80px;"
              src="https://img3.doubanio.com/f/frodo/144e6fb7d96701944e7dbb1a9bad51bdb1debe29/pics/app/logo.png"
              alt
            />
            <span class="version">全新发布6.0</span>
          </a>
        </div>
      </div>
    </nav>
    <div style="background-color:#F6F6F1;height:60px ">
      <div style="width:500px;height:30px;position:relative;left:30%;padding:15px;">
        <a href="#" style="color:#58402A;font-weight:600">豆瓣读书</a>
        <input
          placeholder="书名、作者、ISBN"
          class="input-with-select"
          style=" border: 1px solid black; border-radius: 3px;"
        />
        <button class="but" >搜索</button>
        <button @click="reserve">注册</button>
      </div>
      <nav class="nav nav_1 justify-content-center_1">
        <div class="navnav" @click="navreserve">
          <a class="nav-link active" href="#">购书单</a>
          <a class="nav-link" href="#">电子图书</a>
          <a class="nav-link disabled" href="#">豆瓣书店</a>
          <a class="nav-link active" href="#">2018年度榜单</a>
          <a class="nav-link" href="#">2018书影音报告</a>
          <a class="nav-link disabled" href="#">
            <i class="el-icon-shopping-cart-full"></i>购物车
          </a>
        </div>
      </nav>
    </div>
    <li>
      <span>
        <h4 class="h4">
          热门标签
          <a
            href="#"
            style="font: 13px Arial, Helvetica, sans-serif;line-height: 150%;color: #666666;padding-left: 10px;"
          >
            &gt; 去
            <a href="#" style="color:#3377AA;">这里</a>体验一下
          </a>
        </h4>
      </span>
    </li>
    <div style="width:675px;height:386px;position:relative;left:31%;" class="textfont">
      <ul>
        <li>
          <h5>购书单FAQ:</h5>
        </li>
        <li>
          <p>1. 购书单是什么？</p>
        </li>
        <li>
          <p style="text-indent: 32px;">购书单是一款综合比价器，它能帮你对比多本书在多家网上书店的价格，并且实现批量购买。</p>
        </li>
        <li>
          <p>2. 购书单怎么用？</p>
        </li>
        <li>
          <p style="text-indent: 32px;">点击购书单下方去网店的按钮，购书单里的书会直接添加到对方网店的购物车中，直接下单即可。</p>
        </li>
        <li>
          <p>3. 怎样加书到购书单里？</p>
        </li>
        <li>
          <p style="text-indent: 32px;">在豆瓣读书中找到自己想买的书，点击加入购书单即可。</p>
        </li>
        <li>
          <p>4. 购书单有什么好处？</p>
        </li>
        <li>
          <p style="text-indent: 32px;">对于有货的书，它可以帮你比价省钱、在某一家网上书店批量下单；对于暂时缺货的书，它会在全站提醒里给你到货通知。</p>
        </li>
      </ul>
      <div style="display:flex">
        <span
          style="border-radius: 2px;background:#FFEADA;width:100px;height:20px;font:normal 12px sans-serif;text-align:center;margin-top:30px;line-height:20px;"
        >登录使用购书单</span>
        <span style="height:20px;margin-top:30px;font-size:12px;">或者用</span>
        <img src="../assets/wx.png" style="height:22px;width:20px;margin-top:26px;" alt />
        <a href="#" style="color:#3377aa;font-size:13px;margin-top:30px;">新浪微博帐号登录</a>
      </div>
      <div class="aside">
        <div id="cart_partner" style="position:relative;left:600px;top:-205px;">
          <div
            class="bold"
            style="margin-bottom:10px; margin-left:10px;font-size:13px;font-weight:600"
          >合作书店：</div>
          <div style="dispaly:flex;width:280px;height:355px;flex-wrap:wrap;margin-left:10px;">
            <span>
              <img
                style="margin-left:10px;"
                src="https://img3.doubanio.com/pics/icon/joyo.gif"
                width="96px"
              />
            </span>
            <span>
              <img
                style="margin-left:30px;"
                src="https://img3.doubanio.com/pics/icon/dangdang.gif"
                width="96px"
              />
            </span>
            <span>
              <img
                style="margin-left:10px;"
                src="https://img3.doubanio.com/pics/icon/jingdong2.gif"
                width="96px"
              />
            </span>
            <span>
              <img
                style="margin-left:30px;"
                src="https://img3.doubanio.com/pics/icon/xinhua.gif"
                width="96px"
              />
            </span>
            <span>
              <img
                style="margin-left:10px;"
                src="https://img3.doubanio.com/pics/icon/beifa.gif"
                width="96px"
              />
            </span>
            <span>
              <img
                style="margin-left:30px;"
                src="https://img3.doubanio.com/pics/icon/chinapub.gif"
                width="96px"
              />
            </span>
            <span>
              <img
                style="margin-left:10px;"
                src="https://img3.doubanio.com/pics/icon/99read.gif"
                width="96px"
              />
            </span>
            <span>
              <img
                style="margin-left:30px;"
                src="https://img3.doubanio.com/pics/icon/kuaishubao.gif"
                width="96px"
              />
            </span>
            <span>
              <img
                style="margin-left:10px;"
                src="https://img3.doubanio.com/pics/icon/bookuu.gif"
                width="96px"
              />
            </span>
            <span>
              <img
                style="margin-left:30px;"
                src="https://img3.doubanio.com/pics/icon/lanree.png"
                width="96px"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
      <span id="icp" class="fleft gray-link">© 2005－2019 douban.com, all rights reserved 北京豆网科技有限公司</span>

      <a href="https://www.douban.com/hnypt/variformcyst.py" style="display: none;"></a>

      <span class="fright">
        <a href="https://www.douban.com/about">关于豆瓣</a>
        ·
        <a href="https://www.douban.com/jobs">在豆瓣工作</a>
        ·
        <a href="https://www.douban.com/about?topic=contactus">联系我们</a>
        ·
        <a href="https://www.douban.com/about/legal">法律声明</a>
        ·
        <a href="https://help.douban.com/?app=book" target="_blank">帮助中心</a>
        ·
        <a href="https://book.douban.com/library_invitation">图书馆合作</a>
        ·
        <a href="https://www.douban.com/doubanapp/">移动应用</a>
        ·
        <a href="https://www.douban.com/partner/">豆瓣广告</a>
      </span>
    </div>
  </div>
</template>


<script >
export default {
  data() {
    return {};
  },
  methods: {
    onload() {
      this.$refs.wx.style.display = "block";
    },
    leave() {
      this.$refs.wx.style.display = "none";
    },
    reserve() {
      this.$router.push("./Home");
    },
    navreserve() {
      this.$router.push("./Detail");
    }
  }
};
</script>

<style scoped>
.justify-content-center {
  display: flex;
  justify-content: space-between;
  height: 28px;
  font-size: 11px;
  background-color: #545652;

  cursor: pointer;
}
.nav_left a {
  margin-left: 15px;
  color: #c3c3c3;
  line-height: 28px;
}
.nav_right a {
  margin-right: 15px;
  cursor: pointer;
  color: #c3c3c3;
  line-height: 28px;
}
.doubanapp-tip {
  position: relative;
}
.tip-link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-with-select {
  width: 300px;
  height: 25px;
}
.nav_1 a {
  color: #614e3c;
  line-height: 28px;
  margin-left: 20px;
}
.justify-content-center_1 {
  display: flex;
  height: 28px;
  font-size: 11px;
  background-color: #f6f6f1;
  border-top: 1px solid #eaeae3;

  cursor: pointer;
}
.navnav {
  position: relative;
  left: 30%;
}
.section {
  position: relative;
  left: 31%;
  display: flex;
}
.zixun {
  display: flex;
}
.h4 {
  margin-top: 30px;
  position: relative;
  left: 31%;
}
.textfont li p {
  font-size: 13px;
}
#footer {
  color: #999;
  padding: 6px 0;
  margin-top: 40px;
  overflow: hidden;
  zoom: 1;
  border-top: 1px dashed #ddd;
  padding-bottom: 10px;
  font-size: 10px;
  margin-left: 467px;
}
</style>

