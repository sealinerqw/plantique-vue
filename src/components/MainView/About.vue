<script setup>

</script>

<template>
  <div class="about_container">
    <div class="about_imageblock">
      <div class="imageblock-text">
        <h4>Plants for the People</h4>
        <p>We want our visitors to be inspired to get their hands dirty!</p>
      </div>
      <img src="../../assets/img/mainview/leaf-still.png" class="imageblock-video" alt="">
    </div>
    <div class="about_textblock">
      <p>Each plant is cared <span><img src="../../assets/img/mainview/about-span.png" alt=""></span> for by our horticultural experts, so they are as happy and as healthy as they can get</p>
    </div>
  </div>
</template>

<style scoped>
  .about_container{
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;
  background: var(--bg-white);
}

.about_imageblock{
  display: flex;
  gap: 30px;
  height: inherit;
  align-items: center;
}

.imageblock-video{
  width: 300px;
  height: 150px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  transition: all 0.4s;
  filter: grayscale(1);
}

.imageblock-video:hover{
  transform: scale(1.1);
  filter: grayscale(0);
}

.imageblock-text{
  width: 290px;
}
.imageblock-text h4{
  font-family: 'Lufga ExtraBold', sans-serif; 
  font-size: 44px;
  margin-bottom: 30px;
}

.about_textblock{
  font-family: 'Lufga Medium', sans-serif; 
  display: flex;
  font-size: 34px;
  font-weight: 900;
  line-height: 1.3;
  text-align: right;
}

.about_textblock span{
  display: inline-block;
  vertical-align: middle;
  height: 64px;
  padding: 0;
  position: relative;
  margin-top: -20px;
}
</style>