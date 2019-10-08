<template>
  <div id="box">
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

    <div style="background-color:#F6F6F1;height:60px; ">
      <div style="width:500px;height:30px;margin-left:350px;padding:15px;">
        <a href style="font-weight: 600">豆瓣读书</a>
        <input
          placeholder="书名、作者、ISBN"
          class="input-with-select"
          style=" border: 1px solid black; border-radius: 3px;"
        />
        <button class="but">搜索</button>
        <button @click="reserve">注册</button>
      </div>
      <nav class="nav nav_1 justify-content-center_1" style="margin-left:280px">
        <div class="navnav">
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
    <div style="margin-left:150px">
      <h1 style="width:1000px;height:43px;margin-top:50px;text-align:left;font-size:26px;">最受关注图书榜</h1>
      <div style="width:1000px;display:flex;justify-content: space-between">
        <div class="type-left" style="width:700px;">
          <div class="buy">
            <el-tabs
              style="width:150;height:50;z-index:1000"
              v-model="activeName"
              type="card"
              @tab-click="handleClick"
            >
              <el-tab-pane label="虚构类图书榜" name="first">
                <div class="listbuy" style="width:700px;height:1000">
                  <div
                    class="listbook"
                    style="width:700px;margin-top:8px"
                    v-for="(item,index) in jdList"
                    :key="index"
                  >
                    <span style="width:20px;color:#111111;font-size:14px;">{{item.buy_id}}</span>
                    <div style="width:70px;height:110px;margin-left:6px">
                      <img style="width:70px;height:110px" :src="item.bu_img" alt />
                    </div>
                    <div class="book_info" style="width：445px;margin-left:10px">
                      <p
                        style="width:445px;color:#3377aa;font-size:16px;cursor: pointer;text-align:left"
                      >{{item.buy_name}}</p>
                      <p style="color:#666666;font-size:13px;text-align:left">{{item.buy_author}}</p>
                      <p style="text-align:left">
                        <el-rate
                          v-model="item.buy_value"
                          disabled
                          show-score
                          text-color="#ff9900"
                          score-template="{value}"
                        ></el-rate>
                      </p>
                      <p style="color:#3377aa;font-size:13px">{{item.buy_price}} + 加入购书单</p>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="非虚构类图书" name="second">
                <div class="listbuy" style="width:700px;height:1000">
                  <div
                    class="listbook"
                    style="width:700px;margin-top:8px"
                    v-for="(item,index) in ddList"
                    :key="index"
                  >
                    <span style="width:20px;color:#111111;font-size:14px;">{{item.buy_id}}</span>
                    <div style="width:70px;height:110px">
                      <img style="width:70px;height:110px" src alt />
                    </div>
                    <div class="book_info" style="width：445px">
                      <p
                        style="width:445px;color:#3377aa;font-size:16px;cursor: pointer;text-align:left"
                      >佛兰德镜子</p>
                      <p
                        style="color:#666666;font-size:13px;text-align:left"
                      >dome / 2019-8 / 后浪丨四川文艺出版社 / 48.00元 / 精装</p>
                      <p>
                        <el-rate
                          v-model="item.follow_score"
                          disabled
                          show-score
                          text-color="#ff9900"
                          score-template="{value}"
                        ></el-rate>
                      </p>
                      <p style="color:#3377aa;font-size:12px">纸质版 36.00 元起 + 加入购书单</p>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="type-right" style="width:300px;">
          <h2
            class="bang"
            style="width:300px;height:31px;text-align: left;margin-top:60px;margin-bottom:15px;border-bottom: 1px solid #c5c3c3;font-size:18px"
          >
            新书速递...
            <div
              style="color:#3377aa;font-size:13px;width:70px;height:15px;margin-top:-26px;margin-left:115px;line-height:32px;font-weight: 500;cursor: pointer;"
            >
              （全部）
              <span style="color:#3377aa;font-size:8px;">》</span>
            </div>
          </h2>
          <div class="book_img" style="width:300px;height:546px;">
            <div style="width:85px;height:150px" v-for="(item,index) in booksList" :key="index">
              <img style="width:85px;height:122.86px;cursor: pointer;" :src="item.books_img" alt />
              <p style="color:#3377aa;font-size:13px;cursor: pointer;">{{item.books_name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
   <script>
export default {
  data() {
    return {
      activeName: "first",
      jdList: [
        {
          buy_name: "佛兰德镜子",
          buy_author: "dome / 2019-8 / 后浪丨四川文艺出版社 / 48.00元 / 精装",
          bu_img:
            "https://img3.doubanio.com/view/subject/s/public/s33450463.jpg",
          buy_id: "1",
          buy_value: "4.1",
          buy_price: "纸质版 36.00 元起"
        },
        {
          buy_name: "82年生的金智英",
          buy_author: "[韩]赵南柱 / 2019-9 / 贵州人民出版社 / 45.00元 / 平装",
          bu_img:
            "https://img1.doubanio.com/view/subject/s/public/s33463759.jpg",
          buy_id: "2",
          buy_value: "3.6",
          buy_price: "纸质版 22.50 元起"
        },
        {
          buy_name: "消失的塞布丽娜",
          buy_author:
            "[美] 尼克·德纳索 / 2019-9 / 后浪丨天津人民出版社 / 118.00元 / 精装",
          bu_img:
            "https://img1.doubanio.com/view/subject/s/public/s33457878.jpg",
          buy_id: "3",
          buy_value: "3.6",
          buy_price: "纸质版 88.40 元起"
        },
        {
          buy_name: "闯入者",
          buy_author:
            "[美] 阿德里安·远峰 / 2019-9 / 后浪丨海峡文艺出版社 / 72.00元 / 精装",
          bu_img:
            "https://img3.doubanio.com/view/subject/s/public/s33438372.jpg",
          buy_id: "4",
          buy_value: "2.9",
          buy_price: "纸质版 54.00 元起"
        },
        {
          buy_name: "猎人",
          buy_author: " 双雪涛 / 2019-7 / 北京日报出版社 / 52.00元 / 精装",
          bu_img:
            "https://img3.doubanio.com/view/subject/s/public/s33314621.jpg",
          buy_id: "5",
          buy_value: "2.5",
          buy_price: "纸质版 39.00 元起"
        },
        {
          buy_name: "OPUS 作品",
          buy_author:
            "[日] 今 敏 / 2019-8 / 后浪丨北京联合出版公司 / 88.00元（上下册） / 平装",
          bu_img:
            "https://img3.doubanio.com/view/subject/s/public/s33443865.jpg",
          buy_id: "6",
          buy_value: "3.5",
          buy_price: "纸质版 58.00 元起"
        },
        {
          buy_name: "王考",
          buy_author: "童伟格 / 2019-7 / 后浪丨四川人民出版社 / 42.00元 / 平装",
          bu_img:
            "https://img3.doubanio.com/view/subject/s/public/s33305784.jpg",
          buy_id: "7",
          buy_value: "4.5",
          buy_price: "纸质版 31.50 元起"
        },
        {
          buy_name: "聊天记录",
          buy_author:
            "[爱尔兰] 萨莉·鲁尼 / 2019-7-15 / 上海译文出版社 / 49.8 / 平装",
          bu_img:
            "https://img1.doubanio.com/view/subject/s/public/s33302678.jpg",
          buy_id: "8",
          buy_value: "3.1",
          buy_price: "纸质版 24.90 元起"
        },
        {
          buy_name: "你想活出怎样的人生",
          buy_author:
            " [日]吉野源三郎 著 / [日]胁田和 绘 / 2019-8 / 南海出版公司 / 49.5 / 精装",
          bu_img:
            "https://img1.doubanio.com/view/subject/s/public/s33439128.jpg",
          buy_id: "9",
          buy_value: "4.9",
          buy_price: "纸质版 24.80 元起"
        },
        {
          buy_name: "网内人",
          buy_author: "陈浩基 / 2019-8 / 九州出版社 / 62.00元 / 平装",
          bu_img:
            "https://img3.doubanio.com/view/subject/s/public/s33442256.jpg",
          buy_id: "10",
          buy_value: "4.5",
          buy_price: "纸质版 46.50 元起"
        }
      ],
      ddList: [
        {
          buy_name: "如何说孩子才会听 怎么听孩子才肯说（全新修订版）",
          buy_author: "阿黛尔•法伯/伊莱恩•玛兹丽施",
          buy_id: "1."
        },
        {
          buy_name: "小熊和最好的爸爸（全7册）",
          buy_author: "阿兰德·丹姆 文/亚历克斯·沃尔弗 图",
          buy_id: "2."
        },
        { buy_name: "人间失格", buy_author: "太宰治", buy_id: "3." },
        {
          buy_name: "米小圈上学记（第1辑）我是小学生",
          buy_author: "",
          buy_id: "4."
        },
        {
          buy_name: "神奇校车 桥梁书版",
          buy_author: "乔安娜柯尔　著/布鲁斯迪根 图",
          buy_id: "5."
        },
        {
          buy_name: "正面管教",
          buy_author: "简·尼尔森 (Jane Nelsen)",
          buy_id: "6."
        },
        {
          buy_name: "我不敢说，我怕被骂",
          buy_author: "皮姆·范·赫斯特/妮可·塔斯马",
          buy_id: "7."
        },
        { buy_name: "魔法拼音国", buy_author: "姜自霞", buy_id: "8." },
        {
          buy_name: "小王子",
          buy_author: "安托万•德•圣埃克苏佩里",
          buy_id: "9."
        },
        {
          buy_name: "近代中国社会的新陈代谢",
          buy_author: "陈旭麓",
          buy_id: "10."
        }
      ],
      booksList: [
        {
          books_img:
            "https://img3.doubanio.com/view/subject/m/public/s1072540.jpg",
          books_name: "白银时代"
        },
        {
          books_img:
            "https://img3.doubanio.com/view/subject/m/public/s3847911.jpg",
          books_name: "人生"
        },
        {
          books_img:
            "https://img3.doubanio.com/view/subject/m/public/s29651121.jpg",
          books_name: "房思琪的初恋乐园"
        },
        {
          books_img:
            "https://img3.doubanio.com/view/subject/m/public/s1015872.jpg",
          books_name: "我们仨"
        },
        {
          books_img:
            "https://img3.doubanio.com/view/subject/m/public/s1020454.jpg",
          books_name: "哭泣的骆驼"
        },
        {
          books_img:
            "https://img3.doubanio.com/view/subject/m/public/s26720726.jpg",
          books_name: "最好的我们"
        },
        {
          books_img:
            "https://img3.doubanio.com/view/subject/m/public/s1681146.jpg",
          books_name: "步步惊心"
        },
        {
          books_img:
            "https://img1.doubanio.com/view/subject/m/public/s1426308.jpg",
          books_name: "狂人日记"
        },
        {
          books_img:
            "https://img3.doubanio.com/view/subject/m/public/s4661043.jpg",
          books_name: "爱你就像爱生命"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      window.console.log(tab, event);
    }
  }
};
</script>

   <style scoped>
#box {
  margin: 0 auto;
}
* {
  list-style: none;
  padding: 0;
  margin: 0;
}
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
  line-height: 30px;
  margin-left: 40px;
}
.justify-content-center_1 {
  display: flex;
  height: 28px;
  font-size: 14px;
  background-color: #f6f6f1;
  border-top: 1px solid #eaeae3;

  cursor: pointer;
}
.navnav {
  /* margin-left: 160px; */
}
.section {
  /* margin-left: 200px; */
  display: flex;
}
.zixun {
  display: flex;
}
.buy {
  width: 700px;
  height: 1270px;
}
.listbuy {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.listbook {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 8px;
  border-bottom: 1px dashed #cfcccc;
}
.book_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>