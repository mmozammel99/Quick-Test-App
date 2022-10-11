import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <h1 className=" text-success text-center my-3 py-2">Blog</h1>
            <Card border="success" className='mx-auto' style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title>what is the purpose of react router?</Card.Title>
                    <Card.Text>
                        <strong> React Router </strong>
                        <br />
                        Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                        <br />
                        React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                        <br /><br />
                        <strong> Need of React Router </strong>
                        <br />
                        React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="success" className='mx-auto' style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title>React Context API: What is it and How it works?</Card.Title>
                    <Card.Text>
                        Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it.React context API, In this article you will explore what is Context API and how to use it in your React project. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                        <br /><br />
                        <strong> What is Context API? </strong>
                        <br />
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                        <br /><br />
                        <strong> React context API: How it works? </strong>
                        <br />
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="success" className='mx-auto' style={{ width: '80%' }}>
                <Card.Body>
                    <Card.Title>React JS useRef Hook</Card.Title>
                    <Card.Text>
                        The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                        The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                        The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
};

export default Blog;