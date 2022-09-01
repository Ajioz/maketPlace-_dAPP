import React, { useState } from "react";
import {
    loadStdlib,
    ALGO_WalletConnect as WalletConnect,
} from "@reach-sh/stdlib";
import * as backend from "../../build/index.main.mjs";
const reach = loadStdlib(process.env);

reach.setWalletFallback(
    reach.walletFallback({
        providerEnv: "TestNet",
        WalletConnect,
    })
);

const participants = ["Trader", "Offtaker"];
const { standardUnit } = reach;
const deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];

export const ReachContext = React.createContext();

const ReachContextProvider = ({ children }) => {
    const [defaults] = useState({
        defaultFundAmt: "10",
        defaultWager: "3",
        standardUnit,
    });
    const [views, setViews] = useState({
        view: "ConnectAccount",
        wrapper: "AppWrapper",
    });
    const [user, setUser] = useState({
        account: "",
        balance: "",
    });

    const [role, setRole] = useState("");

    const [contract, setContract] = useState(null);

    const [amountPaid, setAmountPaid] = useState(0);
    const [product, setProduct] = useState('');
    const [propertyInfo, setPropertyInfo] = useState([]);

    const [resolveProperty, setResolveProperty] = useState({});
    const [resolveAcceptTerms, setResolveAcceptTerms] = useState({});

    const returnBare = (byte) => {
        let bareString = '', i = 0;
        while (i !== byte.length) {
            if (String(byte[i]) !== String("\u0000")) {
                bareString += byte[i];
            }
            i++;
        }
        return bareString;
    };

    const connectAccount = async () => {
        const account = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balAtomic, 4);
        setUser({ account, balance });
        setViews({ view: "ChooseRole", wrapper: "AppWrapper" });
    };

    const reportCancellation = () => {
        setViews({ view: 'Cancelled', wrapper: 'AppWrapper' });
    };

    const reportPayment = (amount) => {
        setAmountPaid(reach.formatCurrency(amount, 4));
        setViews({ view: 'Paid', wrapper: 'TraderWrapper' });
    };

    const reportTransfer = (amount) => {
        setAmountPaid(reach.formatCurrency(amount, 4));
        setViews({ view: 'Transferred', wrapper: 'AppWrapper' });
    };

    const commonInteract = {
        reportCancellation,
        reportPayment,
        reportTransfer,
    };

    const getPropertyInfo = async () => {
        const propertyInfo = await new Promise((resolveProperty) => {
            setResolveProperty({ resolveProperty });
            setViews({ view: 'SetPropertyInfo', wrapper: 'TraderWrapper' });
        });
        setPropertyInfo(propertyInfo);
        return propertyInfo;
    };

    const setProperty = (property, price) => {
        resolveProperty.resolveProperty({ property, price: reach.parseCurrency(price) });
    };

    const reportReady = (property, price) => {
        setPropertyInfo({ property: returnBare(property), price: reach.formatCurrency(price, 4) });
        setViews({ view: 'Showcase', wrapper: 'AppWrapper' });
    };

    const TraderInteract = {
        ...commonInteract,
        getPropertyInfo,
        reportReady,
    };

    const deploy = async () => {
        const ctc = user.account.contract(backend);
        setViews({ view: "Deploying", wrapper: "TraderWrapper" });
        ctc.p.Trader(TraderInteract);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        console.log(ctcInfoStr);
        setContract({ ctcInfoStr });
        setViews({ view: "Initiating", wrapper: "TraderWrapper" });
    };

    const selectTrader = () => {
        setRole('Trader');
        deploy();
    };

    const confirmPurchase = async (property, price) => {
        setPropertyInfo({ property: returnBare(property), price: reach.formatCurrency(price, 4) });
        const decision = await new Promise((resolveAcceptTerms) => {
            setResolveAcceptTerms({ resolveAcceptTerms });
            setViews({ view: "AcceptTerms", wrapper: "AppWrapper" });
        });
        return decision;
    };

    const decide = (decision) => {
        resolveAcceptTerms.resolveAcceptTerms(decision);
        setViews({ view: "Processing", wrapper: "AppWrapper" });
    };

    const reportProperty = (property) => {
        setProduct(returnBare(property));
        setViews({ view: 'Purchased', wrapper: 'OffTakerWrapper' });
    };

    const OffTakerInteract = {
        ...commonInteract,
        confirmPurchase,
        reportProperty,
    };

    const attach = async (ctcInfoStr) => {
        try {
            const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
            setViews({ view: "Attaching", wrapper: "OffTakerWrapper" });
            ctc.p.OffTaker(OffTakerInteract);
        } catch (error) {
            console.log({ error });
        }
    };

    const selectOffTaker = () => {
        setRole('OffTaker');
        setViews({ view: "Attach", wrapper: "OffTakerWrapper" });
    };

    const ReachContextValues = {
        ...defaults,

        contract,
        // App flow dependent states
        user,
        views,
        connectAccount,

        // Misc
        role,
        setRole,

        // Trader states
        selectTrader,
        deploy,
        setProperty,
        propertyInfo,
        setPropertyInfo,

        // OffTaker states
        selectOffTaker,
        attach,
        decide,
        product,
        setProduct,

        // Common states
        amountPaid,
        setAmountPaid,
    };

    return (
        <ReachContext.Provider value={ ReachContextValues }>
            { children }
        </ReachContext.Provider>
    );
};

export default ReachContextProvider;