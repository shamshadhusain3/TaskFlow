import React, { useState } from 'react';
import { gsap } from 'gsap';
import Form from './Form';

const FormsPage = () => {
    const [currentForm, setCurrentForm] = useState(null);
    const [showLoginLinks, setShowLoginLinks] = useState(false);

    const handleLinkClick = (formType) => {
        setCurrentForm(formType);
        gsap.fromTo('.form-container', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.5 });
    };

    const handleBackClick = () => {
        gsap.to('.form-container', {
            opacity: 0,
            x: 100,
            duration: 0.5,
            onComplete: () => setCurrentForm(null),
        });
    };

    const toggleLoginLinks = () => {
        setShowLoginLinks(!showLoginLinks);
    };

    const renderForm = () => {
        switch (currentForm) {
            case 'company':
                return <Form title="Company Registration" isLogin={false} onBack={handleBackClick} />;
            case 'companyLogin':
                return <Form title="Company Login" isLogin={true} onBack={handleBackClick} />;
            case 'employee':
                return <Form title="Employee Registration" isLogin={false} onBack={handleBackClick} />;
            case 'employeeLogin':
                return <Form title="Employee Login" isLogin={true} onBack={handleBackClick} />;
            case 'manager':
                return <Form title="Manager Registration" isLogin={false} onBack={handleBackClick} />;
            case 'managerLogin':
                return <Form title="Manager Login" isLogin={true} onBack={handleBackClick} />;
            case 'team':
                return <Form title="Team Registration" isLogin={false} onBack={handleBackClick} />;
            case 'teamLogin':
                return <Form title="Team Login" isLogin={true} onBack={handleBackClick} />;
            default:
                return (
                    <div className="grid gap-4">
                        {!showLoginLinks ? (
                            <>
                                <button onClick={() => handleLinkClick('company')} className="text-blue-500 hover:text-blue-700">Company Registration</button>
                                <button onClick={() => handleLinkClick('employee')} className="text-blue-500 hover:text-blue-700">Employee Registration</button>
                                <button onClick={() => handleLinkClick('manager')} className="text-blue-500 hover:text-blue-700">Manager Registration</button>
                                <button onClick={() => handleLinkClick('team')} className="text-blue-500 hover:text-blue-700">Team Registration</button>
                                <button onClick={toggleLoginLinks} className="text-blue-500 hover:text-blue-700">Login</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => handleLinkClick('companyLogin')} className="text-blue-500 hover:text-blue-700">Company Login</button>
                                <button onClick={() => handleLinkClick('employeeLogin')} className="text-blue-500 hover:text-blue-700">Employee Login</button>
                                <button onClick={() => handleLinkClick('managerLogin')} className="text-blue-500 hover:text-blue-700">Manager Login</button>
                                <button onClick={() => handleLinkClick('teamLogin')} className="text-blue-500 hover:text-blue-700">Team Login</button>
                                <button onClick={toggleLoginLinks} className="text-blue-500 hover:text-blue-700">Back to Registration Links</button>
                            </>
                        )}
                    </div>
                );
        }
    };

    return (
        <div className="container mx-auto p-8">
            <div className="form-container">
                {renderForm()}
            </div>
        </div>
    );
};

export default FormsPage;
