
# 400 Bad Request

The request cannot be fulfilled due to **bad syntax**.

# 401 Unauthorized

Similar to 403 Forbidden, but specifically for use when **authentication is possible** but has failed or not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.

# 402 Payment Required

**Reserved** for future use. The original intention was that this code might be used as part of some form of **digital cash or micropayment scheme**, but that has not happened, and this code is not usually used. As an example of its use, however, Apple's MobileMe service generates a 402 error ("httpStatusCode:402" in the Mac OS X Console log) if the MobileMe account is delinquent.

# 403 Forbidden

The request was a legal request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.

# 404 Not Found

The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.

# 405 Method Not Allowed

A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.

# 406 Not Acceptable

The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.

# 407 Proxy Authentication Required

The client must first authenticate itself with the proxy.

# 408 Request Timeout

The server timed out waiting for the request. According to W3 HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."

# 409 Conflict

Indicates that the request could not be processed because of conflict in the request, such as an edit conflict.

# 410 Gone

Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.

# 411 Length Required

The request did not specify the length of its content, which is required by the requested resource.

