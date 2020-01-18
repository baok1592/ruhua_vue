<template>
    <view class="no"> 
       <view class="none" >
       	<img src="@/imgs/none.png"></img>
       	<view>暂无数据</view>
       </view> 
    </view>
</template>

<script>
export default {
  name: 'none', 
  props: [], 
  data() {
    return {
      
    } 
  },
   mounted(){      
  }
}
</script>

<style lang="less">
   .none{padding: 150px 0;text-align: center;color:#ADADAD;line-height:50px;
   	img{width: 60px;height: 60px;}
   }
</style>