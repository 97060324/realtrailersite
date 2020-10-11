<template>
    <div class="trailer-overview">
        <h1>hoi</h1>
        <h1 @click="closeTrailerOverview()">Go back</h1>
    </div>
</template>


<script>
export default {
    methods: {
        closeTrailerOverview() {
            document.getElementsByClassName('trailer-overview')[0].style.display = 'none';
            document.getElementsByClassName('body')[0].style.display = 'block';
            document.getElementsByClassName('title')[0].style.display = 'block';
        }
    }
}
</script>
