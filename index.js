import * as AppViews from "./src/components/App";
import * as OffTaker from "./src/components/OffTaker";
import * as Trader from "./src/components/Trader";
import RenderViews, { renderDOM } from "./src/layouts/renderViews";
import ReachContextProvider from "./src/context/ReachContext";
// import styles from "./styles/Global.module.css";
import { useClasses } from "./src/hooks";

const Views = {
    ...AppViews,
    ...OffTaker,
    ...Trader,
};

function App () {
    return (
        <div className={ useClasses() }>
            <RenderViews { ...Views } />
        </div>
    );
}

renderDOM(
    <ReachContextProvider>
        <App />
    </ReachContextProvider>
);

export default App;
