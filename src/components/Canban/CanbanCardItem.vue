<template>
  <div
    class="item"
    @dragstart="onDragStart(event, name, item.Id)"
    @drop="onDrop($event)"
    @click="openEditPopup"
  >
    <div class="item__title">
      {{ timerTitle }}
      <div class="right">
        <img src="/assets/imgs/clock2.svg" alt="" />
        <div class="text">{{ endTime }}</div>
      </div>
    </div>
    <div class="item__body">
      <div class="up">{{ shortTaskTitle }}</div>
      <!-- <div class="down">{{ first_name }} {{ last_name }}</div> -->
    </div>
    <div class="line"><div class="inline" :class="deadlinesType()"></div></div>
    <div :class="deadlinesType()">
      <!-- <div class="right">
        <a :href="'tel:' + phone">
          <img src="/assets/imgs/phone.svg" :alt="'tel:' + phone" />
        </a>
        <a :href="'mailto:' + email">
          <img src="/assets/imgs/mail.svg" :alt="'mailto:' + email" />
        </a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object },
    name: { type: String },
    drop: { type: Function },
  },

  computed: {
    task() {
      return this.item.task || "";
    },
    shortTaskTitle() {
      return this.task.substr(0, 20);
    },
    endTime() {
      return this.item.endTime || "";
    },
    first_name() {
      return this.item.Responsible.first_name || "";
    },
    last_name() {
      return this.item.Responsible.last_name || "";
    },
    email() {
      return this.item.Email || "";
    },
    phone() {
      return this.item.Phone || "";
    },

    timerTitle() {
      const type = this.deadlinesType();
      switch (type) {
        case "cold":
          return "в срок";
        case "medium":
          return "запоздание";
        case "hot":
          return "горят сроки";
        default:
          return "";
      }
    },
  },
  methods: {
    onDrop($event) {
      console.log($event);
      // this.$el.style.opacity = 1;
      const itemId = ""; //parseInt($event.dataTransfer.getData("itemId"));
      const nameStart = ""; //$event.dataTransfer.getData("nameStart");
      const nameEnd = this.name;
      this.drop({ itemId, nameStart, nameEnd });
    },
    onDragStart(event, item, itemId) {
      console.log(event, item, itemId);

      setTimeout(() => {
        // this.$el.style.opacity = 0;
      });

      // $event.dataTransfer.dropEffect = "move";
      // $event.dataTransfer.effectAllow = "copy";
      // $event.dataTransfer.setData("itemId", itemId.toString());
      // $event.dataTransfer.setData("nameStart", item);
    },
    deadlinesType() {
      let a = new Date(this.item.EndTime);
      let b = new Date(this.item.StartTime);
      let c = new Date();
      let obs = Math.round((+a - +b) / 1000 / 60 / 60);
      let cur = Math.round((+c - +b) / 1000 / 60 / 60);
      let g = cur / obs;

      return g < 0 || g > 0.6 ? "hot" : g < 0.3 ? "cold" : "medium";
    },
    openEditPopup() {
      this.$store.commit("set_popup", this.item);
    },
  },

  setup() {},
};
</script>
<style scoped>
@import "../../assets/scss/canban/components/CanbanCardItem.css";
</style>
