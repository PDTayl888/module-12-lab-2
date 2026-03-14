Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
=============================================
It was important to re format so you only get what data you need 



In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
============================================
So sensitive data doesn't get in to the wrong hands.

How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
============================================

I could put a drop down menu to choose different languages and set the value of the language variable accordingly.