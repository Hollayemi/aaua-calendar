import { Footer } from "./footer";
import Header from "./header";

const AppWrapper = ({ children, pageName, back }) => {
    return (
        <div className="flex flex-col relative h-screen ">
            <Header pageName={pageName} back={back} />
            <div className="h-full pb-10 overflow-auto flex-grow overflowStyle">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default AppWrapper;
