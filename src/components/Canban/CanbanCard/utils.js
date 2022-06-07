export const dragover = (e) => {
  e.preventDefault();
};
export const dragenter = (e) => {
  e.preventDefault();
};
export const dragleave = (e) => {
  e.preventDefault();
};
export const onDrop = (e, nameCol, drop) => {
  const itemId = parseInt(e.dataTransfer.getData("itemId"));
  const nameStart = e.dataTransfer.getData("nameStart");
  const nameEnd = nameCol.value;
  drop.value({ itemId, nameStart, nameEnd });
};

export const onDragStart = (e, card, nameCol, startDrag) => {
  e.dataTransfer.dropEffect = "move";
  e.dataTransfer.effectAllow = "copy";
  e.dataTransfer.setData("itemId", card.value.id);
  e.dataTransfer.setData("nameStart", nameCol.value);
  startDrag.value(card.value);
};
