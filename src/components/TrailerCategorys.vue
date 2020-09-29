<template>
    <div>
        <div class="trailerCategorys">
        <h2 style="padding-left: 20px;">Top action trailer</h2>
        <div>
            videobox
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
    data() {
        return {
            maintrailers: [],
            list: undefined,
        }
    },
    mounted() {
        Vue.axios.get('https://api.npoint.io/d4be2eb26a015a45d427')

        .then((resp)=>{
            this.list=resp.data.actiontrailers;
    })
    },
}
</script>
