import React from 'react';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageToRussian = () => {
    i18n.changeLanguage('ru');
  };

  const changeLanguageToUkrainian = () => {
    i18n.changeLanguage('uk');
  };

  const changeLanguageToEnglish = () => {
    i18n.changeLanguage('en');
  };

  return (
    <>
      <h1>{t('Welcome message')}</h1>
      <button onClick={changeLanguageToRussian}>ru</button>
      <button onClick={changeLanguageToUkrainian}>uk</button>
      <button onClick={changeLanguageToEnglish}>en</button>
    </>
  );
};
