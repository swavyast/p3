import React from "react";

const container = <div className="myContainer">
<p>Container inside Script JS</p>
</div>

const root = ReactDOM.createRoot(document.querySelector('root'));
root.render(container);