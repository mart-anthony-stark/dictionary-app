const sec = 15;
const ms = sec * 1000;

export const showModal = () => {
  const dialog = document.getElementById("winner_modal") as any;
  const interval = setInterval(() => {
    dialog.showModal();
  }, ms);

  return interval;
};
