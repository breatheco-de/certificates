import React, {Suspense} from 'react';
import Spinner from 'react-spinner-material';
import LanguageSwitcher from "../components/LanguageSwitcher/language-switcher";

import strings from "./strings";

export const Diploma = (props) => {
    const { student, lang, certificateStyle, type, token } = props;
    const Instance = React.lazy(() => import(`./${type || 'pdf'}/${certificateStyle || "default"}`)); // Lazy-loaded
    return (!student ?
        <div className="loading">
            <Spinner size={120} spinnerColor={"#44B2E4"} spinnerWidth={2} visible={true} />
        </div>   
        :
        <Suspense fallback={<Spinner size={120} spinnerColor={"#44B2E4"} spinnerWidth={2} visible={true} />}>
            <Instance {...props} strings={strings[lang || "en"]} />      
            <LanguageSwitcher translations={["es", "en"]} current={lang} onClick={(lang) => { window.location.href = `/pdf/${token}?lang=${lang}` }} />     
        </Suspense>
    )
}