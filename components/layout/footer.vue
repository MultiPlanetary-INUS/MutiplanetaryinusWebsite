<template>
  <footer class="footer">
    <div class="container">11111</div>
    <div class="container"></div>
  </footer>
</template>

<script setup>

</script>

<style lang='scss' scoped>
* {
  box-sizing: border-box;
  border: 0 solid;
}

.footer {
  background-color: #181818;
  padding-top: 75px;
  padding-bottom: 40px;

  .container {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    -moz-column-gap: 1.5rem;
    column-gap: 1.5rem;
  }
}
</style>