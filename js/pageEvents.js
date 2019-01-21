export default function (event, buttonToClick) {
  if (event.keyCode === 13) {
    buttonToClick.click();
  }
}
