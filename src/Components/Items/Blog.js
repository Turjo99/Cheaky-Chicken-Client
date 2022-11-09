import React from "react";

const Blog = () => {
  return (
    <div class="p-20 ">
      <div class=" bg-slate-900 p-6 rounded-lg shadow-xl my-10">
        <h2 class="mb-2 font-bold text-8xl text-gray-100">
          What is the difference between SQL and NoSQL
        </h2>
        <p class="text-gray-300 text-5xl">
          tables with logical links between them. NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL. There are five
          practical differences between SQL and NoSQL:
          <li>Language </li>
          <li>Scalability</li>
          <li>communities</li>
          <li>Support</li>
          <li>Properties</li>
        </p>
      </div>
      <div class=" bg-slate-900 p-6 rounded-lg shadow-xl my-10">
        <h2 class="mb-2 font-bold text-8xl text-gray-100">
          What is JWT, and how does it work?
        </h2>
        <p class="text-gray-300 text-5xl">
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed. JWTs can be signed using a
          secret (with the HMAC algorithm) or a public/private key pair using
          RSA or ECDSA.
        </p>
      </div>
      <div class=" bg-slate-900 p-6 rounded-lg shadow-xl my-10">
        <h2 class="mb-2 font-bold text-8xl text-gray-100">
          What is the difference between javascript and NodeJS?
        </h2>
        <p class="text-gray-300 text-5xl">
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node.js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more helpful.
        </p>
      </div>
      <div class=" bg-slate-900 p-6 rounded-lg shadow-xl my-10">
        <h2 class="mb-2 font-bold text-8xl text-gray-100">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p class="text-gray-300 text-5xl">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
