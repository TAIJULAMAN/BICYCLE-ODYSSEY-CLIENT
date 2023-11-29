import React from "react";
// import Skeleton from "react-loading-skeleton";

// import ReactStars from "react-rating-stars-component";

const Blogs = () => {
  return (
    <div className="mt-5 mx-12">
      <h1 className="text-4xl font-extrabold text-bold text-center">Blogs</h1>
      <div className="divider"></div>
      <h1 className="text-2xl font-extrabold text-bold">
        How will you improve the performance of a React Application?
      </h1>
      <ul>
        <li>Keeping component state local where necessary.</li>
        <li>Function/Stateless Components and React pure components.</li>
        <li>Multiple Chunk Files.</li>
        <li>Memoizing React components to prevent unnecessary re-renders.</li>
        <li>Code-splitting in React using dynamic import.</li>
        <li>Windowing or list virtualization in React.</li>
        <li>Lazy loading images in React.</li>
      </ul>
      <div className="divider"></div>
      <h1 className="text-2xl font-extrabold text-bold">
        What are the different ways to manage a state in a React application?
      </h1>
      <ul>
        <li>Local state.</li>
        <li>Global state.</li>
        <li>Server state.</li>
        <li>URL state.</li>
      </ul>
      <div className="divider"></div>
      <h1 className="text-2xl font-extrabold text-bold">
        How does prototypical inheritance work?
      </h1>
      <p>
        Every object with its methods and properties contains an internal and
        hidden property known as [[Prototype]]. The Prototypal Inheritance is a
        feature in javascript used to add methods and properties in objects. It
        is a method by which an object can inherit the properties and methods of
        another object. Traditionally, in order to get and set the [[Prototype]]
        of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
        Nowadays, in modern language, it is being set using __proto__.
      </p>
      <div className="divider"></div>
      <h1 className="text-2xl font-extrabold text-bold">
        What is a unit test?
      </h1>
      <p>
        Unit tests are typically automated tests written and run by software
        developers to ensure that a section of an application (known as the
        "unit") meets its design and behaves as intended. In procedural
        programming, a unit could be an entire module, but it is more commonly
        an individual function or procedure.
      </p>
      <h1 className="text-2xl font-extrabold text-bold">
        {" "}
        Why should write unit tests?
      </h1>
      <p>
        Unit testing allows software developers to actually think through the
        design of the software and what has to be done before they write the
        code. This can help them to stay focused and can also help them to
        create much better designs. When bugs are detected at the later stages,
        they are usually the results of many changes that have already been made
        to the system. If the software has already been developed, finding out
        the exact code that caused these bugs will be a major problem. For the
        best practice, all projects must be under unit testing, but normally it
        is used for larger projects. Smaller projects can still benefit from
        unit tests, but project managers and clients should evaluate the time
        needed to develop unit tests during the project.
      </p>
      <div className="divider"></div>
      <h1 className="text-2xl font-extrabold text-bold">
        Why you do not set the state directly in React?
      </h1>
      <ul className="mb-5">
        <li>
          If you update it directly, calling the setState() afterward may just
          replace the update you made.
        </li>
        <li>
          When you directly update the state, it does not change this.state
          immediately. Instead, it creates a pending state transition, and
          accessing it after calling this method will only return the present
          value.
        </li>
        <li>You will lose control of the state across all components.</li>
      </ul>

     
    </div>
  );
};

export default Blogs;
