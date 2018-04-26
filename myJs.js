var ranArray = new Array(
    0.8207125988,
    0.8858442162,
    0.7519853998,
    0.4565763700,
    0.1330507124,
    0.4981171825,
    0.7353662381,
    0.4396005486,
    0.3280506672,
    0.3485110882,
    0.4537169698,
    0.7402439945,
    0.1728033694,
    0.4304377208,
    0.1022901596,
    0.5108054741,
    0.0951278760,
    0.2321688487
  );
  function randomNumber(parameter) {
    var index = 0;
    if (parameter >= 1000000) return "Parameter must be less than: 1000000";
    if (parameter <= 0) return "Parameter must be greate than: 0";
    do {
      index++;
    }
    while (flip() || flip());
    index = (index >= ranArray.length - 1) ? index : 0;
    return Math.floor((ranArray[index] * new Date().getTime()) % parameter);
  }
  console.log(randomNumber(0));
  console.log(randomNumber(1));
  console.log(randomNumber(50));
  console.log(randomNumber(5000));
  console.log(randomNumber(500));
  console.log(randomNumber(10000001));
  
  function flip() {
    return Math.random() >= 0.5;
  }