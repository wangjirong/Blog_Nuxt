<template>
  <Carousel :value="1" height="auto" loop>
        <CarouselItem v-for="item in blogList" :key="item._id" :title="item.title">
            <nuxt-link :to="'/blog/'+item._id" class="demo-carousel">
                <img :src="item.cover_img" :alt="item.title" class="_cover-img">
            </nuxt-link>
        </CarouselItem>
    </Carousel>
</template>

<script>
export default {
    props:{
        blogList:{
            type:Array,
            required:true
        }
    }

}
</script>
<style lang="less">
.ivu-carousel{
    width: 50vw;
}
._cover-img{
    display: block;
    width: 50vw;
    height: auto;
}
</style>
