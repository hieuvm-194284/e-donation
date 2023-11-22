let scrollPosition = 0;
export const disableBodyScroll = () => {
  scrollPosition = window?.pageYOffset;
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = "100%";
  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";
  document.body.style.pointerEvents = "auto";
  document.body.style.touchAction = "none";
};

export const enableBodyScroll = () => {
  document.body.style.removeProperty("position");
  document.body.style.removeProperty("top");

  document.body.style.removeProperty("pointer-events");
  document.body.style.removeProperty("touch-action");
  document.body.style.removeProperty("height");
  document.body.style.removeProperty("overflow");

  window.scrollTo(0, scrollPosition);
};
