const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/api", "/auth/google"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );
};

//Do not add the proxy configuration to the package.json file as shown in the video lectures.
//If you do, you'll get the following error:

//[1] When specified, "proxy" in package.json must be a string.
//[1] Instead, the type of "proxy" was "object".
//[1] Either remove "proxy" from package.json, or make it a string.