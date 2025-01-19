<script setup>

</script>

<template>
  <div class="main_container">
    <div class="main_textblock">
      <div class="textblock-smalltext">Plantique</div>
      <div class="textblock-bigtext">growth</div>
      <div class="textblock-description">We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our greenhouse to yours!</div>
    </div>
    <div class="main_others">
      <div class="main_card">
        <div class="card-text">
          <h3>100+ Plants</h3>
          <p>We want our visitors to be inspired to get their hands dirty!</p>
        </div>
        <img src="../../assets/img/mainview/r1-r3.png" alt="plants">
      </div>
      <div class="main_buttons">
        <div class="buttons-shopbutton">
          <button><RouterLink to="store">Shop Tropical Plants</RouterLink></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main_container{
  padding: 0 20px;
  color: white;
}

.main_textblock{
  margin: 100px;
  display: grid;
  align-self: center;
  width: 1140px;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
}

.textblock-smalltext {
  grid-row: 2;
  grid-column: 1;
  font-weight: 600;
  font-size: 48px;
}
.textblock-bigtext {
  grid-row: 2;
  grid-column: 1/3;
  font-weight: 100;
  font-size: 340px;
  font-family: 'Lufga ExtraBold', sans-serif;
}
.textblock-description {
  grid-row: 3;
  grid-column: 2/3;
  font-weight: 300;
  font-size: 20px;
  font-family: 'Lufga Medium', sans-serif;
}

.main_others{
  display: flex;
  margin-top: 45px;
  margin-bottom: 10px;
  justify-content: space-between;
}
.main_card{
  margin-top: 25px;
  display: flex;
  width: 320px;
  height: fit-content;
  padding: 20px;
  gap: 10px;
  border: 1px solid grey;
  border-radius: 35px;
  background: rgba(194, 194, 194, 0.3);
  backdrop-filter: blur(3px);
}

.main_card img{
  height: 144px;
}

.card-text{
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.card-text h3{
  font-size: 36px;
  font-weight: 600;
}
.card-text p{
  font-size: 22px;
  font-weight: 300;
}
.main_buttons{
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
}

.buttons-scrollbutton:hover{
  background: rgba(194, 194, 194, 0.3);
  backdrop-filter: blur(3px);
}

.buttons-shopbutton button{
  font-family: 'Lufga Regular', sans-serif;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  background: transparent;
  border: 2px solid black;
  border-radius: 35px;
  height: 106px;
  width: 380px;
  transition: all 0.2s;
  background-color: #ffffff;
}

.buttons-shopbutton button:hover{
  background: black;
  color:white;
}

.buttons-shopbutton button:focus{
  background: black;
  color:white;
}

</style>