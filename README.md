*README.md is still under construction (the project is still not completed)*

# Table of Contents
- [react-admin-dashboard-app](#react-admin-dashboard-app)
  * [About This Project](#about-this-project)
  * [Project Demo Video](#project-demo-video)
  * [Compile Instructions - run the application without the website](#compile-instructions---run-the-application-without-the-website)
  * [Pages Within the Project](#pages-within-the-project)
  * [Applications Within the Project](#applications-within-the-project)

## About This Project
This administrative dashboard project provides users with the ability to view important business metrics (view recent transactions, supply an overview of sales), manage users and customers, view several different charts, a text editor, and an editable calendar for events. Designed to work on mobile devices, the dashboard is fully customizable and responsive. Light and dark themes can be toggled, and theme colors can be changed. In addition to the dashboard, there are three pages, four apps, and seven fully functional charts in the project.

The contents of this dashboard are not specialized, so they can be used for other projects as well. As a result, the project's components are portable.

Through this project, it is my goal to learn new skills with React for web development. During development, the Tailwind CSS framework was used. Tailwind (https://tailwindcss.com/) is designed for creating fast and custom user interfaces. Additionally, Syncfusion (https://www.syncfusion.com/) is extensively utilized in this project. With Syncfusion, developers can develop high-quality, professional looking UI components very quickly.

The free online course that provided this learning experience can be found here: https://youtu.be/jx5hdo50a2M

## Project Demo Video
https://www.linkedin.com/posts/robert-carr-90561a238_a-react-project-i-recently-completed-is-shown-activity-6949978343450587136-9Dwe?utm_source=linkedin_share&utm_medium=member_desktop_web

## Compile Instructions - run the application without the website
*COMPILE INSTRUCTIONS MIGHT NOT WORK AS OF RIGHT NOW*

For these instructions we will be using Visual Studio Code on a Windows system, but you can use other tools and operating systems if you wish.
1. Download project into Visual Studio Code
2. Make sure node is installed on your Windows machine
   1. You can check to see if node is installed on your Windows machine by opening the terminal and typing "node --version"
   2. If node is not on your machine (an error showed up), you can go to https://nodejs.org/en/download/ and install it.
   3. After the installation is finished, type "node --version" again in the terminal to see if node has been installed successfully.
3. To install the necessary dependencies, in the terminal, in your project folder, enter "npm install 
--legacy-peer-deps"
4. To run the website on your local machine, enter "npm start" in the terminal.

## Pages Within the Project

Orders are displayed on the first page, which includes a pagination system. On the second page, you will find the employee's table, which includes a fully functional employee search with filtering features. The third page shows the customer's table, which can be edited in multiple ways, including selecting multiple rows, deleting them in bulk, and editing each field of the table individually.

## Applications Within the Project

In the first of the four apps, you will find a fully functional calendar. This calendar allows you to easily create events, drag and drop them into different days and times, as well as edit their titles, and locations, along with their start and end times. Additionally, the calendar allows the user to choose the time zone of the event, select if it is an all-day event, and enter a description. Several ways are available for viewing the calendar. In addition to having the choice to view the calendar as an agenda list, the calendar view can cover a day, a week, or a month.

Secondly, there is a Kanban board app for agile project management, which helps visualize work, control work-in-progress, and maximize efficiency.

The third app is a fully-fledged word editor that allows the user to bold, italicize, underline, justify, and bullet or number text, among other features.
