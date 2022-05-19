import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import RenderContextProvider from "./RenderContextProvider";
import { useLayoutRender } from "./RenderUse";
import "./styles.css";

function DynamicBlock() {
    const src = useState(
        () =>
            "https://hsto.org/webt/ow/wu/bm/owwubmq_kdfpalevoql9vhhryl8.jpeg" +
            "?t=" +
            Math.random().toString().substring(2)
    );
    const onRender = useLayoutRender();

    const onLoadComplite = useCallback(
        (img) => {
            if (img.target.complete) {
                onRender();
            }
        },
        [onRender]
    );

    return <img src={src} onLoad={onLoadComplite} onError={onRender} alt="" />;
}

export default function App() {
    const [scroll, setScroll] = useState(0);
    const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
    useEffect(() => {
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    const onCallbackRender = useCallback(() => {
        window.scrollTo(0, 1000);
    }, []);

    return (
        <RenderContextProvider onRender={onCallbackRender}>
            <div className="App">
                <h2>1. Start editing to see some magic happen!</h2>
                <p style={{ height: "300px" }}></p>
                <DynamicBlock />
                <h2>2. Start editing to see some magic happen!</h2>
                <p style={{ height: "300px" }}></p>
                <DynamicBlock />
                <h2>3. Start editing to see some magic happen!</h2>
                <p style={{ height: "300px" }}></p>
                <DynamicBlock />
                <h2>4. Start editing to see some magic happen!</h2>
                <p style={{ height: "300px" }}></p>
                <DynamicBlock />
                <h2>5. Start editing to see some magic happen!</h2>
                <p style={{ height: "300px" }}></p>
                <DynamicBlock />
                <div className="scroll">{scroll}</div>
            </div>
        </RenderContextProvider>
    );
}