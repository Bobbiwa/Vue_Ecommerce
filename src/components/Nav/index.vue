<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container"
         @mouseleave="handleMouseLeave">
      <h2 class="all"
          @mouseenter="handleMouseEnter">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name='sort'>
        <div class="sort"
             v-show="isShowCategory">
          <div class="all-sort-list2"
               @click="goSearch">
            <div class="item"
                 v-for="c1 in category"
                 :key="c1.categoryId">
              <h3>
                <a :data-categoryName="c1.categoryName"
                   :data-categoryId="c1.categoryId">{{c1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem"
                     v-for="c2 in c1.categoryChild"
                     :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="c2.categoryName"
                         :data-categoryId="c2.categoryId">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild"
                          :key="c3.categoryId">
                        <a :data-categoryName="c3.categoryName"
                           :data-categoryId="c3.categoryId">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isShowCategory: true
    }
  },
  mounted() {
    this.$store.dispatch('home/getCategory')
    if (this.$route.name === 'search') {
      this.isShowCategory = false
    } else {
      this.isShowCategory = true
    }
  },
  computed: {
    ...mapState('home', ['category'])
  },
  methods: {
    goSearch(e) {
      //先是a标签
      const { categoryname, categoryid } = e.target.dataset
      if (e.target.tagName === 'A') {
        console.log(categoryname);
        console.log(categoryid);
        this.$router.push({ name: 'search', params: { id: categoryid, name: categoryname } })
      }
    },
    handleMouseEnter() {
      this.isShowCategory = true
    },
    handleMouseLeave() {
      if (this.$route.name === 'search') this.isShowCategory = false
    }
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        padding-top: 0.5rem;
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              text-decoration: none;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        .item:hover {
          background-color: #d4d4d4;
        }
      }
    }
    //列表显示/隐藏过渡动画
    .sort-enter {
      height: 0;
    }
    .sort-enter-active {
      transition: all 0.2s;
    }
    .sort-enter-to {
      height: 461px;
    }

    .sort-leave {
      opacity: 1;
      height: 461px;
    }
    .sort-leave-active {
      transition: all 0.5s;
    }
    .sort-leave-to {
      opacity: 0;
      height: 0;
    }
  }
}
</style>