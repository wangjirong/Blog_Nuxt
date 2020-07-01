<template>
  <nuxt-link :to="'/blog/'+blog._id" target="_blank" class="blog-item flex-column-center">
    <div class="cover-title-desc flex-vertical">
      <img :src="blog.cover.src" :alt="blog.title" class="cover-img" :title="blog.title" />
      <div class="title-desc flex-column-top">
        <h3 class="title">{{blog.title}}</h3>
        <p class="desc">{{blog.desc}}</p>
      </div>
    </div>
    <div class="date-count-more flex-vertical-space">
      <div class="left flex-vertical-center">
        <span class="date item flex-vertical-center" title="更新时间">
          <Icon type="ios-clock-outline" />
          {{blog.date}}
        </span>
        <span class="tags item flex-vertical-center" title="标签">
          <Icon type="md-pricetags" />
          {{blog.tags.join('、')}}
        </span>
        <span class="read-count item flex-vertical-center" title="阅读次数">
          <Icon type="md-eye" />
          {{blog.readCount}}
        </span>
        <span class="comment-count item flex-vertical-center" title="评论数量">
          <Icon type="ios-chatbubbles" />
          {{blog.comment.length}}
        </span>
      </div>
      <div class="readmore">
        阅读更多
        <Icon type="ios-more-outline" />
      </div>
    </div>
  </nuxt-link>
</template>
<script>
import {handleBlogTimeAndTags} from '../../util/blog'
export default {
  name: "blog",
  props:{
      blog:{}
  },
  created(){
    handleBlogTimeAndTags(this.blog)
  }
};
</script>
<style lang="less">
.blog-item {
  width: 50vw;
  padding: 1em;
  background-color: rgba(250, 250, 250, 1);
  margin: 2em 0;
  border-radius: 5px;
  transition: 1s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px 5px rgba(100, 100, 100, 0.5);
  }
  .cover-title-desc {
    .cover-img {
      border-radius: 5px;
      display: block;
      width: 20vw;
      height: 20vh;
      &:hover {
        transform: scale(1.01);
      }
    }
    .title-desc {
      // height: 100%;
      margin-left: 1em;
      .title {
        color: turquoise;
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.4em;
        padding-left: 2em;
        margin-bottom: 1.2em;
      }
      .desc {
        text-indent: 2em;
        word-break: break-all;
        color: black;
        font-size: 13px;
      }
    }
  }
  .date-count-more {
    width: 100%;
    .left {
      .item {
        color: black;
        font-size: 1em;
        padding: 0.5em;
        &:hover {
          color: crimson;
        }
        i {
          margin-right: 0.3em;
          color: #444444;
        }
      }
    }
    .readmore {
      color: crimson;
      font-size: 1.1em;
      border-radius: 5px;
      padding: 0.25em;
      &:hover {
        background-color: crimson;
        color: #ffffff;
      }
    }
  }
}
</style>
