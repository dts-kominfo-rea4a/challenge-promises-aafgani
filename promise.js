const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (filter) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();

  return (
    ixx.filter((i) => i.hasil === filter).length +
    vgc.filter((i) => i.hasil === filter).length
  );
};

module.exports = {
  promiseOutput,
};
