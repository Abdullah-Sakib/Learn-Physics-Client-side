import React from "react";

const Blog = ({ children, title }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-2 sm:mx-auto lg:max-w-full">
        <div className="px-6 py-10 text-start border rounded lg:px-5 lg:py-10 ">
          <h2
            className="inline-block max-w-full mx-auto mb-3 text-3xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
          >
            what is cors?
          </h2>
          <p className="max-w-full text-xl mb-2 text-gray-700">
            Cross-origin resource sharing (CORS) is a browser security feature
            that restricts cross-origin HTTP requests that are initiated from
            scripts running in the browser. If your REST API's resources receive
            non-simple cross-origin HTTP requests, you need to enable CORS
            support.
          </p>
        </div>
        <div className="px-6 py-10 text-start border rounded lg:px-5 lg:py-10 ">
          <h2
            className="inline-block max-w-full mx-auto mb-3 text-3xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
          >
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p className="max-w-full text-xl mb-2 text-gray-700">
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. <br /> <br />
            <span className="font-semibold">Other options to implement authentication </span><br />
            1. STYTCH. <br />
            2. Ory. <br />
            3. Supabase. <br />
            4. Okta. <br />
            5. PingIdentity. <br />
            6. Keycloak. <br />
            7. Frontegg. <br />
            8. Authress. <br />
          </p>
        </div>
        <div className="px-6 py-10 text-start border rounded lg:px-5 lg:py-10 ">
          <h2
            className="inline-block max-w-xs mx-auto mb-3 text-3xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
          >
            How does the private route work?
          </h2>
          <p className="max-w-full text-xl mb-2 text-gray-700">
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
          </p>
        </div>
        <div className="px-6 py-10 text-start border rounded lg:px-5 lg:py-10 ">
          <h2
            className="inline-block max-w-xs mx-auto mb-3 text-3xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
          >
           What is Node? How does Node work?
          </h2>
          <p className="max-w-full text-xl mb-2 text-gray-700">
          Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications. <br />
          It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
