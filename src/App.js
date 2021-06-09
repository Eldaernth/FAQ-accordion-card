import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppStyle } from './cssValues';
import Footer from './Pages/Common/Components/Footer';
import FAQCard from './Pages/FAQ/Components/FAQCard';
import NotFound from './Pages/404/Component/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <AppStyle>
        <Switch>
          <Route exact path="/" component={FAQCard} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </AppStyle>
    </BrowserRouter>
  );
}
