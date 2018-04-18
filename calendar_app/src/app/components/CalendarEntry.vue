<template>
<div id="calendar-entry">
  <div class="calendar-entry-note">
    <input type="text" placeholder="New Event" />
    <p class="calendar-entry-day">Day of event: <span class="bold">Monday</span></p>
    <a class="button is-primary is-small is-outlined">Submit</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'CalendarEntry'
}
</script>
