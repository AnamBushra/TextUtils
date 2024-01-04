Web Fundamentals

1.	What is Internet?
Internet is connection of multiple devices (billions of devices). It is Interconnected Network.
Web V/S Internet – 
Web is a subset of internet. Internet can be said as a service over which we can access the web. Now what is web? Web is basically collection of all the websites available over the internet such as the websites we access everyday like quora, facebook etc.
Other internet services which don’t include web are –  1. FTP (file downloading and uplaoding) 2. SMTP (mail services) etc.

2.	What is Server?
A computer which has some resources to perform certain tasks and the clients can access these resources by making requests to the server via the internet.

Our local devices can also act like server but will not be a good choice because a server must be powerful enough to handle multiple requests at the same time. If not, the requests go to the queue and the client page will keep loading until its request has been processed.

Requirements for a system to act as a server – 
•	Server Grade Processors
•	EER Ram ie., self-fixing or which can solve the issues automatically
•	Big Cache Memory
•	Backup Hard-drive
•	Consistent Power Supply
•	Optimised Operating System
                Types of Server –
•	Web or Application Server (Pages or simple websites)
•	Database Server
•	Email Server

Different Types of Connection – 
1.	Client – Server –
In this, the client makes a HTTP request to the server, then the Server sends back a response. This is mainly centralised around the server and depends on it.
2.	Peer to peer –
In this, all act individually and can request from each other. For example Torrents. It allows anyone to upload anything and download anything. It does not have single point of Failure. 
3 Questions that arises regarding internet – 
1.	How does one device find the other over the internet?
By using IP addresses. Each device as a unique IP address which acts as the location of each device. The routers act as traffic managers and are responsible for transferring the requests to the desired ip address. The ISP is responsible for providing the IP addresses to the devices.

2 types of IP addresses – Static and Dynamic
Static is used by servers, costly and prone to cyber attacks but the servers can’t keep changing their address. The dynamic IP address is majorly what we users have.

IPV4 V/S IPV6 – earlier ipv4 was used, it is in decimal form can be in range (0-255) and is or 32 bits. Hence the total unique ip addresses which can be formed using ipv4 are 232 which equals to around 4 billion, but due to large population and each person has multiple devices, it was falling short. 
Hence, ipv6 uses hexadecimal format and is of 128 bits means a total of 2128 unique ip addresses.

Public v/s Private IP –
Suppose we have a wifi at our home, and multiple devices connected to it, then all the requests to the internet are sent by the wifi’s ip address, so the wifi ip address is public. Now to figure out the device from which the request came, the wifi assigns private ip addresses to all the devices connected to it and routes the response from the internet to the desired device.

Domain Name Server – 
The DNS is like the Phonebook of IP addresses. For example, www.Google.com , google is the domain name which refers to the ip address of the google server. 
Client enters any domain name, the name is first checked in the DNS resolver (cache) for the corresponding ip address, if found, it returns otherwise the name is sent to Root name Server, it extracts the root that is, .com, .in etc. and sends the name to TLD name server, it identifies the root and then searches in the Authoritative Name Server which has all the name and ip address mappings which then returns the ip address.

2.	How actually are the files downloaded or uploaded?
The files are transferred by using transmission control protocol. Acc to the OSI model, there are 7 layers, at transport layer the data is divided into packets, these packets are included with a header, then at the network layer, the source and destination ip addresses are included so that the packets can be transferred to the correct location. After passing through all the layers, the data finally reach the destination and there follows a reverse order of layers and goes from physical layer to application layer. The data packets are rearranged in the correct order and error checking mechanisms like checksum are applied to check the data.

3.	How does the internet works so fast?
The Internet works fast because its propagated through 3 ways – light, radio waves and electricity.
Globally, the internet travels through optical fibres, then within a country, through radio waves and then reaches us through electricity wires.


What is an API and how does it work?
APIs mostly consist of web APIs, now without api , the response is in html from which only works with browsers. API does not send back response only in HTML, but in a format compatible with the device, format like XML or JSON.

Now postman provides services for testing api requests.
There can be query parameters in an api url.
ENDPOINTS – address to reach to a specific resource provided by the api.

Base url -main address of the API.

API URL – protocol + base url + endpoint
 Eg- https://example.com/api/orders
https is the protocol, example.com/api is the base url and orders is the endpoint.

Now, a Resource is a piece of data available by the api.


HTTP –
Hyper text transfer protocol is mainly for sending requests and responses between the clients and servers.

Terminologies – 
RestAPI – these are very popular, short for representational state transfer 
HTTP request contains-
1.	Methods – 
•	GET – getting a webpage
•	POST – Putting data 
•	PUT – updating existing data
•	DELETE – deleting data
2.	URL 
3.	HEADERS
4.	BODY (optional)

            HTTP response contains –
1.	Status Codes –
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
2.	Header
3.	Body

JSON is javascript object notation which keeps data in key value pairs each in quotation marks.


3 versions of HTTP –

1.	HTTP/1 – Every request needs separate TCP connection.
HTTP/1.1 - “keep-alive” method, in which connection can be resued, it also uses pipelining of requests but its difficult to maintain the order of the requests and the problem of head-blocking occurs
2.	HTTP/2 – came in 2015, multiple streams of requests in same tcp connection all independent of each other
3.	HTTP/3 – came in 2022, uses QUIC which is based on UDP , package losses at one stream does not affect other streams.

