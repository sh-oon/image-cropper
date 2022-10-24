<template>
  <div class="flex flex-col min-h-full p-2 w-2/12 bg-amber-200 overflow-y-scroll">
    <div>Profile</div>
    <div v-for="(menu, i) in menus" :key="i"
         class="w-full flex flex-col"
    >
      <div class="w-full h-12 p-2 items-center flex justify-between"
           @click="unfoldMenus(menu)"
      >
        <div>{{menu.name}}</div>
        <div>svg</div>
      </div>
      <div class="h-0 bg-gray-500 overflow-hidden transition-all" :class="{'unfolded p-2' : !menu.isFold}">
        contents
      </div>
    </div>
  </div>
</template>

<script setup>
import {menus} from "@/data/menuStore"
import {ref} from "vue";

const unfolded = ref(null)

function unfoldMenus (menu) {
  menu.isFold = !menu.isFold
  console.log(menu)
}
</script>

<style scoped>
.unfolded {
  height: 11rem !important;
  transition: all .2s;
}
</style>