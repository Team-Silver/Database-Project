<!----- Conversion time: 3.672 seconds.


Using this Markdown file:

1. Cut and paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β17
* Thu Nov 21 2019 08:49:54 GMT-0800 (PST)
* Source doc: https://docs.google.com/open?id=1fDWfemvHYExGDWp06AQ2fj4F9c1WQii9w6piAEAhD28
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server.
----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 1.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



### Project File Install:



1. Included in the turned in folder
2. Alternatively, clone from [https://github.com/Team-Silver/Database-Project.git](https://github.com/Team-Silver/Database-Project.git)


### Database Setup:



1. Setup MySQL server
2. Setup MySQL Workbench ([https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/))
3. Run the included LibraryDump(checkpoint1).sql file in MySQL Workbench
4. Alternatively, run the included normalize-insert.py and insert your credentials
5. Make sure to run all of these commands on localhost, under user ‘root’, with password ‘password’

    ```
The backend was written in node. Node allows you to run javascript on the server side. It uses a package called mysql to connect to the local mysql database and make queries. It uses a package called express for routing. It also uses a few other packages to allow for cross-origin resource sharing and date formatting.
```




### Backend Setup:



1. Download and install node and the node package manager: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Navigate into the directory called `liams-backend`.
3. Run the command `npm install` in the directory `liams-backend`.  This will install all the dependencies for the project.
4. To run the backend, start the server, and connect the server to the database, run the command `node index.js`
5. You should get a couple of messages at this point:
    1. “Example app listening on port 3000!”
    2. “Connected!”
6. If you get these two messages, the app is ready to run.




```
The frontend was written in react. React is a frontend development framework for building user interfaces. It gets data from the backend through REST API calls. It also uses a styling library called material UI that allows has prebuilt UI components, much like bootstrap. It uses a few other packages for routing, date formatting, alerts, and state management.
```



### Frontend Setup:



1. Make sure that you still have node installed from the backend setup.
2. Navigate into the directory called `db-frontend`.
3. Run the command `npm install` in the directory `db-frontend`. This will install all the dependencies for the project.
4. After the install is complete, run the command ‘npm start’ which will run the frontend server and automatically open it in a new tab.
5. If it does not open automatically, navigate to `[http://localhost:3001/books](http://localhost:3001)` in your browser.
6. You should see a screen similar to this with a random assortment of books

    

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Setup0.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Setup0.png "image_tooltip")



<!-- Docs to Markdown version 1.0β17 -->
