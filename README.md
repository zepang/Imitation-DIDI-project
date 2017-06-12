# Vue2.0 仿滴滴出行项目
最近，掘金上出现很多小伙伴的vue项目，趁着这股热潮我也用vue撸了一个滴滴出行的项目。

## 效果预览
![](https://ooo.0o0.ooo/2017/06/11/593ce65f51ba3.gif)
> 在线预览：[demo](https://uncleze2017.github.io/vue-didi-demo/index.html)

> 项目地址：[github](https://github.com/uncleze2017/Imitation-DIDI-project)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



* 主要技术栈

    * vue2.0(数据绑定)
    * vue-router(SPA)
    * vuex(管理组件状态，实现组件通信）
    * es6、html5、css3
* 组件库 

    mint-ui(有一些组件特别好用，方便快速开发)
* 字体库

    vue-awasome(完美支持font-awasome，此外还可以自定义组件)

* css动画库

   animate.css
* 高德地图 API
## 实现的功能


* 登录/用户本地存储、退出(localStarage本地存储)

* 验证弹窗

    ![](https://ooo.0o0.ooo/2017/06/11/593ce560987c0.gif)



* 定位

    ![](https://ooo.0o0.ooo/2017/06/11/593ce506a9472.gif)
* 地址输入提示

    ![](https://ooo.0o0.ooo/2017/06/11/593ce5b04e80d.gif)

* 城市选择切换

    ![](https://ooo.0o0.ooo/2017/06/11/593ce60901c5d.gif)

* 实现出租车下单、呼叫、以及接单(此处处理上利用了假数据)

    ![](https://ooo.0o0.ooo/2017/06/11/593ce65f51ba3.gif)
## 核心功能组件实现

就我目前实现的功能来看，核心组件有定位组件、地址选择组件、地图组件和打车下单组件

* 定位、选址和地图组件的实现主要是结合了高德地图的开放api来获取数据。高德地图JavaScript API在核心功能之外提供了丰富的控件、服务插件以及工具插件，比如工具条、比例尺、路线规划、高级信息窗体等等，通过AMap.pluging( )可以将对应的功能加载进来，更加详细的用法的可以参考开发平台的api。目前项目中引入了如下三个插件

    <code>['AMap.Geolocation', 'AMap.Autocomplete','AMap.Geocoder']</code>

* 其中打车下单组件目前只是实现了界面，数据方面还未全部实现。楼主将在接下来的版本继续完善。

## 问题与思考

接下来谈下我在写这个项目当中遇到一些的问题， 给大家分享下。

1.  验证码弹窗，输入呼出手机软键盘的问题。

    由于我在写验证码弹窗的时候，参考了滴滴本身验证码的弹窗结构，用了4个span来作为验证码输入框。然后，我想了一下大概的思路，可以利用vue的数据绑定和键盘监听事件轻松的搞定验证码输入。可是，后来在手机上发现，输入的时候居然调不出软键盘，写项目的时候没考虑到设备问题，简直是大大的失误。接着我往输入框中添加了一个input标签，并且设为不可见，然后触发软键盘。原本以为完美解决，可以发现输入没有出现数字，我仔细一想，vue不是数据绑定吗？怎么没效果，捣鼓半天数据问题，结果，发现竟然又是我考虑不周，老想着vue可以数据绑定，没想键盘监听在手机上无效，崩溃，再次败给了自己。突然想起一句话：代码写不好不是不会写，而是缺乏思考。

2. 第二个问题是关于打车通知司机进度条的动画效果

    这个动画实际上就两部分，一个是圆环进度条，第二个是倒计时那个圆形绕着圆环进度条运动。

    关于实现圆环进度条我推荐这篇文章[纯svg实现进度条](http://www.w3cplus.com/svg/pure-svg-progress-circles.html),文章有个具体的实现方案，相关的属性的详细介绍需要自行百度。关于绕圆环运动的写法和思路百度上介绍了很多种，什么运动计算还把相应的js都写出来，后来仔细想想还是用css的rotate简单的处理了，不是我不喜欢思考，只是我认为能用简单代码实现的功能就不去搞让人难懂的代码了。

3. 第三个问题是关于数据请求是否都需要提交action

    一开始我并没有注意这个问题，因为官方文档上边建议将异步的方法操作都放到action里边，所以我基本上形成了每一次异步请求都提交一个action的惯性思维， 前几天在看["滴滴 webapp 5.0 Vue 2.0 重构经验分享"](https://juejin.im/post/58c8d226ac502e00587f60cd)(有兴趣写滴滴的朋友推荐先看下这篇文章)发现文中有拿输入补全suggest组件举例说明(因为我写的项目中也要用到地址搜索补全组件,所以特别看了一下)：请求不会修改store里的数据,可以组件内部消化。也就是说可以在组件内部进行请求，不需要提交action。

    其实我对vuex中为什么把异步操作封装在action，把同步操作放在mutations的原因很好奇，于是，在知乎上搜了一下[其中的原因(文中尤雨溪给这个问题作出了回答)](https://www.zhihu.com/question/48759748/answer/112823337?from=profile_answer_card)

## 结语

  此项目我将一直在GitHub上进行更新，欢迎有兴趣的小伙伴一起学习，也欢迎各位大牛指出项目的缺点与不足。
 
 最后插播一个小广告：大四应届生，求职中，希望各位大佬给个机会。这是[我的简历](https://uncleze2017.github.io/vue-didi-demo/about.html)
