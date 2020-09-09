import React from "react";
import PropTypes from "prop-types";
import "./style.css";
const Icon = ({ lang, className }) =>
    // <div className={"icon btn btn-sm "+className} style={{ backgroundImage: `url(${url}` }}>{' '}</div>;
    <div className={"icon " + className} style={{ backgroundImage: `url(https://www.countryflags.io/${lang}/flat/64.png` }}>{' '}</div>;
Icon.propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
};
Icon.defaultProps = {
    className: '',
};

const LanguageSwitcher = ({ current, translations, onClick }) => {
    return (<div className="language-switcher">
        <ul>
            {
                translations.filter(lang => lang !== current).map(lang => {
                    return (<li><span onClick={() => onClick(lang)}><Icon lang={lang === "en" ? "us" : lang} /></span></li>);
                })
            }
        </ul>
        <span><Icon lang={current === 'en' ? 'us' : current} /></span>
    </div>);
};

export default LanguageSwitcher;