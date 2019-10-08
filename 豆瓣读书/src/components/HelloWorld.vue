<template>
<div class="first">  <div class="hello">
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
      <div style="width:500px;height:30px;margin-left:400px;padding:15px;">
        <a href>豆瓣读书</a>
        <input
          placeholder="书名、作者、ISBN"
          class="input-with-select"
          style=" border: 1px solid black; border-radius: 3px;"
        />
        <button class="but" @click="login" >登录</button>
        <button @click="reserve">注册</button>
      </div>
      <nav class="nav nav_1 justify-content-center_1">
        <div class="navnav" @click='navreserve'>
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
      <img
        style="margin-left: 160px;margin-top: 30px;"
        src="https://img3.doubanio.com/view/dale-online/dale_ad/public/244906bd12a9e71.jpg"
        alt
      />
      <div class="section_1" style=" margin-top: 10px;">
      
        <div style="margin-top: 15px;width:700px;height:535px;">
            <div style="height:1px;width:700px;overflow:hidden;background:black;"></div>
          <div class="zixun">
            <div>
              <h2 style="width:72px;height:20px; font-size:18px;margin-left:0px;">新书速递</h2>
            </div>

           
          </div>
          <ul class="bodu_rad" style="margin-top:10px;">
            <li style="margin:0">
              <img
                style="width:115px;height:172px"
                src="https://img1.doubanio.com/view/subject/m/public/s33451117.jpg"
                alt
              />
              <p>
                <a class="a-color" href="#">哀伤纪</a>
              </p>
              <p>钟晓阳</p>
            </li>
            <li>
              <img
                style="width:115px;height:172px"
                src="https://img3.doubanio.com/view/subject/m/public/s33456776.jpg"
                alt
              />
              <p>
                <a href="#">中央帝国的军事密码</a>
              </p>
              <p>郭建龙</p>
            </li>
            <li>
              <img
                style="width:115px;height:172px"
                src="https://img1.doubanio.com/view/subject/m/public/s33491099.jpg"
                alt
              />
              <p>
                <a href="#">生命暗章</a>
              </p>
              <p>李怀瑜</p>
            </li>
            <li>
              <img
                style="width:115px;height:172px"
                src="https://img3.doubanio.com/view/subject/m/public/s33477306.jpg"
                alt
              />
              <p>
                <a href="#">1789年大恐慌</a>
              </p>
              <p>[法]乔治·勒费弗尔（George Lefebvre）</p>
            </li>
            <li>
              <img
                style="width:115px;height:172px"
                src="https://img3.doubanio.com/view/subject/m/public/s33463461.jpg"
                alt
              />
              <p>
                <a href="#">笨故事集</a>
              </p>
              <p>周云蓬</p>
            </li>
            <li style="margin:0">
              <img
                style="width:115px;height:172px"
                src="https://img1.doubanio.com/view/subject/m/public/s33477929.jpg"
                alt
              />
              <p>
                <a href="#">告别的仪式</a>
              </p>
              <p>[法]西蒙娜·德·波伏瓦</p>
            </li>
            <li>
              <img
                style="width:115px;height:172px"
                src="https://img1.doubanio.com/view/subject/m/public/s33474187.jpg"
                alt
              />
              <p>
                <a href="#">野兔</a>
              </p>
              <p>[阿根廷]塞萨尔·艾拉</p>
            </li>
            <li>
              <img
                style="width:115px;height:172px"
                src="https://img3.doubanio.com/view/subject/m/public/s33465685.jpg"
                alt
              />
              <p>
                <a href="#">闽国</a>
              </p>
              <p>[美] 薛爱华</p>
            </li>
            <li>
              <img
                style="width:115px;height:172px"
                src="https://img1.doubanio.com/view/subject/m/public/s33473758.jpg"
                alt
              />
              <p>
                <a href="#">蝙蝠</a>
              </p>
              <p>[挪威] 尤·奈斯博</p>
            </li>
            <li>
              <img
                style="width:115px;height:172px"
                src="https://img3.doubanio.com/view/subject/m/public/s33305373.jpg"
                alt
              />
              <p>
                <a href="#">因为性别</a>
              </p>
              <p>[美]吉莉恩·托马斯</p>
            </li>
          </ul>
        </div>

        <!-- //////// -->
        <div style="width:300px;height:2553px;margin-top:15px;margin-left:39px">
          <ul>
            <li><img src="https://oimagea4.ydstatic.com/image?id=4331879365412917108&product=adpublish&w=300&h=250&sc=0&rm=0" alt=""></li>
            <li style=" border-bottom: 1px solid #ddd;"><span><h4>热门标签<a href="#" style="font: 13px Arial, Helvetica, sans-serif;line-height: 150%;color: #666666;padding-left: 10px;">所有热门标签»</a></h4></span></li>
            <li style="margin-top:15px;">
               <li class="tag_title">
                文学
            </li>
              <ul class="clearfix" style="display:flex;flex-wrap:wrap;">
           
            <li>
                <a href="#" class="tag">小说</a>
            </li>
            <li>
                <a href="#" class="tag">随笔</a>
            </li>
            <li>
                <a href="#" class="tag">日本文学</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">散文</a>
            </li>
            <li>
                <a href="#" class="tag">诗歌</a>
            </li>
            <li>
                <a href="#" class="tag">童话</a>
            </li>
            <li>
                <a href="#" class="tag">名著</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">港台</a>
            </li>
            <li class="last">
                  <a href="#" class="tag more_tag">更多»</a>
            </li>
        </ul>
       
           
           <li style="margin-top:15px;">
               <li class="tag_title">
                文学
            </li>
              <ul class="clearfix" style="display:flex;flex-wrap:wrap;">
           
            <li>
                <a href="#" class="tag">小说</a>
            </li>
            <li>
                <a href="#" class="tag">随笔</a>
            </li>
            <li>
                <a href="#" class="tag">日本文学</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">散文</a>
            </li>
            <li>
                <a href="#" class="tag">诗歌</a>
            </li>
            <li>
                <a href="#" class="tag">童话</a>
            </li>
            <li>
                <a href="#" class="tag">名著</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">港台</a>
            </li>
            <li class="last">
                  <a href="#" class="tag more_tag">更多»</a>
            </li>
        </ul>
        <li style="margin-top:15px;">
               <li class="tag_title">
                文学
            </li>
              <ul class="clearfix" style="display:flex;flex-wrap:wrap;">
           
            <li>
                <a href="#" class="tag">小说</a>
            </li>
            <li>
                <a href="#" class="tag">随笔</a>
            </li>
            <li>
                <a href="#" class="tag">日本文学</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">散文</a>
            </li>
            <li>
                <a href="#" class="tag">诗歌</a>
            </li>
            <li>
                <a href="#" class="tag">童话</a>
            </li>
            <li>
                <a href="#" class="tag">名著</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">港台</a>
            </li>
            <li class="last">
                  <a href="#" class="tag more_tag">更多»</a>
            </li>
        </ul>
        <li style="margin-top:15px;">
               <li class="tag_title">
                文学
            </li>
              <ul class="clearfix" style="display:flex;flex-wrap:wrap;">
           
            <li>
                <a href="#" class="tag">小说</a>
            </li>
            <li>
                <a href="#" class="tag">随笔</a>
            </li>
            <li>
                <a href="#" class="tag">日本文学</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">散文</a>
            </li>
            <li>
                <a href="#" class="tag">诗歌</a>
            </li>
            <li>
                <a href="#" class="tag">童话</a>
            </li>
            <li>
                <a href="#" class="tag">名著</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">港台</a>
            </li>
            <li class="last">
                  <a href="#" class="tag more_tag">更多»</a>
            </li>
        </ul>
        <li style="margin-top:15px;">
               <li class="tag_title">
                文学
            </li>
              <ul class="clearfix" style="display:flex;flex-wrap:wrap;">
           
            <li>
                <a href="#" class="tag">小说</a>
            </li>
            <li>
                <a href="#" class="tag">随笔</a>
            </li>
            <li>
                <a href="#" class="tag">日本文学</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">散文</a>
            </li>
            <li>
                <a href="#" class="tag">诗歌</a>
            </li>
            <li>
                <a href="#" class="tag">童话</a>
            </li>
            <li>
                <a href="#" class="tag">名著</a>
            </li>
            <li class="last">
                  <a href="#" class="tag">港台</a>
            </li>
            <li class="last">
                  <a href="#" class="tag more_tag">更多»</a>
            </li>
        </ul>
          </ul>
        </div>
      </div>
    </div>
    <img style="position:absolute;top:840px;left:160px;" src="https://img1.doubanio.com/view/dale-online/dale_ad/public/5fec84186c23f1a.jpg" alt="">
  </div>
   <div id="abb">
    <div class="main-left">
      <div class="section1">
        <div class="zixun">
          <h2 style="width:72px;height:20px; font-size:18px;margin-left:0px;">图书资讯</h2>
          <div class="slide_controls">
            <div class="slide_dots" style="width:72px;height:5px">
              <!-- <ul style="width:72px;height:5px;display:flex">
                          <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
              </ul>-->
            </div>
            <div class="slide_btns">
              <div class="slide_btns_left" @click="change1()">《</div>
              <div class="slide_btns_right" @click="change2()">》</div>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="slide_content">
            <div class="slide_content_letf">
              <p style="font-size:15px;color:#3377aa;">{{result.section_title}}</p>
              <p style="font-size:13px;color:#aaaaaa">{{result.section_author}}</p>
              <p style="font-size:13px;color:#494949;text-align: left">{{result.section_text}}</p>
            </div>
            <div class="slide_content_right">
              <img :src="result.section_img" style="width:96px;height:96px" />
            </div>
          </div>
        </div>
      </div>

      <h2 class="bang" style="width:675px;height:31px;text-align: left;margin-top:30px;margin-bottom:15px;border-bottom: 1px solid #c5c3c3;font-size:18px">最受关注图书榜<div style="color:#3377aa;font-size:13px;width:70px;height:15px;margin-top:-25px;margin-left:140px;line-height:32px;font-weight: 500;cursor: pointer;" @click="type">虚构类<span style="color:#3377aa;font-size:8px;">》</span></div>
         <div style="color:#3377aa;font-size:13px;width:70px;height:15px;margin-top:-15px;margin-left:200px;line-height:32px;font-weight: 500;cursor: pointer;">非虚构类<span style="color:#3377aa;font-size:8px;">》</span></div>
      </h2>
      <div class="popular_books">
                
                  
                       <div class="info-box" v-for="(item, index) in followList" :key="index">
                      <div class="info">
                      <img style="width:75px;height:120px; cursor: pointer;" :src="item.follow_img" alt="">
                      <ul style="width:214px;height:120px;text-align: left;margin-top: 10px;">
                        <li><h4 style="color:#3377aa;font-size:15px; cursor: pointer;">{{item.follow_name}}</h4></li>
                          <li ><el-rate 
                                v-model="item.follow_score"
                                disabled
                                show-score
                                text-color="#ff9900"
                                
                                score-template="{value}">
                                </el-rate></li>
                          <li><p style="color:#111111;font-size:13px">{{item.follow_author}}</p></li>
                          <li><p style="color:#111111;font-size:13px">{{item.follow_type}}</p></li>
                      </ul>
                      </div>
                      <div class="reviews" style="width:317px;height:36px;color:#666666;font-size:13px;text-align: left;line-height:36px;margin-top:18px;">{{item.follow_comment}}</div>
                      </div>
              
        

      </div>

      <h2 class="bang" style="width:675px;height:31px;text-align: left;margin-top:30px;margin-bottom:15px;border-bottom: 1px solid #c5c3c3;font-size:18px">豆瓣书店 
        <div style="color:#3377aa;font-size:13px;width:70px;height:15px;margin-top:-25px;margin-left:90px;line-height:32px;font-weight: 500;cursor: pointer;">查看全部<span style="color:#3377aa;font-size:8px;">》</span></div></h2>
       <div class="bd" style="width:675px;height:406px;">
          <div class="bd_top" style="width:675px;height:172px">
              <div class="bd_top_left"><img style="width:130px;height:172;cursor: pointer;" src="https://img1.doubanio.com/view/freyr_page_photo/raw/public/4719.jpg" alt=""></div>
              <div class="bd_top_right">
                <p style="width:525px;height:35px;font-size:23px;color:#111111;text-align: left;margin-top:23px">你好小朋友复刻版 <span style="font-size:17px;color:#e76648;margin-left:10px">￥390.00 <span style="font-size:14px;color:#e76648">/包邮</span></span></p>
                <p style="width:525px;height:20px;font-size:14px;color:#9b9b9b;text-align: left;margin-top:10px">116张照片带你重返闪亮的童年</p>
                </div>
          </div>
          <div class="bd_bottom" style="width:700px;height:204px">
            <div class="list_col" style="width:115px;height:184px" v-for="(item,index) in bdList" :key="index">
                <img style="width:106px;height:140px;cursor: pointer;" :src="item.bd_img" alt="">
                <p style="width:115px;height:15px;font-size:13px;color:#3377aa;text-align: left;cursor: pointer; overflow: hidden;">{{item.bd_title}}</p>
                <p style="width:115px;height:13px;font-size:13px;color:#4b4b4b;text-align: left">{{item.bd_price}}</p>
            </div>
            
          </div>
       </div>
    
    </div>

    <div class="main-right">
        <h2 class="bang" style="width:300px;height:31px;text-align: left;margin-top:30px;margin-bottom:15px;border-bottom: 1px solid #c5c3c3;font-size:18px">畅销图书榜 </h2>
        <div class="buy">
          <el-tabs class="width:150;height:30" v-model="activeName" type="card" @tab-click="handleClick">
             <el-tab-pane  label="京东" name="first">
                <div class="listbuy" style="width:300px;height:586">
                      <div class="listbook" style="width:300px;margin-top:8px" v-for="(item,index) in jdList" :key="index">
                        <span style="width:20px;color:#111111;font-size:14px;">{{item.buy_id}}</span>
                        <div class="book_info" style="width：223px">
                          <p style="width:223px;color:#3377aa;font-size:14px;cursor: pointer;text-align:left">{{item.buy_name}}</p>
                          <p style="width:223px;color:#666666;font-size:13px;cursor: pointer;text-align:left">{{item.buy_author}}</p>
                        </div>
                        <span style="width:57px;color:#999999;font-size:13px;cursor: pointer;line-height:35px">去购买</span>
                      </div>
                </div>
             </el-tab-pane>
             <el-tab-pane label="当当" name="second">
                 <div class="listbuy" style="width:300px;height:586">
                      <div class="listbook" style="width:300px;margin-top:8px" v-for="(item,index) in ddList" :key="index">
                        <span style="width:20px;color:#111111;font-size:14px;">{{item.buy_id}}</span>
                        <div class="book_info" style="width：223px">
                          <p style="width:223px;color:#3377aa;font-size:14px;cursor: pointer;text-align:left">{{item.buy_name}}</p>
                          <p style="width:223px;color:#666666;font-size:13px;cursor: pointer;text-align:left">{{item.buy_author}}</p>
                        </div>
                        <span style="width:57px;color:#999999;font-size:13px;cursor: pointer;line-height:35px">去购买</span>
                      </div>
                </div>  
             </el-tab-pane>
          </el-tabs>
        </div>
        <h2 class="bang" style="width:300px;height:31px;text-align: left;margin-top:60px;margin-bottom:15px;border-bottom: 1px solid #c5c3c3;font-size:18px">豆瓣图书250 
        <div style="color:#3377aa;font-size:13px;width:70px;height:15px;margin-top:-26px;margin-left:115px;line-height:32px;font-weight: 500;cursor: pointer;">更多<span style="color:#3377aa;font-size:8px;">》</span></div></h2>
        <div class="book_img" style="width:300px;height:546px;">
           <div style="width:85px;height:150px" v-for="(item,index) in booksList" :key="index">
             <img style="width:85px;height:122.86px;cursor: pointer;" :src="item.books_img" alt="">
             <p style="color:#3377aa;font-size:13px;cursor: pointer;">{{item.books_name}}</p>
           </div>
        </div>
        <h2 class="bang" style="width:300px;height:29px;text-align: left;margin-top:30px;margin-bottom:12px;border-bottom: 1px solid #c5c3c3;font-size:14px;color:#222222">联系我们</h2>
         <p style="width:300px;height:22px;font-size:14px;text-align:left">合作联系：<img style="width:121px;height:12px" src="https://img3.doubanio.com/f/book/6a8e1160fbccbaa8c13ddf72e22145056bda0ba4/pics/book/email_book.png" alt=""></p>
        <h2 class="bang" style="width:300px;height:29px;text-align: left;margin-top:30px;margin-bottom:12px;border-bottom: 1px solid #c5c3c3;font-size:14px;color:#222222">关注我们</h2>
           <div style="width:300px;height:64px">
             <ul style="display:flex; justify-content: flex-start;width:300px;height:64px">
               <li> <img style="width:40px;height:40px;cursor: pointer" src="data:image/jpeg;base64,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" alt="">
                 <p style="color:#3377aa;font-size:12px;cursor: pointer">豆瓣小站</p>
               </li>
               <li style="margin-left:10px">
                 <img style="width:40px;height:40px;cursor: pointer" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4200659168,2099618654&fm=26&gp=0.jpg" alt="">
                  <p style="color:#3377aa;font-size:12px;cursor: pointer">微博</p>
               </li>
               <li class="weixin" style="margin-left:10px">
                 <img style="width:55px;height:40px;cursor: pointer" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2516147855,2566044535&fm=26&gp=0.jpg" alt="">
                  <p style="color:#3377aa;font-size:12px;cursor: pointer">微信</p>
                  <div class="erweima" style="width:130px;height:130px">
                    <img style="width:130px;height:130px" src="https://img3.doubanio.com/f/book/ee2d0bf8adc46ee0e1a53c28abf41a7a3b589e54/pics/book/home_qrcode@2x.jpg" alt="">
                  </div>
               </li>
             </ul>
           </div>
          <div style="width:300px;height：100px;display:flex;margin-top:50px;justify-content:space-between">
               <div><img style="width:96px;height：80px;cursor: pointer" src="https://img3.doubanio.com/view/dale-online/dale_ad/public/14d534b1434e742.jpg" alt=""></div>
               <div style="width:169px;height:50px">
                 <p style="color:#3377aa;font-size:12px;text-align:left;margin-top:10px;cursor: pointer">「豆瓣电影日历2020」发售中</p>
                 <p style="color:#999999;font-size:12px;text-align:left;margin-top:10px">豆瓣豆品</p>
               </div>
          </div>
    </div>
  </div></div>
  
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
       index: 0,
      changeList: [
        {
          section_author: 0,
          section_id: 0,
          section_img: 0,
          section_text: 0,
          section_title: 0
        },
      ],
      value: 3.7,
      followList:[
       {
          follow_id:0,
       follow_name:0,
       follow_score:0,
       follow_author:0,
       follow_type:0,
       follow_comment:0,
       follow_img:0, }
      ],
      bdList:[{bd_img:"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4680.jpg",
               bd_title:"告别的仪式",
               bd_price:"￥58.00"
              },
              {bd_img:"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4656.jpg",
               bd_title:"《日本色气》",
               bd_price:"￥96.00"
              },
              {bd_img:"https://img1.doubanio.com/view/freyr_page_photo/raw/public/4597.jpg",
               bd_title:"如何用手机拍一部电影",
               bd_price:"￥52.00"
              },
              {bd_img:"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4571.jpg",
               bd_title:"《陌生人音乐》《火焰》",
               bd_price:"￥96.00"
              },
              {bd_img:"https://img3.doubanio.com/view/freyr_page_photo/raw/public/4534.jpg",
               bd_title:"杜尚",
               bd_price:"￥98.00"
              },
               
             ],
            activeName: 'first',
            jdList:[{buy_name:"小家，越住越大3",
                      buy_author:"逯薇",
                      buy_id:"1." 
                      },
                     { buy_name:"这里是中国",
                       buy_author:"星球研究所/中国青藏高原研究会" ,
                       buy_id:"2." 
                     },
                     { buy_name:"我们的唐诗：画给孩子不一样的唐诗",
                       buy_author:"洋洋兔" ,
                       buy_id:"3." 
                     },
                     { buy_name:"局外人",
                       buy_author:"[法] 阿尔贝·加缪" ,
                       buy_id:"4." 
                     },
                     {buy_name:"冰冰和波波",
                      buy_author:"[英]乔·洛奇",
                      buy_id:"5." 
                      },
                     { buy_name:"活着",
                       buy_author:"余华" ,
                       buy_id:"6." 
                     },
                     { buy_name:"经典逻辑力图画书（套装全13册）",
                       buy_author:"[日] 舟崎靖子 著/[日] 舟崎克彦 绘/[日] 奈良坂智子 绘" ,
                       buy_id:"7." 
                     },
                     { buy_name:"墨菲定律",
                       buy_author:"张新捷著" ,
                       buy_id:"8." 
                     },
                      { buy_name:"现代汉语词典",
                       buy_author:"中国社会科学院语言研究所词典编辑室" ,
                       buy_id:"9." 
                     },
                     { buy_name:"唐诗三百首（儿童注音美绘本）",
                       buy_author:"" ,
                       buy_id:"10." 
                     },
                   ],
                   ddList:[{buy_name:"如何说孩子才会听 怎么听孩子才肯说（全新修订版）",
                      buy_author:"阿黛尔•法伯/伊莱恩•玛兹丽施",
                      buy_id:"1." 
                      },
                     { buy_name:"小熊和最好的爸爸（全7册）",
                       buy_author:"阿兰德·丹姆 文/亚历克斯·沃尔弗 图" ,
                       buy_id:"2." 
                     },
                     { buy_name:"人间失格",
                       buy_author:"太宰治" ,
                       buy_id:"3." 
                     },
                     { buy_name:"米小圈上学记（第1辑）我是小学生",
                       buy_author:"" ,
                       buy_id:"4." 
                     },
                     {buy_name:"神奇校车 桥梁书版",
                      buy_author:"乔安娜柯尔　著/布鲁斯迪根 图",
                      buy_id:"5." 
                      },
                     { buy_name:"正面管教",
                       buy_author:"简·尼尔森 (Jane Nelsen)" ,
                       buy_id:"6." 
                     },
                     { buy_name:"我不敢说，我怕被骂",
                       buy_author:"皮姆·范·赫斯特/妮可·塔斯马" ,
                       buy_id:"7." 
                     },
                     { buy_name:"魔法拼音国",
                       buy_author:"姜自霞" ,
                       buy_id:"8." 
                     },
                      { buy_name:"小王子",
                       buy_author:"安托万•德•圣埃克苏佩里" ,
                       buy_id:"9." 
                     },
                     { buy_name:"近代中国社会的新陈代谢",
                       buy_author:"陈旭麓" ,
                       buy_id:"10." 
                     },
                   ],
                   booksList:[
                            {books_img:"https://img3.doubanio.com/view/subject/m/public/s1072540.jpg",
                             books_name:"白银时代"
                            },
                            {books_img:"https://img3.doubanio.com/view/subject/m/public/s3847911.jpg",
                             books_name:"人生"
                             },
                             {books_img:"https://img3.doubanio.com/view/subject/m/public/s29651121.jpg",
                             books_name:"房思琪的初恋乐园"
                            },
                            {books_img:"https://img3.doubanio.com/view/subject/m/public/s1015872.jpg",
                             books_name:"我们仨"
                             },
                             {books_img:"https://img3.doubanio.com/view/subject/m/public/s1020454.jpg",
                             books_name:"哭泣的骆驼"
                            },
                            {books_img:"https://img3.doubanio.com/view/subject/m/public/s26720726.jpg",
                             books_name:"最好的我们"
                             },
                             {books_img:"https://img3.doubanio.com/view/subject/m/public/s1681146.jpg",
                             books_name:"步步惊心"
                            },
                            {books_img:"https://img1.doubanio.com/view/subject/m/public/s1426308.jpg",
                             books_name:"狂人日记"
                             },
                             {books_img:"https://img3.doubanio.com/view/subject/m/public/s4661043.jpg",
                             books_name:"爱你就像爱生命"
                             },
                          ]
      
    };
    
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
    }, 
    login() {
      this.$router.push("./Login");
    },change1: function() {
      if (this.index == 0) {
        this.index = 3;
      } else {
        this.index--;
      }
    },
    change2: function() {
      if (this.index == 3) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
    handleClick(tab, event) {
       window.console.log(tab, event);
      },
    type(){
      this.$router.push(`/Booktype`);
    }
  },
  beforeCreate() {
    axios.get(`http://localhost:8888/setion`).then(res => {
      this.changeList = res.data;
      window.console.log(this.changeList)
     
    });

    axios.get(`http://localhost:8888/follow`).then(res => {
      this.followList = res.data;
     
      window.console.log(this.followList);
     
    });
    
  },
   
  
  computed: {
    result() {
      return this.changeList[this.index];
    },
   
  },
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
  margin-left: 400px;
}
.section_1 {
  margin-left: 160px;
  display: flex;
}

.bodu_rad {
  width: 700px;
  height: 468px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.bodu_rad li {
  margin-left: 20px;
}
.bodu_rad li p a {
  color: #3377aa;
  font-size: 15px;
}
.bodu_rad li p {
  width: 111px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
}
.tag, .tag:link, .tag:visited {
    width: auto;
    word-break: keep-all;
    white-space: nowrap;
    background-color: #F5F5F5;
    color: #37A;
    font-size: 13px;
    padding: 2px 11px 0;
    display: inline-block;
    margin: 0 3px 5px 0;
    line-height: 20px;
}
.clearfix li a:hover{
  background-color: #E8E8E8;
}
#abb {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1040px;
  display: flex;
  justify-content: space-between;
  
  margin-top: 900px;
 
}
* {
     list-style: none;;
  padding: 0;
  margin: 0;
 
 
}
.main-left {
  width: 675px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  /*background-color: aqua;*/
}

.section1 {
  width: 675px;
  height: 204px;
}
.zixun {
  width: 675px;
  height: 27px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
}
.slide {
  width: 673px;
  height: 158px;
 
  border: 1px solid #c5c3c3;
}
.slide_controls {
  width: 129px;
  height: 21px;
  margin-right: 0px;
  /* background-color: crimson; */
  display: flex;
  justify-content: space-between;
}
.slide_btns {
  width: 47.63px;
  height: 18px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
.slide_btns_left {
  width: 18px;
  height: 18px;
  color: #ffffff;
  font-size: 12px;
  background-color: #9b9a8e;
  border-radius: 50%;
  text-align: left;
  line-height: 18px;
}
.slide_btns_right {
  width: 18px;
  height: 18px;
  color: #ffffff;
  font-size: 12px;
  background-color: #9b9a8e;
  border-radius: 50%;
  text-align: right;
  line-height: 18px;
}
.slide_content {
  width: 623px;
  height: 106px;
  margin: 0 auto;
  margin-top: 26px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.slide_content_letf {
  width: 507px;
  height: 106px;
  /* background-color: aquamarine; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.slide_content_right {
  width: 96px;
  height: 96px;
  background-color: burlywood;
}
.popular_books {
    width: 675px;
    height: 1000px;
    
    /* background-color:chocolate; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}
.info-box {
    width: 317px;
    height: 156px;
   
}
.info {
    width: 317px;
    height: 120px;
    display: flex;
   justify-content: space-between;
}
.bd {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bd_top {
  display: flex;
  justify-content: space-between;
}
.bd_top_left {
  width: 130px;
  height: 172px;
}
.bd_top_right {
  width: 525px;
  height: 172px;
}
.list_col {
  display: flex;
  flex-direction: column;
  justify-content: space-between
}
.bd_bottom {
  display: flex;
  justify-content: space-between;
}

.main-right {
  width: 300px;
  
  display: flex;
  flex-direction: column;
  /* background-color: brown; */
}
.buy {
  width: 300px;
  height: 589px;
}
.listbuy{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.listbook {
  display: flex;
  justify-content: space-between;
  padding-bottom:8px;
  border-bottom: 1px dashed #cfcccc

}
.book_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.book_img{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.weixin {
  position: relative;
}
.erweima {
  position: absolute;
  top: 68px;
  left: 0px;
  display: none;
}

.weixin:hover .erweima {
  display: block;
  z-index: 500;
}



</style>
