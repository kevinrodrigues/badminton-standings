<template>
  <div>
    <h1>Rules</h1>

    <div class="c-rules-icon-wrapper">
      <rules-icon class="c-rules-icon" />
    </div>

    <ul class="c-rules">
      <li>1. If the shuttlecock hits the net whilst a player serves the serve then
        goes to the opposition.</li>
      <li>2. Late rules apply if the game can not be started at 10 past the hour.
        The person or persons shall cover the next game for the player that was on time.</li>
      <li>3. Games are to be played to 21, if for some reason the game ends early,
        i.e our time is up, then that game is void.</li>
    </ul>
  </div>
</template>

<script>
import rulesIcon from '../assets/rules.svg';


export default {
  components: {
    rulesIcon,
  },
};
</script>

<style>
.c-rules {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 40px;
  list-style: none;
  text-align: left;
}

.c-rules li {
  margin-bottom: 10px;
  padding: 20px 0;
  border-bottom: 1px dashed #d2d2d2;
}

.c-rules-icon-wrapper {
  position: relative;
  overflow: hidden;
  height: 120px;
}

.c-rules-icon {
  animation: animateUpDown 1s ease none;
  position: absolute;
  bottom: 0;
  left: 39%;
  margin: 20px auto 0;
  width: 100px;
}

@keyframes animateUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: -120px;
  }
}
</style>
