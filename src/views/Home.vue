<template>
    <div>
        <mySwiper :swipers="swipers" :duration="2000"/>
        <myChannels @changeId="handleChangeId"/>
        <myLoading v-show="isLoading"></myLoading>
        <myNewsList v-show="!isLoading" :news="news" />
    </div>
</template>

<script>
    import mySwiper from '../components/Swiper.vue'
    import myChannels from '../components/news/Channels.vue'
    import myNewsList from '../components/news/NewsList.vue'
    import { getNews } from '../services/newsServices'
    import myLoading from "../components/Loading";
    export default {
        name: "Home",
        components: {
            mySwiper,
            myChannels,
            myNewsList,
            myLoading
        },
        data () {
            return {
                swipers: [
                    {
                        id: 0,
                        ImgUrl: require('../assets/swiper/1.jpg'),
                        link: 'https://www.baidu.com'
                    },
                    {
                        id: 1,
                        ImgUrl: require('../assets/swiper/1.jpg'),
                        link: 'https://www.baidu.com'
                    },
                    {
                        id: 2,
                        ImgUrl: require('../assets/swiper/1.jpg'),
                        link: 'https://www.baidu.com'
                    }
                ],
                news: [],
                isLoading: true
            }
        },
        methods: {
            async handleChangeId(newId) {
                console.log(typeof newId)
                this.isLoading = true
                let resp = await getNews(newId,1,10)
                console.log(resp)
                this.news = resp.contentlist
                this.isLoading = false
            }
        }

    }
</script>

<style scoped>

</style>
