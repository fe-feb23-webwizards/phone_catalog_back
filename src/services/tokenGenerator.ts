const rand = function () {
  return Math.random().toString(36).substr(2);
};

export const token = function () {
  return rand() + rand();
};

token();
