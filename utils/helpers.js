const getThursdayUTCTimestamp = async () => {
  const ts = new Date().getTime();
  const week = 604800;
  return Math.floor(ts / 1000 / week) * week;
};

export { getThursdayUTCTimestamp };
