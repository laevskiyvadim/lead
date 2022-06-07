const deadlinesType = (endTime, startTime) => {
  let a = new Date(endTime);
  let b = new Date(startTime);
  let c = new Date();
  let obs = Math.round((+a - +b) / 1000 / 60 / 60);
  let cur = Math.round((+c - +b) / 1000 / 60 / 60);
  let g = cur / obs;

  if (g < 0 || g > 0.6) {
    return "hot";
  } else if (g < 0.3) {
    return "cold";
  } else if (g < 0.6) {
    return "medium";
  }
};

export const setData = (prop, data, len) => {
  const { user, users, task, endTime, startTime } = prop.value;
  const taskUser = users.filter((el) => el.id == user);
  const { first_name, last_name, phone, email } = taskUser[0];
  data.first_name = first_name;
  data.last_name = last_name;
  data.phone = phone;
  data.email = email;
  data.task = task;
  data.endTime = endTime;
  data.startTime = startTime;
  data.shortTaskTitle = task.substr(0, len);
  data.className = deadlinesType(endTime, startTime);
};

export const openEditPopup = (e, store, item) => {
  const { commit } = store;
  e.preventDefault();
  document.querySelector("body").classList.add("noMove");
  commit("set_popup", item.value);
};
