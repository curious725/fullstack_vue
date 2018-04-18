<template>
<div class="day-event" style="background-color: rgb(153, 255, 153)">
  <div>
    <span class="has-text-centered details">{{ event.details }}</span> 
    <div class="has-text-centered icons">
      <i class="fa fa-pencil-square edit-icon"></i>
      <i class="fa fa-trash-o delete-icon"></i>
    </div>
  </div>
</div>   
</template>

<script>
export default {
  name: 'CalendarEvent',
  props: ['event', 'day']
}
</script>
