let getTip (total, tipPercent = 0.2) => {
    return (total * tipPercent) + total;
};
getTip(50, .15);