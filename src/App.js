import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
	// path에 붙은 ?값의 의미는 선택적 이라는 의미.
	return <Route path="/:category?" component={NewsPage} />;
};

export default App;
