import React from 'react';
import { TestComponent } from '../components/ToggleTest/TestComponent';
import Counter from '../components/Counter/Counter';

const MainPage = () => {
    return (
        <div data-testid='main-page'>
            <span>MAIN PAGE</span>
            <TestComponent/>
            <Counter/>
        </div>
    );
};

export default MainPage;