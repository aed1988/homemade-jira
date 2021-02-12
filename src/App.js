import { HeaderContainer } from "./Containers/header";
import { MainContainer } from "./Containers/mainSection";
import { LogInPage } from "./Containers/logInPage";
import Theme from "./defaultStyling/Theme";

function App() {
    return (
        <Theme>
            <HeaderContainer />
            <LogInPage />
        </Theme>
    );
}

export default App;
