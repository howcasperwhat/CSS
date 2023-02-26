<script setup lang='ts'>

</script>

<template>
  <div id="flex-1">
    <div id="flex-1-1">
      Flex Container
    </div>
    <div id="flex-1-2">
      <div id="flex-1-2-1">
        Flex Item
      </div>
      <div id="flex-1-2-2">
        Flex Item
      </div>
      <div id="flex-1-2-3">
        Flex Item
      </div>
    </div>
  </div>
</template>

<style scoped>
#flex-1 {
  background-color: #e2f0d9;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  color: black;
  font-family: Arial Black, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1vw;
  content: "Flex Container";
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

#flex-1-1 {
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#flex-1-2 {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

#flex-1-2-1,
#flex-1-2-2,
#flex-1-2-3 {
  height: 90%;
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fbe5d6;
  border-radius: 8px;
}

#flex-1 * {
  user-select: none;
}
</style>