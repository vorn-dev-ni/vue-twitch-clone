<template>
    <div class="mb-10">
       <img :src="imgIcon" alt="icon-img"
       class=" w-10 h-10 lg:min-w-[100%]  md:object-contain  lg:h-[300px] "
       
       >
    </div>
</template>

<script>
import imgUrl from '@/assets/x-social-media-white-icon.png'
export default {
    data() {
        return {
            imgIcon:imgUrl 
        }
    }        
}
</script>

<style lang="scss" scoped>

</style>