import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppStyle } from './CssValues';
import Footer from './Pages/Common/Components/Footer';
import FAQCard from './Pages/FAQ/Components/FAQCard';

export default function App() {
  return (
    <AppStyle>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={FAQCard} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </AppStyle>
  );
}
