'reach 0.1';

const commonInteract = {
  reportCancellation: Fun([], Null),
  reportPayment: Fun([UInt], Null),
  reportTransfer: Fun([UInt], Null)
};

const traderInteract = {
  ...commonInteract,
  price: UInt,
  property: Bytes(128),
  reportReady: Fun([UInt], Null),
};


const offTakerInteract = {
  ...commonInteract,
  reportproperty: Fun([Bytes(128)], Null),
  confirmPurchase: Fun([UInt], Bool),
};


export const main = Reach.App(() => {

  const S = Participant('trader', traderInteract);
  const B = Participant('offTaker', offTakerInteract);
  const V = View('Main', { price: UInt });
  init();

  S.only(() => { const price = declassify(interact.price); });
  S.publish(price);
  S.interact.reportReady(price);
  V.price.set(price);
  commit();

  B.only(() => { const willBuy = declassify(interact.confirmPurchase(price)); });
  B.publish(willBuy);
  if (!willBuy) {
    commit();
    each([S, B], () => interact.reportCancellation());
    exit();
  } else { commit(); }

  B.pay(price);
  each([S, B], () => interact.reportPayment(price));
  commit();

  S.only(() => { const property = declassify(interact.property); });
  S.publish(property);
  transfer(price).to(S);
  commit();

  each([S, B], () => interact.reportTransfer(price));
  B.interact.reportproperty(property);
  exit();

});
