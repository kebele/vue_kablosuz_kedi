<template>
  <div>
    <li class="list-group-item">
      <!-- Sunucu #{{ index }} -->
      Sunucu #{{ serverData.id }}
      <p>durumu : <strong> {{ serverData.status }}</strong></p>
    </li>
  </div>
</template>

<script>
export default {
    props : ["serverData"]
    // serverData ismi ile gelen prop u alabilir hale gelmek için
}
</script>
