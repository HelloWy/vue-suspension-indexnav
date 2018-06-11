<template>
  <div id="slidernavPage" style="overflow: hidden;">
    <input type="text" v-model="associatingText" class="txt-search" placeholder="The keyword"/>
    <div id="slider" style="
    font-size: 0.24rem;
    overflow: scroll;-webkit-overflow-scrolling: touch;">
      <div class="slider-content" ref="sliderContent">
        <ul class="slider-parent">
          <li>
            <a class="title fixed-top">{{fixNavText}}</a>
          </li>
          <li v-for="(value,key,index) in tempList" :key="index" :id="key">
            <a :name="key" class="title">{{key}}</a>
            <ul>
              <li v-for="(item,i) in value" :key="i" @click="selectContactCurrentData(item)">
                <a>
                  <div class="name" v-html="item.mainTitle+'('+item.subTitle+')'"></div>
                  <div class="subtitle" v-html="item.mainTitle"></div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="slider-nav">
        <ul>
          <li v-for="(item,key,index) in slidernav.item" :key="index"><a @click="selectNav(item)">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'vue-suspension-indexnav',
    props: {
      // 显示选择的列表，暂有  nationality  和 phoneCode   两种
      displayType: {
        type: String,
        default: function () {
          // 默认为国籍选择页
          return 'nationality'
        }
      },
      // 选择后 也会将该 标示返回
      contactKey: {
        type: String
      },
      mainTitleKey: {
        type: String
      },
      subTitleKey: {
        type: String
      },
      // 原始数据信息
      dataList: {
        type: Array
      },
    },
    data () {
      return {
        // 联想输入
        associatingText: '',
        selectData: {},
        slidernav: {
          // 分类组名
          item: [],
          debug: false,
          height: null,
          arrows: true
        },
        fixNavText: 'A',
        htmlFontSize: 'calc(100vw / 7.5)'
      }
    },
    computed: {
      tempList () {
        if (!this.dataList || this.dataList.length === 0) {
          return {}
        }
        let result = {}
        let me = this
        let proxyDataList = JSON.parse(JSON.stringify(this.dataList))
        if (this.associatingText.trim().length !== 0) {
          proxyDataList = proxyDataList.filter(obj => {
            let temp = obj[me.mainTitleKey].match(new RegExp(me.associatingText, 'i'))
            let temp1 = obj[me.subTitleKey].match(new RegExp(me.associatingText, 'i'))
            // 如果包含 联想的词汇 将其加粗显示
            if (temp !== null) {
              obj.mainTitle = obj[me.mainTitleKey].replace(temp[0], temp[0].bold())
            }
            if (temp1 !== null) {
              obj.subTitle = obj[me.subTitleKey].replace(temp1[0], temp1[0].bold())
            }
            return temp !== null || temp1 !== null
          })
        }
        proxyDataList.map(obj => {
          let key = obj[me.mainTitleKey].trim()[0] || ''
          key = (/^[a-zA-Z]$/).test(key) ? key.toLocaleLowerCase() : 'a'
          if (!Array.isArray(result[key])) {
            result[key] = []
          }
          obj.mainTitle = obj.mainTitle || obj[me.mainTitleKey]
          obj.subTitle = obj.subTitle || obj[me.subTitleKey]
          result[key].push(obj)
        })
        // 对result的key进行排序 结果：['a','b','c'.....]
        let temp = Object.keys(result).sort()
        this.slidernav.item = temp
        let resultSort = {}
        // 封装排序后的结果返回
        temp.map(obj => {
          resultSort[obj] = result[obj]
        })
        return resultSort
      }
    },
    methods: {
      selectContactCurrentData (item) {
        item.key = this.contactKey
        this.$emit('callBackFunction', item)
      },
      // DOM操作
      getOffset (Node, offset) {
        if (!offset) {
          offset = {}
          offset.top = 0
          offset.left = 0
        }
        if (Node === document.body) {
          //当该节点为body节点时，结束递归
          return offset
        }
        offset.top += Node.offsetTop
        offset.left += Node.offsetLeft
        return this.getOffset(Node.offsetParent, offset)//向上累加offset里的值
      },
      // 监听滚动条事件 组件当前滚动位置应显示的分类组(e.g:A)
      handleScroll () {
        // 组件距离顶部的高度
        let slidernavPage = this.getOffset(document.querySelector("div#slider")).top + 1
        // 组件当前看到的分类必定是该分类组第一个数据的位置和组件顶部位置相同或负数
        // 所以我们找出第一个为正数的
        let index = this.slidernav.item.findIndex(element => {
          // 该分类距离顶部的高度 包括页面滚动的高度
          let categoryTop = document.querySelector("div#slider a[name='" + element + "']").getBoundingClientRect().top
          return categoryTop > slidernavPage
        })
        index = index - 1
        this.fixNavText = this.slidernav.item[index]
      },
      // 点击右侧导航事件
      selectNav (key) {
        // 组件距离顶部的高度
        let slidernavPage = document.querySelector("div#slider").offsetTop
        document.getElementById("slider").scrollTop = this.getOffset(document.querySelector("div#slider a[name='" + key + "']")).top - slidernavPage
        console.log(this.getOffset(document.querySelector("div#slider a[name='" + key + "']")).top - slidernavPage)
      }
    },
    created () {
    },
    mounted () {
      document.getElementById("slider").style.height = (document.documentElement.clientHeight - document.getElementById("slider").offsetTop) + 'px'
      document.getElementById("slider").addEventListener('scroll', this.handleScroll, true);
    }
  }
</script>

<style>
  @import '../assets/cssreset.css';
  @import '../assets/slidernav.css';

  html {
    font-size: calc(100vw / 7.5);
    overflow: hidden;
  }

  .fixed-top {
    position: fixed;
    background: #ddd;
    z-index: 1;
  }

  .txt-search {
    height: 0.77rem;
    line-height: 120%;
    outline: none;
    padding: 0 0.2rem;
    width: 100%;
    font-size: 0.3rem;
    margin-top: 0.88rem;
  }
</style>
