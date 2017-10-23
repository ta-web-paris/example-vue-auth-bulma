<template>
  <div>
    <h1>Home</h1>
    <p v-if="$root.user">Hi {{ $root.user.name }}</p>
  </div>
</template>
