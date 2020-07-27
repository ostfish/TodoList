<template>
  <div class="menu">
    <ul>
      <li>
        <div class="box-1">
          <span class="tback"></span>
          <span class="title">汽车装饰</span>
          <span class="icon-search"></span>
        </div>
      </li>
      <!--/////////////////////////////////////////////-->
      <li>
        <div class="box-2">
          <ul class="table-1">
            <li class="sorts">
              <a href=" 1">脚垫</a>
            </li>
            <li class="sorts">
              <a href=" 1">油品分类</a>
            </li>
            <li class="sorts">
              <a href=" 1">新五行养车</a>
            </li>
            <li class="sorts">
              <a href=" 1">后备箱垫</a>
            </li>
            <li class="sorts">
              <a href=" 1">方向盘套</a>
            </li>
            <li class="sorts">
              <a href=" 1">置物箱</a>
            </li>
            <li class="sorts">
              <a href=" 1">支架挂件</a>
            </li>
            <li class="sorts">
              <a href=" 1">空气治理</a>
            </li>
            <li class="sorts">
              <a href=" 1">营销辅助</a>
            </li>
            <li class="sorts">
              <a href=" 1">头靠腰枕</a>
            </li>
          </ul>
        </div>
      </li>
      <!--/////////////////////////////////////////////-->
      <li class="L-3">
        <div class="box-3">
          <div class="box-3-1">
            <ul class="table-2">
              <template v-for="items in projects">
                <li>
                  <div class="l">
                    <div class="l-1">
                      <a href="items.productImage" target="_blank">
                        <img src="items.productImage" class="p-1" />
                      </a>
                    </div>
                    <div class="l-2">
                      <div class="l-2-1">
                        <a href="2" target="_blank">
                          <div>{{items.title}}</div>
                          <!--{{gettitle(0).title}}-->
                        </a>
                      </div>
                      <div class="l-2-2">
                        <span class="price-1">￥登录可见</span>
                        <span class="price-2">￥登录可见</span>
                      </div>
                    </div>
                  </div>
                </li>
              </template>
            
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      url: "",
      projects: [],
    };
  },
  mounted() {
    var that = this;
    this.axios
      .get("http://api.ecom.test.9daye.cn/api/v1/client/products", {
        params: {
          productCategoryId: 84,
          page: 1,
          size: 20,
          paging: true,
          id: 1777,
        },
      })
      .then(function (response) {
        that.projects = response.data.data;
        console.log(that.projects);
      });
  },
  methods: {
    gettitle(x) {
      return mounted().data(x).title;
    },
  },
};
</script>




<style>
@import "./style/main.css";
body {
  text-align: center;
  font-family: Helvetica, sans-serif;
  margin: 0px;
  height: 100%;
  /*background-image: linear-gradient( #bee1f8,#fa8b8b);*/
}

.menu {
  margin: 0px auto;
  height: 100%;
  min-width: 1000px;
}

li {
  background-color: white;
}
ul {
  list-style: none;
  padding: 0;
  height: 100%;
}

/*h1 button {
  height:35px;
  font-family:"华文彩云";
  color:rgb(0, 0, 0);
  background-color:rgb(192, 247, 181);
  
}
#app {
  width: 800px;
  margin: 30px auto;
}
#add-input {
  width: 300px;
  height: 35px;
  padding: 0 5px;
  opacity: 0.6;
}
*/
</style>
