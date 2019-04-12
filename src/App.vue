<template>
  <div id="app">
    <div class="routerTarget" id="routerTarget">
      <div class="routerTit">看板选择</div>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <div class="routerTbBox" id="routerTbBox">
        <div class="routerTb" v-for="(item,i) in Template">
          <router-link :to="item.path" active-class="active"><img :src="item.picUrl" :alt="item.name" :title="item.name"></router-link>
        </div>
      </div>


      <!--<router-link to="/box2" active-class="active">Box2</router-link>
      <router-link to="/box3" active-class="active">Box3</router-link>
      <router-link to="/box4" active-class="active">Box4</router-link>-->
    </div>
    <div class="icoBtn hasShow" @click="RetractTab()" id="icoBtn">收起</div>
    <!-- 对应的组件内容渲染到router-view中 -->
    <div class="routerDiv" id="routerDiv">
      <div class="routerWrapBox">
        <div class="controlBtn" id="controlBtn">
          <div class="editorKB" @click="RetractTab()">编辑看板</div>
          <div class="preservationKB" @click="">保存看板</div>
          <div class="largeScreen" @click="largeScreen()">大屏展示</div>
        </div>
        <router-view  ref="mychild"></router-view>
      </div>

    </div>
  </div>
</template>

<script>
  /*import OperationForm from "./components/OperationForm";*/
  export default {
    name: 'App',
    /*components: {OperationForm},*/
    data(){
      return{
        Template:[],
      }
    },
    created(){
      this.$axios.get('static/json/tsconfig.json').then(response => {
        this.Template=response.data.Template;
      })
      document.documentElement.style.fontSize = document.documentElement.clientWidth/96+'px';
        window.addEventListener('resize',function(){
        document.documentElement.style.fontSize = document.documentElement.clientWidth/96+'px';
      })
      /*setTimeout(function () {
        var i=0;
        var totlePage=document.getElementsByClassName('routerTb').length-2;
        setInterval(function () {
          document.getElementsByClassName('routerTb')[i].childNodes.item(0).click();
          i++
          if(i>=totlePage){
            i=0;
          }
        },566000)
      },1000)*/
    },
    methods:{
      RetractTab:function () {
        var routerTarget=document.getElementById('routerTarget');
        var routerDiv=document.getElementById('routerDiv');
        var editDiv=document.getElementById('editDiv');
        var icoBtn=document.getElementById('icoBtn');
        if(icoBtn.getAttribute("class").indexOf('hasShow')!=-1){
          editDiv.getElementsByTagName('input')[0].value=document.getElementsByClassName('bigTitleName')[0].innerHTML
          routerTarget.style.left=-(document.documentElement.clientWidth/96*18)+'px';
          routerDiv.style.paddingLeft=document.documentElement.clientWidth/96*1.5+'px';
          routerDiv.style.paddingRight=document.documentElement.clientWidth/96*19.5+'px';
          /*editDiv.style.right=0;*/
          icoBtn.innerText='展开';
          icoBtn.classList.remove('hasShow');
          /*this.$refs.mychild.RetractForm(1);*/
        }else{
          routerTarget.style.left=0;
          routerDiv.style.paddingLeft=document.documentElement.clientWidth/96*19.5+'px';
          routerDiv.style.paddingRight=document.documentElement.clientWidth/96*1.5+'px';
          /*editDiv.style.right=-(document.documentElement.clientWidth/96*19.5)+'px';*/
          icoBtn.innerText='收起';
          icoBtn.classList.add('hasShow');
          /*this.$refs.mychild.RetractForm();*/
        }
        /*this.$refs.mychild.myChartResize();*/

      },
      largeScreen:function(){

      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    color: white;
  }
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  ::-webkit-scrollbar{
    display: none;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    overflow: auto;
    background: #666;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #999;
    min-height: 10px;
    min-width: 10px;
    border: 0px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ccc;
    border: 0px;
    border-radius: 10px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    position: relative;
  }
  #app>div{
    background-color: #0a1132;
  }
  .icoBtn{
    position: fixed;
    left: 30px;
    bottom: 100px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    background-color: rgba(225,225,225,0.6) !important;
    color: black;
    z-index: 9;
    cursor: pointer;
  }
  .routerTarget{
    width:18rem;
    text-align: center;
    position: absolute;
    height: 100%;
    transition: all 0.5s;
    padding:0 2.4rem 0  1.5rem;
    text-align: center;
    left: 0px;
  }
  .routerTbBox{
    overflow-y: auto;
  }
  .routerTit{
    margin: 0.7rem 0;
    width: 7.25rem;
    height: 2.5rem;
    display: inline-block;
    line-height: 2.5rem;
    text-align: center;
    background: url("/static/image/choicBtn.png") no-repeat center;
    background-size: 100% 100%;
    color: #3caff2;
    font-size: 1.1rem;

  }
  .routerTb{
    width: 100%;
    height:100px ;
    margin-bottom: 0.9rem;
  }
  .routerTb img{
    width: 100%;
    height: 100%;
  }
  .routerTarget a{
    width: 100%;
    height: 100%;
    color: black;
    text-decoration: none;
    display: block;
    border: 1px solid #576472;

  }
  .controlBtn{
    height:3.8rem ;
    text-align: right;
    line-height: 3.8rem;
    top: -3.8rem;
    position: absolute;
    right: 1rem;
  }
  .controlBtn>div{
    width: 7.25rem;
    height: 2.5rem;
    display: inline-block;
    line-height: 2.5rem;
    text-align: center;
    background: url("/static/image/choicBtn.png") no-repeat center;
    background-size: 100% 100%;
    color: #3caff2;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .routerDiv{
    height: 100%;
    padding-left: 19.5rem;
    width: 100%;
    background: lightgray;
    transition: all 0.5s;
    padding-top: 3.8rem;
    padding-right: 1.4rem;
    padding-bottom: 1rem;
  }
  .routerWrapBox{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .routerTarget a.active{
    color: blue;
    border-bottom: 1px solid black;
    border: 1px solid #0db3fd;
  }

</style>
