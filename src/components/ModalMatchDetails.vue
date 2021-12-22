<template>
  <div>
    <modal name="match-details" height="auto" :adaptive="true" :scrollable="true">
      <div class="last-match-details">
        <div class="match-details-inner">
            <div>
                <h2>📋 Scores:</h2>
            </div>
            <div class="score">
                <h3>🏸 Raj VS Kev: <span>14 - 12</span></h3>
                <h3>🏸 Kev VS Dev: <span>7 - 10</span></h3>
                <h3>🏸 Dev VS Raj: <span>13 - 4</span></h3>
            </div>

            <button @click="$modal.hide('match-details')" class="modal-close">
                Close
            </button>
        </div>
      </div>
    </modal>
  </div>
</template>


<style scoped>
.score {
  padding: 50px 0;
}
.last-match-details {
  background: #42b983 url("../assets/bg.jpg") no-repeat;
  background-size: cover;
  height: 100%;
  color: #fff;
}

.last-match-details h2,
.last-match-details h3 {
  margin: 0;
}

.last-match-details h2 span,
.last-match-details h3 span {
    color: #5cf3af;
}

.last-match-details ol {
    padding-left: 20px;
    float: left;
    width: 40%;
}

.last-match-details ol:last-child {
    clear: right;
}

.last-match-details ol li {
    list-style: none;
}

.last-match-details ol li:not(:first-child) {
    color: #5cf3af;
}

.match-details-inner {
  padding: 25px;
  background-color: rgba(0,0,0,0.6);
  height: 100%;
  overflow: hidden;
}

.match-details-inner .score {
  clear: both;
}

.modal-close {
  padding: 10px;
  background-color: #42b983;
  border: none;
  width: 100%;
  margin-top: 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.modal-close:hover,
.modal-close:focus {
  cursor: pointer;
  background-color: #5cf3af;
}

.v--modal-overlay {
  background: rgba(0, 0, 0, 0.8);
}
</style>
