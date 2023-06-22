const delay = (cb, ms) => {
   return new Promise((res) => {
      setTimeout(() => {
         res(cb());
      }, ms);
   });
};

module.exports = delay;
