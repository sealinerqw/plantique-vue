<script setup>
  const selectionItems = document.querySelectorAll('.selection_item')

  selectionItems.forEach(element =>{
    const itemText = element.querySelector('.item-text')
    element.addEventListener("mouseenter", ()=>{
      itemText.classList.add('visible')
    })
    
    element.addEventListener("mouseleave", ()=>{
      itemText.classList.remove("visible")
    })
  })
</script>

<template>
  <div class="collection_container">
    <div class="collection_selector">
      <div class="selector-button" id="1">Outdoor Plants</div>
      <div class="selector-button" id="2">Indoor Plants</div>
      <div class="selector-button" id="3">Potted Plants</div>
      <div class="selector-button" id="4">Flowers</div>
    </div>
    <div class="collection_selection">
      <div class="selection_item">
        <h4>Pet Friendly</h4>
        <p class="item-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure officiis, vero aliquid odio accusamus in placeat, veritatis atque non officia at nostrum dolorem velit iusto, ea provident perferendis. Sit, architecto.</p>
      </div>
      <div class="selection_item">
        <h4>Orchids</h4>
        <p class="item-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure officiis, vero aliquid odio accusamus in placeat, veritatis atque non officia at nostrum dolorem velit iusto, ea provident perferendis. Sit, architecto.</p>
      </div>
      <div class="selection_item">
        <h4>Succulents</h4>
        <p class="item-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure officiis, vero aliquid odio accusamus in placeat, veritatis atque non officia at nostrum dolorem velit iusto, ea provident perferendis. Sit, architecto.</p>
      </div>
      <div class="selection_item">
        <h4>Cactuses</h4>
        <p class="item-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure officiis, vero aliquid odio accusamus in placeat, veritatis atque non officia at nostrum dolorem velit iusto, ea provident perferendis. Sit, architecto.</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .collection_container{
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 60px;
  background: var(--bg-white);
}

.collection_selector{
  display: flex;
  justify-content: space-evenly;
}

.selector-button{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  border-radius: 60px;
  border: 1px solid black;
  font-size: 20px;
  font-weight: 700;
  transition: all 0.2s;
  background-color: #ffffff;
}

.selector-button:hover{
  background: black;
  color: white;
}

.collection_selection{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.selection_item{
  width: 310px;
  height: 300px;
  border: 1px solid black;
  border-radius: 20px;
  color: white;
  padding: 20px;
  background-repeat: no-repeat;
  object-fit: cover;
  transition: all 0.5s;
  filter: grayscale(1);
  background-image: url('../../assets/img/mainview/card.png');
}

.selection_item:hover{
  width: 470px;
  filter: grayscale(0);
}

.selection_item h4{
  font-size: 42px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 30px;
}

.selection_item p{
  font-family: 'Lufga Light', sans-serif;
  font-weight: 100;
  opacity: 0;
  transition: all 0.7s;
}

.selection_item p.visible{
  opacity: 1;
  transition: all 0.7s;
}
</style>