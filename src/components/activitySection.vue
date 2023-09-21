<template>
    <div class="activityInfo" v-for="(activity, index) in visibleItems" :key="activity">
                <div class="calender">
                    <div class="month">
                        {{ activity.month }}月
                    </div>
                    <p>{{ activity.date }}日</p>
                    <p>星期{{ activity.day }}</p>
                </div>
                <router-link to="ActivityInfo"><img :src="require(`/public/image/Activity/${activity.img}`)"></router-link>
                <div class="info" >
                    <router-link to="ActivityInfo"><p>{{ activity.title }}</p></router-link>
                    <router-link to="ActivityInfo"><p>{{ activity.timePlace }}</p></router-link>
                    <router-link to="#" class="singer">
                        <fontAwesome :icon="['fa', 'user-large']"
                            style="color: #fff; margin-left: 10px; cursor: pointer;" />
                        <p>{{ activity.singer }}</p>
                    </router-link>
                </div>
            </div>
</template>

<script>
export default {
  data() {
    return {
        activityList: [
                {
                    month: '5',
                    date: '26',
                    day: '五',
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    timePlace: '19:00・台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    month: '5',
                    date: '31',
                    day: '三',
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    timePlace: '19:00・台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    month: '5',
                    date: '31',
                    day: '三',
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    timePlace: '19:00・台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    month: '5',
                    date: '31',
                    day: '三',
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    timePlace: '19:00・台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    month: '5',
                    date: '31',
                    day: '三',
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    timePlace: '19:00・台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
            ],
      visibleItems: 5, // 初始显示的信息数量
      increment: 5 // 每次点击“查看更多”增加的数量
    };
  },
  computed: {
    showMoreAvailable() {
      return this.visibleItems < this.items.length;
    }
  },
  methods: {
    showMore() {
      // 增加可见信息数量
      this.visibleItems += this.increment;
    }
  }
};
</script>