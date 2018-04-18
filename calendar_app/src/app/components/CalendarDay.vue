<template>
  <div class="day column">
    <div class="day-banner has-text-centered">{{ day.abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number">{{ day.id }}</div>
      <div class="day-event" style="background-color: rgb(153, 255, 153)">
        <div>
          <span class="has-text-centered details">Get Groceries</span> 
          <div class="has-text-centered icons">
            <i class="fa fa-pencil-square edit-icon"></i>
            <i class="fa fa-trash-o delete-icon"></i>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarDay',
  props: ['day']
}
</script>
