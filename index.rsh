/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

const commonInteract = {
  reportCancellation: Fun([], Null),
  reportPayment: Fun([UInt], Null),
  reportTransfer: Fun([UInt], Null)
};

const traderInteract = {
  ...commonInteract,
  getPropertyInfo: Fun([], Object({
    property: Bytes(128),
    price: UInt,
  })),
  reportReady: Fun([Bytes(128), UInt], Null),
};


const offTakerInteract = {
  ...commonInteract,
  reportProperty: Fun([Bytes(128)], Null),
  confirmPurchase: Fun([Bytes(128), UInt], Bool),
};


export const main = Reach.App(() => {

  const S = Participant('Trader', traderInteract);
  const B = Participant('OffTaker', offTakerInteract);
  const V = View('Main', { price: UInt });
  init();

  S.only(() => {
    const { property, price } = declassify(interact.getPropertyInfo());
  });
  S.publish(property, price);
  S.interact.reportReady(property, price);
  V.price.set(price);
  commit();

  B.only(() => { const willBuy = declassify(interact.confirmPurchase(property, price)); });
  B.publish(willBuy);
  if (!willBuy) {
    commit();
    each([S, B], () => interact.reportCancellation());
    exit();
  } else { commit(); }

  B.pay(price);
  each([S, B], () => interact.reportPayment(price));
  transfer(price).to(S);
  commit();

  each([S, B], () => interact.reportTransfer(price));
  B.interact.reportProperty(property);
  exit();
});
