# لیستم موارد امنیتی برنامه وب

<div dir="ltr">
# Web Application Security Checklist

## **Data Encryption & Protection**

### **Encrypt all data in transit:**

All customer data transmitted over networks must use TLS 1.2 or higher. Unencrypted protocols like HTTP or FTP are strictly prohibited. This prevents unauthorized interception during transfers.

### **Encrypt all data at rest:**

Customer data stored in databases, backups, or cloud systems must be encrypted using AES-256. Encryption keys must be managed through certified services (e.g., AWS KMS, Azure Key Vault) and stored separately from encrypted data. This ensures protection even if physical storage is compromised.

### **Tokenize sensitive fields:**

Replace direct identifiers (e.g., emails, phone numbers) with tokens in non-production environments. Tokenization minimizes exposure if test systems are breached.

### **Do not store PII without legal enforcement:**

Personally Identifiable Information (PII) must not be stored unless explicitly required by law or regulation. If stored, legal justification must be documented and approved in writing. This reduces liability and ensures compliance with privacy laws.

## **Access Control & Authentication**

### **Enforce Multi-Factor Authentication (MFA):**

MFA (e.g., authenticator apps, hardware tokens) is mandatory for all accounts accessing customer data. This reduces risks from stolen passwords or compromised credentials.

### **Assign role-based access permissions:**

Grant access strictly based on job roles (e.g., "read-only" for analysts, "admin" for IT teams). Conduct quarterly reviews to revoke unused accounts. Limiting access prevents accidental or intentional misuse.

### **Automatically terminate inactive sessions:**

Sessions must timeout after 15 minutes of inactivity. Accounts unused for 6 months will be permanently disabled unless extended retention is legally required. This reduces exposure from unattended devices while accommodating legal obligations.

## **Data Handling & Storage**

### **Delete data after retention periods:**

Securely delete customer data within 6 months of contract termination using irreversible overwrite methods (e.g., NIST 800-88 standards). If legal enforcement requires extended retention, written approval and a data protection plan must be provided. This balances compliance with liability reduction.

### **Store data only in approved environments:**

Use pre-approved encrypted platforms (e.g., AWS S3, Azure Blob Storage). Storage on personal devices, unauthorized cloud services, or unsecured physical media is prohibited. This ensures data remains in controlled, auditable environments.

### **Mask sensitive data in logs/UIs:**

Partially obscure sensitive information in internal systems (e.g., display only the last 4 digits of credit cards, replace full names with initials). This protects data even during routine operations or internal reviews.

## **Network Security**

### **Isolate systems with firewalls/segmentation:**

Separate networks handling customer data using firewalls, VLANs, or software-defined segmentation. This limits attackers’ ability to move laterally during breaches.

### **Secure APIs with authentication and rate limits:**

Authenticate API calls using OAuth 2.0 or API keys. Enforce rate-limiting and monitor for abnormal usage patterns (e.g., sudden spikes in requests). This prevents unauthorized scraping or brute-force attacks.

### **Use a WAF**

Put a web application firewall product in front of your application. This will make many vulnerabilities significantly harder to find and exploit. ModSecurity is a good open-source option.  
Further reading

- [ModSecurity](https://modsecurity.org/rules.html)

### **Configure your web server carefully to avoid HTTP desync attacks**

There is an attack called "HTTP Desync" or "Request Smuggling", which could allow for an attacker to do all sorts of nasty things, such as steal HTTP requests of random users collecting to the web application, if the following conditions are true:

1. There is a frontend web server, such as a load balancer/any reverse proxy, that accepts requests with _both_, Content-Length and Transfer-Encoding headers, and passes them on without normalizing the request.
2. The next web server on the line, such as an application webserver, uses, or can be tricked to use, a different mechanism than the frontend webserver to determine where the HTTP request begins and where it ends, e.g. the frontend would use Content-Length whereas the application server would use Transfer-Encoding.
3. The front-end web server reuses the connection to the backend web server.
4. The frontend web server uses HTTP/1 (instead of HTTP/2) in the backend server connection.

So how to protect yourself? Depends on the product but in general:

1. Consult the documentation/vendor of the e.g. reverse proxy products that you are using and ensure that they are actively defending against the attack.
2. Configure the front-end webserver to use HTTP/2 in backend connections.
3. Configure the front-end webserver to prevent aggregation of HTTP requests from separate client-side TCP streams into the same server-side connection.
4. Use a WAF (Web Application Firewall) and ensure it has a module for thwarting request smuggling attempts

Further reading

- [HTTP Desync Attacks: Request Smuggling Reborn](https://portswigger.net/research/http-desync-attacks-request-smuggling-reborn)

### **Use containers**

Run your application in isolation so that in the event of a breach, the attacker will not have unnecessary access to unwanted file-, system-, or network resources. So preferably use something like Kubernetes or a serverless cloud stack for deploying your application. If you are for any reason forced to use a bare server, then manually run e.g. Docker to constrain the application.  
Further reading

- [Docker 101](https://www.docker.com/101-tutorial)

## **Contractual Obligations**

### **Adhere to Data Processing Agreements (DPAs):**

Use customer data only for agreed purposes. Marketing, reselling, or sharing data with subcontractors requires explicit written consent. This ensures compliance with privacy laws (e.g., GDPR, CCPA) and maintains trust.

### **Report breaches within 24 hours:**

Notify us immediately of any suspected breach, including details of affected data and steps taken for containment to us. Collaborate on forensic investigations and customer notifications. Prompt reporting minimizes reputational and legal risks.

### **Submit to annual penetration tests:**

Conduct third-party penetration tests annually and share results with us. Critical vulnerabilities must be remediated within 30 days. This validates your systems’ resilience against real-world attacks.

## **Continuous Security Practices**

### **Conduct continuous vulnerability scanning:**

Use industry-standard tools to identify unpatched software, misconfigurations, or exposed services. Critical vulnerabilities (CVSS score ≥7.0) must be remediated within 14 days. Proactive scanning reduces exploit risks.

### **Monitor systems in real time:**

Deploy Security Information and Event Management (SIEM) tools to flag suspicious activity (e.g., repeated failed logins, unauthorized access attempts). Retain logs for at least 12 months for forensic purposes. Rapid detection enables swift incident response.

### **Update security practices annually:**

Revise policies, tools, and training programs to address emerging threats (e.g., AI-driven phishing, zero-day exploits). Document changes and share summaries with us upon request. Cybersecurity requires ongoing adaptation to evolving risks.

## **Defending Web Application Threats**

There are a couple of threats on the end user's side that you as a developer can help mitigate. They include:

- Attacks through malicious websites/links in the user's browser.
- Attacks on the user's local network.
- Attacks where someone accesses a shared device before or after the user. For instance, if user data remains stored in the browser cache, other computer users could retrieve it later on.

Let's start our checklist with countermeasures for these threats.

### **Use HTTPS and only HTTPS to protect your users from network attacks**

This one you probably already knew. Encrypt **all** connections between your user's web browser and your web server. It doesn't hurt also to disable some of the older cipher suites and protocols.  
It is **not** enough to encrypt the "sensitive" portions of a website. An attacker can intercept a single unencrypted HTTP request and then forge a response from the server with malicious content in it.  
HTTPS, which stands for Hypertext Transfer Protocol Secure, is a more secure extension of the standard HTTP protocol. HTTPS establishes an encrypted connection between a web server and a client's browser using Transport Layer Security (TLS) or its predecessor, Secure Sockets Layer (SSL).  
By using the HTTPS protocol, you can ensure that your applications are being accessed securely. Part of this is done by restricting access to your application through HTTP and only allowing access through HTTPS. If there is an issue with an HTTPS connection, many browsers will let the user know that the site may not be secure, which helps to inform users to be cautious or even avoid the site until the security issue is fixed.  
By implementing HTTPS and proper certificate management, you can protect data in transit from man-in-the-middle attacks and interceptions. These types of attacks are easily executed over unsecure connections and networks and can be limited by using HTTPS. Many hosting solutions make it easy to deploy and maintain your applications with secure connections using the principles mentioned above.  
Luckily HTTPS is effortless these days. You can get both the certificate (LetsEncrypt) and automatic certificate creation/management (CertBot) free of charge.  
Further reading

- [SSL/TLS Best Practices for 2021](https://www.ssl.com/guide/ssl-best-practices/)
- [LetsEncrypt](https://letsencrypt.org/)
- [CertBot](https://certbot.eff.org/)

### **Use HSTS and preloading to protect your users from SSL stripping attacks**

[HSTS](http://docs.google.com/blog/hsts) or Strict-Transport-Security is a header that your server can use to enforce encrypted connections. It says, _from here on, always use an encrypted connection (HTTPS) connecting to my domain_.  
HSTS will prevent so-called _SSL stripping_ attacks where an attacker on the network intercepts the very first HTTP request made by a browser (which is often unencrypted) and forges a reply to that unencrypted HTTP request right away, pretending to be the server and downgrading the connection to intercepted plaintext HTTP from then on.  
One caveat is that HSTS will only protect an application if the user has already successfully visited it before. To overcome this limitation, you should submit your site to \[https://hstspreload.org\] ([https://hstspreload.org](https://hstspreload.org)) so browser vendors can hardcode your domain to the HSTS list.

#### **Example**

Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

#### **Warning**

Be mindful when implementing HSTS. It _will_ force encrypted traffic to your website, and if you still have plain text, your website could break. So start with a small max-age and ramp it up once you're confident that everything still functions properly. And leave preloading as the last step because it's painful to cancel.  
Further reading

- [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [hstspreload.org](https://hstspreload.org)
- [sslstrip](https://tools.kali.org/information-gathering/sslstrip)

### **Serve cookies with the 'Secure' attribute to protect your user from network attacks**

Configure your cookies with the Secure attribute. This attribute will prevent them from being leaked over an (accidental or forced) unencrypted connection.  
Set-Cookie: foo=bar; ...other options... Secure

Further reading

- [Secure Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies)

### **Generate HTML safely to avoid XSS vulnerabilities**

To avoid XSS (Cross-Site Scripting) vulnerabilities, use one of the following:

1. Completely static websites (e.g., JavaScript SPA \+ backend API). The most effective way to avoid problems with generating HTML is not to generate HTML at all. Try NexJS, perhaps. It's pretty cool.
2. A template engine. Suppose you have a traditional web application where HTML is generated and parameterized on the backend server. In that case, **do not** craft HTML through string concatenation. Instead, use a template engine such as Twig for PHP, Thymeleaf for Java, Jinja2 for Python, and so on.

If you use a template engine, ensure it's configured correctly to automatically encode parameters properly, and don't use any "insecure" functions that bypass the automatic encoding. And don't put HTML in dangerous places like event handler code, unquoted attributes, or href/src.  
Further reading

- [XSS Attacks & Prevention](https://portswigger.net/web-security/cross-site-scripting)
- [Twig](https://github.com/twigphp/Twig)
- [Thymeleaf](https://www.thymeleaf.org/)
- [Jinja2](https://jinja2docs.readthedocs.io/en/stable/)

### **Use JavaScript safely to avoid XSS vulnerabilities**

To avoid XSS (Cross-Site Scripting) vulnerabilities on the JavaScript side, don't pass any untrusted data into functions or properties that could end up executing code. You have to use common sense here but some of the usual suspects are:

- eval, setTimeout, setInterval, etc.
- innerHTML, React's dangerouslySetInnerHTML, etc.
- onClick, onMouseEnter, onError, etc.
- href, src, etc.
- location, location.href, etc.

Further reading

- [XSS Attacks & Prevention](http://docs.google.com/blog/xss-attack-and-prevention)
- [DOM-based XSS](https://portswigger.net/web-security/cross-site-scripting/dom-based)

### **Sanitize and sandbox untrusted content to avoid XSS and other vulnerabilities**

It's best to avoid untrusted content. But sometimes, you have to retrieve raw HTML from, e.g., a remote source and then render it on your website. Or maybe you have to allow your users to write posts with a WYSIWYG editor. There are many use cases.  
To avoid XSS (Cross-Site Scripting) vulnerabilities in these scenarios, sanitize the content first with DOMPurify and then render it inside a sandboxed frame.  
Even if your WYSIWYG library claims to remove evilness from the HTML, you can break this trust relationship ("I trust my WYSIWYG library to sanitize the content") by re-purifying and sandboxing the content nevertheless. The more trust relationships you break, the more secure your application gets.  
There is another common use-case, you want to display e.g. ads on the page. In this case using an IFRAME is **not enough** because the same-origin-policy for some reason allows cross-origin frames to change the URL of the parent frame (your website) to e.g. a phishing site. Always use the sandbox iframe attribute in these cases to prevent this.  
Further reading

- [XSS Attacks & Prevention](http://docs.google.com/blog/xss-attack-and-prevention)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [Sandboxed Frames](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox)

### **Implement an effective Content Security Policy to protect your users from XSS, xsleak and other vulnerabilities**

A [Content Security Policy (CSP)](http://docs.google.com/blog/content-security-policy-header) serves as excellent protection against XSS (Cross-Site Scripting) attacks. It also protects against clickjacking attacks, among other things.  
So make sure to use it\! CSP, by default, prevents pretty much everything, so the fewer things you put in it, the better. For example, the following is a good policy to start with:  
Content-Security-Policy: default-src 'self'; form-action 'self'; object-src 'none'

It allows loading scripts, styles, images, fonts, etc., from the web application's origin but nothing else. Most notably, it will prevent inline scripts (\<script\>...\</script\>), which makes exploiting XSS vulnerabilities difficult.  
Additionally, the form-action: 'self' directive prevents creating malicious HTML forms on the website (think "Your session has expired, please enter your password here") and submitting them to the attacker's server.  
Whatever you do, do not specify **script-src: unsafe-inline** because then your CSP will lose its mojo.  
And finally, if you have concerns about CSP breaking something in production, you can first deploy in Report-Only mode:  
Content-Security-Policy-Report-Only: default-src 'self'; form-action 'self'

Further reading

- [XSS Attacks & Prevention](https://portswigger.net/web-security/cross-site-scripting)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Clickjacking Attacks](http://docs.google.com/blog/clickjacking)
- [XS-Leaks](http://docs.google.com/blog/xs-leaks)
- [XS-Leaks Wiki](https://xsleaks.dev/)

### **Serve cookies with the HttpOnly attribute to protect them from XSS attacks**

Configure your cookies with the HttpOnly attribute. This attribute will prevent them from being accessed by JavaScript code. And this makes them more challenging for an attacker to steal in the event of a successful XSS (Cross-Site Scripting) attack. Of course, you cannot do this for the cookies that need to be accessed by JavaScript.  
Set-Cookie: foo=bar; ...other options... HttpOnly

Further reading

- [XSS Attacks & Prevention](https://portswigger.net/web-security/cross-site-scripting)
- [HttpOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies)

### **Serve downloads with a proper Content-Disposition header to avoid XSS vulnerabilities**

To avoid XSS (Cross-Site Scripting) vulnerabilities when serving downloads to your users, send them with a [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) header that indicates an attachment. This way, the file won't render in the end user's browser directly, resulting in an XSS vulnerability in the case of, e.g., HTML or SVG files.  
Content-Disposition: attachment; filename="document.pdf"

Suppose you _want_ some specific files to open in the browser (like perhaps PDF documents for usability reasons), and you know that it's safe to do so. In that case, you can omit the header or change attachment to inline for that particular file extension/extensions.  
Further reading

- [XSS Attacks & Prevention](http://docs.google.com/blog/xss-attack-and-prevention)
- [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)

### **Serve API responses with a proper Content-Disposition header to avoid reflected download vulnerabilities**

An attack called reflected file download (RFD) works by crafting a URL that downloads as a malicious file extension from your API, reflecting a malicious payload inside it.  
You can prevent this attack by returning a Content-Disposition header with a safe filename in your API HTTP responses.  
Content-Disposition: attachment; filename="api.json"

Further reading

- [Reflected File Download](https://medium.com/@Johne_Jacob/rfd-reflected-file-download-what-how-6d0e6fdbe331)
- [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)

### **Use your platform's anti-CSRF mechanism to avoid CSRF vulnerabilities**

To protect against [Cross-Site Request Forgery](https://owasp.org/www-community/attacks/csrf) (CSRF) vulnerabilities, ensure that your platform's anti-CSRF mechanism is enabled and working as intended.  
Further reading

- [CSRF Attacks & Prevention](https://www.guardrails.io/blog/what-is-csrf-and-how-do-you-prevent-it/)

### **Validate the OAuth/OIDC state parameter to avoid CSRF vulnerabilities**

There is a CSRF attack related to OAuth/OIDC where the attacker unwittingly logs the user in with the attacker's account. If you are using OAuth/OIDC, make sure that your library is validating the state parameter.  
Further reading

- [state CSRF in OAuth threat model](https://tools.ietf.org/html/rfc6819#section-4.4.2.5)

### **Use HTTP verbs properly to avoid CSRF vulnerabilities**

Never use anything except for POST, PUT, PATCH or DELETE for making _any_ changes. GET requests, for example, are usually not covered by anti-CSRF mechanisms.  
Further reading

- [CSRF Attacks & Prevention](https://www.guardrails.io/blog/what-is-csrf-and-how-do-you-prevent-it/)

### **Serve cookies with the SameSite attribute to protect your users from CSRF vulnerabilities, xsleaks and sometimes XSS as well**

Configure your cookies with the [SameSite](https://owasp.org/www-community/SameSite) attribute. SameSite will prevent most [CSRF](https://www.guardrails.io/blog/what-is-csrf-and-how-do-you-prevent-it/) (Cross-Site Request Forgery) attacks, where a malicious website submits e.g., a form on behalf of your unwitting user.  
There are two modes, Lax and Strict.  
The Lax mode is just fine for preventing most cross-site timing and CSRF attacks, except GET-based CSRF vulnerabilities where you make the mistake of making changes (e.g., modifying some database record) in a GET request handler. The Strict mode prevents that sort of blunders from being exploited as well.  
However, the Strict mode has another powerful side effect; it makes reflected XSS (Cross-Site Scripting) vulnerabilities practically impossible to exploit as well.  
The Strict mode is not well suited for most applications because it breaks authenticated links. If your user is logged in and opens a link on another website to the application, then the tab/window that opens will not be logged in for the user. The session cookie doesn't tag along with the request due to the strict mode.  
But at least implement SameSite in Lax mode, there's no harm in doing so, and it serves as an excellent safeguard against CSRF and cross-site timing attacks.  
Set-Cookie: foo=bar; ...other options... SameSite=Lax

...or:  
Set-Cookie: foo=bar; ...other options... SameSite=Strict

Further reading

- [CSRF Attacks & Prevention](https://www.guardrails.io/blog/what-is-csrf-and-how-do-you-prevent-it/)
- [SameSite cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
- [XS-Leaks Wiki](https://xsleaks.dev/)

### **Create a fresh session ID on login to protect against session fixation attacks**

Next on our checklist is session fixation attacks. Here is how they might work:

1. An attacker injects a cookie, say, JSESSIONID=ABC123 into your user's browser. There are many ways the attacker can go about this.
2. Your user logs in with their credentials, submitting the attacker's chosen JSESSIONID=ABC123 cookie in the login request.
3. Your application authenticates the cookie, and the user is authenticated from that point onwards.
4. **The attacker who also has the cookie is also logged on as the user from that point onwards**.

To prevent this, create a new, authenticated session ID and return it to the user instead of authenticating the existing cookie that might be compromised.  
Further reading

- [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation)

### **Name your cookies right to protect against session fixation attacks**

You didn't expect to find cookie naming in an application security checklist, did you? This is not very widely known, but when it comes to cookies, name matters\! Name your cookies \_\_Host-Something and web browsers will...

1. Not allow for the cookie to be set over an unencrypted connection which protects against session fixation attacks and other threats related to an attacker forcing a cookie into the user's browser.
2. Not allow for subdomains to overwrite the cookie, which protects against similar attacks from compromised/malicious subdomains.

Set-Cookie: \_\_Host-foo=bar ...options...

Further reading

- [Cookie Prefixes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes)
- [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation)

### **Serve proper Cache-Control headers to protect your user's data from subsequent computer users**

By default, web browsers cache everything they see to speed up page loads and save network bandwidth.  
Caching is a synonym for _storing visited websites and downloaded files on disk unencrypted until someone manually deletes them_.  
The users of your application should be able to trust that once they log out, they are logged out, and they can safely leave the (e.g., library) computer.  
For this reason, there is a header called Cache-Control which you should return appropriately in all HTTP responses that contain non-public/non-static content.  
Cache-Control: no-store, max-age=0

Further reading [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

### **Serve a Clear-Site-Data header upon log out to protect your user's data from subsequent computer users**

Another useful header for ensuring that user data gets cleared upon logout is the new Clear-Site-Data header. You can send it in an HTTP response when the user logs out. The browser will clear the cache, cookies, storage, and execution contexts (this is not yet implemented at the time of this writing) for the domain. Most browsers support it; Safari notably still doesn't.  
You can send it as follows:  
Clear-Site-Data: '\*'

Further reading [Clear-Site-Data](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data)

### **Log your users out properly to protect their data from subsequent computer users**

Ensure that logging out invalidates the access token/session identifier. It should no longer be usable if it later leaks to an attacker from browsing history/cache/memory/etc.  
Additionally, if there is an SSO, don't forget to call the single logout endpoint correctly. Otherwise, logging out would be in vain since merely clicking the "log in" button would automatically log the user back as the SSO session is still active.  
Finally, clear any cookies, HTML5 storage, etc., that you might have used. The Clear-Site-Data mentioned above is not yet supported by, e.g., Safari, so you will have to clear the data manually as well.

### **Use SessionStorage for JavaScript secrets to protect your user's data from subsequent computer users**

It's like LocalStorage but unique for each tab and clears after the browser/tab is closed. So there's a chance of user data leaking to the next computer user.  
**Note** If you want to have your user authenticated in multiple tabs of your application without logging in again, you will have to use events to sync the sessionStorage between the tabs.  
Further reading [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

### **Don't transmit sensitive data in the URL because URLs are not designed to be secret**

URL addresses are not designed to be secret. They are, for example, displayed on the screen, saved to browsing history, leaked with referrer-headers, and saved on server logs. So don't put secrets in there.

### **Use a referrer policy to prevent URL addresses from leaking to other websites**

Next on our checklist: referrer policies. By default, when you link to a website from your application, and a user clicks the link, web browsers will send a Referrer header to tell the website which website is linked to it. This header includes the entire URL, which can be a privacy issue at the least.  
You can disable this behavior by specifying a Referrer-Policy header in your HTTP responses:  
Referrer-Policy: no-referrer

Further reading

- [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)

### **Use a unique domain name for your application to protect it from other applications under the same origin (and vice versa)**

It is dangerous to host applications like this: https://www.example.com/app1/ and https://www.example.com/app2/. Browsers consider both of them to be of the same origin, that is, same host, port, and scheme. And being of the same origin, they will have full access to each other. Any vulnerabilities/malicious content affecting app1 will also put app2 in danger.  
For this reason, give each application an origin of their own. So the solution could be https://app1.example.com/ and https://app2.example.com/.  
**Note** Subdomains that share a parent can still _set_ cookies for the entire domain. For example, app1.example.com can set a cookie on example.com which will then also be sent to app2.example.com. Being able to set cookies for a website will sometimes make attacks such as session fixation possible.  
And if you are now wondering if all applications under _.herokuapp.com are vulnerable, the answer is no because of the public suffix list. Also, you can protect cookies from getting overwritten by subdomains by naming your cookies \`\_\_Host-_\`.  
Further reading

- [Same Origin Policy](https://web.dev/articles/same-origin-policy)
- [Cookie Prefixes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes)
- [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation)
- [Public Suffix List](https://publicsuffix.org/learn/)

### **Don't use CORS unless you have to, and if you have to, be careful with it**

The web browser's security model is largely based on the [Same Origin Policy](https://web.dev/articles/same-origin-policy) which prevents evil.example.com from reading your emails but still allows you to use jQuery from code.jquery.com. CORS or [Cross Origin Resource Sharing](https://www.appsecmonkey.com/blog/cors/) is a means by which you can allow another website to violate that policy.  
So if you decide that you need it, make sure you know what you are doing.  
Further reading

- [Cross-Origin Resource Sharing](https://www.appsecmonkey.com/blog/cors/)

#### **Validate the origin**

If you have api.example.com that needs to be accessed by GET requests from www.example.com then you can specify the following header on api.example.com:  
Access-Control-Allow-Origin: https://www.example.com

If you have a public API (let's say a calculator that you want the entire Internet to use from client-side JavaScript), then you can specify a wildcard origin:  
Access-Control-Allow-Origin: \*

If you have multiple domains that you want to allow but not all (say you want to allow only Google and Facebook to access your API) then you will have to read the Origin header from the request, compare it to a list of allowed domains and then return a header as appropriate. It is recommended to use a well-vetted library for this instead of messing with the headers manually because a lot could go wrong.

#### **Be mindful about the "allow credentials" option**

CORS, by default, does not allow _credentialed_ requests, that is, requests that carry the user's (session) cookies. But this can be allowed by the web server by specifying headers such as:  
Access-Control-Allow-Origin: https://www.example.com  
Access-Control-Allow-Credentials: true

This set of CORS headers is dangerous as it would allow https://www.example.com to fully access the website that specified the header just as the logged-in user would. So if you have to use it, be very careful.

#### **Validate the method**

It's a good practice to minimize the attack surface and only allow the HTTP methods you need.  
Access-Control-Allow-Methods: GET

#### **Note**

If you don't need CORS, then don't use it. By default, it's disabled.  
Further reading

- [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Same Origin Policy](https://web.dev/articles/same-origin-policy)

### **Use WebSockets properly to avoid CSRF and other vulnerabilities**

Next on the checklist: WebSockets. WebSockets are still pretty new, a bit scarcely documented, and there are dangers involved when using them. So read the following carefully.

#### **1\. Encrypt the connection**

Just like you should use https:// instead of http://, use wss:// instead of ws:///.  
HSTS also affects WebSockets and will automatically upgrade unencrypted WebSocket connections to wss://\! Hail HSTS.

#### **2\. Authenticate the connection**

If you use cookie-based authentication and the WebSocket server is on the same domain as the application, you can keep using the existing session for the WebSocket connection. **Just heed the next section about origin validation, or you will be screwed**.  
If not, you could create a ticket in the application, that is, a single-use, time-limited authentication token bound to the user's IP address that can authenticate the WebSocket connection.

#### **3\. Verify the origin of the connection**

A crucial thing to understand about WebSockets is that the Same Origin Policy does not bind them. Any website out there can open a WebSocket connection to your application, and if you use cookie-based authentication, access the logged-in user's information.  
For this reason, you must verify the origin of the connection in the WebSocket handshake. You can do this by validating the Origin request header.  
If you want double security, throw in a CSRF token as a URL parameter. But create a single-use unique token for the job, do not use the CSRF token that you use to secure the rest of the application (because sending something in the URL can leak in many places).  
Further reading

- [WebSockets Specification (check section 10\)](https://datatracker.ietf.org/doc/rfc6455/?include_text=1)

### **Implement protections against cross-site leaks**

XS-Leaks (or Cross-Site Leaks) are a [set of browser side-channel attacks](https://xsleaks.dev/). They enable malicious websites to infer data from the users of other web applications.  
The attacks have been there for a long time, but browsers have only recently started adding new mechanisms to prevent them. Defending Threats On Server Side \- Application

### **Validate input properly to protect your application from so, so many vulnerabilities**

One of the most critical things on this checklist: Validate all input as strictly as you can. Proper validation will make many vulnerabilities challenging to find and exploit. Reject invalid input, do not sanitize it.

- Use restrictive data types. DateTime for dates, Integer for numbers, and so on. Use Enums for lists of possible values. Avoid using String when you can.
- When you do have to use String, put a length limit to it if you can.
- When you do have to use String, restrict the character set to the minimum.
- If you process JSON, use a JSON schema.
- If you process XML, use an XML schema.

### **Catch exceptions gracefully to avoid leaking technical details**

Never show stack traces or similar debugging information to end-users. Have a global exception handler ready that catches otherwise unhandled exceptions and displays a generic error message to the browser. This will make it more difficult for an attacker to find and exploit vulnerabilities in your application.

### **Don't do authentication yourself**

- User Divar Authentication

### **Use strict access controls to prevent unauthorized access to data or functionality**

Access control is not always easy, but you can do it right. Just be centralized about it to not end up with an IDOR (Insecure Direct Object Reference) vulnerability because you forgot to check the user's access in some individual controller function.

- Prevent access to all controller methods (or equivalent) by default.
- Allow access to individual controllers by role.
- Use method level security also to restrict access to e.g. service functions.
- Use a centralized permission evaluator to prevent unauthorized access to individual records.
- Use a centralized permission evaluator to filter objects returned to the client.
- Use an architecture with, e.g., a frontend web app and a backend API, then implement the same access controls in every app/API, not just the Internet-facing parts.

To clarify the permission evaluator approach a little bit, here's the crux of it:

- Your data records extend a class that has some property that you use for access control. For example, int ownerId.
- Your authenticated user has an ID.
- You have a permission evaluator class, which knows that users can access objects if the object's ownerId equals the user's id.
- You then plug that permission evaluator into your application platform's access control system.
- If you need more complex access control than ownerId or similar, then you can setup (for example) a complete ACL system.

To ensure proper authorization, consider the following:

- Role-Based Access Control (RBAC): Implement a role-based access control system that assigns roles to users and specifies what actions each role is allowed to perform.
- Least Privilege Principle: Users should have the minimum level of access required to perform their tasks, reducing the risk of unauthorized actions.
- Session Management: Use secure session management to ensure that users are only authorized during their active sessions.
- Audit Trails: Maintain audit logs to track and review authorization activities, enabling the detection of suspicious or unauthorized access.

Further reading

- [Insecure Direct Object References](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html)
- [Deny access by default (Spring Security))](https://www.baeldung.com/spring-deny-access)
- [PreAuthorize & PostAuthorize (Spring Security)](https://www.baeldung.com/spring-security-method-security#3-using-preauthorize-and-postauthorize-annotations)
- [PreFilter & PostFilter (Spring Security)](https://www.baeldung.com/spring-security-prefilter-postfilter#writing-security-rules)

### **Use proper tools and techniques to avoid injection vulnerabilities**

Multiple vulnerabilities fall under the category "injection", and they're all alike. These include SQL injection, HTML injection (a form of XSS), XML injection, XPath injection, command injection, template injection, SMTP injection, response header injection... there are so many "different" vulnerabilities that are, in reality, the same issue with the same remedy:

- Issue: Using string concatenation/formatting to construct a parameterized message of protocol X.
- Solution: Use a proper, well (security) tested software library for the job and use it properly.

We won't go through each of the injection vulnerabilities in this article since the list would be infinite, so just remember this rule whatever protocol you're constructing. We'll cover some of the more prevalent/interesting ones, such as SQL injection, next on our checklist.

### **Construct database queries safely to avoid SQL injection vulnerabilities**

To avoid SQL Injection vulnerabilities, never construct SQL queries by string concatenation. Use an ORM (Object Relational Mapper) if you can. An ORM will make development quicker and the application more secure.  
If you want to have granular control over your queries, use a low-level ORM (often referred to as a query builder).  
If you cannot use an ORM, then go for prepared statements, but be careful as they are far more prone to human error than an ORM.

#### **Warning**

ORM frameworks are not a silver bullet in two senses.  
First is that they still have functionality for supporting raw SQL queries/parts of queries. Just don't use those features, and you're golden.  
The second is that ORM frameworks have vulnerabilities from time to time, just like any other software package. So follow other good practices: validate all input, use a WAF and keep your packages up to date, and you're good to go.  
Further reading

- [SQL Injection Attacks & Prevention](https://www.indusface.com/blog/how-to-stop-sql-injection/)

### **Do not run OS commands**

If you can avoid it, don't execute OS commands at all. It's always a bit dodgy.  
If you have to do it, you can avoid command injection vulnerabilities and related issues by following these guidelines:

- Use a proper library/function to construct and parameterize the command. The parameters should be of the list data type. Never create the command as a single string.
- Do not use a shell to invoke the command.
- Predetermine the parameters that you feed into the command. Using curl as an example, by allowing the user to specify the \-o parameter, you would allow the attacker to write to the local filesystem.
- Understand what the program does and validate the parameters appropriately. Again using curl as the example, you might want to allow the user to retrieve websites such as https://www.appsecmonkey.com/ but what if the attacker retrieves file:///etc/passwd instead?
- Think through. Even if you validate that the parameter starts with http:// or https://, would you like for the attacker to access http://192.168.0.1/internal\_sensitive\_service/admin or do a port scan of the internal network?
- **Really** think through. Even if you validate that the parameter is a valid DNS hostname that doesn't contain e.g. yourcompany.local, is there anything preventing the attacker from creating a public DNS record that points www.example.com to 192.168.0.1? The answer is... no. It can be done.

Further reading

- [Command Injection](https://owasp.org/www-community/attacks/Command_Injection)

### **Avoid XML vulnerabilities by configuring your parsers properly**

XML is a dangerous markup language that contains features for accessing system resources. Some implementations of XSLT even support embedded code. For this reason, you must be extremely cautious when processing it.

1. Avoid accepting XML/XSLT from untrusted sources if you can.
2. If you parameterize XML, XSLT, or XPath expressions, use a proper software component for doing so. This is to avoid injection vulnerabilities. Don't use string concatenation/formatting/etc.
3. Use a well-known and thoroughly (security) tested software component for parsing XML/XSLT. This is crucial. **Do not** use a bad library or your code for handling XML. Furthermore, under any circumstances, do not attempt to create a custom implementation for handling XML signatures (such as SAML), because there are so many things that can go wrong.
4. Configure your parser properly. Disable document for XSLT. Disable xinclude. Disable document type definitions. Disable external entities. Enable DOS protection. The specific options will vary on the implementation, do some research on your chosen parser.

Further reading

- [XXE Attacks & Prevention](https://portswigger.net/web-security/xxe)
- [Hunting XXE For Fun And Profit](https://www.bugcrowd.com/blog/advice-from-a-bug-hunter-xxe/)
- [WS Attacks](https://www.ws-attacks.org/Web_Service_Attacks_By_Category)

### **Avoid URL injection vulnerabilities by using proper class for URL construction**

URL injections happen when you have something like this:  
flavour \= request.getParam("flavour");  
url \= "https:/api.local/pizzas/" \+ flavour \+ "/";  
return get(url).json();

And someone enters a value like this:  
../admin/all-the-sensitive-things/

This results in the API call returning a response for https://api.local/admin/all-the-sensitive-things/ instead of the pizza endpoint like the developer intended.  
And the solution, as always, is to use a proper URL construction library to parameterize the URL so that the values get properly encoded.

### **Avoid path traversal vulnerabilities by using a proper class to construct the paths**

Just like URL addresses, file paths can also end up pointing to unwanted locations if an attacker manages to sneak a ../../../ sequence somewhere in the path. To avoid this, create a class that constructs the path safely and validates that the final path is in the intended directory. Avoid using untrusted data in the file path, or better yet, avoid using the filesystem altogether and prefer, e.g., cloud storage instead.  
Further reading

- [Path Traversal Attacks](https://owasp.org/www-community/attacks/Path_Traversal)

### **Don't use the filesystem for untrusted content (e.g., uploads) if you can avoid it**

There is an infinite list of things that can go wrong when allowing your users to write the server's filesystem. Use cloud storage instead, or if that doesn't work for you, use binary blobs in a database.  
If you absolutely must access the disk, these guidelines could help you be safe:

1. Be very careful not to allow any untrusted data to affect any part of the internal file path.
2. Keep the files in an isolated directory far from, e.g. the webroot.
3. Validate that the file contents match the expected format before writing to disk.
4. Set your filesystem permissions properly to prevent writing to unwanted locations.
5. Don't extract compressed (e.g., ZIP) archives, as they can contain any files, including symlinks and paths to anywhere on the system.

### **Don't execute dynamic code to avoid remote code execution vulnerabilities**

Don't use eval or equivalent functions. Find a way to achieve your goals without them. Otherwise, there will be a risk that untrusted data reaches the function call, and someone will execute arbitrary code on your server.

### **Use serialization carefully to avoid deserialization vulnerabilities**

Deserialization of untrusted data is a dangerous operation and can easily lead to remote code execution.

1. Don't use serialization if you can avoid it.
2. If you can serialize the objects on the server-side, then sign them digitally. And when it's time to deserialize them again, validate the signature before proceeding with deserialization.
3. Use a well-known software component for the job and keep it rigorously up to date. Vulnerabilities are discovered in many deserialization libraries all the time. [GSon](https://github.com/google/gson) is not a bad choice.
4. Use a simple text format such as JSON instead of binary formats. Also, problematic formats like XML should be avoided because then you have XML vulnerabilities to worry about in addition to deserialization ones.
5. Validate the serialized object before processing it. For example in the case of JSON, validate the JSON document against a strict JSON schema before proceeding with deserialization.

Further reading

- [OWASP deserialization cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html)

## **Defending Threats On Server Side \- Architecture**

### **Create an internal API for accessing data sources to get rid of dangerous trust boundaries**

You shouldn't put too much trust in your Internet-facing web application. For example, it shouldn't have direct access to a database. Otherwise, when someone breaks into the Internet-facing application, your entire database will be lost.  
Instead, separate your architecture into multiple components, for example:

- Your web application on www.example.com will authenticate your users on auth0.
- Your web application on www.example.com is allowed to connect to the internal API api.example.local with the authenticated user's access-token (obtained from auth0) which will then be passed as the Authorization header when making calls to the internal API.
- Your API on api.example.local will enforce access controls based on the (end user's) access token and read/write the database appropriately.

Now if an attacker fully compromises your www.example.com application, the attacker will not have full access to the entire database, but only individual user's data whose access tokens happen to be in the memory at the time.

### **Encrypt and authenticate all connections**

Do not trust your internal network to be secure; there are many ways in which it could be compromised. Encrypt all system-to-system connections with TLS (that is, use HTTPS) and authenticate the connections preferably on both network and application-level:

1. **Web App \-\>** API: _This is my client certificate. It's signed by the CA that we trust, and it says "CN=WebApp"._
2. Web App **\<- API**: _And this is my server certificate. It's signed by the CA that we trust, and it says "CN=API"_
3. **Web App \-\>** API: _This is my access token that is signed by the IDP that we trust, I got it with OAuth2 client credentials grant flow._
4. **Web App \-\>** API: _...and this is the access token of the logged-in user "John Doe" on whose behalf I'm making this request that was also signed by the IDP that we trust._
5. **Web App \-\>** API: _...so could you give me John Doe's information, please?_
6. Web App **\<- API**: _Gladly. Since this is an encrypted and mutually authenticated connection network level, and because you seem to be "Web App" on the application level, and because you seem to be operating with the permissions of "John Doe"._

### **Manage secrets centrally**

Without a proper secrets management solution, it is not easy to keep credentials short-lived, audit-logged, and not to expose them to human eyes. For this reason (and many others) it is recommended to use a tool such as the HashiCorp vault to centrally manage integration secrets, encryption keys, and the like.  
Further reading

- [HashiCorp Vault](https://www.vaultproject.io/)

## **Secure Development Considerations**

### **Threat model**

Go through a process of thinking "what could go wrong" and then do something about it. Preferably do this from the get-go when you start designing a system, but it's never too late to begin, and at any rate, you should re-visit this process when you introduce changes into the system.  
For example:  
Jim: What if an attacker breaches the Internet-facing web server?  
Bob: Well then we'd be royally screwed.  
Jim: Okay so we have a trust relationship there, we trust that the Internet facing web server will not be pwned. Can we really trust that?  
Bob: Well no, there are a gazillion things that could result in that thing getting hacked, for example vulnerabilities in our own code, or vulnerabilities in a dependency that we use, or perhaps vulnerabilities in our web server software.  
Jim: Right. So let's break that trust relationship. But how?  
Bob: Let's break the monolith and create an internal API that does the actual database access. Then the frontend web server will not have access to everything at once.  
Jim: Great idea. So what else could go wrong?  
Bob: Well what if an attacker breaches our internal network?  
Jim: All would be lost, the server-to-server connections are all unencrypted.  
Bob: ...  
This is threat modeling and it doesn't have to be complex or scary. Use it to discover dangerous trust relationships and then break those relationships.

### **Force peer review in source control**

Implement a technical control that prevents code from entering the repository without at least one or two other developers approving it. This is the basis of your secure development lifecycle because now two things happen:

1. If an attacker compromises the workstation of a developer or the developer goes rogue, it will not be possible to directly push malicious code into the repository.
2. If a developer makes a mistake and tries to introduce vulnerable code into the repository, there is a good chance that the other developers reviewing the code will catch the error before it gets merged.

Further reading

- [GitLab \- Required Approvals](https://docs.gitlab.com/ee/user/project/merge_requests/merge_request_approvals.html#required-approvals)
- [BitBucket \- Checks for merging pull requests](https://confluence.atlassian.com/bitbucketserver/checks-for-merging-pull-requests-776640039.html)
- [Azure DevOps \- Improve code quality with branch policies](https://docs.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops)

### **Automate the CI pipeline and restrict mere mortal access to it**

Individual developers should be able to trigger e.g. a Jenkins build, but Jenkins should be configured to allow that and nothing else. Individual developers should not be able to introduce arbitrary code into the build phase. You can however keep the Jenkinsfile in source control as long as the peer review process is technically forced like recommended above.

### **Run a static application security scanner as part of the CI pipeline**

Run a tool such as SpotBugs \+ FindSecBugs (or a similar tool applicable to your technology of choice) in your CI pipeline. This will help you spot some known vulnerabilities in your code before deploying it.  
You can additionally run these tools on the developer's workstation (as an IDE plugin for example) to catch issues even before checking them to version control.  
Further reading

- [SpotBugs](https://spotbugs.github.io/)
- [Find-Sec-Bugs](https://find-sec-bugs.github.io/)

### **Verify dependencies on build and keep them at a minimum**

Every software package that you depend on is a risk. You are pulling code from someone else's repository and executing it on your application server. So be mindful about what and how you depend on it.

1. Keep the dependencies at a minimum.
2. Only use dependencies that you trust. They should all be widely used and reputable.
3. Use a build framework that supports dependency verification, and make sure the verification is enabled.

As additional hardening restricts egress connections from your application server (described earlier in this article) to prevent any backdoors from "calling home".  
Further reading

- [Gradle Dependency Verification](https://docs.gradle.org/current/userguide/dependency_verification.html)

### **Run a dependency security scanner as part of the CI pipeline**

Run a tool such as OWASP DependencyCheck as part of your CI pipeline to catch some dependencies you might be using that have known security issues in them.  
You run these tools on the developer's workstation as well (but also run them in the CI pipeline that's the most important thing).  
Further reading

- [OWASP DependencyCheck](https://owasp.org/www-project-dependency-check/)

### **Run a container image security scanner as part of the CI pipeline**

If you use containers, use a tool such as Trivy to scan the created container image for known vulnerabilities.  
Further reading

- [Trivy](https://github.com/aquasecurity/trivy)

[image1]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAApJREFUeF5jYAAAAAIAAd6ej78AAAAASUVORK5CYII=

</div>
