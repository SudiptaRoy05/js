const hummus = (factor) => {
  const ingridient = (amount, unit, names) => {
    let ingridientAmount = amount * factor;
    if (ingridientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingridientAmount} ${unit} ${names}`);
  };

  ingridient(0.35, "cup", "milk");
  ingridient(2, "can", "coke");
};

hummus(2);
