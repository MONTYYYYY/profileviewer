const isNullOrWhiteSpace = (value :string) => (!value || value.length === 0 || /^\s*$/.test(value));

const StringFunction = {
  isNullOrWhiteSpace,
};

export default StringFunction;
