//buat action creator

const upCounter = () => {
  return {
    type: "COUNTER_UP",
  };
};

const downCounter = () => {
  return {
    type: "COUNTER_DOWN",
  };
};

const resetCounter = () => {
  return {
    type: "COUNTER_RESET",
  };
};

const counterActions = {
  upCounter,
  downCounter,
  resetCounter,
};
export default counterActions;
