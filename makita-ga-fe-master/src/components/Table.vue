<script setup>
defineProps({
  headers: Array
})

</script>

<template>
  <div class="table-responsive text-nowrap">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th v-for="(title, i) in headers" :key="i">
            <span v-html="title"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="items"></slot>
      </tbody>
    </table>
  </div>
</template>